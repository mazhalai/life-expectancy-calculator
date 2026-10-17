// Life Expectancy Calculator - Main Logic

class LifeExpectancyCalculator {
    constructor() {
        this.baseExpectancy = {
            male: 78.5,
            female: 83.5
        };
        this.scenarios = [];
        this.initializeEventListeners();
        this.loadScenarios();
        this.updateSliderValues();
        this.setupModalHandlers();
        this.setupUnitToggleHandlers();
    }

    setupModalHandlers() {
        const modal = document.getElementById('infoModal');
        const closeBtn = document.querySelector('.close');

        // Close button
        closeBtn.addEventListener('click', () => {
            modal.classList.remove('show');
        });

        // Click outside modal to close
        window.addEventListener('click', (event) => {
            if (event.target === modal) {
                modal.classList.remove('show');
            }
        });

        // Info buttons
        document.querySelectorAll('.info-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                const infoKey = btn.getAttribute('data-info');
                this.showInfoModal(infoKey);
            });
        });
    }

    showInfoModal(infoKey) {
        const modal = document.getElementById('infoModal');
        const modalBody = document.getElementById('modalBody');

        if (!infoData[infoKey]) {
            console.warn(`No info found for key: ${infoKey}`);
            return;
        }

        const info = infoData[infoKey];
        let html = `
            <h3>${info.title}</h3>
            <p>${info.description}</p>
        `;

        if (info.research && info.research.length > 0) {
            html += '<div class="research-links"><h4>Research & References</h4>';
            info.research.forEach(ref => {
                html += `
                    <div class="research-link">
                        <a href="${ref.url}" target="_blank" rel="noopener noreferrer">${ref.title}</a>
                        <span class="research-authors">${ref.authors}</span>
                    </div>
                `;
            });
            html += '</div>';
        }

        modalBody.innerHTML = html;
        modal.classList.add('show');
    }

    setupUnitToggleHandlers() {
        // Height unit toggle
        const heightUnitCm = document.getElementById('heightUnitCm');
        const heightUnitFtIn = document.getElementById('heightUnitFtIn');
        const heightCmInput = document.getElementById('heightCmInput');
        const heightFtInInput = document.getElementById('heightFtInInput');
        const heightCm = document.getElementById('heightCm');
        const heightFt = document.getElementById('heightFt');
        const heightIn = document.getElementById('heightIn');

        if (heightUnitCm) {
            heightUnitCm.addEventListener('click', () => {
                heightUnitCm.classList.add('active');
                heightUnitFtIn.classList.remove('active');
                heightCmInput.style.display = 'flex';
                heightFtInInput.style.display = 'none';
                
                // Convert ft/in to cm if values exist
                if (heightFt.value && heightIn.value) {
                    const cm = (parseInt(heightFt.value) * 30.48) + (parseInt(heightIn.value) * 2.54);
                    heightCm.value = Math.round(cm);
                }
                this.calculate();
            });
        }

        if (heightUnitFtIn) {
            heightUnitFtIn.addEventListener('click', () => {
                heightUnitFtIn.classList.add('active');
                heightUnitCm.classList.remove('active');
                heightCmInput.style.display = 'none';
                heightFtInInput.style.display = 'flex';
                
                // Convert cm to ft/in if value exists
                if (heightCm.value) {
                    const totalCm = parseInt(heightCm.value);
                    const feet = Math.floor(totalCm / 30.48);
                    const inches = Math.round((totalCm % 30.48) / 2.54);
                    heightFt.value = feet;
                    heightIn.value = inches;
                }
                this.calculate();
            });
        }

        // Weight unit toggle
        const weightUnitKg = document.getElementById('weightUnitKg');
        const weightUnitLbs = document.getElementById('weightUnitLbs');
        const weightKgInput = document.getElementById('weightKgInput');
        const weightLbsInput = document.getElementById('weightLbsInput');
        const weightKg = document.getElementById('weightKg');
        const weightLbs = document.getElementById('weightLbs');

        if (weightUnitKg) {
            weightUnitKg.addEventListener('click', () => {
                weightUnitKg.classList.add('active');
                weightUnitLbs.classList.remove('active');
                weightKgInput.style.display = 'flex';
                weightLbsInput.style.display = 'none';
                
                // Convert lbs to kg if value exists
                if (weightLbs.value) {
                    const kg = parseInt(weightLbs.value) * 0.453592;
                    weightKg.value = Math.round(kg);
                }
                this.calculate();
            });
        }

        if (weightUnitLbs) {
            weightUnitLbs.addEventListener('click', () => {
                weightUnitLbs.classList.add('active');
                weightUnitKg.classList.remove('active');
                weightKgInput.style.display = 'none';
                weightLbsInput.style.display = 'flex';
                
                // Convert kg to lbs if value exists
                if (weightKg.value) {
                    const lbs = parseInt(weightKg.value) * 2.20462;
                    weightLbs.value = Math.round(lbs);
                }
                this.calculate();
            });
        }

        // Add input listeners for unit toggle inputs
        [heightCm, heightFt, heightIn, weightKg, weightLbs].forEach(input => {
            if (input) {
                input.addEventListener('change', () => this.calculate());
                input.addEventListener('input', () => {
                    // Auto-sync conversions
                    if (input === heightCm && !heightUnitCm.classList.contains('active')) {
                        return;
                    }
                    if (input === heightFt || input === heightIn) {
                        if (heightUnitFtIn.classList.contains('active') && heightFt.value && heightIn.value) {
                            const cm = (parseInt(heightFt.value) * 30.48) + (parseInt(heightIn.value) * 2.54);
                            heightCm.value = Math.round(cm);
                        }
                    }
                    if (input === weightKg && weightUnitKg.classList.contains('active')) {
                        const lbs = parseInt(weightKg.value) * 2.20462;
                        weightLbs.value = Math.round(lbs);
                    }
                    if (input === weightLbs && weightUnitLbs.classList.contains('active')) {
                        const kg = parseInt(weightLbs.value) * 0.453592;
                        weightKg.value = Math.round(kg);
                    }
                });
            }
        });
    }

    initializeEventListeners() {
        // Input change listeners
        document.getElementById('calculateBtn').addEventListener('click', () => this.calculate());
        document.getElementById('exercise').addEventListener('input', (e) => {
            document.getElementById('exerciseValue').textContent = e.target.value;
        });
        document.getElementById('alcohol').addEventListener('input', (e) => {
            document.getElementById('alcoholValue').textContent = e.target.value;
        });
        document.getElementById('sleep').addEventListener('input', (e) => {
            document.getElementById('sleepValue').textContent = e.target.value;
        });

        // All inputs should trigger calculation on change
        document.querySelectorAll('.input-field, .slider, .checkbox-field').forEach(input => {
            input.addEventListener('change', () => this.calculate());
        });

        document.getElementById('saveScenarioBtn').addEventListener('click', () => this.saveScenario());
        document.getElementById('exportBtn').addEventListener('click', () => this.exportReport());
    }

    updateSliderValues() {
        document.getElementById('exerciseValue').textContent = document.getElementById('exercise').value;
        document.getElementById('alcoholValue').textContent = document.getElementById('alcohol').value;
        document.getElementById('sleepValue').textContent = document.getElementById('sleep').value;
    }

    getInputs() {
        // Get height in centimeters
        let heightInCm;
        const heightUnitCm = document.getElementById('heightUnitCm');
        if (heightUnitCm && heightUnitCm.classList.contains('active')) {
            // Using cm
            heightInCm = parseInt(document.getElementById('heightCm').value) || 0;
        } else {
            // Using ft/in
            const feet = parseInt(document.getElementById('heightFt').value) || 0;
            const inches = parseInt(document.getElementById('heightIn').value) || 0;
            heightInCm = (feet * 30.48) + (inches * 2.54);
        }

        // Get weight in kilograms
        let weightInKg;
        const weightUnitKg = document.getElementById('weightUnitKg');
        if (weightUnitKg && weightUnitKg.classList.contains('active')) {
            // Using kg
            weightInKg = parseInt(document.getElementById('weightKg').value) || 0;
        } else {
            // Using lbs
            const lbs = parseInt(document.getElementById('weightLbs').value) || 0;
            weightInKg = lbs * 0.453592;
        }

        return {
            age: parseInt(document.getElementById('age').value),
            sex: document.getElementById('sex').value,
            height: heightInCm,
            weight: weightInKg,
            smoking: document.getElementById('smoking').value,
            exercise: parseInt(document.getElementById('exercise').value),
            alcohol: parseInt(document.getElementById('alcohol').value),
            sleep: parseInt(document.getElementById('sleep').value),
            systolic: parseInt(document.getElementById('systolic').value),
            diastolic: parseInt(document.getElementById('diastolic').value),
            totalCholesterol: parseInt(document.getElementById('totalCholesterol').value),
            hdl: parseInt(document.getElementById('hdl').value),
            diabetes: document.getElementById('diabetes').checked,
            hypertension: document.getElementById('hypertension').checked,
            heartDisease: document.getElementById('heartDisease').checked,
            familyHistoryHD: document.getElementById('familyHistoryHD').checked,
            familyHistoryStroke: document.getElementById('familyHistoryStroke').checked,
            familyHistoryDiabetes: document.getElementById('familyHistoryDiabetes').checked,
            familyHistoryCancer: document.getElementById('familyHistoryCancer').checked,
            familyHistoryAlzheimers: document.getElementById('familyHistoryAlzheimers').checked,
            familyHistoryHypertension: document.getElementById('familyHistoryHypertension').checked,
            familyHistoryCholesterol: document.getElementById('familyHistoryCholesterol').checked,
            familyHistoryEarlyDeath: document.getElementById('familyHistoryEarlyDeath').checked,
            depression: document.getElementById('depression').checked
        };
    }

    calculateBMI(height, weight) {
        // BMI = weight (kg) / (height (m))^2
        const heightInMeters = height / 100;
        return weight / (heightInMeters * heightInMeters);
    }

    calculateRiskFactors(inputs) {
        const factors = [];
        let adjustment = 0;

        // Smoking impact
        if (inputs.smoking === 'current') {
            adjustment -= 10;
            factors.push({ name: 'Current Smoking', impact: -10, category: 'negative' });
        } else if (inputs.smoking === 'former') {
            adjustment -= 3;
            factors.push({ name: 'Former Smoking', impact: -3, category: 'negative' });
        } else {
            factors.push({ name: 'Never Smoked', impact: 0, category: 'neutral' });
        }

        // Exercise impact
        if (inputs.exercise >= 5) {
            adjustment += 8;
            factors.push({ name: 'Regular Exercise (5+ days/week)', impact: +8, category: 'positive' });
        } else if (inputs.exercise >= 3) {
            adjustment += 5;
            factors.push({ name: 'Moderate Exercise (3-4 days/week)', impact: +5, category: 'positive' });
        } else if (inputs.exercise >= 1) {
            adjustment += 2;
            factors.push({ name: 'Light Exercise (1-2 days/week)', impact: +2, category: 'positive' });
        } else {
            adjustment -= 4;
            factors.push({ name: 'Sedentary Lifestyle', impact: -4, category: 'negative' });
        }

        // Alcohol impact
        if (inputs.alcohol === 0) {
            factors.push({ name: 'No Alcohol', impact: 0, category: 'neutral' });
        } else if (inputs.alcohol <= 7) {
            adjustment += 1; // Light-moderate drinking may have slight positive effect
            factors.push({ name: 'Moderate Alcohol Consumption', impact: +1, category: 'positive' });
        } else if (inputs.alcohol <= 14) {
            adjustment -= 3;
            factors.push({ name: 'Heavy Alcohol Consumption', impact: -3, category: 'negative' });
        } else {
            adjustment -= 8;
            factors.push({ name: 'Very Heavy Alcohol Consumption', impact: -8, category: 'negative' });
        }

        // Sleep impact
        if (inputs.sleep >= 7 && inputs.sleep <= 9) {
            adjustment += 2;
            factors.push({ name: 'Optimal Sleep (7-9 hours)', impact: +2, category: 'positive' });
        } else if (inputs.sleep < 6 || inputs.sleep > 10) {
            adjustment -= 3;
            factors.push({ name: 'Poor Sleep Patterns', impact: -3, category: 'negative' });
        } else {
            factors.push({ name: 'Fair Sleep Duration', impact: 0, category: 'neutral' });
        }

        // BMI impact
        const bmi = this.calculateBMI(inputs.height, inputs.weight);
        if (bmi < 18.5) {
            adjustment -= 2;
            factors.push({ name: 'Underweight (BMI < 18.5)', impact: -2, category: 'negative' });
        } else if (bmi >= 18.5 && bmi < 25) {
            adjustment += 3;
            factors.push({ name: 'Healthy Weight (BMI 18.5-24.9)', impact: +3, category: 'positive' });
        } else if (bmi >= 25 && bmi < 30) {
            adjustment -= 2;
            factors.push({ name: 'Overweight (BMI 25-29.9)', impact: -2, category: 'negative' });
        } else {
            adjustment -= 5;
            factors.push({ name: 'Obese (BMI ≥ 30)', impact: -5, category: 'negative' });
        }

        // Blood Pressure impact
        if (inputs.systolic < 120 && inputs.diastolic < 80) {
            adjustment += 2;
            factors.push({ name: 'Normal Blood Pressure', impact: +2, category: 'positive' });
        } else if (inputs.systolic < 140 && inputs.diastolic < 90) {
            adjustment -= 2;
            factors.push({ name: 'Elevated Blood Pressure', impact: -2, category: 'negative' });
        } else {
            adjustment -= 5;
            factors.push({ name: 'High Blood Pressure', impact: -5, category: 'negative' });
        }

        // Cholesterol impact (using LDL approximation)
        const ldl = inputs.totalCholesterol - inputs.hdl - (inputs.totalCholesterol * 0.2); // Simple approximation
        if (inputs.hdl >= 60 && inputs.totalCholesterol < 200) {
            adjustment += 2;
            factors.push({ name: 'Healthy Cholesterol Levels', impact: +2, category: 'positive' });
        } else if (inputs.totalCholesterol >= 240) {
            adjustment -= 4;
            factors.push({ name: 'High Cholesterol', impact: -4, category: 'negative' });
        }

        // Health conditions
        if (inputs.diabetes) {
            adjustment -= 8;
            factors.push({ name: 'Diabetes', impact: -8, category: 'negative' });
        }
        if (inputs.hypertension) {
            adjustment -= 4;
            factors.push({ name: 'Hypertension', impact: -4, category: 'negative' });
        }
        if (inputs.heartDisease) {
            adjustment -= 10;
            factors.push({ name: 'Heart Disease', impact: -10, category: 'negative' });
        }
        const familyHistory = [
            { checked: inputs.familyHistoryHD, name: 'Family History of Heart Disease', impact: -4 },
            { checked: inputs.familyHistoryStroke, name: 'Family History of Stroke', impact: -3 },
            { checked: inputs.familyHistoryDiabetes, name: 'Family History of Diabetes', impact: -2 },
            { checked: inputs.familyHistoryCancer, name: 'Family History of Cancer', impact: -4 },
            { checked: inputs.familyHistoryAlzheimers, name: "Family History of Alzheimer's/Dementia", impact: -2 },
            { checked: inputs.familyHistoryHypertension, name: 'Family History of Hypertension', impact: -2 },
            { checked: inputs.familyHistoryCholesterol, name: 'Family History of High Cholesterol', impact: -1 },
            { checked: inputs.familyHistoryEarlyDeath, name: 'Family History of Early Death (before 75)', impact: -5 },
        ];
        const familyHistoryCap = -10;
        let familyAdjustment = 0;
        familyHistory.forEach(item => {
            if (item.checked) {
                familyAdjustment += item.impact;
                factors.push({ name: item.name, impact: item.impact, category: 'negative' });
            }
        });
        adjustment += Math.max(familyAdjustment, familyHistoryCap);

        if (inputs.depression) {
            adjustment -= 3;
            factors.push({ name: 'Depression/Mental Health Issues', impact: -3, category: 'negative' });
        }

        // Age adjustment (older age typically has more risk)
        if (inputs.age > 60) {
            adjustment -= Math.max(0, (inputs.age - 60) * 0.3);
            factors.push({ name: 'Age Factor (60+)', impact: -Math.min(6, (inputs.age - 60) * 0.3), category: 'negative' });
        }

        return { adjustment, factors };
    }

    calculate() {
        const inputs = this.getInputs();
        const { adjustment, factors } = this.calculateRiskFactors(inputs);
        
        let baseExpectancy = this.baseExpectancy[inputs.sex];
        let estimatedExpectancy = baseExpectancy + adjustment;

        // Ensure reasonable bounds
        estimatedExpectancy = Math.max(inputs.age + 5, Math.min(estimatedExpectancy, 110));

        // Display results
        document.getElementById('resultValue').textContent = estimatedExpectancy.toFixed(1);
        
        const yearsRemaining = Math.max(0, estimatedExpectancy - inputs.age);
        document.getElementById('resultMessage').textContent = 
            `Based on current health and lifestyle, approximately ${yearsRemaining.toFixed(0)} years remaining from age ${inputs.age}`;

        // Display risk factors
        this.displayRiskFactors(factors);
    }

    displayRiskFactors(factors) {
        const container = document.getElementById('riskFactors');
        container.innerHTML = '';

        factors.forEach(factor => {
            const item = document.createElement('div');
            item.className = 'risk-factor-item';
            
            const sign = factor.impact > 0 ? '+' : '';
            const impactClass = factor.impact > 0 ? 'positive' : (factor.impact < 0 ? 'negative' : 'neutral');
            
            item.innerHTML = `
                <span class="risk-factor-name">${factor.name}</span>
                <span class="risk-factor-impact ${impactClass}">${sign}${factor.impact.toFixed(1)} years</span>
            `;
            container.appendChild(item);
        });
    }

    saveScenario() {
        const resultValue = document.getElementById('resultValue').textContent;
        if (resultValue === '-') {
            alert('Please calculate first!');
            return;
        }

        const timestamp = new Date().toLocaleTimeString();
        const scenario = {
            id: Date.now(),
            name: `Scenario - ${timestamp}`,
            value: parseFloat(resultValue),
            inputs: this.getInputs()
        };

        this.scenarios.push(scenario);
        this.saveToLocalStorage();
        this.displayScenarios();
    }

    displayScenarios() {
        const container = document.getElementById('scenarios');
        container.innerHTML = '';

        if (this.scenarios.length === 0) {
            container.innerHTML = '<p style="color: #7f8c8d; font-size: 0.9em;">No saved scenarios yet</p>';
            return;
        }

        this.scenarios.forEach(scenario => {
            const item = document.createElement('div');
            item.className = 'scenario-item';
            item.innerHTML = `
                <div>
                    <div class="scenario-name">${scenario.name}</div>
                    <div class="scenario-value">${scenario.value.toFixed(1)} years</div>
                </div>
                <button class="scenario-delete" onclick="calculator.deleteScenario(${scenario.id})">Delete</button>
            `;
            container.appendChild(item);
        });
    }

    deleteScenario(id) {
        this.scenarios = this.scenarios.filter(s => s.id !== id);
        this.saveToLocalStorage();
        this.displayScenarios();
    }

    exportReport() {
        const inputs = this.getInputs();
        const resultValue = document.getElementById('resultValue').textContent;
        
        if (resultValue === '-') {
            alert('Please calculate first!');
            return;
        }

        const report = `
Life Expectancy Calculator Report
Generated: ${new Date().toLocaleString()}

DEMOGRAPHICS
Age: ${inputs.age} years
Sex: ${inputs.sex}
Height: ${inputs.height.toFixed(1)} cm
Weight: ${inputs.weight.toFixed(1)} kg
BMI: ${(this.calculateBMI(inputs.height, inputs.weight)).toFixed(1)}

LIFESTYLE
Smoking: ${inputs.smoking}
Exercise: ${inputs.exercise} days/week
Alcohol: ${inputs.alcohol} drinks/week
Sleep: ${inputs.sleep} hours/night

MEDICAL METRICS
Blood Pressure: ${inputs.systolic}/${inputs.diastolic} mmHg
Total Cholesterol: ${inputs.totalCholesterol} mg/dL
HDL Cholesterol: ${inputs.hdl} mg/dL

HEALTH CONDITIONS
Diabetes: ${inputs.diabetes ? 'Yes' : 'No'}
Hypertension: ${inputs.hypertension ? 'Yes' : 'No'}
Heart Disease: ${inputs.heartDisease ? 'Yes' : 'No'}
Depression/Mental Health: ${inputs.depression ? 'Yes' : 'No'}

FAMILY HISTORY
Family History of Heart Disease: ${inputs.familyHistoryHD ? 'Yes' : 'No'}
Family History of Stroke: ${inputs.familyHistoryStroke ? 'Yes' : 'No'}
Family History of Diabetes: ${inputs.familyHistoryDiabetes ? 'Yes' : 'No'}
Family History of Cancer: ${inputs.familyHistoryCancer ? 'Yes' : 'No'}
Family History of Alzheimer's/Dementia: ${inputs.familyHistoryAlzheimers ? 'Yes' : 'No'}
Family History of Hypertension: ${inputs.familyHistoryHypertension ? 'Yes' : 'No'}
Family History of High Cholesterol: ${inputs.familyHistoryCholesterol ? 'Yes' : 'No'}
Family History of Early Death (before 75): ${inputs.familyHistoryEarlyDeath ? 'Yes' : 'No'}

RESULTS
Estimated Life Expectancy: ${resultValue} years
Message: ${document.getElementById('resultMessage').textContent}

---
Disclaimer: This calculator is for educational purposes only and should not replace professional medical advice.
        `;

        const blob = new Blob([report], { type: 'text/plain' });
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `life-expectancy-report-${new Date().toISOString().split('T')[0]}.txt`;
        a.click();
    }

    saveToLocalStorage() {
        localStorage.setItem('lifeExpectancyScenarios', JSON.stringify(this.scenarios));
    }

    loadScenarios() {
        const stored = localStorage.getItem('lifeExpectancyScenarios');
        if (stored) {
            this.scenarios = JSON.parse(stored);
            this.displayScenarios();
        }
    }
}

// Initialize calculator when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    window.calculator = new LifeExpectancyCalculator();
    // Run initial calculation
    window.calculator.calculate();
});
