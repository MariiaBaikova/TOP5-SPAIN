import { useState } from 'react';
import { data, dataHotel } from './data';
import './App.css';

function App() {
  const [city, setCity] = useState(0);
  const {id, cityName, image, description} = data[city];
  const [showMore, setShowMore] = useState(false);
  const [hotels, setHotels] = useState(dataHotel);
  


  const previousCity = () => {
    setCity((city => {
      city --;
      if (city < 0) {
        return data.length-1;
      }
        return city;
    }))
  }
  
  const nextCity = () => {
    setCity((city => {
      city ++;
      if (city > data.length - 1) {
        city = 0;
      }
      return city;
  } ))
}
const removeHotel = (id) => {
  let newHotel = hotels.filter((hotel) =>
    hotel.id !== id);
    setHotels(newHotel)
}


  return (
    <div>
      <div className='container'>
        <h1>TOP 5 cities in spain</h1>
      </div>
      <div className='container'>
        <h2> {id} - {cityName}</h2>
      </div>
      <div className="container">
        <img src={image} width="400px" alt="city"/>
      </div>
      <div className='container'>
        <p>{showMore ? description : description.substring(0,200) + "..."}
        <button className='btn' onClick = {() => setShowMore(!showMore)}>{showMore ? "Show less" : "Show more"}</button>
        </p>
      </div>
      <div className='container'>
        <button className='previous' onClick={previousCity}>Previous</button>
        <button className='next' onClick={nextCity}>Next</button>
      </div>
      <br></br>

      <div className="container">
        <h3>Top {hotels.length} hotels in Spain</h3>
      </div>
      { hotels.map((element => {
        const {id, hotelName, description, image, source} = element;
        return(
          <div key={id}>
          <div className="container">
            <h2>{id} - {hotelName}</h2>
          </div>
          <div className="container">
            <p>{description}</p>
          </div>
          <div className="container">
            <img src={image} width="300px" alt="hotel"/>
          </div>
          <div className="container">
            <p>{source}</p>
          </div>
          <div  className="container">
            <button className='button' onClick={() => removeHotel(id)} >Remove</button>
          </div>
          </div>
        )
      }))}
      <div className="container">
        <button className='button' onClick={() => setHotels([])}>delete all</button>
      </div>

      </div>

    
  );
}

export default App;
