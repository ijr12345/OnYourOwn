document.getElementById("surveyButton").addEventListener("click", function() {
    document.getElementById("overlay").style.display = "block";
});
  
document.getElementById("submitSurvey").addEventListener("click", function() {
  //alert("Survey submitted.");
  document.getElementById("overlay").style.display = "none";
  window.location.href = "pages/results.html";
});

document.getElementById("closeSurvey").addEventListener("click", function() {
  document.getElementById("overlay").style.display = "none";
});