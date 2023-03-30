//package for a dropdown menu
import DropdownButton from 'react-bootstrap/DropdownButton';
import DropdownItem from 'react-bootstrap/esm/DropdownItem';

//created an array so we can map over it and apply our category filter
const headerList = [
  {title: "All"},
  {title: "Technology",
  category: "technology"},
  {title: "Travel",
  category: "travel"},
  {title: "Food",
  category: "food"},]

export default function Header(props) {
 
  return (
    <div className='header'>
      <DropdownButton id="dropdown-basic-button" title="Categories">
          {headerList.map((header) => (
              <DropdownItem
                  onClick={props.chooseCategory}
                  type={header.category}>
                  {header.title}
              </DropdownItem>
          ))
          }
      </DropdownButton>
      <div className='dates'>
      <label>Start Date:
        <input type="date" onChange={props.chooseStartDate}/>
      </label>
      <label>
        End Date: 
        <input type="date" onChange={props.chooseEndDate}/>
      </label>
      </div>
      <button onClick={props.changeSortOrder} className="sortingbutton">Sort</button>
      </div>
  );
}