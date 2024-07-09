import './Body.css'
import hero from './assest/hero.jpg'
function Hero(props){
    return(
        <>
        <div className="hero">
            <div className="container">
                <img src={hero} alt="Image not found" />
            </div>
        </div>
        <div className='hero_des'>
            <h1>{props.heading}</h1>
            <p>{props.hero_para}</p>
                <button>{props.button2||"LEARN MORE ABOUT US"}</button>
                <button>{props.button2||"CONTACT US TODAY"}</button>

        </div>
        <div className='hero_para'>
            <p >{props.para1}</p>
            <p >{props.para2}</p>
                <p >{props.para3}</p>

        </div>
        </>
    );
}
export default Hero;
