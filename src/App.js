import React from "react";
import Blog from "./Blog";
import data from "./data.json";
import  './styles.css';
import Header from "./Header";
import 'bootstrap/dist/css/bootstrap.min.css';


export default function App() {
 
  const [category, setCategory] = React.useState();

    const filteredByCategory = category
        ? data.filter(item => item.category === category)
        : data;

    const blogData = filteredByCategory.map(item => {
        return (
            <Blog
                item={item}/>
        )
    })

    function chooseCategory(event) {
        const cat = event.target.type
            setCategory(cat)
    }
      
    const [startDate, setStartDate] = React.useState();
      const [endDate, setEndDate] = React.useState();
    
    function chooseStartDate(event) {
      const start = event.target.value
      setStartDate(start)
    };

    function chooseEndDate(event) {
      const end = event.target.value
      setEndDate(end)
    }

    const filteredByDate = data.filter((item) => {
      startDate && endDate ? item.date >= startDate && item.date <= endDate : data;
    }
    )
    return (
        <div>
            <Header 
                    chooseCategory={chooseCategory}
                    chooseStartDate={chooseStartDate}
                    chooseEndDate={chooseEndDate}
                    />
            {blogData}
        </div>
    )
}
