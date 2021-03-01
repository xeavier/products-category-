// Import stylesheets
import "./style.css";

// Write Javascript code!
const appDiv = document.getElementById("app");
//appDiv.innerHTML = `<h1>${departments}</h1>`;
const catDiv = document.getElementById("cat");

const departments = [
  {
    dpt_id: 1,
    country_code: "in",
    name: "Tv,Appliances,Electronics",
    description: "",
    imageurl: "",
    isAvalible: true
  },
  {
    dpt_id: 2,
    country_code: "in",
    name: "Mobiles,Computers",
    imageurl: "",
    description: "",
    isAvalible: true
  },
  {
    dpt_id: 3,
    country_code: "in",
    name: "E-Readers & eBooks",
    imageurl: "",
    description: "",
    isAvalible: true
  },
  {
    dpt_id: 4,
    country_code: "in",
    name: "Men's Fashion",
    imageurl: "",
    description: "",
    isAvalible: true
  },
  {
    dpt_id: 5,
    country_code: "in",
    name: "Women's Fashion",
    imageurl: "",
    description: "",
    isAvalible: true
  },
  {
    dpt_id: 6,
    country_code: "in",
    name: "Home, Kitchen, Pets, Furniture",
    imageurl: "",
    description: "",
    isAvalible: true
  },
  {
    dpt_id: 7,
    country_code: "in",
    name: "Grocery & Household supplies",
    imageurl: "",
    description: "",
    isAvalible: true
  },
  {
    dpt_id: 8,
    country_code: "in",
    name: "Beauty, Health",
    imageurl: "",
    description: "",
    isAvalible: true
  },
  {
    dpt_id: 9,
    country_code: "in",
    name: "Sports, Fitness, Bags, Luggage",
    imageurl: "",
    description: "",
    isAvalible: true
  },
  {
    dpt_id: 10,
    country_code: "in",
    name: "Toys, Baby Products, Kids' Fashion",
    imageurl: "",
    description: "",
    isAvalible: true
  },
  {
    dpt_id: 11,
    country_code: "in",
    name: "Car, Mortorbike Industrial",
    imageurl: "",
    description: "",
    isAvalible: true
  },
  {
    dpt_id: 12,
    country_code: "in",
    name: "Books & Audible",
    imageurl: "",
    description: "",
    isAvalible: true
  },
  {
    dpt_id: 13,
    country_code: "in",
    name: "Gaming, Software, Music & Movies",
    imageurl: "",
    description: "",
    isAvalible: false
  },
  {
    dpt_id: 14,
    country_code: "in",
    name: "Gift Cards",
    imageurl: "",
    description: "",
    isAvalible: true
  },
  {
    dpt_id: 15,
    country_code: "in",
    name: "Art, Handicraft, Collectibles",
    imageurl: "",
    description: "",
    isAvalible: true
  }
];

const category = [
  {
    name: "All Electronics",
    imageurl:"",
    description:"",
    parent_id:1
  },{
    name:"Television",
    imageurl:"",
    description:"",
    parent_id:1
  },{
    name:"Large Appliances",
    imageurl:"",
    description:"",
    parent_id:1
  },{
    name:"Kitchen Appliances",
    imageurl:"",
    description:"",
    parent_id:1
  },{
    name:"Air conditioners",
    imageurl:"",
    description:"",
    parent_id:1
  },{
    name:"Refrigerators",
    imageurl:"",
    description:"",
    parent_id:1
  },{
    name:"Washing machines",
    imageurl:"",
    description:"",
    parent_id:1
  },{
    name:"Microwaves",
    imageurl:"",
    description:"",
    parent_id:1
  },{
    name:"Chimneys",
    imageurl:"",
    description:"",
    parent_id:1
  },{
    name:"Dishwashers",
    imageurl:"",
    description:"",
    parent_id:1
  },{
    name:"Cameras",
    imageurl:"",
    description:"",
    parent_id:1
  },{
    name:"Camera Accessories",
    imageurl:"",
    description:"",
    parent_id:1
  },{
    name:"Speakers",
    imageurl:"",
    description:"",
    parent_id:1
  },{
    name:"Headphones",
    imageurl:"",
    description:"",
    parent_id:1
  },{
    name:"Heating & Cooling Appliances",
    imageurl:"",
    description:"",
    parent_id:1
  },{
    name:"Home Entertainment Systems",
    imageurl:"",
    description:"",
    parent_id:1
  },{
    name:"Mobiles",
    imageurl:"",
    description:"",
    parent_id:2
  },{
    name:"Mobile Accessories",
    imageurl:"",
    description:"",
    parent_id:2
  },{
    name:"Power Banks",
    imageurl:"",
    description:"",
    parent_id:2
  },{
    name:"Renewed Mobiles",
    imageurl:"",
    description:"",
    parent_id:2
  },{
    name:"Laptops",
    imageurl:"",
    description:"",
    parent_id:2
  },{
    name:"Tablets",
    imageurl:"",
    description:"",
    parent_id:2
  },{
    name:"Computers & Accessories",
    imageurl:"",
    description:"",
    parent_id:2
  },{
    name:"Pen Drives & Storage",
    imageurl:"",
    description:"",
    parent_id:2
  },{
    name:"Office Supplies & Staionery",
    imageurl:"",
    description:"",
    parent_id:2
  },{
    name:"Wearable Devices",
    imageurl:"",
    description:"",
    parent_id:2
  },{
    name:"Clothing",
    imageurl:"",
    description:"",
    parent_id:4,
    isAvalible:true
  },{
    name:"Footwear",
    imageurl:"",
    description:"",
    parent_id:4,
    isAvalible:true
  },{
    name:"Watches",
    imageurl:"",
    description:"",
    parent_id:4,
    isAvalible:true
  },{
    name:"Bags, Wallets & Luggage",
    imageurl:"",
    description:"",
    parent_id:4,
    isAvalible:true
  },{
    name:"Sunglasses",
    imageurl:"",
    description:"",
    parent_id:4,
    isAvalible:true
  },{
    name:"Accessories",
    imageurl:"",
    description:"",
    parent_id:4,
    isAvalible:true
  },{
    name:"Sports Shoes & Clothing",
    imageurl:"",
    description:"",
    parent_id:4,
    isAvalible:true
  },{
    name:"Designer Boutique",
    imageurl:"",
    description:"",
    parent_id:4,
    isAvalible:true
  },{
    name:"Fashion Sales & Deals",
    imageurl:"",
    description:"",
    parent_id:4,
    isAvalible:true
  },{
    name:"Clothing",
    imageurl:"",
    description:"",
    parent_id:5,
    isAvalible:true
  },{
    name:"Footwear",
    imageurl:"",
    description:"",
    parent_id:5,
    isAvalible:true
  },{
    name:"Kitchen & Dining",
    imageurl:"",
    description:"",
    parent_id:6,
    isAvalible:true
  },{
    name:"Furniture",
    imageurl:"",
    description:"",
    parent_id:6,
    isAvalible:true
  },{
    name:"Home Furnishing",
    imageurl:"",
    description:"",
    parent_id:6,
    isAvalible:true
  },{
    name:"Home Decor",
    imageurl:"",
    description:"",
    parent_id:6,
    isAvalible:true
  }
];

const subcategory = [{}];
console.log(JSON.stringify(departments));

appDiv.innerHTML = `<h6>${JSON.stringify(departments)}</h6>`;

catDiv.innerHTML = `<h6>${JSON.stringify(category)}</h6>`;
