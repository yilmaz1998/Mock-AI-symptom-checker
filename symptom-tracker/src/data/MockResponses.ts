export interface MockResponseItem {
    text: string;
    severity: "info" | "warning" | "danger";
}

export interface MockResponses {
    [key: string]: MockResponseItem[];
}

export const mockResponses: MockResponses = {
    headache: [
        { text: "Possible causes: dehydration, stress, or migraine.", severity: "warning" },
        { text: "Recommendation: Drink water and rest.", severity: "info" },
        { text: "If persistent, consult a doctor.", severity: "danger" }
    ],
    fever: [
        { text: "Possible causes: viral infection or flu.", severity: "warning" },
        { text: "Recommendation: Stay hydrated and rest.", severity: "info" },
        { text: "Seek medical advice if temp >39°C.", severity: "danger" }
    ],
    cough: [
        { text: "Possible causes: cold, flu, or allergies.", severity: "warning" },
        { text: "Recommendation: Drink warm fluids.", severity: "info" },
        { text: "See a doctor if severe or persistent.", severity: "danger" }
    ],
    "sore throat": [
        { text: "Possible causes: viral infection or irritation.", severity: "warning" },
        { text: "Recommendation: Gargle warm salt water.", severity: "info" },
        { text: "Consult a doctor if pain is severe.", severity: "danger" }
    ],
    fatigue: [
        { text: "Possible causes: lack of sleep, stress, or anemia.", severity: "warning" },
        { text: "Recommendation: Rest and stay hydrated.", severity: "info" },
        { text: "Consult a doctor if persistent.", severity: "danger" }
    ],
    nausea: [
        { text: "Possible causes: stomach infection or food poisoning.", severity: "warning" },
        { text: "Recommendation: Eat light meals, stay hydrated.", severity: "info" },
        { text: "Seek medical attention if severe.", severity: "danger" }
    ],
    vomiting: [
        { text: "Possible causes: food poisoning or infection.", severity: "warning" },
        { text: "Recommendation: Hydrate and rest.", severity: "info" },
        { text: "See a doctor if repeated.", severity: "danger" }
    ],
    diarrhea: [
        { text: "Possible causes: infection or food intolerance.", severity: "warning" },
        { text: "Recommendation: Drink electrolytes.", severity: "info" },
        { text: "Seek medical attention if severe.", severity: "danger" }
    ],
    "shortness of breath": [
        { text: "Possible causes: asthma, allergy, or infection.", severity: "warning" },
        { text: "Recommendation: Rest and monitor.", severity: "info" },
        { text: "Seek immediate medical attention if severe.", severity: "danger" }
    ],
    "chest pain": [
        { text: "Possible causes: heart or lung issues.", severity: "warning" },
        { text: "Recommendation: Sit and rest.", severity: "info" },
        { text: "Seek immediate medical attention!", severity: "danger" }
    ],
    dizziness: [
        { text: "Possible causes: dehydration or low blood pressure.", severity: "warning" },
        { text: "Recommendation: Sit or lie down.", severity: "info" },
        { text: "Consult a doctor if persistent.", severity: "danger" }
    ],
    "muscle pain": [
        { text: "Possible causes: exercise or strain.", severity: "warning" },
        { text: "Recommendation: Rest and gentle stretching.", severity: "info" },
        { text: "Consult a doctor if severe.", severity: "danger" }
    ],
    "back pain": [
        { text: "Possible causes: poor posture or strain.", severity: "warning" },
        { text: "Recommendation: Stretching and rest.", severity: "info" },
        { text: "Seek medical advice if severe.", severity: "danger" }
    ],
    "loss of appetite": [
        { text: "Possible causes: illness or stress.", severity: "warning" },
        { text: "Recommendation: Eat small, light meals.", severity: "info" },
        { text: "Consult a doctor if persistent.", severity: "danger" }
    ],
    rash: [
        { text: "Possible causes: allergy or infection.", severity: "warning" },
        { text: "Recommendation: Keep area clean.", severity: "info" },
        { text: "See a doctor if spreading or severe.", severity: "danger" }
    ],
    chills: [
        { text: "Possible causes: fever, infection, or flu.", severity: "warning" },
        { text: "Recommendation: Rest and stay warm.", severity: "info" },
        { text: "Consult a doctor if accompanied by high fever.", severity: "danger" }
    ],

    insomnia: [
        { text: "Possible causes: stress, anxiety, or poor sleep habits.", severity: "warning" },
        { text: "Recommendation: Maintain a consistent sleep schedule.", severity: "info" },
        { text: "Consult a doctor if persistent.", severity: "danger" }
    ],

    palpitations: [
        { text: "Possible causes: anxiety, caffeine, or heart rhythm issues.", severity: "warning" },
        { text: "Recommendation: Rest and reduce caffeine intake.", severity: "info" },
        { text: "Seek medical advice if frequent.", severity: "danger" }
    ],

    sweating: [
        { text: "Possible causes: fever, anxiety, or hormonal changes.", severity: "warning" },
        { text: "Recommendation: Stay hydrated and rest.", severity: "info" },
        { text: "Consult a doctor if excessive.", severity: "danger" }
    ],

    constipation: [
        { text: "Possible causes: low fiber diet or dehydration.", severity: "warning" },
        { text: "Recommendation: Increase fiber and water intake.", severity: "info" },
        { text: "Seek medical advice if persistent.", severity: "danger" }
    ],

    bloating: [
        { text: "Possible causes: digestive issues or food intolerance.", severity: "warning" },
        { text: "Recommendation: Avoid gas-producing foods.", severity: "info" },
        { text: "Consult a doctor if severe or persistent.", severity: "danger" }
    ],

    "joint pain": [
        { text: "Possible causes: arthritis, injury, or inflammation.", severity: "warning" },
        { text: "Recommendation: Rest and apply cold compress.", severity: "info" },
        { text: "Consult a doctor if swelling or severe pain occurs.", severity: "danger" }
    ],

    "ear pain": [
        { text: "Possible causes: ear infection or pressure.", severity: "warning" },
        { text: "Recommendation: Avoid inserting objects in the ear.", severity: "info" },
        { text: "Consult a doctor if pain is severe.", severity: "danger" }
    ],

    "eye redness": [
        { text: "Possible causes: allergy, infection, or irritation.", severity: "warning" },
        { text: "Recommendation: Avoid rubbing eyes.", severity: "info" },
        { text: "Consult a doctor if vision changes occur.", severity: "danger" }
    ],

    "runny nose": [
        { text: "Possible causes: cold, flu, or allergies.", severity: "warning" },
        { text: "Recommendation: Stay hydrated and rest.", severity: "info" },
        { text: "Consult a doctor if symptoms worsen.", severity: "danger" }
    ]
};