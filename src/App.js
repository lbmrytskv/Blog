import React from "react";
import Blog from "./Blog";
import data from "./data.json";


export default function App() {
    const blogData = data.map(item => {
      return (
        <Blog
        item = {item}/>
      )
    }) 

  return (
    <div>
      <p>sys patys</p>
      {blogData}
    </div>
  )
  
}


