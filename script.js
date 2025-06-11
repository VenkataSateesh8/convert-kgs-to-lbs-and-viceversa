function convertCmToInch() {
  const cm = parseFloat(document.getElementById("cm").value);
  const inch = cm * 0.393701;
  document.getElementById("inchOutput").innerText = isNaN(inch) ? 0 : inch.toFixed(2);
}