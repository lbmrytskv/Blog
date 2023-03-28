import React from "react";
import Blog from "./Blog";
import data from "./data.json";
import  './styles.css';
import Header from "./Header";
import 'bootstrap/dist/css/bootstrap.min.css';




export default function App() {
    const blogData = data.map(item => {
      return (
        <Blog
        item = {item}/>
      )
    }) 

    
function chooseCategory() {
  const technology = data.filter(item=> item.category === "technology")
  return ( console.log(technology))
 
}


  return (
    <div>
      <Header
      technology = {chooseCategory}/>
      {blogData}
    </div>
  )
  
}


