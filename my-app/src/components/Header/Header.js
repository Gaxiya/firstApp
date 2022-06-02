import logo from '../../images/Logo.png';
import clasess from'./Header.module.css';
function Header () {
    return(<header className={clasess.header}>
    <img src={logo} className="App-logo"  alt="logo" />
</header>)
}
export default Header

