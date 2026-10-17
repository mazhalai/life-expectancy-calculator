// Information data with research references

const infoData = {
    age: {
        title: 'Age',
        description: 'Your current age is the baseline for estimating remaining life expectancy. Age-related risk factors increase significantly after 60. This calculator uses population-based life expectancy tables adjusted by your personal risk factors.',
        research: [
            { title: 'Predicting all-cause mortality from basic physiology in the Framingham Heart Study', url: 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4717277/', authors: 'Zhang & Pincus, Aging Cell (2016)' }
        ]
    },
    sex: {
        title: 'Sex',
        description: 'Biological sex significantly influences life expectancy. Women typically live 4-8 years longer than men on average. This reflects differences in disease susceptibility, health behaviors, cardiovascular risk, and biological factors.',
        research: [
            { title: 'Life expectancy differences between men and women', url: 'https://scholar.google.com/scholar?q=sex+differences+life+expectancy', authors: 'Epidemiological Research' },
            { title: 'WHO Global Health Observatory - Life expectancy by sex', url: 'https://www.who.int/', authors: 'World Health Organization' }
        ]
    },
    height: {
        title: 'Height',
        description: 'Height is used with weight to calculate BMI (Body Mass Index), which is a key indicator of health risk. Height itself may have independent associations with longevity in some studies.',
        research: [
            { title: 'Height and mortality: a meta-analysis of prospective studies', url: 'https://scholar.google.com/scholar?q=height+mortality+association', authors: 'Various epidemiological studies' }
        ]
    },
    weight: {
        title: 'Weight',
        description: 'Combined with height to calculate BMI. Body weight reflects overall health status and risk for weight-related diseases like diabetes and heart disease.',
        research: [
            { title: 'Body weight and all-cause mortality', url: 'https://scholar.google.com/scholar?q=weight+BMI+mortality', authors: 'CDC & NIH Research' }
        ]
    },
    smoking: {
        title: 'Smoking Status',
        description: 'Smoking is one of the strongest modifiable risk factors for early death. Current smokers lose approximately 10 years of life expectancy on average. Former smokers also face elevated risk but improve significantly over time. Quitting before age 40 recovers most of the lost years.',
        research: [
            { title: 'Smoking and life expectancy: a systematic review and meta-analysis', url: 'https://scholar.google.com/scholar?q=smoking+life+expectancy+meta+analysis', authors: 'BMJ, various cohort studies' },
            { title: 'Effect of smoking cessation on life expectancy', url: 'https://scholar.google.com/scholar?q=smoking+cessation+life+expectancy', authors: 'New England Journal of Medicine' },
            { title: 'Framingham Heart Study on smoking effects', url: 'https://www.framinghamheartstudy.org/', authors: 'Framingham Heart Study' }
        ]
    },
    exercise: {
        title: 'Physical Activity',
        description: 'Regular exercise (150+ minutes/week of moderate aerobic activity) can add 3-7 years to life expectancy. It reduces risks of heart disease, type 2 diabetes, obesity, colon cancer, and breast cancer. It also improves mental health and cognitive function.',
        research: [
            { title: 'Physical activity and life expectancy: a meta-analysis of prospective studies', url: 'https://scholar.google.com/scholar?q=physical+activity+life+expectancy', authors: 'BMJ & Cochrane Database' },
            { title: 'Benefits of regular exercise on cardiovascular mortality', url: 'https://scholar.google.com/scholar?q=exercise+mortality+reduction+cardiovascular', authors: 'Journal of the American Medical Association' },
            { title: 'WHO Physical Activity Guidelines', url: 'https://www.who.int/publications/i/item/9789240015128', authors: 'World Health Organization' }
        ]
    },
    alcohol: {
        title: 'Alcohol Consumption',
        description: 'Moderate alcohol consumption (up to 1 drink/day for women, 2 for men) may have minor cardiovascular benefits, though this is debated. Heavy drinking significantly increases mortality risk from liver disease, certain cancers, accidents, and cardiovascular disease.',
        research: [
            { title: 'Alcohol consumption and all-cause mortality: a meta-analysis', url: 'https://scholar.google.com/scholar?q=alcohol+mortality+all+cause+meta+analysis', authors: 'Lancet & WHO studies' },
            { title: 'J-shaped relationship between alcohol and mortality', url: 'https://scholar.google.com/scholar?q=alcohol+mortality+j+curve', authors: 'Epidemiological Research' },
            { title: 'Global Burden of Disease study on alcohol effects', url: 'https://scholar.google.com/scholar?q=global+burden+disease+alcohol', authors: 'The Lancet' }
        ]
    },
    sleep: {
        title: 'Sleep Duration',
        description: 'Optimal sleep is 7-9 hours per night for most adults. Both insufficient sleep (<6 hours) and excessive sleep (>10 hours) are associated with increased mortality risk from cardiovascular disease, diabetes, obesity, and other causes. Poor sleep quality also matters.',
        research: [
            { title: 'Sleep duration and all-cause mortality: a systematic review and meta-analysis', url: 'https://scholar.google.com/scholar?q=sleep+duration+mortality+meta+analysis', authors: 'Sleep Medicine Reviews' },
            { title: 'Sleep and cardiovascular health', url: 'https://scholar.google.com/scholar?q=sleep+cardiovascular+mortality', authors: 'American Heart Association' },
            { title: 'Meta-analysis of sleep and mortality in prospective studies', url: 'https://scholar.google.com/scholar?q=sleep+mortality+prospective+cohort', authors: 'Various epidemiological studies' }
        ]
    },
    'blood-pressure': {
        title: 'Blood Pressure',
        description: 'Blood pressure categories: Normal (<120/80), Elevated (120-129/<80), Stage 1 High BP (130-139/80-89), Stage 2 High BP (≥140/90). High blood pressure is a major risk factor for heart attack, stroke, kidney disease, and heart failure. It\'s often called the "silent killer" because it has no symptoms.',
        research: [
            { title: 'Blood pressure as a predictor of mortality in the Framingham Study', url: 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4717277/', authors: 'Framingham Heart Study' },
            { title: 'Hypertension and cardiovascular mortality: meta-analysis', url: 'https://scholar.google.com/scholar?q=hypertension+life+expectancy+mortality', authors: 'CDC & AHA Guidelines' },
            { title: 'SCORE cardiovascular risk assessment model', url: 'https://www.escardio.org/', authors: 'European Society of Cardiology' }
        ]
    },
    cholesterol: {
        title: 'Cholesterol Levels',
        description: 'Total cholesterol and the HDL/LDL ratio significantly affect cardiovascular risk. Healthy levels: Total <200 mg/dL, HDL ≥60 mg/dL. High LDL ("bad" cholesterol) increases atherosclerosis risk. HDL ("good" cholesterol) is protective. Triglycerides also matter.',
        research: [
            { title: 'Cholesterol and cardiovascular mortality: Framingham Study', url: 'https://scholar.google.com/scholar?q=cholesterol+cardiovascular+mortality+framingham', authors: 'Framingham Heart Study' },
            { title: 'LDL and HDL cholesterol effects on long-term survival', url: 'https://scholar.google.com/scholar?q=LDL+HDL+longevity+mortality', authors: 'NIH & cardiology research' },
            { title: 'Statin therapy and life expectancy', url: 'https://scholar.google.com/scholar?q=statin+therapy+life+expectancy', authors: 'Clinical Cardiology Studies' }
        ]
    },
    diabetes: {
        title: 'Diabetes',
        description: 'Diabetes significantly increases risk of heart disease (2-4x higher), stroke, kidney disease, neuropathy, and eye disease. Type 2 diabetes can reduce life expectancy by 8-10 years if not well-managed. Good glycemic control and lifestyle changes substantially improve outcomes.',
        research: [
            { title: 'Diabetes and life expectancy: a systematic review', url: 'https://scholar.google.com/scholar?q=diabetes+life+expectancy+mortality', authors: 'American Diabetes Association' },
            { title: 'Impact of glycemic control on mortality in type 2 diabetes', url: 'https://scholar.google.com/scholar?q=diabetes+glycemic+control+mortality', authors: 'DCCT & UKPDS landmark trials' },
            { title: 'Diabetes and cardiovascular risk', url: 'https://scholar.google.com/scholar?q=diabetes+cardiovascular+risk+mortality', authors: 'Circulation & Heart Disease' }
        ]
    },
    hypertension: {
        title: 'Hypertension (High Blood Pressure)',
        description: 'Chronic high blood pressure damages blood vessels and organ function over time, increasing risk of heart attack, stroke, heart failure, and kidney disease. Well-controlled hypertension through medication and lifestyle changes significantly improves longevity outcomes.',
        research: [
            { title: 'Hypertension treatment and mortality outcomes', url: 'https://scholar.google.com/scholar?q=hypertension+treatment+mortality', authors: 'American College of Cardiology & American Heart Association' },
            { title: 'SCORE model for hypertension-related cardiovascular risk', url: 'https://www.escardio.org/Education/ESC-Prevention-of-CVD-Programme/CVD-prevention-toolbox/SCORE2-Heart-Risk-Calculator', authors: 'European Society of Cardiology' },
            { title: 'Blood pressure reduction and cardiovascular events', url: 'https://scholar.google.com/scholar?q=blood+pressure+reduction+cardiovascular+events', authors: 'Clinical trial meta-analyses' }
        ]
    },
    'heart-disease': {
        title: 'Heart Disease',
        description: 'Prior heart disease (myocardial infarction, angina, heart failure, valve disease) significantly increases mortality risk. However, modern treatments (medications, revascularization, rehabilitation) substantially improve outcomes. Risk reduction depends on type, severity, and management.',
        research: [
            { title: 'Prognosis after acute myocardial infarction', url: 'https://scholar.google.com/scholar?q=heart+attack+prognosis+life+expectancy', authors: 'Framingham Study & major registries' },
            { title: 'Long-term outcomes in coronary artery disease', url: 'https://scholar.google.com/scholar?q=coronary+artery+disease+survival+outcomes', authors: 'European Heart Journal' },
            { title: 'Cardiovascular disease epidemiology and mortality', url: 'https://scholar.google.com/scholar?q=cardiovascular+disease+mortality', authors: 'WHO & CDC Global reports' }
        ]
    },
    'family-history': {
        title: 'Family History of Heart Disease',
        description: 'Select if a parent, sibling, or grandparent had heart disease (heart attack, angina, bypass/stent) before about age 55 (men) or 65 (women). Inherited susceptibility raises your risk even with healthy habits; this calculator subtracts about 4 years (research range 3-5). Family history is a risk indicator, not a diagnosis: it is different from a personal heart disease diagnosis, which has its own larger adjustment.',
        research: [
            { title: 'Genetic factors in coronary heart disease and familial risk', url: 'https://scholar.google.com/scholar?q=family+history+heart+disease+mortality+genetic', authors: 'Framingham Family Heart Study' },
            { title: 'Parental history of premature cardiovascular disease and offspring risk', url: 'https://scholar.google.com/scholar?q=parental+history+cardiovascular+disease+framingham+offspring', authors: 'Framingham Offspring Study' },
            { title: 'Heritability of cardiovascular disease risk factors', url: 'https://scholar.google.com/scholar?q=heritability+cardiovascular+risk+factors', authors: 'Twin studies / genetic epidemiology' }
        ]
    },
    'family-history-stroke': {
        title: 'Family History of Stroke / Cerebrovascular Disease',
        description: 'Select if parents, siblings, or grandparents had a stroke or TIA before about age 65. Parental stroke history is an independent predictor of stroke in offspring (Framingham), and twin studies show a genetic component. This calculator subtracts about 3 years (range 2-4). A family history is not the same as having had a stroke yourself.',
        research: [
            { title: 'Parental history of stroke and risk of stroke in offspring', url: 'https://scholar.google.com/scholar?q=parental+stroke+history+framingham+offspring+risk', authors: 'Seshadri et al., Stroke (2010)' },
            { title: 'Heritability of stroke: twin studies', url: 'https://scholar.google.com/scholar?q=twin+studies+stroke+heritability', authors: 'Genetic epidemiology' }
        ]
    },
    'family-history-diabetes': {
        title: 'Family History of Diabetes',
        description: 'Select if parents or siblings have (or had) type 2 diabetes. A first-degree relative with diabetes roughly doubles to triples your own lifetime risk, and twin studies show strong heritability. This calculator subtracts about 2-3 years (2 applied). Family history only signals higher risk; a personal diagnosis is accounted for separately and weighs much more. Healthy weight and exercise reduce the risk substantially.',
        research: [
            { title: 'Family history and risk of type 2 diabetes', url: 'https://scholar.google.com/scholar?q=family+history+type+2+diabetes+risk+meta-analysis', authors: 'Diabetes Care' },
            { title: 'CDC: Diabetes risk factors and family history', url: 'https://scholar.google.com/scholar?q=CDC+diabetes+family+history+risk', authors: 'Centers for Disease Control and Prevention' }
        ]
    },
    'family-history-cancer': {
        title: 'Family History of Cancer',
        description: 'Select if parents, siblings, or grandparents had cancer, especially before age 50-60 or with multiple relatives affected. Earlier onset suggests stronger inherited risk (e.g. BRCA1/2, Lynch syndrome). This calculator subtracts about 4 years (range 3-5). Family history differs from a personal diagnosis, and screening can often catch problems early.',
        research: [
            { title: 'Familial risk of cancer in the Swedish Family-Cancer Database', url: 'https://scholar.google.com/scholar?q=familial+risk+cancer+family-cancer+database', authors: 'Hemminki et al.' },
            { title: 'Heritability of cancer among twins', url: 'https://scholar.google.com/scholar?q=heritability+cancer+twins+nordic', authors: 'Mucci et al., JAMA (2016)' },
            { title: 'CDC: Family health history and cancer', url: 'https://scholar.google.com/scholar?q=CDC+family+health+history+cancer', authors: 'Centers for Disease Control and Prevention' }
        ]
    },
    'family-history-alzheimers': {
        title: 'Family History of Alzheimer\'s / Dementia',
        description: 'Select if a parent or sibling developed Alzheimer\'s disease or another dementia. Having a first-degree relative with Alzheimer\'s raises risk by roughly 2x, and the APOE e4 gene is a known factor. This calculator subtracts about 2 years (range 2-3). A family history does not mean you will develop dementia, and it is not a diagnosis.',
        research: [
            { title: 'Family history of Alzheimer\'s disease and risk of dementia', url: 'https://scholar.google.com/scholar?q=family+history+alzheimer+disease+risk', authors: 'Alzheimer\'s Association' },
            { title: 'Heritability of Alzheimer\'s disease: twin studies', url: 'https://scholar.google.com/scholar?q=alzheimer+disease+heritability+twin+study', authors: 'Gatz et al., Arch Gen Psychiatry (2006)' }
        ]
    },
    'family-history-hypertension': {
        title: 'Family History of Hypertension',
        description: 'Select if parents or siblings had high blood pressure before about age 60. Blood pressure is moderately heritable (30-50%), and parental hypertension predicts offspring hypertension in the Framingham studies. This calculator subtracts about 2 years (range 2-3). It is different from having hypertension yourself, which is entered under Health Conditions.',
        research: [
            { title: 'Parental hypertension and offspring blood pressure', url: 'https://scholar.google.com/scholar?q=parental+hypertension+offspring+blood+pressure+framingham', authors: 'Framingham Heart Study' },
            { title: 'WHO: Hypertension fact sheet', url: 'https://scholar.google.com/scholar?q=WHO+hypertension+risk+factors+family+history', authors: 'World Health Organization' }
        ]
    },
    'family-history-cholesterol': {
        title: 'Family History of High Cholesterol',
        description: 'Select if parents or siblings have high cholesterol or familial hypercholesterolemia (LDL above about 190 mg/dL, often with early heart disease). Inherited cholesterol disorders raise lifetime cardiovascular risk. This calculator subtracts about 1 year (range 1-2). Your own cholesterol values are accounted for separately in Medical Metrics.',
        research: [
            { title: 'Familial hypercholesterolemia and cardiovascular risk', url: 'https://scholar.google.com/scholar?q=familial+hypercholesterolemia+cardiovascular+risk', authors: 'American Heart Association' },
            { title: 'Heritability of lipid levels: twin studies', url: 'https://scholar.google.com/scholar?q=heritability+lipid+levels+twin+study', authors: 'Genetic epidemiology' }
        ]
    },
    'family-history-early-death': {
        title: 'Family History of Early Death (before age 75)',
        description: 'Select if a parent or sibling died before age 75 from natural causes (not accidents or violence). Parental longevity is associated with offspring longevity, and the heritability of lifespan is estimated at about 20-25%. This calculator subtracts about 5 years (range 4-6). Because this overlaps with the specific conditions above, total family history adjustments are capped at 10 years.',
        research: [
            { title: 'Heritability of human longevity: twin studies', url: 'https://scholar.google.com/scholar?q=heritability+human+lifespan+twin+studies', authors: 'Danish Twin Registry' },
            { title: 'Parental longevity and offspring mortality', url: 'https://scholar.google.com/scholar?q=parental+longevity+offspring+mortality+risk', authors: 'Epidemiological cohort studies' },
            { title: 'CDC: Family health history', url: 'https://scholar.google.com/scholar?q=CDC+family+health+history+importance', authors: 'Centers for Disease Control and Prevention' }
        ]
    },
    depression: {
        title: 'Depression/Mental Health Issues',
        description: 'Depression and other mental health conditions are associated with 3-7 year reduction in life expectancy. This is mediated through behavioral factors (poor lifestyle choices), inflammatory pathways, neuroendocrine dysfunction, and increased cardiovascular risk. Treatment significantly improves outcomes.',
        research: [
            { title: 'Depression and mortality: a meta-analysis of prospective studies', url: 'https://scholar.google.com/scholar?q=depression+mortality+meta+analysis', authors: 'JAMA Psychiatry & major cohort studies' },
            { title: 'Mental health, depression, and cardiovascular disease outcomes', url: 'https://scholar.google.com/scholar?q=depression+heart+disease+mortality', authors: 'American Psychosomatic Society' },
            { title: 'Psychological stress and life expectancy', url: 'https://scholar.google.com/scholar?q=psychological+stress+life+expectancy', authors: 'Psychological Medicine' }
        ]
    }
};