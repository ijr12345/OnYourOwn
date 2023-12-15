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
                Finding a Place to Crash
            </div>
            <div class="survey-article-text">
                If you just need somewhere to spend a night or two, it’s often as simple as finding friends or family who would be willing to help. These arrangements have the potential to grow and become more permanent, especially if you and whoever you’re staying with are close, but it’s important to remember that if all they offered was a place to crash, that's all that they offered. These are ideal in situations of crisis while you work toward more permanent accommodations...
            </div>
        </div>
        <a href="../pages/housing.html#article-2" class="articleButton">&#8594;</a>
    </div>

    <div class="survey-article">
    <img src="../images/ian-macdonald-W8z6aiwfi1E-unsplash.jpg" alt="house" class="survey-article-image">
        <div class="survey-article-content">
            <div class="survey-article-title" id="article-2">
                Finding a Room to Rent
            </div>
            <div class="survey-article-text">
            Often, the quickest way to find a place to live is to find others looking for someone to live with them. If you look online (facebook, craigslist, etc.,), it shouldn't take long to find people advertising a room to rent or a lease to take over. Each situation is highly unique but it’s important to get the details before you consider saying yes, and that you be aware of what securities you may or may not have. Meeting with all of the roommates (preferably multiple times) is essential, and whether you’ll be on the lease or moving in off a handshake deal is vital information. If you’re not on the lease, you will not be entitled to legal protections and need to be prepared for the worst...
            </div>
        </div>
        <a href="../pages/financial.html#article-2" class="articleButton">&#8594;</a>
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
                Before you can get a job, you’ll need to apply for one, and whatever job you’re applying for, it's likely that they’ll ask to see your resume before anything else. Your resume is your foot in the door and often the way you’ll make your first impression, so it’s important to do it right...
            </div>
        </div>
        <a href="../pages/work.html#article-1" class="articleButton">&#8594;</a>
    </div>

    <div class="survey-article">
    <img src="../images/eric-prouzet-B3UFXwcVbc4-unsplash.jpg" alt="Now hiring sign" class="survey-article-image">
        <div class="survey-article-content">
            <div class="survey-article-title" id="article-2">
                Securing Important Documents
            </div>
            <div class="survey-article-text">
                Once you’ve built a resume and begun the application and interview processes, it's important to make sure that you're ready to accept a position once you're offered one, and if you don’t have the necessary identification for one reason or another, then you’ll be in trouble...
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
                Mental Health: Stress and Anxiety
            </div>
            <div class="survey-article-text">
                Stress is a common aspect of life that everyone encounters at some point. It can be a fleeting moment or linger for days, impacting various aspects such as appetite, sleep, concentration, and social interactions. To prevent stress from becoming overwhelming, consider the following proven tips:...
            </div>
        </div>
        <a href="../pages/health.html#article-2" class="articleButton">&#8594;</a>
    </div>

    <div class="survey-article">
    <img src="../images/hush-naidoo-jade-photography-yo01Z-9HQAw-unsplash.jpg" alt="Stethoscope" class="survey-article-image">
        <div class="survey-article-content">
            <div class="survey-article-title" id="article-2">
                Maintaining Your Physical Health
            </div>
            <div class="survey-article-text">
                For homeless teenagers, prioritizing physical health is a critical aspect of navigating life's challenges. The first step in this journey is securing a doctor who understands the unique circumstances faced by individuals experiencing homelessness. Fortunately, many communities have clinics or healthcare centers specifically designed to cater to the needs of those without stable housing. These facilities offer comprehensive medical services, ranging from routine check-ups to vaccinations, providing essential guidance on managing health concerns tailored to the challenges faced by homeless teens...
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
                Getting Your GED
            </div>
            <div class="survey-article-text">
                If your individual situation has, or is going to, prevent you from graduating highschool, it’s important to remember that education should still be on your mind. Many jobs require that applicants have a highschool diploma or equivalent certification before they will even be considered, and failing to have one can easily hold you back in your pursuit of financial security and employment. Any highschool equivalency will do the job when the time comes, but the GED (General Education Development) is the most widely accepted at institutions throughout the United States.
            </div>
        </div>
        <a href="../pages/education.html#article-2" class="articleButton">&#8594;</a>
    </div>

    <div class="survey-article">
    <img src="../images/element5-digital-OyCl7Y4y0Bk-unsplash.jpg" alt="school supplies" class="survey-article-image">
        <div class="survey-article-content">
            <div class="survey-article-title" id="article-2">
                Paying for College or University
            </div>
            <div class="survey-article-text">
                If you’ve decided to broaden your horizons and pursue a college or university degree, great news! There are tons of resources which exist to make this possible! While you may not be able to afford the tuition of an ivy league, a state school's tuition can often be largely, if not entirely, covered through financial aid in the form of grants, scholarships, and loans...
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