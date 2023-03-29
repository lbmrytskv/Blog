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
      <label>Start Date:
        <input type="date" value={startDate} onChange={props.chooseStartDate}/>
      </label>
      <label>
        End Date: 
        <input type="date" value={endDate} onChange={props.chooseEndDate}/>
      </label>
      </div>
  );
}