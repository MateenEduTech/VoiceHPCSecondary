/* Optional AI backend for Digital HPC. The API key lives ONLY here (environment variable) — never in the browser.
   Run:  ANTHROPIC_API_KEY=... node server/proxy.js      (Node 18+, no dependencies)
   Then in the app: Settings → AI service → "Your AI backend" → http://localhost:8787
   Student text/photos are forwarded to the model provider only when this is enabled. Nothing is logged. */
const http = require('http');
const KEY = process.env.ANTHROPIC_API_KEY, MODEL = process.env.HPC_MODEL || 'claude-sonnet-5-5', PORT = +process.env.PORT || 8787, ORIGIN = process.env.ALLOW_ORIGIN || '*';
if (!KEY) { console.error('Set ANTHROPIC_API_KEY'); process.exit(1); }

const RULES = `You assist a teacher filling the official Holistic Progress Card (Secondary Stage, India). STRICT RULES: never invent student performance, observations, attendance, parent comments, peer/student answers, identifiers, dates, scores, credits or proficiency levels. Map only what the text explicitly supports. If unsure, omit it. Teachers may speak English, Hindi, Urdu or mixed; preserve meaning. Reply with JSON only.`;
async function ask(system, content, max) {
  const r = await fetch('https://api.anthropic.com/v1/messages', { method: 'POST', headers: { 'content-type': 'application/json', 'x-api-key': KEY, 'anthropic-version': '2023-06-01' }, body: JSON.stringify({ model: MODEL, max_tokens: max || 1500, system: RULES + '\n' + system, messages: [{ role: 'user', content }] }) });
  if (!r.ok) throw new Error('model ' + r.status);
  const t = (await r.json()).content.filter(x => x.type === 'text').map(x => x.text).join('');
  return JSON.parse(t.replace(/^```json|```$/g, '').trim());
}
const H = {
  async extract({ handler, text, ctx, fields }) {
    return ask(`Task: extract values from the teacher's words for handler "${handler}". Output {"proposals":[{"fieldId","value","conf"}],"understood":[{"label","value"}]}. fieldId must be one of the provided field ids${ctx && ctx.domain ? ` (domain ${ctx.domain}: Part B ids look like PART_B_${ctx.domain}_<KEY>, but you may use just <KEY>)` : ''}. Multichoice values are arrays using the exact option text.`, JSON.stringify({ text, ctx, fields }));
  },
  async evidence({ text }) {
    return ask('Task: from the teacher\'s observation, list evidence of Awareness, Sensitivity or Creativity. Output {"items":[{"ability":"AWARENESS|SENSITIVITY|CREATIVITY","parameter":"short official-style parameter","text":"the teacher\'s own words that support it","confidence":"HIGH|MEDIUM|LOW"}]}. Use ONLY what the teacher said; if nothing supports an ability, omit it. Never assign Beginner/Proficient/Advanced.', JSON.stringify({ text }), 900);
  },
  async generateFollowUp({ handler, text }) {
    return ask('Task: check whether the teacher’s observation says (a) what the child did independently, (b) whether support was needed, (c) concrete evidence. Output {"gaps":[{"key":"independent|support|evidence","q":"short follow-up question"}]} for what is missing only.', JSON.stringify({ text }), 400);
  },
  async generateQuestion({ question, ctx }) { const r = await ask('Rewrite the interview question warmly in one sentence, keeping its meaning. Output {"text"}.', JSON.stringify({ question, ctx }), 200); return r; },
  async generateSummary({ domain, evidence }) {
    return ask('Task: draft the year-end summary for one domain ONLY from the supplied teacher notes and levels. Split into strengths and areas of concern; then one sentence each for Awareness, Sensitivity, Creativity. Reuse the teacher’s facts; add nothing. Output {"strengths","concerns","aw","se","cr","evAct":[]}.', JSON.stringify({ domain, evidence }));
  },
  async suggestLevels({ notes, activity, rubric, domain }) {
    return ask('Task: suggest Beginner/Proficient/Advanced for Awareness, Sensitivity, Creativity based ONLY on the teacher’s observation of this activity and the rubric descriptors. If the notes do not support a level for an ability, omit it. Output {"AWARENESS":{"level","reason"},"SENSITIVITY":{...},"CREATIVITY":{...}}. These are suggestions the teacher must approve.', JSON.stringify({ notes, activity, rubric, domain }), 700);
  },
  async polish({ text }) { return ask('Rewrite as professional teacher-feedback wording without adding any new facts. Output {"text"}.', JSON.stringify({ text }), 600); },
  async analyseDocument({ name, mime, data, text, fields }) {
    const content = [];
    if (data && /^data:image\//.test(data)) content.push({ type: 'image', source: { type: 'base64', media_type: data.slice(5, data.indexOf(';')), data: data.split(',')[1] } });
    else if (data && /^data:application\/pdf/.test(data)) content.push({ type: 'document', source: { type: 'base64', media_type: 'application/pdf', data: data.split(',')[1] } });
    content.push({ type: 'text', text: `Read this ${name || 'document'} (school/student record, register, notes). Extract only what is clearly present. Output {"proposals":[{"fieldId","value","conf"}],"understood":[{"label","value"}],"students":[ {STUDENT_NAME,DOB(yyyy-mm-dd),GENDER,GRADE,ROLL_NO,SECTION,REG_NO} ] (only if it is a class list)}. fieldId from: ${JSON.stringify(fields)}. ${text ? 'Text:\n' + text : ''}` });
    return ask('Task: document extraction. Handwriting may be present. Attendance: only numbers actually printed; never compute percentages.', content, 2500);
  },
  async transcribe() { return { text: null, note: 'Plug a speech-to-text service in here (e.g. a Whisper-compatible endpoint). Browser speech recognition is used otherwise.' }; }
};
http.createServer(async (req, res) => {
  const cors = { 'Access-Control-Allow-Origin': ORIGIN, 'Access-Control-Allow-Headers': 'content-type', 'Access-Control-Allow-Methods': 'POST,OPTIONS' };
  if (req.method === 'OPTIONS') { res.writeHead(204, cors); return res.end(); }
  if (req.method !== 'POST' || req.url !== '/api/hpc') { res.writeHead(404, cors); return res.end(); }
  let body = ''; req.on('data', c => { body += c; if (body.length > 25e6) req.destroy(); });
  req.on('end', async () => { try { const { method, payload } = JSON.parse(body); if (!H[method]) throw new Error('unknown method'); const out = await H[method](payload || {}); res.writeHead(200, Object.assign({ 'content-type': 'application/json' }, cors)); res.end(JSON.stringify(out)); } catch (e) { res.writeHead(500, cors); res.end(JSON.stringify({ error: 'failed' })); } });
}).listen(PORT, () => console.log('Digital HPC AI proxy on :' + PORT));
