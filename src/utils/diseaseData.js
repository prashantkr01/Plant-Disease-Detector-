const diseaseData = {
  "Apple___Apple_scab": {
    description: "A common fungal disease that causes dark, scabby lesions on leaves and fruit.",
    severity: "Medium",
    treatment: {
      recommended: ["Remove and destroy fallen leaves", "Apply fungicides during early spring"],
      pesticides: ["Captan", "Mancozeb", "Sulfur"],
      preventive: ["Plant resistant varieties", "Improve air circulation through pruning"]
    }
  },
  "Apple___Black_rot": {
    description: "A fungal disease causing dark spots on leaves, cankers on limbs, and rot on fruit.",
    severity: "High",
    treatment: {
      recommended: ["Prune out dead wood and cankers", "Remove mummified fruit"],
      pesticides: ["Copper-based fungicides", "Captan"],
      preventive: ["Proper orchard sanitation", "Minimize bird damage to fruit"]
    }
  },
  "Corn_(maize)___Common_rust": {
    description: "Characterized by reddish-brown pustules on both upper and lower leaf surfaces.",
    severity: "Low",
    treatment: {
      recommended: ["None usually required for backyard gardens", "Monitor crop regularly"],
      pesticides: ["Strobilurins", "Triazoles (if severe)"],
      preventive: ["Plant resistant hybrids", "Early planting to avoid peak rust season"]
    }
  },
  "Tomato___Early_blight": {
    description: "Produces dark spots with concentric rings on lower leaves first.",
    severity: "Medium",
    treatment: {
      recommended: ["Remove infected lower leaves", "Mulch around plants to prevent soil splash"],
      pesticides: ["Chlorothalonil", "Copper Fungicide"],
      preventive: ["Crop rotation", "Use drip irrigation instead of overhead watering"]
    }
  },
  "Tomato___Late_blight": {
    description: "A fast-moving and destructive disease that causes dark, water-soaked patches on leaves.",
    severity: "High",
    treatment: {
      recommended: ["Remove and destroy entire plant immediately", "Do not compost infected material"],
      pesticides: ["Copper-based fungicides (mostly preventative)"],
      preventive: ["Avoid planting where potatoes were grown", "Ensure good spacing"]
    }
  },
  "Healthy": {
    description: "The plant appears to be in good health with no visible signs of disease.",
    severity: "Low",
    treatment: {
      recommended: ["Continue regular watering and fertilization"],
      pesticides: ["None needed"],
      preventive: ["Maintain good soil nutrition", "Monitor regularly"]
    }
  }
};

export default diseaseData;
