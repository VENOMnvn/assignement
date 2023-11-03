import React, { useEffect, useMemo, useState } from 'react'
import styled from 'styled-components';
import Card from './Card';
import axios from 'axios';
import Navbar from './Navbar';

const ContainerBox = styled.div`
margin-top: 80px;
display: flex;
flex-direction: row;
gap:12px;
flex-wrap: wrap;
align-items: center;
justify-content: center;
width: 100vw;
`;

const BuyButton = styled.div`
    padding: 8px 12px;
    background-color: #4999ed;
    color: white;
    border-radius: 10px;
    cursor:pointer;
`;

const PageFooter = styled.div`
  display:flex;
  gap:12px;
  width:100vw;
  justify-content:center;
  margin-bottom:20px;
`;

const Loader = styled.span`
  width: 100px;
  height: 100px;
  border: 3px solid #FFF;
  border-radius: 50%;
  display: inline-block;
  position: relative;
  box-sizing: border-box;
  animation: rotation 1s linear infinite;

  &:after{
    content: '';  
    box-sizing: border-box;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 56px;
    height: 56px;
    border-radius: 50%;
    border: 3px solid transparent;
    border-bottom-color: #FF3D00;
  }
`;

const Container = (props) => {

const [currentPage , setcurrentPage] = useState(0);
const [data,setData] = useState([]);
const [load,setLoad] = useState(false);


const getData = async ()=>{
setLoad(true);
setData([]);
const options = {
  method: 'GET',
  url: 'https://car-data.p.rapidapi.com/cars',
  params: {
    limit: '12',
    page: currentPage
  },
  headers: {
    'X-RapidAPI-Key': 'fa38654813msh14858e55002ece2p160ec5jsn912a57e911c3',
    'X-RapidAPI-Host': 'car-data.p.rapidapi.com'
  }
};
try {
	const response = await axios.request(options);
  setData(response.data);
} catch (error) {
	console.error(error);
}  
setLoad(false);
return
};

  useMemo(()=>{
    getData();
  },[currentPage]);


  const sortHandle =  (prop)=>{
      if(prop == 'price'){
       let chnge =  data.sort((a,b)=>a.id - b.id);
       setData([...chnge]);
      }
      else if(prop == 'year'){
        let chnge  =  data.sort((a,b)=>a.year - b.year);
        setData([...chnge]);
      }
      else{
        let chnge = data.sort((a,b)=>b.year - a.year);
        setData([...chnge]);
      }
  };

  useEffect(()=>{
    console.log(data);
  },[data]);

  return (<>
    <Navbar sort={sortHandle}></Navbar>
    <ContainerBox className='cont'>
    {load?<Loader class="loader"></Loader>:""}
    {data?.map((ele)=><Card data={ele}/>)}
    {load?"":
    <PageFooter className='pageFooter'>
      {currentPage>0?<BuyButton onClick={()=>setcurrentPage(currentPage-1)}>Prev</BuyButton>:""}
      <BuyButton onClick={()=>setcurrentPage(currentPage+1)}>Next</BuyButton>
    </PageFooter>
    }
    </ContainerBox>
    </>
  )
}

export default Container;