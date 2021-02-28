// Import stylesheets
import "./style.css";

// Write Javascript code!
const appDiv = document.getElementById("app");
//appDiv.innerHTML = `<h1>${departments}</h1>`;

const departments = [
  {
    id: 1,
    country_code: "in",
    name: "Tv,Appliances,Electronics",
    description: "",
    isAvalible: true
  },
  {
    id: 2,
    country_code: "in",
    name: "Mobiles,Computers",
    description: "",
    isAvalible: true
  },
  {},
  {},
  {},
  {},
  {}
];

appDiv.innerHTML = `<h1>${JSON.stringify(departments)}</h1>`;
