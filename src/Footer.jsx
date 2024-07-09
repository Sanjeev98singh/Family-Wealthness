import './Footer.css'
function Footer(props){
    return(
        <>
        <div className="footer">
            <h2>
                {props.heading}
            </h2>
            <p>
                {props.address}
            </p>
            <p>
                {props.phone}
            </p>
            <p>
                {props.copyRight}
            </p>
            <p>
                {props.powered}
            </p>

        </div>
        </>
    );

}
export default Footer;