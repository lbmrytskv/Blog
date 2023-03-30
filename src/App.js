import React, { useState, useEffect } from "react";
import Blog from "./Blog";
import data from "./data.json";
import  './styles.css';
import Header from "./Header";
import 'bootstrap/dist/css/bootstrap.min.css';


export default function App() {
  const [category, setCategory] = useState();
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();
  const [sortedData, setSortedData] = useState(data);

  useEffect(() => {
    const sorted = [...sortedData];
    sorted.sort((a, b) => new Date(b.date) - new Date(a.date));
    setSortedData(sorted);
  }, []);

  useEffect(() => {
    const filtered = data.filter(item => {
      // apply category filter
      if (category && item.category !== category) {
        return false;
      }
      // apply date range filter
      if (startDate && endDate) {
        return item.date >= startDate && item.date <= endDate;
      }
      return true;
    })}, [category, startDate, endDate]);

  const blogData = sortedData.map(item => {
    return (
      <Blog
        item={item}/>
    )
  });

  function chooseCategory(event) {
    const cat = event.target.type;
    setCategory(cat);
  }
      
  function chooseStartDate(event) {
    const start = event.target.value;
    setStartDate(start);
  };

  function chooseEndDate(event) {
    const end = event.target.value;
    setEndDate(end);
  }

  function sortData() {
    const sorted = [...sortedData];
    if (sortedData.length > 0 && sortedData[0].date > sortedData[sortedData.length - 1].date) {
      sorted.sort((a, b) => new Date(a.date) - new Date(b.date));
    } else {
      sorted.sort((a, b) => new Date(b.date) - new Date(a.date));
    }
    setSortedData(sorted);
  }

  return (
    <div>
      <Header 
        chooseCategory={chooseCategory}
        chooseStartDate={chooseStartDate}
        chooseEndDate={chooseEndDate}
        startDate={startDate}
        endDate={endDate}
        sortData={sortData}
      />
      {blogData}
    </div>
  )
}
