import React from 'react'
import { Link } from 'react-router-dom'
import BannerImage from "../assets/pizza.jpeg";
import "../styles/home.css";

const Home = () => {
  return (
      <div className='home'>
    <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
<h1>Perdo pizza  
</h1>
<p>Pizza to fit any taste  

</p>

<Link to="/menu">
<button>ORDER NOW 
</button>
</Link>



</div>

    </div>
  )
}

export default Home
