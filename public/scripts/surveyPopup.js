document.getElementById("surveyButton").addEventListener("click", function() {
    document.getElementById("overlay").style.display = "block";
    console.log('Survey opened');
});
  
document.getElementById("submitSurvey").addEventListener("click", function() {
  // array to hold selected topics
  const selectedTopics = [];

  // fill topics based on checkbox
  const checkboxes = document.querySelectorAll(".switch input[type='checkbox']");
  checkboxes.forEach(checkbox => {
    if (checkbox.checked) {
      // Get the closest label and then find the adjacent <p> element
      const topicLabel = checkbox.closest('label').nextElementSibling; 
      if (topicLabel) {
        const selectedTopic = topicLabel.textContent.trim();
        selectedTopics.push(selectedTopic);
        console.log(`Selected Topic: ${selectedTopic}`);
      }
    }
  });

  console.log("Selected Topics Array:", selectedTopics);
  // save selected topics
  localStorage.setItem("selectedTopics", JSON.stringify(selectedTopics));

  // close survey overlay
  document.getElementById("overlay").style.display = "none";

  // go to results page
  window.location.href = "pages/results.html";
});

document.getElementById("closeSurvey").addEventListener("click", function() {
  document.getElementById("overlay").style.display = "none";
});
