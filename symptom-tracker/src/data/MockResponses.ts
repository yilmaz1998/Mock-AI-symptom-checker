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
    ], "abdominal pain": [
        { text: "Possible causes: indigestion, infection, or inflammation.", severity: "warning" },
        { text: "Recommendation: Rest and eat light meals.", severity: "info" },
        { text: "Seek medical attention if severe or persistent.", severity: "danger" }
    ],

    "blurred vision": [
        { text: "Possible causes: eye strain, fatigue, or underlying health issues.", severity: "warning" },
        { text: "Recommendation: Rest eyes and reduce screen time.", severity: "info" },
        { text: "Consult a doctor if persistent or sudden.", severity: "danger" }
    ],

    "cold hands or feet": [
        { text: "Possible causes: poor circulation or low temperature.", severity: "warning" },
        { text: "Recommendation: Keep warm and exercise fingers/toes.", severity: "info" },
        { text: "Seek medical advice if persistent.", severity: "danger" }
    ],

    "chest tightness": [
        { text: "Possible causes: anxiety, asthma, or heart issues.", severity: "warning" },
        { text: "Recommendation: Rest and relax.", severity: "info" },
        { text: "Seek immediate medical attention if severe.", severity: "danger" }
    ],

    "heartburn": [
        { text: "Possible causes: acid reflux or diet.", severity: "warning" },
        { text: "Recommendation: Avoid spicy/fatty foods.", severity: "info" },
        { text: "Consult a doctor if frequent.", severity: "danger" }
    ],

    "feeling cold": [
        { text: "Possible causes: fever or low temperature.", severity: "warning" },
        { text: "Recommendation: Keep warm and rest.", severity: "info" },
        { text: "Consult a doctor if persistent.", severity: "danger" }
    ],

    "feeling hot": [
        { text: "Possible causes: fever, infection, or hormonal changes.", severity: "warning" },
        { text: "Recommendation: Stay hydrated.", severity: "info" },
        { text: "Seek medical advice if temperature >39°C.", severity: "danger" }
    ],

    "loss of taste": [
        { text: "Possible causes: cold, flu, or COVID-19.", severity: "warning" },
        { text: "Recommendation: Rest and monitor.", severity: "info" },
        { text: "Consult a doctor if persistent.", severity: "danger" }
    ],

    "loss of smell": [
        { text: "Possible causes: viral infection or nasal congestion.", severity: "warning" },
        { text: "Recommendation: Rest and monitor.", severity: "info" },
        { text: "Consult a doctor if persistent.", severity: "danger" }
    ],

    "skin irritation": [
        { text: "Possible causes: allergy, eczema, or infection.", severity: "warning" },
        { text: "Recommendation: Keep area clean and moisturized.", severity: "info" },
        { text: "See a doctor if spreading or severe.", severity: "danger" }
    ],

    "sweaty palms": [
        { text: "Possible causes: anxiety or hormonal changes.", severity: "warning" },
        { text: "Recommendation: Relaxation techniques.", severity: "info" },
        { text: "Consult a doctor if severe or persistent.", severity: "danger" }
    ],

    "weight loss": [
        { text: "Possible causes: illness, diet, or stress.", severity: "warning" },
        { text: "Recommendation: Maintain healthy diet.", severity: "info" },
        { text: "Consult a doctor if unexplained.", severity: "danger" }
    ],

    "weight gain": [
        { text: "Possible causes: diet, hormonal changes, or inactivity.", severity: "warning" },
        { text: "Recommendation: Exercise and balanced diet.", severity: "info" },
        { text: "Consult a doctor if rapid or unexplained.", severity: "danger" }
    ],

    "nosebleed": [
        { text: "Possible causes: dry air, injury, or high blood pressure.", severity: "warning" },
        { text: "Recommendation: Pinch nose and lean forward.", severity: "info" },
        { text: "Seek medical advice if frequent or severe.", severity: "danger" }
    ],

    "hair loss": [
        { text: "Possible causes: stress, hormonal changes, or genetics.", severity: "warning" },
        { text: "Recommendation: Maintain healthy diet.", severity: "info" },
        { text: "Consult a doctor if sudden or patchy.", severity: "danger" }
    ],

    "frequent urination": [
        { text: "Possible causes: diabetes, infection, or high fluid intake.", severity: "warning" },
        { text: "Recommendation: Monitor intake and symptoms.", severity: "info" },
        { text: "Consult a doctor if persistent.", severity: "danger" }
    ],

    "thirst": [
        { text: "Possible causes: dehydration or high sugar intake.", severity: "warning" },
        { text: "Recommendation: Drink water regularly.", severity: "info" },
        { text: "Seek medical advice if excessive.", severity: "danger" }
    ],

    "frequent headaches": [
        { text: "Possible causes: stress, dehydration, or migraine.", severity: "warning" },
        { text: "Recommendation: Drink water and rest.", severity: "info" },
        { text: "Consult a doctor if persistent.", severity: "danger" }
    ],

    "irritability": [
        { text: "Possible causes: lack of sleep, stress, or hormonal changes.", severity: "warning" },
        { text: "Recommendation: Rest and relaxation techniques.", severity: "info" },
        { text: "Consult a doctor if persistent.", severity: "danger" }
    ],

    "anxiety": [
        { text: "Possible causes: stress or mental health issues.", severity: "warning" },
        { text: "Recommendation: Relaxation and breathing exercises.", severity: "info" },
        { text: "Seek medical or therapy support if severe.", severity: "danger" }
    ],

    "depression": [
        { text: "Possible causes: mental health disorder or stress.", severity: "warning" },
        { text: "Recommendation: Seek support from friends/family.", severity: "info" },
        { text: "Consult a mental health professional.", severity: "danger" }
    ],

    "confusion": [
        { text: "Possible causes: dehydration, infection, or neurological issues.", severity: "warning" },
        { text: "Recommendation: Rest and monitor.", severity: "info" },
        { text: "Seek immediate medical attention if sudden.", severity: "danger" }
    ],

    "memory problems": [
        { text: "Possible causes: stress, fatigue, or neurological issues.", severity: "warning" },
        { text: "Recommendation: Rest and mental exercises.", severity: "info" },
        { text: "Consult a doctor if persistent.", severity: "danger" }
    ],

    "tingling sensation": [
        { text: "Possible causes: nerve compression, poor circulation, or deficiency.", severity: "warning" },
        { text: "Recommendation: Gentle movement and stretching.", severity: "info" },
        { text: "Consult a doctor if persistent.", severity: "danger" }
    ],

    "numbness": [
        { text: "Possible causes: nerve issue or circulation problem.", severity: "warning" },
        { text: "Recommendation: Rest and monitor.", severity: "info" },
        { text: "Seek medical advice if sudden or severe.", severity: "danger" }
    ],

    "paleness": [
        { text: "Possible causes: anemia, low blood pressure, or illness.", severity: "warning" },
        { text: "Recommendation: Eat iron-rich foods.", severity: "info" },
        { text: "Consult a doctor if persistent.", severity: "danger" }
    ],

    "bruising easily": [
        { text: "Possible causes: injury, vitamin deficiency, or blood disorder.", severity: "warning" },
        { text: "Recommendation: Monitor and avoid trauma.", severity: "info" },
        { text: "Consult a doctor if frequent or unexplained.", severity: "danger" }
    ],

    "throat tightness": [
        { text: "Possible causes: anxiety, allergy, or infection.", severity: "warning" },
        { text: "Recommendation: Rest and monitor.", severity: "info" },
        { text: "Seek immediate medical attention if severe.", severity: "danger" }
    ],

    "swollen lymph nodes": [
        { text: "Possible causes: infection or immune response.", severity: "warning" },
        { text: "Recommendation: Rest and monitor.", severity: "info" },
        { text: "Consult a doctor if persistent or painful.", severity: "danger" }
    ],
};