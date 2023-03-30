import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

const headerList = [
  {title: 'All'},
  {title: 'Technology', category: 'technology'},
  {title: 'Travel', category: 'travel'},
  {title: 'Food', category: 'food'},
];

export default function Header(props) {
  const [sortOrder, setSortOrder] = React.useState('desc');

  function handleSortOrder(event) {
    setSortOrder(event.target.value);
    props.sortData(event.target.value);
  }

  return (
    <div className='header'>
      <DropdownButton id='dropdown-basic-button' title='Categories'>
        {headerList.map((header) => (
          <Dropdown.Item
            key={header.title}
            onClick={props.chooseCategory}
            type={header.category}>
            {header.title}
          </Dropdown.Item>
        ))}
      </DropdownButton>
      <div className='dates'>
        <label>
          Start Date:
          <input type='date' value={props.startDate} onChange={props.chooseStartDate} />
        </label>
        <label>
          End Date:
          <input type='date' value={props.endDate} onChange={props.chooseEndDate} />
        </label>
      </div>
      <div className='sort'>
        <label>
          Sort by Date:
          <select value={sortOrder} onChange={handleSortOrder} className="sorting">
            
            <option value='desc'>Newest First</option>
            <option value='asc'>Oldest First</option>
          </select>
        </label>
      </div>
    </div>
  );
}