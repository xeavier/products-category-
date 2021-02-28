// Import stylesheets
import "./style.css";

// Write Javascript code!
const appDiv = document.getElementById("app");
//appDiv.innerHTML = `<h1>${departments}</h1>`;

const departments = [
  {
    dpt_id: 1,
    country_code: "in",
    name: "Tv,Appliances,Electronics",
    description:"",
    imageurl:"",
    isAvalible: true
  },
  {
    dpt_id: 2,
    country_code: "in",
    name: "Mobiles,Computers",
    imageurl:"",
    description: "",
    isAvalible: true
  },
  {
    dpt_id:3,
    country_code:"in",
    name:"E-Readers & eBooks",
    imageurl:"",
    description:"",
    isAvalible:true
  },
  {
    dpt_id:4,
    country_code:"in",
    name:"Men's Fashion",
    imageurl:"",
    description:"",
    isAvalible:true

  },
  {
    dpt_id:5,
    country_code:"in",
    name:"Women's Fashion",
    imageurl:"",
    description:"",
    isAvalible:true
  },
  {
    dpt_id:6,
    country_code:"in",
    name:"Home, Kitchen, Pets, Furniture",
    imageurl:"",
    description:"",
    isAvalible:true
  },
  {
    dpt_id:7,
    country_code:"in",
    name:"Grocery & Household supplies",
    imageurl:"",
    description:"",
    isAvalible:true
  },
  {
    dpt_id:8,
    country_code:"in",
    name:"Beauty, Health",
    imageurl:"",
    description:"",
    isAvalible:true
  },
  {
    dpt_id:9,
    country_code:"in",
    name:"Sports, Fitness, Bags, Luggage",
    imageurl:"",
    description:"",
    isAvalible:true
  }
];



const category = [{}];
const subcategory = [{}];
console.log(JSON.stringify(departments));
appDiv.innerHTML = `<h6>${JSON.stringify(departments)}</h6>`;
