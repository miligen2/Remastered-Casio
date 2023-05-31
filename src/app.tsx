import "./app.css"
import imgMain1 from "/Montre-une .jpeg"
import Header from "./header"
import Footer from "./footer"
import imgMain2 from "/Montre-deux.jpeg"

function App() {
    return(
        <>
        <Header />
        <main>
            <section id="main">
                <div className="imgBg">
                    <div className="imgMain">
                        <img className="img"src={imgMain1} alt="" />
                    </div>
                    <div className="imgMain">
                        <img className="img" src={imgMain2} alt="" />
                    </div>

                </div>
                <div className="TEST">TEAZTRZE</div>

            </section>

        </main>
        <Footer />
        </>
    )
}
export default App