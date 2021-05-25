import CustomCard from "../components/CustomCard";
import { links } from "../components/links";
import { Helmet } from 'react-helmet'

const TITLE = 'Live as a digital nomad in Zadar';

function Home() {
    return (
        <>
            <Helmet>
                <title>{ TITLE }</title>
            </Helmet>
            <div className="hero-image home">
                <div className="hero-text">
                    <h1>{ TITLE }</h1>
                    <p>Neki inspiracijski tekst</p>
                    <a href="#home" class="btn btn-outline-warning">Go</a>
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