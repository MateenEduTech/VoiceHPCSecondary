# Secondary Stage HPC — Field Audit

Generated from the registry. Total fields: **492**; statements/parameters inside checklists: **139**; questions: **477**.

## Known gaps (the app does NOT claim 100%)
- Assessment Parameters for Problem-based Inquiry (source pp. 29–30): the “two additional parameters” for each PBI stage are not yet importable from a library.
- Remote AI (photo/scan reading) needs your own server (server/proxy.js); offline mode is rule-based only.
- Per-subject credit tables exist in the source only for Grades 9 and 10; Grades 11–12 have the summary table only.

## Source page matrix
| Page | Content | Section | Status |
|---|---|---|---|
| 1 | Part A(1) General Information, Attendance, Interest | A1 | Implemented |
| 2 | Part A(2) Self-Assessment, Goals (school) | A2 | Implemented |
| 3 | Goals (outside school) | A2 | Implemented |
| 4 | Part A(3) Time Management, My Time Habits | A3 | Implemented |
| 5 | Time Map | A3 | Implemented |
| 6 | Part A(4) Plans after School | A4 | Implemented |
| 7 | Future Self | A4 | Implemented |
| 8 | Part A(5) Accomplishments Inventory | A5 | Implemented |
| 9 | Part A(6) Skills for Life | A6 | Implemented |
| 10 | Plan to do Online Courses | E | Implemented |
| 11 | Part B Group Project Work — set-up | B | Implemented |
| 12 | GP Stage 1 — schedule, roles, learner reflection | B | Implemented |
| 13 | GP Stage 1 — teacher assessment | B | Implemented |
| 14 | GP Stage 2 — teacher assessment | B | Implemented |
| 15 | GP Stage 3 — rubric | B | Implemented |
| 16 | GP Stage 3 — learner reflection, peer feedback | B | Implemented |
| 17 | GP Overview (bands) | B | Implemented |
| 18 | Post-project reflections | B | Implemented |
| 19 | Part C PBI set-up | C | Implemented |
| 20 | PBI flow and research schedule | C | Implemented |
| 21 | PBI Stage 1 teacher | C | Implemented |
| 22 | PBI Stage 1 learner | C | Implemented |
| 23 | PBI Stage 2 teacher | C | Implemented |
| 24 | PBI Stage 2 learner | C | Implemented |
| 25 | PBI Stage 3 teacher | C | Implemented |
| 26 | PBI Stage 3 peer | C | Implemented |
| 27 | PBI Overview (bands) | C | Implemented |
| 28 | Post-inquiry reflections | C | Implemented |
| 29 | PBI assessment parameters (library) | NOT | NOT IMPLEMENTED |
| 30 | PBI assessment parameters (library, cont.) | NOT | NOT IMPLEMENTED |
| 31 | Part D set-up | D | Implemented |
| 32 | Part D teacher assessment | D | Implemented |
| 33 | Part D learner reflection | D | Implemented |
| 34 | Part D peer feedback | D | Implemented |
| 35 | Part D overview (bands) | D | Implemented |
| 36 | Part D parameters — Awareness, Sensitivity | D | Implemented |
| 37 | Part D parameters — Creativity | D | Implemented |
| 38 | Part E Online Courses | E | Implemented |
| 39 | Part F Time Inventory 1–3 | F | Implemented |
| 40 | Part F item 4 Skill Training | F | Implemented |
| 41 | Credits — Grade 9 summary | CR | Implemented |
| 42 | Credits — Grade 9 subjects, Grade 10 | CR | Implemented |
| 43 | Credits — Grade 10 subjects, Grade 11 | CR | Implemented |
| 44 | Credits — Grade 12 | CR | Implemented |
| CP-1 | Competency Profile — Awareness | COMP | Implemented |
| CP-2 | Competency Profile — Sensitivity, Creativity | COMP | Implemented |

## Section summary
| Section | Fields | Source pages |
|---|---|---|
| A1 | 62 | 1 |
| A2 | 47 | 2 |
| A3 | 20 | 4 |
| A4 | 20 | 6 |
| A6 | 4 | 9 |
| A5 | 24 | 8 |
| E | 30 | 38 |
| F | 29 | 39, 40 |
| COMP | 88 | CP-1, CP-2 |
| CR | 20 | 42, 43 |
| B | 62 | 11, 15, 12, 13, 14, 16 |
| C | 58 | 19, 22, 21, 24, 23, 25, 26 |
| D | 28 | 31, 32, 33, 34 |

