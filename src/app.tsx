import "./app.css"
import imgMain1 from "/Montre-une .jpeg"
import Header from "./header"
import Alert from "./compenent/alert"
import Footer from "./footer"
import imgMain2 from "/Montre-deux.jpeg"
import Card from "./pages/card"
import Form from "./pages/form"
import { casioproduct } from "./data/product"
import { BrowserRouter as Router, Route , Routes} from 'react-router-dom'


function App() {
    return (
        <>

            <Header />
            <Alert heading="Attention" closable>
                Cher visiteur,

                Nous tenons à vous informer que ce site prétendant être un site officiel de Casio est en réalité un faux site créé dans un but purement récréatif. Nous tenons à souligner que nous ne sommes pas affiliés à la marque Casio, ni à aucune autre entreprise.
            </Alert>
            <Router>
                <Routes>
                    <Route path="/"  />
                    <Route />
                    <Route />
                    <Route />
                    <Route />
                    <Route />              
                </Routes>
            </Router>
            <main>
                <section id="main">
                    <div className="imgBg">
                        <div className="imgMain">
                            <img className="img" src={imgMain1} alt="" />
                        </div>
                        <div className="imgMain">
                            <img className="img" src={imgMain2} alt="" />
                        </div>
                    </div>
                </section>
                <section id="news">
                    <div className="newsCasio">
                        <span className="newsCasioTitre">Maison d'horlogerie Japonaise</span>
                        <span className="newsCasioText">Depuis 1946, nous créons pour vous des montres au design à la 
                            fois sobre et remarquable,
                            assemblées à <b>Tokyo </b> avec soin et vendues au prix juste.
                        </span>
                    </div>

                    <div className="rowCard">  

                        {casioproduct.map(product => {
                            return(
                                <Card id={product.id} name={product.name} price={product.price}  />
                        )})}

                        {/* <div className="card">
                            <div className="image">
                                <span className="text">This is a chair.</span>
                            </div>
                            <span className="title">Cool Chair</span>
                            <span className="price">$100</span>
                        </div>
                        <div className="card">
                            <div className="image">
                                <span className="text">This is a chair.</span>
                            </div>
                            <span className="title">Cool Chair</span>
                            <span className="price">$100</span>
                        </div>
                        <div className="card">
                            <div className="image">
                                <span className="text">This is a chair.</span>
                            </div>
                            <span className="title">Cool Chair</span>
                            <span className="price">$100</span>
                        </div>
                        <div className="card">
                            <div className="image">
                                <span className="text">This is a chair.</span>
                            </div>
                            <span className="title">Cool Chair</span>
                            <span className="price">$100</span>
                        </div> */}


                        

                    </div>
                </section>
                <Form />
            </main>
            <Footer />
        </>
    )
}
export default App