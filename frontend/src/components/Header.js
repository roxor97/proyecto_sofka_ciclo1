import logo from '../assets/element-camara.svg'

function Header() {
    return (
      <header className="header">
        <img src={logo} className="header__logo" alt="logo" />
        <nav className="menu" id="menu">
            <ul>
                <li><a href="/pagina-mis-gifos.html" >  VIDEOS </a></li>
            </ul>
        </nav>
      </header>
    );
  } 

  export default Header;