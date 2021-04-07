import CustomCard from "../components/CustomCard";
import { links } from "../components/links";

function Home() {
    return (
        <>
            <div className="hero-image home">
                <div className="hero-text">
                    <h1>Live as a digital nomad in Zadar</h1>
                    <p>Neki inspiracijski tekst</p>
                    <a href="#home">Go</a>
                </div>
            </div>
            <div className="content-wrapper">
                <div className="max-width home-content" id="home">
                    {links.map((element, key) =>
                    <>
                        {key % 2 === 0 ? 
                            <CustomCard title={element.text} link={element.path} textInfo={element.info} image={require(`../images/${element.image}`).default} />
                        :
                            <CustomCard right={true} title={element.text} link={element.path} textInfo={element.info} image={require(`../images/${element.image}`).default} />
                        }
                    </>
                    )}
                </div>
            </div>
        </>
    )
}

export default Home;