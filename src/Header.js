import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';


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
              <Dropdown.Item 
                  onClick={props.chooseCategory}
                  type={header.category}>
                  {header.title}
              </Dropdown.Item>
          ))
          }
      </DropdownButton>
      <div className='dates'>
      <label>Start Date:
        <input type="date" value={props.startDate} onChange={props.chooseStartDate}/>
      </label>
      <label>
        End Date: 
        <input type="date" value={props.endDate} onChange={props.chooseEndDate}/>
      </label>
      </div>
      <button value={props.sortedData} onClick={props.sortByDate}>knopochka chinanen</button>
      </div>
  );
}