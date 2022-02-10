Vue.component("nav-link", {
  props: ['title'],
  template: "<a>{{ title }}</a>",
});

Vue.component("nav-menu", {
  template: `<nav>
    <nav-link title="Home" />
    <nav-link title="about" />
    <nav-link title="Contact" />
    <nav-link title="Useful links" />
  </nav>`,
});

var app = new Vue({
  el: "#app",
  data: {
    message: "You loaded this page on " + new Date().toLocaleString(),
  },
});

