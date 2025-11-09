const medicines = {
  paracetamol: {
    name: "Paracetamol",
    use: "Used to reduce fever and relieve mild to moderate pain.",
    dosage: "500mg every 4-6 hours as needed. Do not exceed 4g per day.",
    sideEffects: "Nausea, allergic reaction, or liver damage (rare with overdose)."
  },
  amoxicillin: {
    name: "Amoxicillin",
    use: "Antibiotic used to treat bacterial infections.",
    dosage: "250-500mg every 8 hours as prescribed by a doctor.",
    sideEffects: "Diarrhea, nausea, rash, or allergic reactions."
  },
  cetirizine: {
    name: "Cetirizine",
    use: "Used to relieve allergy symptoms like runny nose or itching.",
    dosage: "10mg once daily.",
    sideEffects: "Drowsiness, dry mouth, mild fatigue."
  },
  ibuprofen: {
    name: "Ibuprofen",
    use: "Pain reliever and anti-inflammatory medicine.",
    dosage: "200–400mg every 6 hours as needed.",
    sideEffects: "Stomach pain, heartburn, nausea."
  }
};

function searchMedicine() {
  const input = document.getElementById("searchInput").value.toLowerCase();
  const resultDiv = document.getElementById("result");

  if (medicines[input]) {
    const med = medicines[input];
    resultDiv.innerHTML = `
      <h2>${med.name}</h2>
      <p><strong>Use:</strong> ${med.use}</p>
      <p><strong>Dosage:</strong> ${med.dosage}</p>
      <p><strong>Side Effects:</strong> ${med.sideEffects}</p>
    `;
  } else {
    resultDiv.innerHTML = `<p>No information found for "${input}". Please check spelling or try another medicine.</p>`;
  }
}
