import "./header.css"
import casioLogo from "/Casio-Logo-PNG.png"

function Header() {
return(
    <>

  
    <header>
        <nav>
            <div className="header-menu header-menu1">
                <ul>
                    <li><a href="">Montres Homme</a></li>
                    <li><a href="">Montre Femme</a></li>
                    <li><a href="">Bracelets</a></li>
                </ul>
            </div>
            <div className="header-logo">
                <a href="#">
                    <img src={casioLogo} alt="Logo de casio"width={"300px"} />
                </a>
            </div>
            <div className="header-menu header-menu2">
                <ul>
                    <li><a href="">Connexion</a></li>
                    <li><a href="">Panier</a></li>
                </ul>
            </div>
        </nav>
    </header>  

    
    
    </>
    )

}
export default Header