const app = document.getElementById('app')

let totalHtml = "";

const headerEl = `
  <header class="header">
    <div class="header-container">
      <img class="header-logo" src="images/Logo.png"  alt="logo"> 
      <div class="header-toggle" id="mobile-menu">
        <span class= "bar"></span>
        <span class= "bar"></span>
        <span class= "bar"></span>
      </div>
      
      <div class="header-menu" >
        <a class="header-link" href="#home-section" id="home">Home</a> 
        <a class="header-link" href="#about-section" id="about">About Me</a>
        <a class="header-link" href="#contact-section" id="contacts">Contacts</a>
        <button class="button">Hire me!</button>    
      </div>
    </div>   
  </header>
`;

totalHtml += headerEl

const profileEl = `
  <div class="profile section" id="home-section">
    <div class="profile-picture"><img  src="images/Image.png" alt="My picture"></div> 
    <div class="profile-comment">
      <h1 class="profile-heading">I'm  Pracy Adeline</h1>
      <h2 class="profile-description">A junior web developper</h2>
      <p class="profile-description">I create beautiful websites for 
        small businesses using the newest technologies in the web industry. </p>
        <button class="button">Read More</button>
    </div>
  </div>
`;

totalHtml += profileEl;


const librariesList = [
  {
    name: "Vue.js",
    version: 3,
    description: "The Progressive JavaScript Framework",
  },
  {
    name: "React.js",
    version: 17,
    description: "A JavaScript library for building user interfaces",
  },
  {
    name: "Svelte.js",
    version: 3,
    description: "The Progressive JavaScript Framework",
  },
  {
    name: "Angular.js",
    version: 17,
    description: "A JavaScript library for building user interfaces",
  },
];

const template = (library) => {
  return `
    <div class="card-library card-language">
      <div class="card-image">
        <div class="image image-V">V</div>
      </div>
      <div class="card-title card-align-text">${library.name}</div>
      <div class="card-name card-align-text card-name-library">${library.description}</div>
      <div class="card-version card-version-V">Version ${library.version}</div>
    </div>
  `;
};

let librariesHtml = ""

for (const lib of librariesList) {
  librariesHtml += template(lib)
}

const finalLangHtml = `
  <div class="skills section" id="about-section">
    <div class="libraries-wrapper">
    ${librariesHtml}
    </div>
  </div>
`;

totalHtml += finalLangHtml;

const footerEl = `
  <div class="footer__container section" id="contact-section">
      <div class="footer__links">
        <div class="footer__link--items">
          <h2>Contacts </h2>
          <a href="/">Email</a>
          <a href="/">Mobile</a>
          <a href="/">Fax</a>
        </div>
        <div class="footer__link--items">
          <h2>Social Media</h2>
          <a href="/">Instagram</a>
          <a href="/">Facebook</a>
          <a href="/">Youtube</a>
          <a href="/">Twitter</a>
        </div>
      </div>
    </div>
    <footer class="footer">Copyright &copy; 2022 - bpracy.com</footer>
`;


totalHtml += footerEl;

app.innerHTML = totalHtml;