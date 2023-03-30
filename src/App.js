import React from "react";
import Blog from "./Blog";
import data from "./data.json";
import  './styles.css';
import Header from "./Header";
import 'bootstrap/dist/css/bootstrap.min.css';


export default function App() {
  //creating states, to keep values which we are going to apply with pur categories and date filters 
  const [category, setCategory] = React.useState();
  const [startDate, setStartDate] = React.useState();
  const [endDate, setEndDate] = React.useState();
  const [sortedData, setSortedData] = React.useState('desc');
  
//connected both our filters into one so we can render it correctly
  const filteredData = data
    .filter(item => {
    // applying category filter (if categories don't match we won't apply a filter)
    if (category && item.category !== category) {
      return false;
    }
    // applying date range filter
    if (startDate && endDate) {
      return item.date >= startDate && item.date <= endDate;
    }
    return true;})
    .sort((a, b) => new Date(b.date) - new Date(a.date));
   

  //using map method to render our data
  const blogData = filteredData.map(item => {
    return (
      <Blog
        item={item}/>
    )
  });

  //using event.target property to implement event delegation to our dropdown menu
  function chooseCategory(event) {
    const cat = event.target.type;
    setCategory(cat);
  }
      
  //event delegation to our filter by dates
  function chooseStartDate(event) {
    const start = event.target.value;
    setStartDate(start);
  };

  function chooseEndDate(event) {
    const end = event.target.value;
    setEndDate(end);
  }

  function sortByDate(event) {
    const sorted = event.target.value;
    setSortedData(sorted);
  }


  return (
    <div>
      <Header 
      //passing our function arguments to our Header component as props
        chooseCategory={chooseCategory}
        chooseStartDate={chooseStartDate}
        chooseEndDate={chooseEndDate}
        startDate={startDate}
        endDate={endDate}
        sortedData = {sortedData}
        sortByDate={sortByDate}
      
      />
      {blogData}
        </div>
    )
}
