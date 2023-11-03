import styled from "styled-components";
// import "./Card.css";
import carimage from './assets/bmw3.jpg'


const CardBox = styled.div`
min-width: 350px;
max-width: 500px;
height: max-content;
border: 1px solid #ddd;
border-radius: 10px;
display: flex;
background-color: aliceblue;
padding: 10px;
flex-direction: column;
`;

const ImageUpper = styled.div`
margin: auto;
img{
  border-radius: 10px;
    width: 100%;
}
`;

const LowerDetails = styled.div`
display: flex;
    justify-content: center;
    flex-direction: column;
`;

const CarTitle = styled.div`
display: flex;
height: 10%;
flex-direction: row;
justify-content: space-between;
align-items: center;
padding: 5px 0px;

p{  
    margin:5px 0px;
}
`;

const CarName = styled.p`
font-size: 1.5rem;
font-weight: 400;
`;

const CarModel = styled.p`
border: 2px dotted rgb(134, 199, 255);
padding: 5px;
border-radius: 12px;
`;

const Button = styled.div`
display: flex;
flex-wrap: wrap;
flex-direction: row;
`;

const DetailButton = styled.p`
width: 49%;
    display: flex;
    margin: 4px 0px;
    justify-content: flex-start;
`;

const PriceBox = styled.div`
display: flex;
flex-direction:row;
padding: 8px 0px;
justify-content: space-between;

`;

const Price = styled.div`
    flex-direction: row;
    display: flex;
    display: flex;
    align-items: center;
    font-size: 1.5rem;
    p{
        font-size: 1rem;
    margin: 4px;
    }
`;

const OtherButton = styled.div`
display: flex;
padding: 8px;
padding-bottom: 0px;
align-items: center;
`;

const LikeButton = styled.div`
    padding: 8px 12px;
    background-color: #daeafa;
    color: #71b5f1;
    border-radius: 10px;
    margin-right: 12px;
`;

const BuyButton = styled.div`
    padding: 8px 12px;
    background-color: #4999ed;
    color: white;
    border-radius: 10px;
`;

const Card = (props) => {
  const data = props.data;

  return (
    <CardBox className="card-body">
      <ImageUpper className="Image-upper">
      <img src={carimage}></img>
      </ImageUpper>
      <LowerDetails className="Lower-details">
        <CarTitle className="car-title">
          <CarName className="car-name">{data.make}</CarName>
          <CarModel className="model-year">{data.year}</CarModel>
        </CarTitle>
        <Button className="buttons">
          <DetailButton className="detail-button">{data.model}</DetailButton>
          <DetailButton className="detail-button">{data.type}</DetailButton>
          <DetailButton className="detail-button">{"Hybrid"}</DetailButton>
          <DetailButton className="detail-button">{200}-km/1-L</DetailButton>
        </Button>

        <hr></hr>
        <PriceBox className="price-box">
          <Price className="price">
            {data.id} <p>/month</p>{" "}
          </Price>
          <OtherButton className="others-button">
            <LikeButton className="like-button">Like</LikeButton>
            <BuyButton className="buy-button">Rent</BuyButton>
          </OtherButton>
        </PriceBox>
      </LowerDetails>
    </CardBox>
  );
};

export default Card;
