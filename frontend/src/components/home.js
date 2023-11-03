import Card from './Card';
import './home.css';

const Home = ()=>{
    const arr = [1,2,3,4,5,6];
    console.log(arr);
    return <div>
    <div className='car-Cards'>
    {arr.map(()=><Card></Card>)}
    </div>
    </div>;
}

export default Home;