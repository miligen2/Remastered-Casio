import "./footer.css";

function Footer() {
    return(
        <>
        <footer>
            <div className="containerFooter">
                <div className="rowfooter">
                    <div className="cotact">
                        <div className="colon">
                            <div className="titreFooter">
                                ENTREPRISE
                            </div>
                            <div className="containFooter">
                                <ul>
                                    <li>Email: Angelo0204@hotmail.fr</li>
                                    <li>Tel: 06 99 93 13 46</li>
                                    <li>WhatsApp: +336 99 93 13 46</li>
                                    <li>26 avenue tony garnier</li>
                                    <li>69007 Lyon</li>
                                    <li>Ouvert du Lundi au Vendredi.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="collection">
                        <div className="colon">
                            <div className="titreFooter">
                            PRODUITS
                            </div>
                            <div className="containFooter">
                                <ul>
                                    <li><a href="">Montres</a></li>
                                    <li><a href="">Calculatrice scolaire</a></li>
                                    <li><a href="">Calculatrice de bureau</a></li>
                                    <li><a href="">Instruments de musique électroniques</a></li>
                                    <li><a href="">L'acquisition de données mobile de signaux</a></li>
                                    <li><a href="">Systèmes d’encaissement</a></li>
                                    <li><a href="">Projecteurs</a></li>
                                    <li><a href="">Imprimantes d'étiquettes</a></li>
                                </ul>

                            </div>
                        </div>
                    </div>
                    <div className="info">
                        <div className="colon">
                            <div className="titreFooter">
                            INFO PRATIQUE
                            </div>
                            <div className="containFooter">
                                <ul>
                                    <li><a href="">Assistance</a></li>
                                    <li><a href="">FAQ</a></li>
                                    <li><a href="">Expédition et livraison</a></li>
                                    <li><a href="">Info sur la mise au rebut de pile</a></li>
                                    <li><a href="">Droit de rétraction</a></li>
                                    <li><a href="">Conditions générales de vente</a></li>
                                    <li><a href="">Téléchargements</a></li>
                                </ul>

                            </div>
                        </div>
                    </div>
                    <div className="service">
                        <div className="colon">
                            <div className="titreFooter">
                            SERVICE
                            </div>
                            <div className="containFooter">
                                <ul>
                                    <li><a href="">CASIO ID </a></li>
                                    <li><a href="">S'abonner à la newsletter 📧</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="informationTVA">
                Tous les prix de cette boutique Orange azur, inclut la TV et tu les frais d'expédition. <br/>
                Veuillez noter que le produits vendu en dehors de la boutique en ligne CASIO sont à des "prix de vente conseillé".
            </div>


        </footer>
        
        </>

    )
    
}
export default Footer