import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

const headerlist = [{href: "#/action-1",
title: "technology",
type: "technology"
}]
export default function Header(props) {
  //const blogData = data.map(item => {
  return (
    <DropdownButton id="dropdown-basic-button" title="Dropdown button">
      (headerlist.map(header =>
      return (<Dropdown.Item href="#/action-1" 
      onClick={props.technology}>technology</Dropdown.Item> )))
    <Dropdown.Item href="#/action-1" onClick={props.technology}>technology</Dropdown.Item>
    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
  </DropdownButton>
);
}

 