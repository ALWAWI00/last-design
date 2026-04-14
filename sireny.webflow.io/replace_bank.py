import re

cardio_bank = """const QUESTION_BANK = [
  {
    id: 1, diff: 'easy', course: 'Internal Medicine', subject: 'Cardiology', format: 'Multiple Choice',
    stem: "A 60-year-old man presents with typical angina pectoris. Which of the following is the most appropriate initial medication to relieve his acute symptoms?",
    stem2: "Select the most appropriate initial medication:",
    options: ["Aspirin", "Sublingual Nitroglycerin", "Metoprolol", "Clopidogrel", "Atorvastatin"],
    correct: 1,
    hint: "Think about rapid vasodilation to reduce myocardial oxygen demand."
  },
  {
    id: 2, diff: 'medium', course: 'Internal Medicine', subject: 'Cardiology', format: 'Multiple Choice',
    stem: "A 45-year-old woman with a history of rheumatic fever presents with worsening exertional dyspnea and an opening snap followed by a late diastolic rumble at the apex.",
    stem2: "Which valvular abnormality is most likely present?",
    options: ["Mitral Regurgitation", "Aortic Stenosis", "Mitral Stenosis", "Tricuspid Regurgitation", "Aortic Regurgitation"],
    correct: 2,
    hint: "An 'opening snap' followed by a diastolic rumble is the classic auscultatory finding for this condition."
  },
  {
    id: 3, diff: 'hard', course: 'Internal Medicine', subject: 'Cardiology', format: 'Multiple Choice',
    stem: "A 75-year-old man is diagnosed with HFpEF (Heart Failure with preserved Ejection Fraction). His EF is 60%, and he has systemic hypertension and left ventricular hypertrophy.",
    stem2: "Which medication class has been most recently shown to reduce hospitalizations in this specific patient population according to recent guidelines?",
    options: ["Loop Diuretics", "SGLT2 Inhibitors", "Digoxin", "Calcium Channel Blockers", "Nitrates"],
    correct: 1,
    hint: "These drugs, originally developed for diabetes (ending in -gliflozin), have shown significant benefits in HFpEF."
  },
  {
    id: 4, diff: 'easy', course: 'Internal Medicine', subject: 'Cardiology', format: 'Multiple Choice',
    stem: "A 30-year-old tall, thin man with extremely long fingers (arachnodactyly) and a pectus excavatum experiences sudden tearing chest pain radiating to his back.",
    stem2: "What is the most likely diagnosis?",
    options: ["Pulmonary Embolism", "Acute Myocardial Infarction", "Aortic Dissection", "Pericarditis", "Pneumothorax"],
    correct: 2,
    hint: "Consider the patient's Marfanoid habitus and the classic 'tearing' pain radiating to the back."
  },
  {
    id: 5, diff: 'medium', course: 'Internal Medicine', subject: 'Cardiology', format: 'Multiple Choice',
    stem: "A patient presents with sharp, pleuritic chest pain that improves upon leaning forward. ECG reveals widespread ST elevation and PR depression.",
    stem2: "What is the first-line pharmacologic treatment for this condition?",
    options: ["Amiodarone", "Ibuprofen and Colchicine", "Nitroglycerin", "Epinephrine", "Aspirin 81mg"],
    correct: 1,
    hint: "The clinical presentation is classic for acute pericarditis. Anti-inflammatory drugs are the mainstay of therapy."
  },
  {
    id: 6, diff: 'hard', course: 'Internal Medicine', subject: 'Cardiology', format: 'Multiple Choice',
    stem: "A 55-year-old male with a history of COPD and long-standing untreated hypertension presents with signs of isolated right-sided heart failure (JVD, hepatomegaly, pedal edema).",
    stem2: "What is the most likely underlying pathophysiological mechanism for his condition (Cor Pulmonale)?",
    options: ["Left ventricular hypertrophy", "Pulmonary arterial hypertension due to hypoxic vasoconstriction", "Primary tricuspid valve disease", "Pericardial constriction", "Myocardial amyloid deposition"],
    correct: 1,
    hint: "Chronic hypoxia leads to pulmonary vessel constriction, increasing afterload on the right ventricle."
  },
  {
    id: 7, diff: 'easy', course: 'Internal Medicine', subject: 'Cardiology', format: 'Multiple Choice',
    stem: "On a standard 12-lead ECG, which leads are considered the 'inferior leads', typically looking at the inferior wall of the left ventricle?",
    stem2: "Select the correct combination:",
    options: ["V1, V2, V3, V4", "I, aVL, V5, V6", "II, III, aVF", "V1, aVR", "I, II, III"],
    correct: 2,
    hint: "These leads sit 'below' the heart anatomically and their ST elevations indicate an inferior MI (often right coronary artery)."
  },
  {
    id: 8, diff: 'medium', course: 'Internal Medicine', subject: 'Cardiology', format: 'Multiple Choice',
    stem: "A 65-year-old patient presents with syncope and an ECG demonstrating complete dissociation between P waves and QRS complexes. The ventricular rate is roughly 40 bpm.",
    stem2: "What is the definitive management for this rhythm?",
    options: ["IV Atropine", "Permanent Pacemaker Implantation", "Synchronized Cardioversion", "Beta-blocker therapy", "Observation"],
    correct: 1,
    hint: "Third-degree (complete) heart block often produces severe bradycardia that requires mechanical electrical pacing for definitive treatment."
  },
  {
    id: 9, diff: 'hard', course: 'Internal Medicine', subject: 'Cardiology', format: 'Multiple Choice',
    stem: "A 28-year-old competitive athlete collapses on the field. He has a family history of sudden cardiac death. Echocardiography reveals asymmetric septal hypertrophy.",
    stem2: "Which murmur description is most characteristic of his underlying disorder?",
    options: ["Diastolic decrescendo murmur best heard at the left sternal border", "Harsh systolic crescendo-decrescendo murmur that INCREASES with Valsalva maneuver", "Holosystolic murmur at the apex radiating to the axilla", "Late systolic murmur preceded by a mid-systolic click", "Continuous machine-like murmur at the upper left sternal border"],
    correct: 1,
    hint: "In Hypertrophic Cardiomyopathy (HCM), maneuvers that DECREASE preload (like Valsalva) INCREASE the outflow obstruction, thus making the murmur louder."
  },
  {
    id: 10, diff: 'medium', course: 'Internal Medicine', subject: 'Cardiology', format: 'Multiple Choice',
    stem: "A 50-year-old patient is started on an ACE inhibitor for hypertension. Two weeks later, routine lab work shows a significant increase in serum potassium and a moderate rise in serum creatinine.",
    stem2: "What is the physiological mechanism responsible for these laboratory changes?",
    options: ["Increased aldosterone secretion", "Efferent arteriole vasodilation reducing intraglomerular pressure", "Afferent arteriole vasoconstriction", "Direct nephrotoxic effect on proximal tubules", "Inhibition of ADH release"],
    correct: 1,
    hint: "ACE inhibitors block angiotensin II, an efferent arteriole vasoconstrictor. Losing this tone reduces GFR (increasing Cr) and reduces aldosterone (increasing K)."
  }
];"""

with open('exam.html', 'rb') as f:
    content = f.read().decode('utf-8', errors='ignore')

# Attempt to replace the block
pattern = re.compile(r'const QUESTION_BANK\s*=\s*\[.*?(?=const urlparams)', re.DOTALL)
new_content = pattern.sub(cardio_bank + '\n\n', content)

with open('exam.html', 'w', encoding='utf-8') as f:
    f.write(new_content)

print("Replaced successfully" if new_content != content else "Failed to replace")
