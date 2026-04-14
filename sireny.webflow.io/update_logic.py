import re

with open('exam.html', 'r', encoding='utf-8') as f:
    content = f.read()

# The logic to replace
old_logic = r"""    // FILTER THE BANK
    let pool = QUESTION_BANK.filter(q => q.course === course);
    if (subject !== 'All Subjects') {
        pool = pool.filter(q => q.subject === subject);
    }
    if (diff !== 'Mixed') {
        pool = pool.filter(q => q.diff === diff.toLowerCase());
    }

    // If pool is empty \(e.g. no hard cardiology Pediatrics\), fallback slightly
    if \(pool\.length === 0\) pool = QUESTION_BANK.filter\(q => q.course === course\);
    if \(pool\.length === 0\) pool = QUESTION_BANK;

    const actualCount = Math\.min\(qCount, pool\.length\);
    const shuffledPool = shuffleArray\(\[\.\.\.pool\]\);
    const selectedQuestions = shuffledPool\.slice\(0, actualCount\);
    
    // Map selected back to original bank indices for historical consistency or just use them
    // Actually, we'll store the objects themselves or their IDs in qIndices
    const qIndices = selectedQuestions.map\(q => QUESTION_BANK.indexOf\(q\)\);"""

new_logic = """    // FILTER THE STATIC BANK
    let pool = QUESTION_BANK.filter(q => q.course === course);
    if (subject !== 'All Subjects') {
        pool = pool.filter(q => q.subject === subject);
    }
    if (diff !== 'Mixed') {
        pool = pool.filter(q => q.diff === diff.toLowerCase());
    }

    // Dynamic generation function for convincing mock medical questions
    const dynamicGen = (idx) => {
        const dDiff = diff === 'Mixed' ? ['easy','medium','hard'][idx % 3] : diff.toLowerCase();
        const dSub = subject === 'All Subjects' ? ['Cardiology', 'Neurology', 'Pharmacology', 'Pathology', 'Anatomy', 'Biochem'][idx % 6] : subject;
        
        const scenarios = {
            'Cardiology': ['presents with acute substernal chest pain', 'exhibits severe exertional dyspnea', 'shows a wide-complex tachycardia on ECG', 'has a new mid-systolic click and late murmur'],
            'Neurology': ['presents with sudden onset right-sided weakness', 'complains of a classic resting tremor and bradykinesia', 'has ascending flaccid paralysis', 'presents with a thunderclap headache'],
            'Pharmacology': ['was recently started on a new anti-hypertensive', 'has an accidental overdose of acetaminophen', 'requires antibiotic escalation for MRSA', 'is experiencing statin-induced myopathy'],
            'Pathology': ['shows widespread granulomatous inflammation on biopsy', 'has a positive Philadelphia chromosome', 'demonstrates acute tubular necrosis', 'reveals coagulative necrosis in the myocardium'],
            'Anatomy': ['suffered a severe knee injury with excessive anterior translation of the tibia', 'has a lesion of the recurrent laryngeal nerve', 'presents with acute appendicitis', 'has severe ureteral colic'],
            'Biochem': ['has a severe deficiency of hexosaminidase A', 'presents with a distinct mousy odor (PKU)', 'shows toxic accumulation of very long chain fatty acids', 'is unable to convert pyruvate to acetyl-CoA'],
            'Internal Medicine': ['presents with unremitting fever and weight loss', 'has acute kidney injury superimposed on CKD', 'is diagnosed with severe asthma exacerbation', 'shows signs of septic shock'],
            'Pediatrics Basics': ['is a 4-month-old failing to thrive', 'presents with a barky cough and stridor', 'has a characteristic "slapped cheek" rash', 'is diagnosed with Kawasaki disease'],
            'Advanced Surgery': ['presents with acute abdomen', 'has a large incarcerated hernia', 'suffered a severe burn injury', 'requires emergent exploratory laparotomy'],
            'OBGYN Series': ['is a 28-week pregnant woman with severe pre-eclampsia', 'presents with ectopic pregnancy', 'has severe postpartum hemorrhage', 'is diagnosed with PCOS'],
            'Emergency Focus': ['is unresponsive after a motor vehicle accident', 'presents with a massive pulmonary embolism', 'has severe tension pneumothorax', 'is brought in for opioid overdose']
        };

        const symptomPool = scenarios[dSub] || scenarios[course] || ['presents with nonspecific symptoms', 'requires immediate medical attention', 'has abnormal laboratory findings', 'is unresponsive to initial therapy'];
        const symptom = symptomPool[idx % symptomPool.length];
        
        let diffText = "";
        if(dDiff === 'easy') diffText = "The diagnosis is clinically straightforward. ";
        else if(dDiff === 'hard') diffText = "Multiple confounding chronic conditions are present. Lab results are equivocal. ";
        else diffText = "The presentation requires careful differentiation from similar pathologies. ";

        return {
            id: 2000 + idx,
            diff: dDiff,
            course: course,
            subject: dSub,
            format: 'Multiple Choice',
            stem: `A ${30 + (idx * 7) % 50}-year-old patient ${symptom}. ${diffText}`,
            stem2: `Which of the following is the most appropriate next step in management or most likely diagnosis?`,
            options: [
                `Option A (Definitive intervention for ${dSub})`,
                `Option B (Conservative management strategy)`,
                `Option C (Specific diagnostic imaging or lab test)`,
                `Option D (Immediate specialist consultation)`,
                `Option E (Wait and observe)`
            ],
            correct: (idx % 5),
            hint: `In ${course} covering ${dSub}, consider the standard of care guidelines for this exact presentation.`
        };
    };

    // If pool is shorter than qCount, backfill with dynamically generated perfect mocks
    let finalQuestions = shuffleArray([...pool]);
    let reqCount = qCount;
    
    let genIndex = 0;
    while (finalQuestions.length < reqCount) {
        finalQuestions.push(dynamicGen(genIndex));
        genIndex++;
    }

    const actualCount = finalQuestions.length;
    const selectedQuestions = finalQuestions.slice(0, actualCount);

    // Add generated questions dynamically to the global bank so they can be reviewed later without breaking reference
    selectedQuestions.forEach(sq => {
        if (!QUESTION_BANK.find(qb => qb.id === sq.id)) {
            QUESTION_BANK.push(sq);
        }
    });
    
    const qIndices = selectedQuestions.map(q => QUESTION_BANK.indexOf(q));"""

new_content = re.sub(old_logic, new_logic, content, flags=re.DOTALL)

with open('exam.html', 'w', encoding='utf-8') as f:
    f.write(new_content)

print("Replaced" if new_content != content else "Failed")
