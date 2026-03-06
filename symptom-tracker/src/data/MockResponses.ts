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

    "difficulty swallowing": [
        { text: "Possible causes: infection, inflammation, or neurological issues.", severity: "warning" },
        { text: "Recommendation: Eat soft foods and stay hydrated.", severity: "info" },
        { text: "Seek medical attention if severe or persistent.", severity: "danger" }
    ],

    "swelling": [
        { text: "Possible causes: injury, infection, or inflammation.", severity: "warning" },
        { text: "Recommendation: Rest and apply cold compress.", severity: "info" },
        { text: "Consult a doctor if severe or persistent.", severity: "danger" }
    ],

    "sensitivity to light": [
        { text: "Possible causes: migraine, eye strain, or infection.", severity: "warning" },
        { text: "Recommendation: Rest in a dark room.", severity: "info" },
        { text: "Consult a doctor if persistent.", severity: "danger" }
    ],

    "sensitivity to sound": [
        { text: "Possible causes: migraine, ear infection, or neurological issues.", severity: "warning" },
        { text: "Recommendation: Rest in a quiet environment.", severity: "info" },
        { text: "Consult a doctor if persistent.", severity: "danger" }
    ],

    "tremors": [
        { text: "Possible causes: anxiety, neurological issues, or medication side effect.", severity: "warning" },
        { text: "Recommendation: Rest and monitor.", severity: "info" },
        { text: "Consult a doctor if persistent or severe.", severity: "danger" }
    ],

    "difficulty concentrating": [
        { text: "Possible causes: stress, fatigue, or underlying health issues.", severity: "warning" },
        { text: "Recommendation: Take breaks and practice mindfulness.", severity: "info" },
        { text: "Consult a doctor if persistent.", severity: "danger" }
    ],

    "mood swings": [
        { text: "Possible causes: hormonal changes, stress, or mental health issues.", severity: "warning" },
        { text: "Recommendation: Practice relaxation techniques.", severity: "info" },
        { text: "Consult a doctor if severe or persistent.", severity: "danger" }
    ],

    "restlessness": [
        { text: "Possible causes: anxiety, caffeine, or medication side effect.", severity: "warning" },
        { text: "Recommendation: Practice relaxation techniques.", severity: "info" },
        { text: "Consult a doctor if severe or persistent.", severity: "danger" }
    ],

    "excessive sweating": [
        { text: "Possible causes: anxiety, hormonal changes, or medical conditions.", severity: "warning" },
        { text: "Recommendation: Stay hydrated and wear breathable clothing.", severity: "info" },
        { text: "Consult a doctor if severe or persistent.", severity: "danger" }
    ],

    "difficulty breathing": [
        { text: "Possible causes: asthma, allergy, or infection.", severity: "warning" },
        { text: "Recommendation: Rest and monitor.", severity: "info" },
        { text: "Seek immediate medical attention if severe.", severity: "danger" }
    ],

    "eye pain": [
        { text: "Possible causes: eye strain, infection, or injury.", severity: "warning" },
        { text: "Recommendation: Rest eyes and avoid rubbing.", severity: "info" },
        { text: "Consult a doctor if severe or persistent.", severity: "danger" }
    ],

    "ear ringing": [
        { text: "Possible causes: ear infection, exposure to loud noise, or medication side effect.", severity: "warning" },
        { text: "Recommendation: Avoid loud noises and rest.", severity: "info" },
        { text: "Consult a doctor if persistent or severe.", severity: "danger" }
    ],

    "difficulty urinating": [
        { text: "Possible causes: urinary tract infection, prostate issues, or neurological problems.", severity: "warning" },
        { text: "Recommendation: Stay hydrated and monitor symptoms.", severity: "info" },
        { text: "Seek medical attention if severe or persistent.", severity: "danger" }
    ],

    "blood in urine": [
        { text: "Possible causes: urinary tract infection, kidney stones, or injury.", severity: "warning" },
        { text: "Recommendation: Stay hydrated and monitor symptoms.", severity: "info" },
        { text: "Seek medical attention if persistent or severe.", severity: "danger" }
    ],

    "blood in stool": [
        { text: "Possible causes: hemorrhoids, gastrointestinal bleeding, or infection.", severity: "warning" },
        { text: "Recommendation: Monitor symptoms and maintain a healthy diet.", severity: "info" },
        { text: "Seek medical attention if persistent or severe.", severity: "danger" }
    ],

    "abnormal bleeding": [
        { text: "Possible causes: hormonal imbalance, blood disorder, or injury.", severity: "warning" },
        { text: "Recommendation: Monitor symptoms and avoid trauma.", severity: "info" },
        { text: "Consult a doctor if persistent or severe.", severity: "danger" }
    ],

    "arm or leg weakness": [
        { text: "Possible causes: stroke, nerve compression, or neurological issues.", severity: "warning" },
        { text: "Recommendation: Rest and monitor symptoms.", severity: "info" },
        { text: "Seek immediate medical attention if sudden or severe.", severity: "danger" }
    ],

    "seizures": [
        { text: "Possible causes: epilepsy, brain injury, or infection.", severity: "warning" },
        { text: "Recommendation: Ensure safety and monitor symptoms.", severity: "info" },
        { text: "Seek immediate medical attention if seizures occur.", severity: "danger" }
    ],

    "loss of consciousness": [
        { text: "Possible causes: fainting, seizure, or medical emergency.", severity: "warning" },
        { text: "Recommendation: Ensure safety and seek medical attention.", severity: "info" },
        { text: "Seek immediate medical attention if loss of consciousness occurs.", severity: "danger" }
    ],

    "suicidal thoughts": [
        { text: "Possible causes: mental health disorder or severe stress.", severity: "warning" },
        { text: "Recommendation: Seek support from friends/family.", severity: "info" },
        { text: "Consult a mental health professional immediately.", severity: "danger" }
    ],

    "self-harm thoughts": [
        { text: "Possible causes: mental health disorder or severe stress.", severity: "warning" },
        { text: "Recommendation: Seek support from friends/family.", severity: "info" },
        { text: "Consult a mental health professional immediately.", severity: "danger" }
    ],

    "hallucinations": [
        { text: "Possible causes: mental health disorder, substance use, or neurological issues.", severity: "warning" },
        { text: "Recommendation: Seek support from friends/family.", severity: "info" },
        { text: "Consult a doctor or mental health professional immediately.", severity: "danger" }
    ],

    "delusions": [
        { text: "Possible causes: mental health disorder or neurological issues.", severity: "warning" },
        { text: "Recommendation: Seek support from friends/family.", severity: "info" },
        { text: "Consult a doctor or mental health professional immediately.", severity: "danger" }
    ],

    "paranoia": [
        { text: "Possible causes: mental health disorder or substance use.", severity: "warning" },
        { text: "Recommendation: Seek support from friends/family.", severity: "info" },
        { text: "Consult a doctor or mental health professional immediately.", severity: "danger" }
    ],

    "foot pain": [
        { text: "Possible causes: injury, plantar fasciitis, or arthritis.", severity: "warning" },
        { text: "Recommendation: Rest and apply cold compress.", severity: "info" },
        { text: "Consult a doctor if severe or persistent.", severity: "danger" }
    ],

    "hand pain": [
        { text: "Possible causes: injury, carpal tunnel syndrome, or arthritis.", severity: "warning" },
        { text: "Recommendation: Rest and apply cold compress.", severity: "info" },
        { text: "Consult a doctor if severe or persistent.", severity: "danger" }
    ],
    
    "foot swelling": [
        { text: "Possible causes: injury, infection, or circulation issues.", severity: "warning" },
        { text: "Recommendation: Rest and elevate foot.", severity: "info" },
        { text: "Consult a doctor if severe or persistent.", severity: "danger" }
    ],

    "hand swelling": [
        { text: "Possible causes: injury, infection, or arthritis.", severity: "warning" },
        { text: "Recommendation: Rest and apply cold compress.", severity: "info" },
        { text: "Consult a doctor if severe or persistent.", severity: "danger" }
    ],

    "foot numbness": [
        { text: "Possible causes: nerve compression, poor circulation, or diabetes.", severity: "warning" },
        { text: "Recommendation: Rest and monitor symptoms.", severity: "info" },
        { text: "Consult a doctor if persistent or severe.", severity: "danger" }
    ],

    "hand numbness": [
        { text: "Possible causes: nerve compression, carpal tunnel syndrome, or diabetes.", severity: "warning" },
        { text: "Recommendation: Rest and monitor symptoms.", severity: "info" },
        { text: "Consult a doctor if persistent or severe.", severity: "danger" }
    ],

    "stomach cramps": [
        { text: "Possible causes: indigestion, menstrual cramps, or infection.", severity: "warning" },
        { text: "Recommendation: Rest and apply heat.", severity: "info" },
        { text: "Seek medical attention if severe or persistent.", severity: "danger" }
    ],

    "leg cramps": [
        { text: "Possible causes: dehydration, electrolyte imbalance, or overuse.", severity: "warning" },
        { text: "Recommendation: Stretch and stay hydrated.", severity: "info" },
        { text: "Consult a doctor if frequent or severe.", severity: "danger" }
    ],

    "arm cramps": [
        { text: "Possible causes: dehydration, electrolyte imbalance, or overuse.", severity: "warning" },
        { text: "Recommendation: Stretch and stay hydrated.", severity: "info" },
        { text: "Consult a doctor if frequent or severe.", severity: "danger" }
    ],

    "foot cramps": [
        { text: "Possible causes: dehydration, electrolyte imbalance, or overuse.", severity: "warning" },
        { text: "Recommendation: Stretch and stay hydrated.", severity: "info" },
        { text: "Consult a doctor if frequent or severe.", severity: "danger" }
    ],

    "hand cramps": [
        { text: "Possible causes: dehydration, electrolyte imbalance, or overuse.", severity: "warning" },
        { text: "Recommendation: Stretch and stay hydrated.", severity: "info" },
        { text: "Consult a doctor if frequent or severe.", severity: "danger" }
    ],

    "back cramps": [
        { text: "Possible causes: muscle strain, dehydration, or poor posture.", severity: "warning" },
        { text: "Recommendation: Rest and apply heat.", severity: "info" },
        { text: "Consult a doctor if severe or persistent.", severity: "danger" }
    ],

    "neck cramps": [
        { text: "Possible causes: muscle strain, dehydration, or poor posture.", severity: "warning" },
        { text: "Recommendation: Rest and apply heat.", severity: "info" },
        { text: "Consult a doctor if severe or persistent.", severity: "danger" }
    ],

    "neck pain": [
        { text: "Possible causes: muscle strain, poor posture, or injury.", severity: "warning" },
        { text: "Recommendation: Rest and apply heat.", severity: "info" },
        { text: "Consult a doctor if severe or persistent.", severity: "danger" }
    ],

    "shoulder pain": [
        { text: "Possible causes: muscle strain, rotator cuff injury, or arthritis.", severity: "warning" },
        { text: "Recommendation: Rest and apply cold compress.", severity: "info" },
        { text: "Consult a doctor if severe or persistent.", severity: "danger" }
    ],

    "hip pain": [
        { text: "Possible causes: muscle strain, arthritis, or bursitis.", severity: "warning" },
        { text: "Recommendation: Rest and apply cold compress.", severity: "info" },
        { text: "Consult a doctor if severe or persistent.", severity: "danger" }
    ],

    "knee pain": [
        { text: "Possible causes: injury, arthritis, or overuse.", severity: "warning" },
        { text: "Recommendation: Rest and apply cold compress.", severity: "info" },
        { text: "Consult a doctor if severe or persistent.", severity: "danger" }
    ],

    "ankle pain": [
        { text: "Possible causes: sprain, arthritis, or overuse.", severity: "warning" },
        { text: "Recommendation: Rest and apply cold compress.", severity: "info" },
        { text: "Consult a doctor if severe or persistent.", severity: "danger" }
    ],

    "wrist pain": [
        { text: "Possible causes: sprain, carpal tunnel syndrome, or arthritis.", severity: "warning" },
        { text: "Recommendation: Rest and apply cold compress.", severity: "info" },
        { text: "Consult a doctor if severe or persistent.", severity: "danger" }
    ],

    "elbow pain": [
        { text: "Possible causes: tennis elbow, golfer's elbow, or arthritis.", severity: "warning" },
        { text: "Recommendation: Rest and apply cold compress.", severity: "info" },
        { text: "Consult a doctor if severe or persistent.", severity: "danger" }
    ],

    "finger pain": [
        { text: "Possible causes: injury, arthritis, or overuse.", severity: "warning" },
        { text: "Recommendation: Rest and apply cold compress.", severity: "info" },
        { text: "Consult a doctor if severe or persistent.", severity: "danger" }
    ],

    "toe pain": [
        { text: "Possible causes: injury, gout, or arthritis.", severity: "warning" },
        { text: "Recommendation: Rest and apply cold compress.", severity: "info" },
        { text: "Consult a doctor if severe or persistent.", severity: "danger" }
    ],

    "itchy skin": [
        { text: "Possible causes: allergy, dry skin, or infection.", severity: "warning" },
        { text: "Recommendation: Keep skin moisturized.", severity: "info" },
        { text: "See a doctor if spreading or severe.", severity: "danger" }
    ],

    stiffness: [
        { text: "Possible causes: arthritis, injury, or overuse.", severity: "warning" },
        { text: "Recommendation: Gentle stretching and rest.", severity: "info" },
        { text: "Consult a doctor if severe or persistent.", severity: "danger" }
    ],

    "high blood pressure": [
        { text: "Possible causes: stress, diet, or genetics.", severity: "warning" },
        { text: "Recommendation: Maintain a healthy lifestyle.", severity: "info" },
        { text: "Consult a doctor for management.", severity: "danger" }
    ],

    "low blood pressure": [
        { text: "Possible causes: dehydration, medication, or heart issues.", severity: "warning" },
        { text: "Recommendation: Stay hydrated and monitor symptoms.", severity: "info" },
        { text: "Seek medical advice if persistent or severe.", severity: "danger" }
    ],

    indigestion: [
        { text: "Possible causes: overeating, spicy foods, or stress.", severity: "warning" },
        { text: "Recommendation: Eat smaller meals and avoid triggers.", severity: "info" },
        { text: "Consult a doctor if persistent or severe.", severity: "danger" }
    ],

    sneezing: [
        { text: "Possible causes: allergies, cold, or flu.", severity: "warning" },
        { text: "Recommendation: Stay hydrated and rest.", severity: "info" },
        { text: "Consult a doctor if symptoms worsen.", severity: "danger" }
    ],

    wheezing: [
        { text: "Possible causes: asthma, allergy, or infection.", severity: "warning" },
        { text: "Recommendation: Rest and monitor symptoms.", severity: "info" },
        { text: "Seek immediate medical attention if severe.", severity: "danger" }
    ],

    "sinus congestion": [
        { text: "Possible causes: cold, flu, or allergies.", severity: "warning" },
        { text: "Recommendation: Use saline nasal spray and rest.", severity: "info" },
        { text: "Consult a doctor if symptoms worsen.", severity: "danger" }
    ],

    fainting: [
        { text: "Possible causes: dehydration, low blood pressure, or medical emergency.", severity: "warning" },
        { text: "Recommendation: Ensure safety and seek medical attention.", severity: "info" },
        { text: "Seek immediate medical attention if fainting occurs.", severity: "danger" }
    ],

    "panic attack": [
        { text: "Possible causes: anxiety, stress, or mental health issues.", severity: "warning" },
        { text: "Recommendation: Practice deep breathing and relaxation techniques.", severity: "info" },
        { text: "Consult a mental health professional if severe or persistent.", severity: "danger" }
    ],
};