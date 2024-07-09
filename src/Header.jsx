import './Header.css'
function Header(props){
    return(

<>
<nav>
    <div className="logo">{props.logo}</div>
    <p className='logo_des'>{props.logo_des}</p>
    <div className="nav-links">
        <a href="#">{props.link1}</a>
        <a href="#">{props.link2}</a>
        <a href="#">{props.link3}</a>
        <a href="#">{props.link4}</a>
        <a href="#">{props.link5}</a>

    </div>
</nav>
</>

    );
}
export default Header;