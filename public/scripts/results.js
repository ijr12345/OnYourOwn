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
    <img src="../images/annie-spratt-CV3nkG7XIwg-unsplash.jpg" alt="girl on computer" class="survey-article-image">
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
    <img src="../images/annie-spratt-CV3nkG7XIwg-unsplash.jpg" alt="girl on computer" class="survey-article-image">
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
                topicContent.innerHTML = `
<div class="survey-articles">
    <div class="survey-article">
    <img src="../images/ian-macdonald-W8z6aiwfi1E-unsplash.jpg" alt="house" class="survey-article-image">
        <div class="survey-article-content">
            <div class="survey-article-title" id="article-1">
                What to do if you don't have a cosigner
            </div>
            <div class="survey-article-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum...
            </div>
        </div>
        <a href="../pages/housing.html#article-2" class="articleButton">&#8594;</a>
    </div>

    <div class="survey-article">
    <img src="../images/ian-macdonald-W8z6aiwfi1E-unsplash.jpg" alt="house" class="survey-article-image">
        <div class="survey-article-content">
            <div class="survey-article-title" id="article-2">
                Finding stable housing
            </div>
            <div class="survey-article-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum...
            </div>
        </div>
        <a href="../pages/financial.html#article-2" class="articleButton">&#8594;</a>
    </div>

    <div class="survey-article">
    <img src="../images/ian-macdonald-W8z6aiwfi1E-unsplash.jpg" alt="house" class="survey-article-image">
        <div class="survey-article-content">
            <div class="survey-article-title" id="article-3">
                Finding temporary housing
            </div>
            <div class="survey-article-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum...
            </div>
        </div>
        <a href="../pages/financial.html#article-3" class="articleButton">&#8594;</a>
    </div>
</div>
                `;
                break;
            case "Food":
                topicContent.innerHTML = `
<div class="survey-articles">
    <div class="survey-article">
    <img src="../images/ella-olsson-KPDbRyFOTnE-unsplash.jpg" alt="vegetables being prepared" class="survey-article-image">
        <div class="survey-article-content">
            <div class="survey-article-title" id="article-1">
                Healthy Eating
            </div>
            <div class="survey-article-text">
                The key to healthy and enjoyable eating without very much money is to buy what you can cheaply and prepare it in as many different ways as you can. The precise items used from person to person will vary, but the following are some helpful guidelines...
            </div>
        </div>
        <a href="../pages/food.html#article-1" class="articleButton">&#8594;</a>
    </div>

    <div class="survey-article">
    <img src="../images/heather-mckean-1I9bMlIAIBM-unsplash.jpg" alt="jars of food" class="survey-article-image">
        <div class="survey-article-content">
            <div class="survey-article-title" id="article-2">
                Nonperishable foods
            </div>
            <div class="survey-article-text">
            A tried and true method for making your dollar go farther while staying healthy is to stock plenty of non-perishable items. Broadly, these items fall into a few categories...            </div>
        </div>
        <a href="../pages/food.html#article-2" class="articleButton">&#8594;</a>
    </div>
</div>
                `;
                break;
            case "Work":
                topicContent.innerHTML = `
<div class="survey-articles">
    <div class="survey-article">
    <img src="../images/resume-genius-9si2noVCVH8-unsplash.jpg" alt="Resume" class="survey-article-image">
        <div class="survey-article-content">
            <div class="survey-article-title" id="article-1">
                How to build your resume
            </div>
            <div class="survey-article-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum...
            </div>
        </div>
        <a href="../pages/work.html#article-1" class="articleButton">&#8594;</a>
    </div>

    <div class="survey-article">
    <img src="../images/eric-prouzet-B3UFXwcVbc4-unsplash.jpg" alt="Now hiring sign" class="survey-article-image">
        <div class="survey-article-content">
            <div class="survey-article-title" id="article-2">
                Everything to know about applying to jobs
            </div>
            <div class="survey-article-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum...
            </div>
        </div>
        <a href="../pages/food.html#article-2" class="articleButton">&#8594;</a>
    </div>
</div>
                `;
                break;
            case "Health":
                topicContent.innerHTML = `
<div class="survey-articles">
    <div class="survey-article">
    <img src="../images/hush-naidoo-jade-photography-yo01Z-9HQAw-unsplash.jpg" alt="Stethoscope" class="survey-article-image">
        <div class="survey-article-content">
            <div class="survey-article-title" id="article-1">
                Get Insurance
            </div>
            <div class="survey-article-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum...
            </div>
        </div>
        <a href="../pages/health.html#article-2" class="articleButton">&#8594;</a>
    </div>

    <div class="survey-article">
    <img src="../images/hush-naidoo-jade-photography-yo01Z-9HQAw-unsplash.jpg" alt="Stethoscope" class="survey-article-image">
        <div class="survey-article-content">
            <div class="survey-article-title" id="article-2">
                List of Suggested Annual Checkups
            </div>
            <div class="survey-article-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum...
            </div>
        </div>
        <a href="../pages/health.html#article-2" class="articleButton">&#8594;</a>
    </div>
</div>
                `;
                break;
            case "Education":
                topicContent.innerHTML = `
<div class="survey-articles">
    <div class="survey-article">
    <img src="../images/element5-digital-OyCl7Y4y0Bk-unsplash.jpg" alt="school supplies" class="survey-article-image">
        <div class="survey-article-content">
            <div class="survey-article-title" id="article-1">
                Applying to Colleges and Universities
            </div>
            <div class="survey-article-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum...
            </div>
        </div>
        <a href="../pages/education.html#article-2" class="articleButton">&#8594;</a>
    </div>

    <div class="survey-article">
    <img src="../images/element5-digital-OyCl7Y4y0Bk-unsplash.jpg" alt="school supplies" class="survey-article-image">
        <div class="survey-article-content">
            <div class="survey-article-title" id="article-2">
                Get your GED
            </div>
            <div class="survey-article-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum...
            </div>
        </div>
        <a href="../pages/education.html#article-2" class="articleButton">&#8594;</a>
    </div>
</div>
                `;
                break;
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