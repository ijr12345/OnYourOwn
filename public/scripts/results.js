document.addEventListener("DOMContentLoaded", function() {
    // Check local storage for selected topics
    const selectedTopics = JSON.parse(localStorage.getItem("selectedTopics")) || [];

    // Display selected topics
    const selectedTopicsContainer = document.getElementById("selectedTopics");
    selectedTopics.forEach(topic => {
        const topicElement = document.createElement("p");
        topicElement.textContent = topic;
        // selectedTopicsContainer.appendChild(topicElement);

        // create hidden container for each topic
        const topicContentContainer = document.getElementById("topicContentContainer");
        const topicContent = document.createElement("div");
        topicContent.id = `${topic}Content`; // Use topic name as the content ID
        topicContent.style.display = "none"; // Hide content by default

        // topic content
        switch (topic) {
            case "Finances":
                topicContent.innerHTML = `
<div class="survey-articles">
    <div class="survey-article">
    <img src="../images/heather-mckean-1I9bMlIAIBM-unsplash.jpg" alt="girl on computer" class="survey-article-image">
        <div class="survey-article-content">
            <div class="survey-article-title" id="article-1">
                Establishing Your Financial Independence
            </div>
            <div class="survey-article-text">
                Once you've established a steady source of income, the next step is to find a safe place to house it. A larger financial institution will do and they are often more convenient, but many swear by credit unions. Look around your area to see what's right for you, then open an account...
            </div>
        </div>
        <a href="../pages/financial.html#article-1" class="articleButton">&#8594;</a>
    </div>

    <div class="survey-article">
    <img src="../images/heather-mckean-1I9bMlIAIBM-unsplash.jpg" alt="girl on computer" class="survey-article-image">
        <div class="survey-article-content">
            <div class="survey-article-title" id="article-2">
                Establishing Credit
            </div>
            <div class="survey-article-text">
                If you've got steady income and a reliable means of online banking, it's time to build some credit. While credit can often seem like a frivolous thing for someone without vast amounts of capital, there is one very tangible reason to have it: housing. Without good credit, you'll need a cosigner on any lease you attempt to sign, but if you don't have one of those, you'll need to be a host unto yourself...
            </div>
        </div>
        <a href="../pages/financial.html#article-2" class="articleButton">&#8594;</a>
    </div>
</div>
                `;
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