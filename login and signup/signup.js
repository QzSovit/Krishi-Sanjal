
document.getElementById("userTypeSelect").addEventListener("change", function () {
  const farmerFields = document.getElementById("farmerFields");
  if (this.value === "farmer") {
    farmerFields.style.display = "block";
  } else {
    farmerFields.style.display = "none";
  }
});