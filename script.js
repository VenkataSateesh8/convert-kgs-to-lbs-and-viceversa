function convertKgToLbs() {
  const kg = parseFloat(document.getElementById("kg").value);
  const lbs = kg * 2.20462;
  document.getElementById("lbsOutput").innerText = isNaN(lbs) ? 0 : lbs.toFixed(2);
}

function convertLbsToKg() {
  const lbs = parseFloat(document.getElementById("lbs").value);
  const kg = lbs / 2.20462;
  document.getElementById("kgOutput").innerText = isNaN(kg) ? 0 : kg.toFixed(2);
}

function convertCmToInch() {
  const cm = parseFloat(document.getElementById("cm").value);
  const inch = cm * 0.393701;
  document.getElementById("inchOutput").innerText = isNaN(inch) ? 0 : inch.toFixed(2);
}

function convertInchToCm() {
  const inch = parseFloat(document.getElementById("inch").value);
  const cm = inch / 0.393701;
  document.getElementById("cmOutput").innerText = isNaN(cm) ? 0 : cm.toFixed(2);
}
