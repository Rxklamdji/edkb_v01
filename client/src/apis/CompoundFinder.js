import axios from "axios";

//turnary operator NODE_ENV = 'development'
//NODE_ENV = 'production'


// In Production use baseURL = /api/v1/compounds
//else baseURL = http://localhost:1000/api/v1/compounds


export default axios.create({
    baseURL: "http://localhost:2000/api/v1/compounds"
});


//const baseURL =
// process.env.NODE_ENV === "production"
 //   ? "api/v1/compounds" 
 //   : "http://localhost:2000/api/v1/compounds"

//export default axios.create({
 //   baseURL,
// });








