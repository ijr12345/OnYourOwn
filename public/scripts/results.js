document.addEventListener("DOMContentLoaded", function() {
    // Check local storage for selected topics
    const selectedTopics = JSON.parse(localStorage.getItem("selectedTopics")) || [];
  
    // Display selected topics
    const selectedTopicsContainer = document.getElementById("selectedTopics");
    selectedTopics.forEach(topic => {
      const topicElement = document.createElement("p");
      topicElement.textContent = topic;
      selectedTopicsContainer.appendChild(topicElement);
    });
  });