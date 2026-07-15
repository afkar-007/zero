import'../styles/Hero.css'
import Acc  from'../images/Acc.jpg'
import Dress  from'../images/Dress.jpg'
import HP from '../images/HHP.jpg'
function Hero(){

    


return(
<section class="hero">

    <div class="hero-content">

        <span>NEW ARRIVAL</span>

        <h1>Luxury Collection</h1>

        <p>
            Premium products crafted with elegance,
            quality and modern design.
        </p>

        <button>Shop Now</button>

    </div>

    <div class="hero-images">

        <img src={Dress} loading='lazy' alt=""/>
        <img src={Acc} loading='lazy' alt=""/>
        <img src={HP} loading='lazy' alt=""/>

    </div>

</section>

)
}

export default Hero