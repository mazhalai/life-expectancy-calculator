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
        description: 'Family history of early heart disease (in parents or siblings under age 65) indicates inherited genetic susceptibility to cardiovascular disease. This increases your risk even with healthy lifestyle habits. You may need earlier screening, more aggressive risk factor management, and preventive medication.',
        research: [
            { title: 'Genetic factors in coronary heart disease and familial risk', url: 'https://scholar.google.com/scholar?q=family+history+heart+disease+mortality+genetic', authors: 'Framingham Family Heart Study' },
            { title: 'Familial hypercholesterolemia and cardiovascular risk stratification', url: 'https://scholar.google.com/scholar?q=familial+hypercholesterolemia+cardiovascular+risk', authors: 'American Heart Association' },
            { title: 'Heritability of cardiovascular disease risk factors', url: 'https://scholar.google.com/scholar?q=heritability+cardiovascular+risk+factors', authors: 'Genetic epidemiology studies' }
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