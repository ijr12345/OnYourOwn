const navBarTemplate = document.createElement('template');

navBarTemplate.innerHTML = `
    <style>
        .topnav {
            margin-top: 10px;
            font-family: Arial, Helvetica, sans-serif;
        }

        .topnav a {
            float: right;
            color: #323232;
            text-align: center;
            padding: 14px 16px;
            text-decoration: none;
            font-size: 17px;
        }

        .topnav a:hover {
            color: #3CA89A;
        }

        .topnav a.active {
            background-color: #04AA6D;
            color: white;
        }

        #contactButton {
            color: white;
            background-color: #3CA89A;
            border-radius: 25px;
        }

        #contactButton:hover {
            background-color: #FF6F06;
        }

        #websiteLogo {
            float: left;
            font-weight: bold;
            font-size: 25px;
        }

        a[id='websiteLogo']:hover {
            background-color: none;
            color: #323232;
        }
    </style>

    <head>
        <link rel="stylesheet" type="text/css" href="navbar/navBarStyling.css" />
    </head>

    <div class="topnav">
        <a href="pages/contact.html" id="contactButton">Contact Us</a>
        <a href="pages/emergency.html">Emergency Services</a>
        <a href="pages/education.html">Education</a>
        <a href="pages/health.html">Health</a>
        <a href="pages/work.html">Work</a>
        <a href="pages/food.html">Food</a>
        <a href="pages/housing.html">Housing</a>
        <a href="pages/financial.html">Financial</a>
        <a href="" id="websiteLogo">On Your Own</a>
    </div>
`;

class NavBarElement extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const shadowRoot = this.attachShadow({ mode: 'closed' });

    shadowRoot.appendChild(navBarTemplate.content);
    //shadowRoot.insertBefore(navBarTemplate.content);
  }
}

customElements.define('navbar-component', NavBarElement);