import React from 'react'
import styled from 'styled-components';

const ToolBar = styled.div`
position: fixed;
top: 0;
left: 0;
display: flex;
gap: 20px;
align-items: center;
justify-content: space-between;
width: 100%;
height: 72px;
padding: 0 20px;
color: #222222;
background: #ffffff;
border-bottom: 1px solid #f2f2f2;
font-family: "Euclid Circular A", "Poppins";

a{
    text-decoration : none;
    color:inherit;
    transition: 0.25s;
}
`;


const NavButtons = styled.div`
display: flex;
gap: 20px;
align-items: center;
padding-left: 20px;
`;

const NavButton = styled.div`

`;

const Dropdown = styled.div`
  position: relative;
  cursor: pointer;
  a{
    display: flex;
    align-items: center;
    gap: 2px;
    height: 72px;
  }
`;

const Menu = styled.div`
position: absolute;
top: 60px;
right: -20px;
display: grid;
width: 180px;
padding: 8px 0;
background: #ffffff;
border-radius: 10px;
border: 1px solid #e1e1e1;
box-shadow: 0 40px 40px rgb(0 0 0 / 6%);
opacity: 0;
visibility: hidden;
transition: 0.25s;

a{
    font-size: 14px;
    padding: 12px 20px;
    height:max-content;
}
a:hover{
    background: #f5f5f5;
    background: #f5f5f5;
}

${Dropdown}:hover &{
  opacity: 1;
  visibility: visible;
}
`;


const Navbar = (props) => {

  return (
  <ToolBar>
  <div className="logo">
    <h2>E - Store</h2>
  </div>
  <NavButtons className="links">
  

    <Dropdown className="dropdown">
      <NavButton href="">
        Filter
      </NavButton>
      <Menu className="menu">
        <a onClick={()=>{props.filter('SUV')}}>SUV</a>
        <a onClick={()=>{props.filter('Convertible')}}> Convertible </a>
        <a onClick={()=>{props.filter('Pickup')}}> Pickup </a>
        <a onClick={()=>{props.filter('Van')}}> Van </a>
        <a onClick={()=>{props.filter('Minivan')}}> Minivan </a>
        <a onClick={()=>{props.filter('Hatchback')}}> Hatchback </a>
        <a onClick={()=>{props.filter('Coupe')}}> Coupe</a>
        <a onClick={()=>{props.filter('Wagon')}}> Wagon </a>
      </Menu>
    </Dropdown>

    

    <Dropdown className="dropdown">
      <NavButton href="">
        Sort By
      </NavButton>
      <Menu className="menu">
        <a onClick={()=>props.sort("price")}> Price </a>
        <a onClick={()=>props.sort("year")}> Year </a>
        <a onClick={()=>props.sort("--")}> New Age </a>
      </Menu>
    </Dropdown>
    {
    //     <a href="#" className="join-link">
    //     Join
    //   </a>
    }
   
  </NavButtons>
</ToolBar>
  )
}



export default Navbar;