document.addEventListener("DOMContentLoaded", function() {
    // Check local storage for selected topics
    const selectedTopics = JSON.parse(localStorage.getItem("selectedTopics")) || [];

    // Display selected topics
    const selectedTopicsContainer = document.getElementById("selectedTopics");
    selectedTopics.forEach(topic => {
        const topicElement = document.createElement("p");
        topicElement.textContent = topic;
        selectedTopicsContainer.appendChild(topicElement);

        // create hidden container for each topic
        const topicContentContainer = document.getElementById("topicContentContainer");
        const topicContent = document.createElement("div");
        topicContent.id = `${topic}Content`; // Use topic name as the content ID
        topicContent.style.display = "none"; // Hide content by default

        // topic content
        switch (topic) {
            case "Finances":
                topicContent.innerHTML = "Finance links";
                break;
            case "Housing":
                topicContent.innerHTML = "Housing links";
                break;
            case "Food":
                topicContent.innerHTML = "Food links";
                break;
            case "Work":
                topicContent.innerHTML = "Work links";
                break;
            case "Health":
                topicContent.innerHTML = "Health links";
                break;
            case "Education":
                topicContent.innerHTML = "Education links";
                break;
            case "Emergency Services":
                topicContent.innerHTML = "Emergency Services links";
                break;
            // Add more cases as needed for other topics
        }

        topicContentContainer.appendChild(topicContent);
    });

    // Show content for selected topics
    selectedTopics.forEach(topic => {
        const topicContent = document.getElementById(`${topic}Content`);
        if (topicContent) {
            topicContent.style.display = "block"; // Show the content
        }
    });
});