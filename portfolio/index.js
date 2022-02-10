const app = document.getElementById('app');

const profile = document.createElement('div');
profile.classList.add("profile");
profile.setAttribute("id", "home-section");

const comment = document.createElement('div');
comment.classList.add("profile-comment");

const h1 = document.createElement('h1')
h1.classList.add("profile-heading");
h1.innerText = "I'm  Pracy Adeline";

const h2 = document.createElement('h2')
h2.classList.add("profile-description");
h2.innerText = "I create beautiful websites for small businesses using the newest technologies in the web industry.";

comment.appendChild(h1);
comment.appendChild(h2);

profile.appendChild(comment);

app.appendChild(profile);