## Field registry
| Field ID | Official label | Page | Type | Input |
|---|---|---|---|---|
| PART_A1_SCHOOL_NAME | Name of the School | 1 | text | VOICE/TEXT |
| PART_A1_SCHOOL_ADDRESS | Address of the School | 1 | text | VOICE/TEXT |
| PART_A1_VILLAGE_WARD | Village/Ward | 1 | text | VOICE/TEXT |
| PART_A1_BRC | BRC | 1 | text | VOICE/TEXT |
| PART_A1_CRC | CRC | 1 | text | VOICE/TEXT |
| PART_A1_DISTRICT | District | 1 | text | VOICE/TEXT |
| PART_A1_STATE | State | 1 | text | VOICE/TEXT |
| PART_A1_PIN | Pin Code | 1 | digits | VOICE/TEXT |
| PART_A1_UDISE | UDISE+ Code | 1 | digits | VOICE/TEXT |
| PART_A1_TEACHER_CODE | Teacher Code | 1 | digits | VOICE/TEXT |
| PART_A1_STUDENT_NAME | Student Name | 1 | text | VOICE/TEXT/DOCUMENT/PHOTO/OCR/AI_EXTRACTION |
| PART_A1_DOB | Date of Birth | 1 | date | VOICE/TEXT/DOCUMENT/PHOTO/OCR/AI_EXTRACTION |
| PART_A1_GENDER | Gender | 1 | text | VOICE/TEXT/DOCUMENT/PHOTO/OCR/AI_EXTRACTION |
| PART_A1_APAAR | APAAR ID | 1 | digits | VOICE/TEXT/DOCUMENT/PHOTO/OCR/AI_EXTRACTION |
| PART_A1_UDID | UDID (only for CWD) | 1 | digits | VOICE/TEXT/DOCUMENT/PHOTO/OCR/AI_EXTRACTION |
| PART_A1_GRADE | Grade | 1 | choice | VOICE/TEXT/TAP |
| PART_A1_ROLL_NO | Class Roll No. | 1 | text | VOICE/TEXT/DOCUMENT/PHOTO/OCR/AI_EXTRACTION |
| PART_A1_REG_NO | Registration No. of Student Given by School | 1 | text | VOICE/TEXT/DOCUMENT/PHOTO/OCR/AI_EXTRACTION |
| PART_A1_SECTION | Section | 1 | text | VOICE/TEXT/DOCUMENT/PHOTO/OCR/AI_EXTRACTION |
| PART_A1_PHOTO | Photograph | 1 | photo | PHOTO/DOCUMENT |
| PART_A1_ATT_APR_SCHOOL_DAYS | No. of School Days — Apr | 1 | integer | VOICE/TEXT/DOCUMENT/PHOTO/OCR/AI_EXTRACTION |
| PART_A1_ATT_APR_DAYS_PRESENT | No. of Days Present — Apr | 1 | integer | VOICE/TEXT/DOCUMENT/PHOTO/OCR/AI_EXTRACTION |
| PART_A1_ATT_APR_PERCENT | % of Attendance — Apr | 1 | derived | AUTO |
| PART_A1_ATT_MAY_SCHOOL_DAYS | No. of School Days — May | 1 | integer | VOICE/TEXT/DOCUMENT/PHOTO/OCR/AI_EXTRACTION |
| PART_A1_ATT_MAY_DAYS_PRESENT | No. of Days Present — May | 1 | integer | VOICE/TEXT/DOCUMENT/PHOTO/OCR/AI_EXTRACTION |
| PART_A1_ATT_MAY_PERCENT | % of Attendance — May | 1 | derived | AUTO |
| PART_A1_ATT_JUNE_SCHOOL_DAYS | No. of School Days — June | 1 | integer | VOICE/TEXT/DOCUMENT/PHOTO/OCR/AI_EXTRACTION |
| PART_A1_ATT_JUNE_DAYS_PRESENT | No. of Days Present — June | 1 | integer | VOICE/TEXT/DOCUMENT/PHOTO/OCR/AI_EXTRACTION |
| PART_A1_ATT_JUNE_PERCENT | % of Attendance — June | 1 | derived | AUTO |
| PART_A1_ATT_JUL_SCHOOL_DAYS | No. of School Days — Jul | 1 | integer | VOICE/TEXT/DOCUMENT/PHOTO/OCR/AI_EXTRACTION |
| PART_A1_ATT_JUL_DAYS_PRESENT | No. of Days Present — Jul | 1 | integer | VOICE/TEXT/DOCUMENT/PHOTO/OCR/AI_EXTRACTION |
| PART_A1_ATT_JUL_PERCENT | % of Attendance — Jul | 1 | derived | AUTO |
| PART_A1_ATT_AUG_SCHOOL_DAYS | No. of School Days — Aug | 1 | integer | VOICE/TEXT/DOCUMENT/PHOTO/OCR/AI_EXTRACTION |
| PART_A1_ATT_AUG_DAYS_PRESENT | No. of Days Present — Aug | 1 | integer | VOICE/TEXT/DOCUMENT/PHOTO/OCR/AI_EXTRACTION |
| PART_A1_ATT_AUG_PERCENT | % of Attendance — Aug | 1 | derived | AUTO |
| PART_A1_ATT_SEP_SCHOOL_DAYS | No. of School Days — Sep | 1 | integer | VOICE/TEXT/DOCUMENT/PHOTO/OCR/AI_EXTRACTION |
| PART_A1_ATT_SEP_DAYS_PRESENT | No. of Days Present — Sep | 1 | integer | VOICE/TEXT/DOCUMENT/PHOTO/OCR/AI_EXTRACTION |
| PART_A1_ATT_SEP_PERCENT | % of Attendance — Sep | 1 | derived | AUTO |
| PART_A1_ATT_OCT_SCHOOL_DAYS | No. of School Days — Oct | 1 | integer | VOICE/TEXT/DOCUMENT/PHOTO/OCR/AI_EXTRACTION |
| PART_A1_ATT_OCT_DAYS_PRESENT | No. of Days Present — Oct | 1 | integer | VOICE/TEXT/DOCUMENT/PHOTO/OCR/AI_EXTRACTION |
| PART_A1_ATT_OCT_PERCENT | % of Attendance — Oct | 1 | derived | AUTO |
| PART_A1_ATT_NOV_SCHOOL_DAYS | No. of School Days — Nov | 1 | integer | VOICE/TEXT/DOCUMENT/PHOTO/OCR/AI_EXTRACTION |
| PART_A1_ATT_NOV_DAYS_PRESENT | No. of Days Present — Nov | 1 | integer | VOICE/TEXT/DOCUMENT/PHOTO/OCR/AI_EXTRACTION |
| PART_A1_ATT_NOV_PERCENT | % of Attendance — Nov | 1 | derived | AUTO |
| PART_A1_ATT_DEC_SCHOOL_DAYS | No. of School Days — Dec | 1 | integer | VOICE/TEXT/DOCUMENT/PHOTO/OCR/AI_EXTRACTION |
| PART_A1_ATT_DEC_DAYS_PRESENT | No. of Days Present — Dec | 1 | integer | VOICE/TEXT/DOCUMENT/PHOTO/OCR/AI_EXTRACTION |
| PART_A1_ATT_DEC_PERCENT | % of Attendance — Dec | 1 | derived | AUTO |
| PART_A1_ATT_JAN_SCHOOL_DAYS | No. of School Days — Jan | 1 | integer | VOICE/TEXT/DOCUMENT/PHOTO/OCR/AI_EXTRACTION |
| PART_A1_ATT_JAN_DAYS_PRESENT | No. of Days Present — Jan | 1 | integer | VOICE/TEXT/DOCUMENT/PHOTO/OCR/AI_EXTRACTION |
| PART_A1_ATT_JAN_PERCENT | % of Attendance — Jan | 1 | derived | AUTO |
| PART_A1_ATT_FEB_SCHOOL_DAYS | No. of School Days — Feb | 1 | integer | VOICE/TEXT/DOCUMENT/PHOTO/OCR/AI_EXTRACTION |
| PART_A1_ATT_FEB_DAYS_PRESENT | No. of Days Present — Feb | 1 | integer | VOICE/TEXT/DOCUMENT/PHOTO/OCR/AI_EXTRACTION |
| PART_A1_ATT_FEB_PERCENT | % of Attendance — Feb | 1 | derived | AUTO |
| PART_A1_ATT_MAR_SCHOOL_DAYS | No. of School Days — Mar | 1 | integer | VOICE/TEXT/DOCUMENT/PHOTO/OCR/AI_EXTRACTION |
| PART_A1_ATT_MAR_DAYS_PRESENT | No. of Days Present — Mar | 1 | integer | VOICE/TEXT/DOCUMENT/PHOTO/OCR/AI_EXTRACTION |
| PART_A1_ATT_MAR_PERCENT | % of Attendance — Mar | 1 | derived | AUTO |
| PART_A1_ATT_TOTAL_SCHOOL_DAYS | Total — SCHOOL_DAYS | 1 | derived | AUTO |
| PART_A1_ATT_TOTAL_DAYS_PRESENT | Total — DAYS_PRESENT | 1 | derived | AUTO |
| PART_A1_ATT_TOTAL_PERCENT | Total — PERCENT | 1 | derived | AUTO |
| PART_A1_ATT_LOW_REASON | If attendance is low then reasons thereof | 1 | long | VOICE/TEXT/DOCUMENT/PHOTO/OCR/AI_EXTRACTION |
| PART_A1_INTERESTS | INTEREST | 1 | multichoice | VOICE/TEXT/TAP |
| PART_A1_INTEREST_OTHER | Others — Please specify | 1 | text | VOICE/TEXT/DOCUMENT/PHOTO/OCR/AI_EXTRACTION |
| PART_A2_PERF | Last year, my performance at school was… | 2 | choice | VOICE/TEXT/TAP |
| PART_A2_EFFORT | My teachers thought my efforts last year were… | 2 | choice | VOICE/TEXT/TAP |
| PART_A2_TRY_NEW | This year, I will try new things like… | 2 | long | VOICE/TEXT/TAP |
| PART_A2_WORK_HARDER | I will work harder on things like… | 2 | long | VOICE/TEXT/TAP |
| PART_A2_CAREER1 | My career aspirations is/are: 1 | 2 | text | VOICE/TEXT/TAP |
| PART_A2_CAREER2 | My career aspirations is/are: 2 | 2 | text | VOICE/TEXT/TAP |
| PART_A2_CAREER3 | My career aspirations is/are: 3 | 2 | text | VOICE/TEXT/TAP |
| PART_A2_CAREER4 | My career aspirations is/are: 4 | 2 | text | VOICE/TEXT/TAP |
| PART_A2_NEED1 | To fulfill my aspirations, I need to: 1 | 2 | text | VOICE/TEXT/TAP |
| PART_A2_NEED2 | To fulfill my aspirations, I need to: 2 | 2 | text | VOICE/TEXT/TAP |
| PART_A2_NEED3 | To fulfill my aspirations, I need to: 3 | 2 | text | VOICE/TEXT/TAP |
| PART_A2_NEED4 | To fulfill my aspirations, I need to: 4 | 2 | text | VOICE/TEXT/TAP |
| PART_A2_GS_PREV | My goal in school last year was… | 2 | long | VOICE/TEXT/TAP |
| PART_A2_GS_STATUS | What’s the status of the goal? | 2 | choice | VOICE/TEXT/TAP |
| PART_A2_GS_WHY_PREV | Why was the goal important to you? | 2 | long | VOICE/TEXT/TAP |
| PART_A2_GS_CURRENT | One specific goal I would like to achieve in school by the end of this year: | 2 | long | VOICE/TEXT/TAP |
| PART_A2_GS_SUCCESS | How will I know I have achieved this goal? | 2 | long | VOICE/TEXT/TAP |
| PART_A2_GS_WEEK1 | To achieve this goal, things I need to do — A week from now: | 2 | long | VOICE/TEXT/TAP |
| PART_A2_GS_WEEK6 | 6 weeks from now: | 2 | long | VOICE/TEXT/TAP |
| PART_A2_GS_MONTH6 | 6 months from now: | 2 | long | VOICE/TEXT/TAP |
| PART_A2_GS_STR1 | Things that will help me — My strengths/abilities 1 | 2 | text | VOICE/TEXT/TAP |
| PART_A2_GS_STR2 | Things that will help me — My strengths/abilities 2 | 2 | text | VOICE/TEXT/TAP |
| PART_A2_GS_STR3 | Things that will help me — My strengths/abilities 3 | 2 | text | VOICE/TEXT/TAP |
| PART_A2_GS_HOME1 | Support I get at home/in the community 1 | 2 | text | VOICE/TEXT/TAP |
| PART_A2_GS_HOME2 | Support I get at home/in the community 2 | 2 | text | VOICE/TEXT/TAP |
| PART_A2_GS_HOME3 | Support I get at home/in the community 3 | 2 | text | VOICE/TEXT/TAP |
| PART_A2_GS_SCH1 | Support I get at school 1 | 2 | text | VOICE/TEXT/TAP |
| PART_A2_GS_SCH2 | Support I get at school 2 | 2 | text | VOICE/TEXT/TAP |
| PART_A2_GS_SCH3 | Support I get at school 3 | 2 | text | VOICE/TEXT/TAP |
| PART_A2_GO_PREV | My goal outside of school last year was… | 2 | long | VOICE/TEXT/TAP |
| PART_A2_GO_STATUS | What’s the status of the goal? | 2 | choice | VOICE/TEXT/TAP |
| PART_A2_GO_CURRENT | One specific goal I would like to achieve outside of school by the end of this year: | 2 | long | VOICE/TEXT/TAP |
| PART_A2_GO_SUCCESS | How will I know I have achieved this goal? | 2 | long | VOICE/TEXT/TAP |
| PART_A2_GO_WEEK1 | To achieve this goal, things I need to do — A week from now: | 2 | long | VOICE/TEXT/TAP |
| PART_A2_GO_WEEK6 | 6 weeks from now: | 2 | long | VOICE/TEXT/TAP |
| PART_A2_GO_MONTH6 | 6 months from now: | 2 | long | VOICE/TEXT/TAP |
| PART_A2_GO_STR1 | Things that will help me — My strengths/abilities 1 | 2 | text | VOICE/TEXT/TAP |
| PART_A2_GO_STR2 | Things that will help me — My strengths/abilities 2 | 2 | text | VOICE/TEXT/TAP |
| PART_A2_GO_STR3 | Things that will help me — My strengths/abilities 3 | 2 | text | VOICE/TEXT/TAP |
| PART_A2_GO_HOME1 | Support I get at home/in the community 1 | 2 | text | VOICE/TEXT/TAP |
| PART_A2_GO_HOME2 | Support I get at home/in the community 2 | 2 | text | VOICE/TEXT/TAP |
| PART_A2_GO_HOME3 | Support I get at home/in the community 3 | 2 | text | VOICE/TEXT/TAP |
| PART_A2_GO_SCH1 | Support I get at school 1 | 2 | text | VOICE/TEXT/TAP |
| PART_A2_GO_SCH2 | Support I get at school 2 | 2 | text | VOICE/TEXT/TAP |
| PART_A2_GO_SCH3 | Support I get at school 3 | 2 | text | VOICE/TEXT/TAP |
| PART_A2_GO_WHY | Why does this goal matter to you? | 2 | long | VOICE/TEXT/TAP |
| PART_A2_GO_PROUD | Some goals I have achieved till date and I am proud of/happy with… | 2 | long | VOICE/TEXT/TAP |
| PART_A3_TM1 | 1. I like following a schedule. | 4 | choice | VOICE/TEXT/TAP |
| PART_A3_TM2 | 2. I get distracted and do not start my tasks on time. | 4 | choice | VOICE/TEXT/TAP |
| PART_A3_TM3 | 3. I do things at the last minute. | 4 | choice | VOICE/TEXT/TAP |
| PART_A3_TM4 | 4. I can figure out how much time assignments and projects will take. | 4 | choice | VOICE/TEXT/TAP |
| PART_A3_TM5 | 5. I am good at deciding which tasks to do first. | 4 | choice | VOICE/TEXT/TAP |
| PART_A3_BEST_STUDY | What time of the day is best for you … to study? | 4 | text | VOICE/TEXT/TAP |
| PART_A3_BEST_PLAY | … to play/exercise? | 4 | text | VOICE/TEXT/TAP |
| PART_A3_BEST_RELAX | … to relax? | 4 | text | VOICE/TEXT/TAP |
| PART_A3_BEST_FAMILY | … to spend time with friends and family? | 4 | text | VOICE/TEXT/TAP |
| PART_A3_T_SCHOOLWORK | How much time do you spend on schoolwork after school? | 4 | text | VOICE/TEXT/TAP |
| PART_A3_T_FITNESS | How much time do you spend on physical fitness? | 4 | text | VOICE/TEXT/TAP |
| PART_A3_T_EMOTIONAL | How much time do you spend taking care of your emotional wellbeing? | 4 | text | VOICE/TEXT/TAP |
| PART_A3_IMPROVE_FIT | What do you do to improve your physical and mental fitness? | 4 | text | VOICE/TEXT/TAP |
| PART_A3_T_OTHER | How much time do you spend on other things? (With friends, on your phone, etc.) | 4 | text | VOICE/TEXT/TAP |
| PART_A3_TODO | Do you make to-do lists for your daily tasks? Why / Why not? | 4 | text | VOICE/TEXT/TAP |
| PART_A3_TIMEMAP_AM | Time Map — AM activities | 4 | text | VOICE/TEXT/TAP |
| PART_A3_TIMEMAP_PM | Time Map — PM activities | 4 | text | VOICE/TEXT/TAP |
| PART_A3_MORE | One thing I would like to spend more time on: | 4 | text | VOICE/TEXT/TAP |
| PART_A3_LESS | One thing I would like to spend less time on: | 4 | text | VOICE/TEXT/TAP |
| PART_A3_PEER_COMMENT | Peer’s comment on my schedule (Time Map follow-up) | 4 | text | VOICE/TEXT/TAP |
| PART_A4_PLAN | After I finish school, I want to… | 6 | multichoice | VOICE/TEXT/TAP |
| PART_A4_PLAN_OTHER | Any other, please specify | 6 | text | VOICE/TEXT/TAP |
| PART_A4_INST_KIND | I plan to go to | 6 | choice | VOICE/TEXT/TAP |
| PART_A4_INST_NAME | College/Skill Institute/Professional Institute: | 6 | text | VOICE/TEXT/TAP |
| PART_A4_COURSE | Course/Skill Training: | 6 | text | VOICE/TEXT/TAP |
| PART_A4_COURSE_TYPE | Type of Course: | 6 | choice | VOICE/TEXT/TAP |
| PART_A4_WORK | I plan to pursue a skill-based course. I would like to work… | 6 | multichoice | VOICE/TEXT/TAP |
| PART_A4_WORK_OTHER | Any other (work) | 6 | text | VOICE/TEXT/TAP |
| PART_A4_Q_STRENGTH | What strengths or abilities will be most helpful for you in fulfilling this plan? | 6 | long | VOICE/TEXT/TAP |
| PART_A4_Q_IMPROVE | What will you need to improve in order to achieve this plan? | 6 | long | VOICE/TEXT/TAP |
| PART_A4_Q_CHALLENGE | What challenges do you think you will face in fulfilling this plan? | 6 | long | VOICE/TEXT/TAP |
| PART_A4_FS_IMPROVE | Future Self (10 years from now): What will you be doing to improve yourself? | 6 | long | VOICE/TEXT/TAP |
| PART_A4_FS_SUPPORT | What will you be doing to support your friends and family? | 6 | long | VOICE/TEXT/TAP |
| PART_A4_FS_SOCIETY | What will you be doing to improve society? | 6 | long | VOICE/TEXT/TAP |
| PART_A4_FEEL_PREPARED | How do I feel about my future? — Prepared | 6 | choice | VOICE/TEXT/TAP |
| PART_A4_FEEL_EXCITED | How do I feel about my future? — Excited | 6 | choice | VOICE/TEXT/TAP |
| PART_A4_FEEL_CONFIDENT | How do I feel about my future? — Confident | 6 | choice | VOICE/TEXT/TAP |
| PART_A4_FEEL_CURIOUS | How do I feel about my future? — Curious | 6 | choice | VOICE/TEXT/TAP |
| PART_A4_FS_WHY | Why do you think so? | 6 | long | VOICE/TEXT/TAP |
| PART_A4_FS_PARENT | Parents’ feedback | 6 | long | VOICE/TEXT/TAP |
| PART_A6_SKILL | One important life skill you have learned at home, school or in the community | 9 | long | VOICE/TEXT/TAP |
| PART_A6_EXPERIENCES | Experiences at home, school or in the community that helped you develop the skill | 9 | long | VOICE/TEXT/TAP |
| PART_A6_WHY | Why is this skill important to you? | 9 | long | VOICE/TEXT/TAP |
| PART_A6_NEXT_SKILL | What is another life skill you would like to develop and why do you think it will be important to you? | 9 | long | VOICE/TEXT/TAP |
| PART_A5_1_1 | Entrance exams I may appear for | 8 | choice | VOICE/TEXT/TAP |
| PART_A5_1_2 | College(s)/University(ies)/ Skill Institutes (national/international) I want to apply to | 8 | choice | VOICE/TEXT/TAP |
| PART_A5_1_3 | Prospective job roles/opportunities | 8 | choice | VOICE/TEXT/TAP |
| PART_A5_2_1 | Entrance test(s) and/or interviews | 8 | choice | VOICE/TEXT/TAP |
| PART_A5_2_2 | Filling out college/skill institute/professional institute forms | 8 | choice | VOICE/TEXT/TAP |
| PART_A5_2_3 | Creating a portfolio highlighting my skills and achievements | 8 | choice | VOICE/TEXT/TAP |
| PART_A5_3_1 | Thinking critically and creatively | 8 | choice | VOICE/TEXT/TAP |
| PART_A5_3_2 | Collaborating with peers and respecting various perspectives | 8 | choice | VOICE/TEXT/TAP |
| PART_A5_3_3 | Engaging in independent work/research | 8 | choice | VOICE/TEXT/TAP |
| PART_A5_3_4 | Using technology and searching for and accessing information online | 8 | choice | VOICE/TEXT/TAP |
| PART_A5_3_5 | The ability to follow directions and manage ambiguity | 8 | choice | VOICE/TEXT/TAP |
| PART_A5_3_6 | Managing my time and developing study skills | 8 | choice | VOICE/TEXT/TAP |
| PART_A5_4_1 | Understanding the value of money and budgeting | 8 | choice | VOICE/TEXT/TAP |
| PART_A5_4_2 | Managing stress for self and others | 8 | choice | VOICE/TEXT/TAP |
| PART_A5_4_3 | Being safe and avoiding risky behaviours | 8 | choice | VOICE/TEXT/TAP |
| PART_A5_4_4 | Developing holistic self-care routines | 8 | choice | VOICE/TEXT/TAP |
| PART_A5_4_5 | Upholding integrity and respecting institutional rules and policies | 8 | choice | VOICE/TEXT/TAP |
| PART_A5_4_6 | Asking for help/assistance when needed | 8 | choice | VOICE/TEXT/TAP |
| PART_A5_5_1 | Mutual respect and tolerance | 8 | choice | VOICE/TEXT/TAP |
| PART_A5_5_2 | Empathy | 8 | choice | VOICE/TEXT/TAP |
| PART_A5_5_3 | Resilience | 8 | choice | VOICE/TEXT/TAP |
| PART_A5_5_4 | Good citizenship | 8 | choice | VOICE/TEXT/TAP |
| PART_A5_5_5 | Appreciation for sustainability | 8 | choice | VOICE/TEXT/TAP |
| PART_A5_5_6 | Concern for society | 8 | choice | VOICE/TEXT/TAP |
| PART_E_COURSE_1 | Course I | 38 | text | VOICE/TEXT/DOCUMENT/PHOTO/OCR/AI_EXTRACTION |
| PART_E_HOURS_1 | Number of Hours — I | 38 | number | VOICE/TEXT/DOCUMENT/PHOTO/OCR/AI_EXTRACTION |
| PART_E_DONE_1 | Completed (✓) — I | 38 | choice | VOICE/TEXT/TAP |
| PART_E_COURSE_2 | Course II | 38 | text | VOICE/TEXT/DOCUMENT/PHOTO/OCR/AI_EXTRACTION |
| PART_E_HOURS_2 | Number of Hours — II | 38 | number | VOICE/TEXT/DOCUMENT/PHOTO/OCR/AI_EXTRACTION |
| PART_E_DONE_2 | Completed (✓) — II | 38 | choice | VOICE/TEXT/TAP |
| PART_E_COURSE_3 | Course III | 38 | text | VOICE/TEXT/DOCUMENT/PHOTO/OCR/AI_EXTRACTION |
| PART_E_HOURS_3 | Number of Hours — III | 38 | number | VOICE/TEXT/DOCUMENT/PHOTO/OCR/AI_EXTRACTION |
| PART_E_DONE_3 | Completed (✓) — III | 38 | choice | VOICE/TEXT/TAP |
| PART_E_COURSE_4 | Course IV | 38 | text | VOICE/TEXT/DOCUMENT/PHOTO/OCR/AI_EXTRACTION |
| PART_E_HOURS_4 | Number of Hours — IV | 38 | number | VOICE/TEXT/DOCUMENT/PHOTO/OCR/AI_EXTRACTION |
| PART_E_DONE_4 | Completed (✓) — IV | 38 | choice | VOICE/TEXT/TAP |
| PART_E_COURSE_5 | Course V | 38 | text | VOICE/TEXT/DOCUMENT/PHOTO/OCR/AI_EXTRACTION |
| PART_E_HOURS_5 | Number of Hours — V | 38 | number | VOICE/TEXT/DOCUMENT/PHOTO/OCR/AI_EXTRACTION |
| PART_E_DONE_5 | Completed (✓) — V | 38 | choice | VOICE/TEXT/TAP |
| PART_E_COURSE_6 | Course VI | 38 | text | VOICE/TEXT/DOCUMENT/PHOTO/OCR/AI_EXTRACTION |
| PART_E_HOURS_6 | Number of Hours — VI | 38 | number | VOICE/TEXT/DOCUMENT/PHOTO/OCR/AI_EXTRACTION |
| PART_E_DONE_6 | Completed (✓) — VI | 38 | choice | VOICE/TEXT/TAP |
| PART_E_COURSE_7 | Course VII | 38 | text | VOICE/TEXT/DOCUMENT/PHOTO/OCR/AI_EXTRACTION |
| PART_E_HOURS_7 | Number of Hours — VII | 38 | number | VOICE/TEXT/DOCUMENT/PHOTO/OCR/AI_EXTRACTION |
| PART_E_DONE_7 | Completed (✓) — VII | 38 | choice | VOICE/TEXT/TAP |
| PART_E_COURSE_8 | Course VIII | 38 | text | VOICE/TEXT/DOCUMENT/PHOTO/OCR/AI_EXTRACTION |
| PART_E_HOURS_8 | Number of Hours — VIII | 38 | number | VOICE/TEXT/DOCUMENT/PHOTO/OCR/AI_EXTRACTION |
| PART_E_DONE_8 | Completed (✓) — VIII | 38 | choice | VOICE/TEXT/TAP |
| PART_E_COURSE_9 | Course IX | 38 | text | VOICE/TEXT/DOCUMENT/PHOTO/OCR/AI_EXTRACTION |
| PART_E_HOURS_9 | Number of Hours — IX | 38 | number | VOICE/TEXT/DOCUMENT/PHOTO/OCR/AI_EXTRACTION |
| PART_E_DONE_9 | Completed (✓) — IX | 38 | choice | VOICE/TEXT/TAP |
| PART_E_COURSE_10 | Course X | 38 | text | VOICE/TEXT/DOCUMENT/PHOTO/OCR/AI_EXTRACTION |
| PART_E_HOURS_10 | Number of Hours — X | 38 | number | VOICE/TEXT/DOCUMENT/PHOTO/OCR/AI_EXTRACTION |
| PART_E_DONE_10 | Completed (✓) — X | 38 | choice | VOICE/TEXT/TAP |
| PART_F_1A | Research prompt/question/problem/challenge/planned final output | 39 | hours | VOICE/TEXT/DOCUMENT/PHOTO/OCR/AI_EXTRACTION |
| PART_F_1B | Guiding questions | 39 | hours | VOICE/TEXT/DOCUMENT/PHOTO/OCR/AI_EXTRACTION |
| PART_F_1C | Stage 1 (Brainstorming and ideation) | 39 | hours | VOICE/TEXT/DOCUMENT/PHOTO/OCR/AI_EXTRACTION |
| PART_F_1D | Stage 2 (Drafting, feedback, and revision) | 39 | hours | VOICE/TEXT/DOCUMENT/PHOTO/OCR/AI_EXTRACTION |
| PART_F_1E | Stage 3 (Final submission) | 39 | hours | VOICE/TEXT/DOCUMENT/PHOTO/OCR/AI_EXTRACTION |
| PART_F_2A | Project prompt/question/problem/challenge/planned final output | 39 | hours | VOICE/TEXT/DOCUMENT/PHOTO/OCR/AI_EXTRACTION |
| PART_F_2B | Hypothesis | 39 | hours | VOICE/TEXT/DOCUMENT/PHOTO/OCR/AI_EXTRACTION |
| PART_F_2C | Guiding questions | 39 | hours | VOICE/TEXT/DOCUMENT/PHOTO/OCR/AI_EXTRACTION |
| PART_F_2D | Evidence collection to support/negate hypothesis | 39 | hours | VOICE/TEXT/DOCUMENT/PHOTO/OCR/AI_EXTRACTION |
| PART_F_2E | Analysis and synthesis | 39 | hours | VOICE/TEXT/DOCUMENT/PHOTO/OCR/AI_EXTRACTION |
| PART_F_2F | Discussions | 39 | hours | VOICE/TEXT/DOCUMENT/PHOTO/OCR/AI_EXTRACTION |
| PART_F_2G | Conclusion | 39 | hours | VOICE/TEXT/DOCUMENT/PHOTO/OCR/AI_EXTRACTION |
| PART_F_3A | Classroom discussion | 39 | hours | VOICE/TEXT/DOCUMENT/PHOTO/OCR/AI_EXTRACTION |
| PART_F_3B | Organised debate | 39 | hours | VOICE/TEXT/DOCUMENT/PHOTO/OCR/AI_EXTRACTION |
| PART_F_3C | Simulation/roleplay | 39 | hours | VOICE/TEXT/DOCUMENT/PHOTO/OCR/AI_EXTRACTION |
| PART_F_3D | Lab experiment | 39 | hours | VOICE/TEXT/DOCUMENT/PHOTO/OCR/AI_EXTRACTION |
| PART_F_3E | Digital learning | 39 | hours | VOICE/TEXT/DOCUMENT/PHOTO/OCR/AI_EXTRACTION |
| PART_F_4A_SKILL | Skill a | 40 | text | VOICE/TEXT/DOCUMENT/PHOTO/OCR/AI_EXTRACTION |
| PART_F_4A_HOURS | Number of Hours — skill a | 40 | hours | VOICE/TEXT/DOCUMENT/PHOTO/OCR/AI_EXTRACTION |
| PART_F_4A_STATUS | Pursuing / Completed — skill a | 40 | choice | VOICE/TEXT/TAP |
| PART_F_4B_SKILL | Skill b | 40 | text | VOICE/TEXT/DOCUMENT/PHOTO/OCR/AI_EXTRACTION |
| PART_F_4B_HOURS | Number of Hours — skill b | 40 | hours | VOICE/TEXT/DOCUMENT/PHOTO/OCR/AI_EXTRACTION |
| PART_F_4B_STATUS | Pursuing / Completed — skill b | 40 | choice | VOICE/TEXT/TAP |
| PART_F_4C_SKILL | Skill c | 40 | text | VOICE/TEXT/DOCUMENT/PHOTO/OCR/AI_EXTRACTION |
| PART_F_4C_HOURS | Number of Hours — skill c | 40 | hours | VOICE/TEXT/DOCUMENT/PHOTO/OCR/AI_EXTRACTION |
| PART_F_4C_STATUS | Pursuing / Completed — skill c | 40 | choice | VOICE/TEXT/TAP |
| PART_F_4D_SKILL | Skill d | 40 | text | VOICE/TEXT/DOCUMENT/PHOTO/OCR/AI_EXTRACTION |
| PART_F_4D_HOURS | Number of Hours — skill d | 40 | hours | VOICE/TEXT/DOCUMENT/PHOTO/OCR/AI_EXTRACTION |
| PART_F_4D_STATUS | Pursuing / Completed — skill d | 40 | choice | VOICE/TEXT/TAP |
| COMP_AWARENESS_01_G9 | a. Proficiency in language R1, R2, R3 — Grade 9 | CP-1 | level | VOICE/TEXT/TAP |
| COMP_AWARENESS_01_G10 | a. Proficiency in language R1, R2, R3 — Grade 10 | CP-1 | level | VOICE/TEXT/TAP |
| COMP_AWARENESS_01_G11 | a. Proficiency in language R1, R2, R3 — Grade 11 | CP-1 | level | VOICE/TEXT/TAP |
| COMP_AWARENESS_01_G12 | a. Proficiency in language R1, R2, R3 — Grade 12 | CP-1 | level | VOICE/TEXT/TAP |
| COMP_AWARENESS_02_G9 | b. Oral communication — Grade 9 | CP-1 | level | VOICE/TEXT/TAP |
| COMP_AWARENESS_02_G10 | b. Oral communication — Grade 10 | CP-1 | level | VOICE/TEXT/TAP |
| COMP_AWARENESS_02_G11 | b. Oral communication — Grade 11 | CP-1 | level | VOICE/TEXT/TAP |
| COMP_AWARENESS_02_G12 | b. Oral communication — Grade 12 | CP-1 | level | VOICE/TEXT/TAP |
| COMP_AWARENESS_03_G9 | c. Written communication — Grade 9 | CP-1 | level | VOICE/TEXT/TAP |
| COMP_AWARENESS_03_G10 | c. Written communication — Grade 10 | CP-1 | level | VOICE/TEXT/TAP |
| COMP_AWARENESS_03_G11 | c. Written communication — Grade 11 | CP-1 | level | VOICE/TEXT/TAP |
| COMP_AWARENESS_03_G12 | c. Written communication — Grade 12 | CP-1 | level | VOICE/TEXT/TAP |
| COMP_AWARENESS_04_G9 | d. Health and nutrition literacy — Grade 9 | CP-1 | level | VOICE/TEXT/TAP |
| COMP_AWARENESS_04_G10 | d. Health and nutrition literacy — Grade 10 | CP-1 | level | VOICE/TEXT/TAP |
| COMP_AWARENESS_04_G11 | d. Health and nutrition literacy — Grade 11 | CP-1 | level | VOICE/TEXT/TAP |
| COMP_AWARENESS_04_G12 | d. Health and nutrition literacy — Grade 12 | CP-1 | level | VOICE/TEXT/TAP |
| COMP_AWARENESS_05_G9 | e. Physical education, fitness, wellness, and sports — Grade 9 | CP-1 | level | VOICE/TEXT/TAP |
| COMP_AWARENESS_05_G10 | e. Physical education, fitness, wellness, and sports — Grade 10 | CP-1 | level | VOICE/TEXT/TAP |
| COMP_AWARENESS_05_G11 | e. Physical education, fitness, wellness, and sports — Grade 11 | CP-1 | level | VOICE/TEXT/TAP |
| COMP_AWARENESS_05_G12 | e. Physical education, fitness, wellness, and sports — Grade 12 | CP-1 | level | VOICE/TEXT/TAP |
| COMP_AWARENESS_06_G9 | f. Digital literacy — Grade 9 | CP-1 | level | VOICE/TEXT/TAP |
| COMP_AWARENESS_06_G10 | f. Digital literacy — Grade 10 | CP-1 | level | VOICE/TEXT/TAP |
| COMP_AWARENESS_06_G11 | f. Digital literacy — Grade 11 | CP-1 | level | VOICE/TEXT/TAP |
| COMP_AWARENESS_06_G12 | f. Digital literacy — Grade 12 | CP-1 | level | VOICE/TEXT/TAP |
| COMP_AWARENESS_07_G9 | g. Knowledge of India — Grade 9 | CP-1 | level | VOICE/TEXT/TAP |
| COMP_AWARENESS_07_G10 | g. Knowledge of India — Grade 10 | CP-1 | level | VOICE/TEXT/TAP |
| COMP_AWARENESS_07_G11 | g. Knowledge of India — Grade 11 | CP-1 | level | VOICE/TEXT/TAP |
| COMP_AWARENESS_07_G12 | g. Knowledge of India — Grade 12 | CP-1 | level | VOICE/TEXT/TAP |
| COMP_AWARENESS_08_G9 | h. Environmental literacy (including awareness of water and resource, conservation, sanitation and hygiene, etc.) — Grade 9 | CP-1 | level | VOICE/TEXT/TAP |
| COMP_AWARENESS_08_G10 | h. Environmental literacy (including awareness of water and resource, conservation, sanitation and hygiene, etc.) — Grade 10 | CP-1 | level | VOICE/TEXT/TAP |
| COMP_AWARENESS_08_G11 | h. Environmental literacy (including awareness of water and resource, conservation, sanitation and hygiene, etc.) — Grade 11 | CP-1 | level | VOICE/TEXT/TAP |
| COMP_AWARENESS_08_G12 | h. Environmental literacy (including awareness of water and resource, conservation, sanitation and hygiene, etc.) — Grade 12 | CP-1 | level | VOICE/TEXT/TAP |
| COMP_AWARENESS_09_G9 | i. Knowledge of critical issues (including current affairs and facing local communities, States, the country, and the world, etc.) — Grade 9 | CP-1 | level | VOICE/TEXT/TAP |
| COMP_AWARENESS_09_G10 | i. Knowledge of critical issues (including current affairs and facing local communities, States, the country, and the world, etc.) — Grade 10 | CP-1 | level | VOICE/TEXT/TAP |
| COMP_AWARENESS_09_G11 | i. Knowledge of critical issues (including current affairs and facing local communities, States, the country, and the world, etc.) — Grade 11 | CP-1 | level | VOICE/TEXT/TAP |
| COMP_AWARENESS_09_G12 | i. Knowledge of critical issues (including current affairs and facing local communities, States, the country, and the world, etc.) — Grade 12 | CP-1 | level | VOICE/TEXT/TAP |
| COMP_SENSITIVITY_01_G9 | a. Collaboration and teamwork — Grade 9 | CP-2 | level | VOICE/TEXT/TAP |
| COMP_SENSITIVITY_01_G10 | a. Collaboration and teamwork — Grade 10 | CP-2 | level | VOICE/TEXT/TAP |
| COMP_SENSITIVITY_01_G11 | a. Collaboration and teamwork — Grade 11 | CP-2 | level | VOICE/TEXT/TAP |
| COMP_SENSITIVITY_01_G12 | a. Collaboration and teamwork — Grade 12 | CP-2 | level | VOICE/TEXT/TAP |
| COMP_SENSITIVITY_02_G9 | b. Ethical and moral reasoning — Grade 9 | CP-2 | level | VOICE/TEXT/TAP |
| COMP_SENSITIVITY_02_G10 | b. Ethical and moral reasoning — Grade 10 | CP-2 | level | VOICE/TEXT/TAP |
| COMP_SENSITIVITY_02_G11 | b. Ethical and moral reasoning — Grade 11 | CP-2 | level | VOICE/TEXT/TAP |
| COMP_SENSITIVITY_02_G12 | b. Ethical and moral reasoning — Grade 12 | CP-2 | level | VOICE/TEXT/TAP |
| COMP_SENSITIVITY_03_G9 | c. Knowledge and practice of human and Constitutional values — Grade 9 | CP-2 | level | VOICE/TEXT/TAP |
| COMP_SENSITIVITY_03_G10 | c. Knowledge and practice of human and Constitutional values — Grade 10 | CP-2 | level | VOICE/TEXT/TAP |
| COMP_SENSITIVITY_03_G11 | c. Knowledge and practice of human and Constitutional values — Grade 11 | CP-2 | level | VOICE/TEXT/TAP |
| COMP_SENSITIVITY_03_G12 | c. Knowledge and practice of human and Constitutional values — Grade 12 | CP-2 | level | VOICE/TEXT/TAP |
| COMP_SENSITIVITY_04_G9 | d. Gender sensitivity — Grade 9 | CP-2 | level | VOICE/TEXT/TAP |
| COMP_SENSITIVITY_04_G10 | d. Gender sensitivity — Grade 10 | CP-2 | level | VOICE/TEXT/TAP |
| COMP_SENSITIVITY_04_G11 | d. Gender sensitivity — Grade 11 | CP-2 | level | VOICE/TEXT/TAP |
| COMP_SENSITIVITY_04_G12 | d. Gender sensitivity — Grade 12 | CP-2 | level | VOICE/TEXT/TAP |
| COMP_SENSITIVITY_05_G9 | e. Citizenship skills and values — Grade 9 | CP-2 | level | VOICE/TEXT/TAP |
| COMP_SENSITIVITY_05_G10 | e. Citizenship skills and values — Grade 10 | CP-2 | level | VOICE/TEXT/TAP |
| COMP_SENSITIVITY_05_G11 | e. Citizenship skills and values — Grade 11 | CP-2 | level | VOICE/TEXT/TAP |
| COMP_SENSITIVITY_05_G12 | e. Citizenship skills and values — Grade 12 | CP-2 | level | VOICE/TEXT/TAP |
| COMP_SENSITIVITY_06_G9 | f. Fundamental duties — Grade 9 | CP-2 | level | VOICE/TEXT/TAP |
| COMP_SENSITIVITY_06_G10 | f. Fundamental duties — Grade 10 | CP-2 | level | VOICE/TEXT/TAP |
| COMP_SENSITIVITY_06_G11 | f. Fundamental duties — Grade 11 | CP-2 | level | VOICE/TEXT/TAP |
| COMP_SENSITIVITY_06_G12 | f. Fundamental duties — Grade 12 | CP-2 | level | VOICE/TEXT/TAP |
| COMP_CREATIVITY_01_G9 | a. Scientific temper and evidence-based thinking — Grade 9 | CP-2 | level | VOICE/TEXT/TAP |
| COMP_CREATIVITY_01_G10 | a. Scientific temper and evidence-based thinking — Grade 10 | CP-2 | level | VOICE/TEXT/TAP |
| COMP_CREATIVITY_01_G11 | a. Scientific temper and evidence-based thinking — Grade 11 | CP-2 | level | VOICE/TEXT/TAP |
| COMP_CREATIVITY_01_G12 | a. Scientific temper and evidence-based thinking — Grade 12 | CP-2 | level | VOICE/TEXT/TAP |
| COMP_CREATIVITY_02_G9 | b. Creativity and innovativeness — Grade 9 | CP-2 | level | VOICE/TEXT/TAP |
| COMP_CREATIVITY_02_G10 | b. Creativity and innovativeness — Grade 10 | CP-2 | level | VOICE/TEXT/TAP |
| COMP_CREATIVITY_02_G11 | b. Creativity and innovativeness — Grade 11 | CP-2 | level | VOICE/TEXT/TAP |
| COMP_CREATIVITY_02_G12 | b. Creativity and innovativeness — Grade 12 | CP-2 | level | VOICE/TEXT/TAP |
| COMP_CREATIVITY_03_G9 | c. Sense of aesthetics and art — Grade 9 | CP-2 | level | VOICE/TEXT/TAP |
| COMP_CREATIVITY_03_G10 | c. Sense of aesthetics and art — Grade 10 | CP-2 | level | VOICE/TEXT/TAP |
| COMP_CREATIVITY_03_G11 | c. Sense of aesthetics and art — Grade 11 | CP-2 | level | VOICE/TEXT/TAP |
| COMP_CREATIVITY_03_G12 | c. Sense of aesthetics and art — Grade 12 | CP-2 | level | VOICE/TEXT/TAP |
| COMP_CREATIVITY_04_G9 | d. Critical thinking — Grade 9 | CP-2 | level | VOICE/TEXT/TAP |
| COMP_CREATIVITY_04_G10 | d. Critical thinking — Grade 10 | CP-2 | level | VOICE/TEXT/TAP |
| COMP_CREATIVITY_04_G11 | d. Critical thinking — Grade 11 | CP-2 | level | VOICE/TEXT/TAP |
| COMP_CREATIVITY_04_G12 | d. Critical thinking — Grade 12 | CP-2 | level | VOICE/TEXT/TAP |
| COMP_CREATIVITY_05_G9 | e. Problem-solving — Grade 9 | CP-2 | level | VOICE/TEXT/TAP |
| COMP_CREATIVITY_05_G10 | e. Problem-solving — Grade 10 | CP-2 | level | VOICE/TEXT/TAP |
| COMP_CREATIVITY_05_G11 | e. Problem-solving — Grade 11 | CP-2 | level | VOICE/TEXT/TAP |
| COMP_CREATIVITY_05_G12 | e. Problem-solving — Grade 12 | CP-2 | level | VOICE/TEXT/TAP |
| COMP_CREATIVITY_06_G9 | f. Skills training — Grade 9 | CP-2 | level | VOICE/TEXT/TAP |
| COMP_CREATIVITY_06_G10 | f. Skills training — Grade 10 | CP-2 | level | VOICE/TEXT/TAP |
| COMP_CREATIVITY_06_G11 | f. Skills training — Grade 11 | CP-2 | level | VOICE/TEXT/TAP |
| COMP_CREATIVITY_06_G12 | f. Skills training — Grade 12 | CP-2 | level | VOICE/TEXT/TAP |
| COMP_CREATIVITY_07_G9 | g. Coding and computational thinking — Grade 9 | CP-2 | level | VOICE/TEXT/TAP |
| COMP_CREATIVITY_07_G10 | g. Coding and computational thinking — Grade 10 | CP-2 | level | VOICE/TEXT/TAP |
| COMP_CREATIVITY_07_G11 | g. Coding and computational thinking — Grade 11 | CP-2 | level | VOICE/TEXT/TAP |
| COMP_CREATIVITY_07_G12 | g. Coding and computational thinking — Grade 12 | CP-2 | level | VOICE/TEXT/TAP |
| CR_G9_SUBJ_1 | Language Education (R1) — Credit Point Earned by Learner | 42 | number | VOICE/TEXT |
| CR_G9_SUBJ_2 | Language Education (R2) — Credit Point Earned by Learner | 42 | number | VOICE/TEXT |
| CR_G9_SUBJ_3 | Language Education (R3) — Credit Point Earned by Learner | 42 | number | VOICE/TEXT |
| CR_G9_SUBJ_4 | Mathematics Education — Credit Point Earned by Learner | 42 | number | VOICE/TEXT |
| CR_G9_SUBJ_5 | Science Education — Credit Point Earned by Learner | 42 | number | VOICE/TEXT |
| CR_G9_SUBJ_6 | Social Science Education — Credit Point Earned by Learner | 42 | number | VOICE/TEXT |
| CR_G9_SUBJ_7 | Interdisciplinary Area — Credit Point Earned by Learner | 42 | number | VOICE/TEXT |
| CR_G9_SUBJ_8 | Art Education — Credit Point Earned by Learner | 42 | number | VOICE/TEXT |
| CR_G9_SUBJ_9 | Physical Education and Well-being — Credit Point Earned by Learner | 42 | number | VOICE/TEXT |
| CR_G9_SUBJ_10 | Skill Education — Credit Point Earned by Learner | 42 | number | VOICE/TEXT |
| CR_G10_SUBJ_1 | Language Education (R1) — Credit Point Earned by Learner | 43 | number | VOICE/TEXT |
| CR_G10_SUBJ_2 | Language Education (R2) — Credit Point Earned by Learner | 43 | number | VOICE/TEXT |
| CR_G10_SUBJ_3 | Language Education (R3) — Credit Point Earned by Learner | 43 | number | VOICE/TEXT |
| CR_G10_SUBJ_4 | Mathematics Education — Credit Point Earned by Learner | 43 | number | VOICE/TEXT |
| CR_G10_SUBJ_5 | Science Education — Credit Point Earned by Learner | 43 | number | VOICE/TEXT |
| CR_G10_SUBJ_6 | Social Science Education — Credit Point Earned by Learner | 43 | number | VOICE/TEXT |
| CR_G10_SUBJ_7 | Interdisciplinary Area — Credit Point Earned by Learner | 43 | number | VOICE/TEXT |
| CR_G10_SUBJ_8 | Art Education — Credit Point Earned by Learner | 43 | number | VOICE/TEXT |
| CR_G10_SUBJ_9 | Physical Education and Well-being — Credit Point Earned by Learner | 43 | number | VOICE/TEXT |
| CR_G10_SUBJ_10 | Skill Education — Credit Point Earned by Learner | 43 | number | VOICE/TEXT |
| B_GP_SUBJECTS | Subject(s) (can be more than one) | 11 | text | VOICE/TEXT |
| B_GP_CURR_GOALS | Curricular goal(s) (can be more than one) | 11 | text | VOICE/TEXT |
| B_GP_COMPETENCIES | Competency(-ies) (can be more than one) | 11 | text | VOICE/TEXT |
| B_GP_OUTCOMES | Learning Outcomes | 11 | long | VOICE/TEXT |
| B_GP_PEDAGOGIES | Pedagogies (Tick all that apply) | 11 | multichoice | VOICE/TEXT/TAP |
| B_GP_PEDAGOGY_OTHER | Pedagogies — Any other | 11 | text | VOICE/TEXT |
| B_GP_PROMPT | Activity prompt/question/problem/challenge/planned final output/Activity | 11 | long | VOICE/TEXT |
| B_GP_GUIDING_Q | Guiding questions | 11 | long | VOICE/TEXT |
| B_GP_KNOW | What do I know? | 11 | long | VOICE/TEXT |
| B_GP_FIND_OUT | What do I need to find out? | 11 | long | VOICE/TEXT |
| B_GP_S1_DAY1 | Day 1: | 11 | text | VOICE/TEXT |
| B_GP_S1_DAY2 | Day 2: | 11 | text | VOICE/TEXT |
| B_GP_S1_DAY3 | Day 3: | 11 | text | VOICE/TEXT |
| B_GP_S1_DAY4 | Day 4: | 11 | text | VOICE/TEXT |
| B_GP_S1_DAY5 | Day 5: | 11 | text | VOICE/TEXT |
| B_GP_S1_DAY6 | Day 6: | 11 | text | VOICE/TEXT |
| B_GP_S1_DAY7 | Day 7: | 11 | text | VOICE/TEXT |
| B_GP_S1_DAY8 | Day 8: | 11 | text | VOICE/TEXT |
| B_GP_S1_DAY9 | Day 9: | 11 | text | VOICE/TEXT |
| B_GP_S1_DAY10 | Day 10: | 11 | text | VOICE/TEXT |
| B_GP_RESOURCES | Resources needed | 11 | long | VOICE/TEXT |
| B_GP_ROLES | Roles of group members | 11 | long | VOICE/TEXT |
| B_GP_BARRIERS | Possible barriers to doing the project | 11 | long | VOICE/TEXT |
| B_GP_S1_COMMENTS | Brief comments and pedagogical interventions recommended: | 11 | long | VOICE/TEXT |
| B_GP_S2_COMMENTS | Brief comments and pedagogical interventions recommended: | 11 | long | VOICE/TEXT |
| B_GP_RUB_AWARENESS_BEGINNER | Stage 3 rubric — Awareness — Beginner | 11 | long | VOICE/TEXT |
| B_GP_RUB_AWARENESS_PROFICIENT | Stage 3 rubric — Awareness — Proficient | 11 | long | VOICE/TEXT |
| B_GP_RUB_AWARENESS_ADVANCED | Stage 3 rubric — Awareness — Advanced | 11 | long | VOICE/TEXT |
| B_GP_RUB_SENSITIVITY_BEGINNER | Stage 3 rubric — Sensitivity — Beginner | 11 | long | VOICE/TEXT |
| B_GP_RUB_SENSITIVITY_PROFICIENT | Stage 3 rubric — Sensitivity — Proficient | 11 | long | VOICE/TEXT |
| B_GP_RUB_SENSITIVITY_ADVANCED | Stage 3 rubric — Sensitivity — Advanced | 11 | long | VOICE/TEXT |
| B_GP_RUB_CREATIVITY_BEGINNER | Stage 3 rubric — Creativity — Beginner | 11 | long | VOICE/TEXT |
| B_GP_RUB_CREATIVITY_PROFICIENT | Stage 3 rubric — Creativity — Proficient | 11 | long | VOICE/TEXT |
| B_GP_RUB_CREATIVITY_ADVANCED | Stage 3 rubric — Creativity — Advanced | 11 | long | VOICE/TEXT |
| B_GP_S3_LEVEL_AWARENESS | Stage 3 — achievement level — AWARENESS | 15 | level | VOICE/TEXT/TAP |
| B_GP_S3_LEVEL_SENSITIVITY | Stage 3 — achievement level — SENSITIVITY | 15 | level | VOICE/TEXT/TAP |
| B_GP_S3_LEVEL_CREATIVITY | Stage 3 — achievement level — CREATIVITY | 15 | level | VOICE/TEXT/TAP |
| B_GP_S3_COMMENTS | Brief comments and pedagogical interventions recommended: | 11 | long | VOICE/TEXT |
| B_GP_POST_T1 | Final comments by the teacher: The learner’s most important contribution to the project was… | 11 | long | VOICE/TEXT |
| B_GP_POST_T2 | To perform better in future projects, the learner should work on… | 11 | long | VOICE/TEXT |
| B_GP_POST_L1 | What did I learn from this project? | 11 | long | VOICE/TEXT |
| B_GP_POST_L2 | What was the most enjoyable part of the project? | 11 | long | VOICE/TEXT |
| B_GP_POST_L3 | Three strengths I demonstrated in this project | 11 | long | VOICE/TEXT |
| B_GP_POST_L4 | Two areas of improvement I identified in this project | 11 | long | VOICE/TEXT |
| B_GP_POST_L5 | What were the challenges I faced doing the project? | 11 | long | VOICE/TEXT |
| B_GP_POST_L6 | Some questions I still have… | 11 | long | VOICE/TEXT |
| B_GP_POST_L7 | How could your teacher modify this project to make it more interesting? | 11 | long | VOICE/TEXT |
| B_GP_S1_LEARNER_AWARENESS | Stage 1 — Learner Reflection — Awareness | 12 | checks | VOICE/TEXT/TAP |
| B_GP_S1_LEARNER_SENSITIVITY | Stage 1 — Learner Reflection — Sensitivity | 12 | checks | VOICE/TEXT/TAP |
| B_GP_S1_LEARNER_CREATIVITY | Stage 1 — Learner Reflection — Creativity | 12 | checks | VOICE/TEXT/TAP |
| B_GP_S1_TEACHER_AWARENESS | Stage 1 — Teacher Assessment — Awareness | 13 | checks | VOICE/TEXT/TAP |
| B_GP_S1_TEACHER_SENSITIVITY | Stage 1 — Teacher Assessment — Sensitivity | 13 | checks | VOICE/TEXT/TAP |
| B_GP_S1_TEACHER_CREATIVITY | Stage 1 — Teacher Assessment — Creativity | 13 | checks | VOICE/TEXT/TAP |
| B_GP_S2_TEACHER_AWARENESS | Stage 2 — Teacher Assessment — Awareness | 14 | checks | VOICE/TEXT/TAP |
| B_GP_S2_TEACHER_SENSITIVITY | Stage 2 — Teacher Assessment — Sensitivity | 14 | checks | VOICE/TEXT/TAP |
| B_GP_S2_TEACHER_CREATIVITY | Stage 2 — Teacher Assessment — Creativity | 14 | checks | VOICE/TEXT/TAP |
| B_GP_S3_LEARNER_AWARENESS | Stage 3 — Learner Reflection — Awareness | 16 | checks | VOICE/TEXT/TAP |
| B_GP_S3_LEARNER_SENSITIVITY | Stage 3 — Learner Reflection — Sensitivity | 16 | checks | VOICE/TEXT/TAP |
| B_GP_S3_LEARNER_CREATIVITY | Stage 3 — Learner Reflection — Creativity | 16 | checks | VOICE/TEXT/TAP |
| B_GP_S3_PEER_AWARENESS | Stage 3 — Peer Feedback — Awareness | 16 | checks | VOICE/TEXT/TAP |
| B_GP_S3_PEER_SENSITIVITY | Stage 3 — Peer Feedback — Sensitivity | 16 | checks | VOICE/TEXT/TAP |
| B_GP_S3_PEER_CREATIVITY | Stage 3 — Peer Feedback — Creativity | 16 | checks | VOICE/TEXT/TAP |
| C_PBI_SUBJECTS | Subject(s) (can be more than one) | 19 | text | VOICE/TEXT |
| C_PBI_CURR_GOALS | Curricular goal(s) (can be more than one) | 19 | text | VOICE/TEXT |
| C_PBI_COMPETENCIES | Competency(-ies) (can be more than one) | 19 | text | VOICE/TEXT |
| C_PBI_OUTCOMES | Learning Outcomes | 19 | long | VOICE/TEXT |
| C_PBI_PEDAGOGIES | Pedagogies (Tick all that apply) | 19 | multichoice | VOICE/TEXT/TAP |
| C_PBI_PEDAGOGY_OTHER | Pedagogies — Any other | 19 | text | VOICE/TEXT |
| C_PBI_PROMPT | Research prompt/question/problem/challenge/planned final output | 19 | long | VOICE/TEXT |
| C_PBI_HYPOTHESIS | Hypothesis | 19 | long | VOICE/TEXT |
| C_PBI_GUIDING_Q | Guiding questions | 19 | long | VOICE/TEXT |
| C_PBI_EVIDENCE | Evidence collection to support/negate hypothesis | 19 | long | VOICE/TEXT |
| C_PBI_ANALYSIS | Analysis and Synthesis | 19 | long | VOICE/TEXT |
| C_PBI_KNOW | What do I know? | 19 | long | VOICE/TEXT |
| C_PBI_NEED | What do I need to do? What do I need to find out? | 19 | long | VOICE/TEXT |
| C_PBI_DISCUSSIONS | Discussions | 19 | long | VOICE/TEXT |
| C_PBI_CONCLUSION | Conclusion | 19 | long | VOICE/TEXT |
| C_PBI_RT_DAY1 | Day 1: | 19 | text | VOICE/TEXT |
| C_PBI_RT_DAY2 | Day 2: | 19 | text | VOICE/TEXT |
| C_PBI_RT_DAY3 | Day 3: | 19 | text | VOICE/TEXT |
| C_PBI_RT_DAY4 | Day 4: | 19 | text | VOICE/TEXT |
| C_PBI_RT_DAY5 | Day 5: | 19 | text | VOICE/TEXT |
| C_PBI_RT_DAY6 | Day 6: | 19 | text | VOICE/TEXT |
| C_PBI_RT_DAY7 | Day 7: | 19 | text | VOICE/TEXT |
| C_PBI_RT_DAY8 | Day 8: | 19 | text | VOICE/TEXT |
| C_PBI_RT_DAY9 | Day 9: | 19 | text | VOICE/TEXT |
| C_PBI_RT_DAY10 | Day 10: | 19 | text | VOICE/TEXT |
| C_PBI_S1_COMMENTS | Brief comments and pedagogical interventions recommended: | 19 | long | VOICE/TEXT |
| C_PBI_S2_COMMENTS | Brief comments and pedagogical interventions recommended: | 19 | long | VOICE/TEXT |
| C_PBI_S3_COMMENTS | Brief comments and pedagogical interventions recommended: | 19 | long | VOICE/TEXT |
| C_PBI_S1_PROBLEMS | What problems did I face in Stage 1? | 19 | long | VOICE/TEXT |
| C_PBI_S1_SOLVED | How did I solve them? What help do I still need? | 19 | long | VOICE/TEXT |
| C_PBI_S2_SELF_WORDS | Stage 2 — words of appreciation/encouragement for yourself | 19 | long | VOICE/TEXT |
| C_PBI_S3_PEER_WORDS | Stage 3 — words of appreciation/encouragement for your peer | 19 | long | VOICE/TEXT |
| C_PBI_POST_T1 | Post-inquiry reflections — Final comments by the teacher (if any): | 19 | long | VOICE/TEXT |
| C_PBI_POST_L1 | What did I learn in this problem-based inquiry? | 19 | long | VOICE/TEXT |
| C_PBI_POST_L2 | What was the most enjoyable part of the inquiry? | 19 | long | VOICE/TEXT |
| C_PBI_POST_L3 | Three strengths I demonstrated in this inquiry | 19 | long | VOICE/TEXT |
| C_PBI_POST_L4 | Three areas of improvement I identified this inquiry | 19 | long | VOICE/TEXT |
| C_PBI_POST_L5 | What was the least enjoyable part of the inquiry? | 19 | long | VOICE/TEXT |
| C_PBI_POST_L6 | Some questions I still have… | 19 | long | VOICE/TEXT |
| C_PBI_POST_L7 | How could your teacher modify this inquiry to make it more interesting? | 19 | long | VOICE/TEXT |
| C_PBI_S1_LEARNER_AWARENESS | Stage 1 — Learner Reflection — Awareness | 22 | checks | VOICE/TEXT/TAP |
| C_PBI_S1_LEARNER_SENSITIVITY | Stage 1 — Learner Reflection — Sensitivity | 22 | checks | VOICE/TEXT/TAP |
| C_PBI_S1_LEARNER_CREATIVITY | Stage 1 — Learner Reflection — Creativity | 22 | checks | VOICE/TEXT/TAP |
| C_PBI_S1_TEACHER_AWARENESS | Stage 1 — Teacher Assessment — Awareness | 21 | checks | VOICE/TEXT/TAP |
| C_PBI_S1_TEACHER_SENSITIVITY | Stage 1 — Teacher Assessment — Sensitivity | 21 | checks | VOICE/TEXT/TAP |
| C_PBI_S1_TEACHER_CREATIVITY | Stage 1 — Teacher Assessment — Creativity | 21 | checks | VOICE/TEXT/TAP |
| C_PBI_S2_LEARNER_AWARENESS | Stage 2 — Learner Reflection — Awareness | 24 | checks | VOICE/TEXT/TAP |
| C_PBI_S2_LEARNER_SENSITIVITY | Stage 2 — Learner Reflection — Sensitivity | 24 | checks | VOICE/TEXT/TAP |
| C_PBI_S2_LEARNER_CREATIVITY | Stage 2 — Learner Reflection — Creativity | 24 | checks | VOICE/TEXT/TAP |
| C_PBI_S2_TEACHER_AWARENESS | Stage 2 — Teacher Assessment — Awareness | 23 | checks | VOICE/TEXT/TAP |
| C_PBI_S2_TEACHER_SENSITIVITY | Stage 2 — Teacher Assessment — Sensitivity | 23 | checks | VOICE/TEXT/TAP |
| C_PBI_S2_TEACHER_CREATIVITY | Stage 2 — Teacher Assessment — Creativity | 23 | checks | VOICE/TEXT/TAP |
| C_PBI_S3_TEACHER_AWARENESS | Stage 3 — Teacher Assessment — Awareness | 25 | checks | VOICE/TEXT/TAP |
| C_PBI_S3_TEACHER_SENSITIVITY | Stage 3 — Teacher Assessment — Sensitivity | 25 | checks | VOICE/TEXT/TAP |
| C_PBI_S3_TEACHER_CREATIVITY | Stage 3 — Teacher Assessment — Creativity | 25 | checks | VOICE/TEXT/TAP |
| C_PBI_S3_PEER_AWARENESS | Stage 3 — Peer Feedback — Awareness | 26 | checks | VOICE/TEXT/TAP |
| C_PBI_S3_PEER_SENSITIVITY | Stage 3 — Peer Feedback — Sensitivity | 26 | checks | VOICE/TEXT/TAP |
| C_PBI_S3_PEER_CREATIVITY | Stage 3 — Peer Feedback — Creativity | 26 | checks | VOICE/TEXT/TAP |
| D_CI_TYPE | Tick the type of classroom interaction | 31 | choice | VOICE/TEXT/TAP |
| D_CI_TYPE_OTHER | Type of classroom interaction — other | 31 | text | VOICE/TEXT |
| D_CI_SUBJECTS | Subject(s) (can be more than one) | 31 | text | VOICE/TEXT |
| D_CI_CURR_GOALS | Curricular goal(s) (can be more than one) | 31 | text | VOICE/TEXT |
| D_CI_COMPETENCIES | Competency(-ies) (can be more than one) | 31 | text | VOICE/TEXT |
| D_CI_OUTCOMES | Learning Outcomes | 31 | long | VOICE/TEXT |
| D_CI_PEDAGOGIES | Pedagogies (Tick all that apply) | 31 | multichoice | VOICE/TEXT/TAP |
| D_CI_PEDAGOGY_OTHER | Pedagogies — Any other | 31 | text | VOICE/TEXT |
| D_CI_TOPIC | Topic/theme/prompt/question/problem/challenge/planned final output | 31 | long | VOICE/TEXT |
| D_CI_DURATION | Duration | 31 | text | VOICE/TEXT |
| D_CI_PREP | Prior Preparation / Planning / Review / Recap | 31 | long | VOICE/TEXT |
| D_CI_MATERIALS | Materials needed (if applicable) | 31 | long | VOICE/TEXT |
| D_CI_SEL_AWARENESS | Teacher Assessment — AWARENESS: choose five assessment parameters (pages 36–37) | 32 | multichoice | VOICE/TEXT/TAP |
| D_CI_SEL_SENSITIVITY | Teacher Assessment — SENSITIVITY: choose five assessment parameters (pages 36–37) | 32 | multichoice | VOICE/TEXT/TAP |
| D_CI_SEL_CREATIVITY | Teacher Assessment — CREATIVITY: choose five assessment parameters (pages 36–37) | 32 | multichoice | VOICE/TEXT/TAP |
| D_CI_TICK_AWARENESS | Teacher Assessment — AWARENESS: tick as per the learner’s performance | 32 | multichoice | VOICE/TEXT/TAP |
| D_CI_TICK_SENSITIVITY | Teacher Assessment — SENSITIVITY: tick as per the learner’s performance | 32 | multichoice | VOICE/TEXT/TAP |
| D_CI_TICK_CREATIVITY | Teacher Assessment — CREATIVITY: tick as per the learner’s performance | 32 | multichoice | VOICE/TEXT/TAP |
| D_CI_T_COMMENTS | Brief comments and pedagogical interventions recommended: | 31 | long | VOICE/TEXT |
| D_CI_T_WORDS | Teacher — words of appreciation for the learner about their performance | 31 | long | VOICE/TEXT |
| D_CI_L_WORDS | Learner — words of appreciation for yourself | 31 | long | VOICE/TEXT |
| D_CI_P_WORDS | Peer — words of appreciation for your peer | 31 | long | VOICE/TEXT |
| D_CI_LEARNER_AWARENESS | Learner Reflection — Awareness | 33 | checks | VOICE/TEXT/TAP |
| D_CI_LEARNER_SENSITIVITY | Learner Reflection — Sensitivity | 33 | checks | VOICE/TEXT/TAP |
| D_CI_LEARNER_CREATIVITY | Learner Reflection — Creativity | 33 | checks | VOICE/TEXT/TAP |
| D_CI_PEER_AWARENESS | Peer Feedback — Awareness | 34 | checks | VOICE/TEXT/TAP |
| D_CI_PEER_SENSITIVITY | Peer Feedback — Sensitivity | 34 | checks | VOICE/TEXT/TAP |
| D_CI_PEER_CREATIVITY | Peer Feedback — Creativity | 34 | checks | VOICE/TEXT/TAP |
