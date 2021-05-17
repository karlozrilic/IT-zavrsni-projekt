import CustomCard from "../components/CustomCard";
import { vrtici } from "../components/vrtici";
import { skole } from "../components/osnovneSkole";

function Familly() {

    return (
        <>
            <div className="hero-image familly">
                <div className="hero-text">
                    <h1>Familly</h1>
                    <p>Here you can find all necessary information for your familly</p>
                    <a href="#familly-info">Go</a>
                </div>
            </div>
            <div className="content-wrapper">
                <div className="max-width content" id="familly-info" style={{ whiteSpace: 'pre-wrap' }}>
                    <h2 id="vrtici">Vrtići</h2>
                    {vrtici.map((element, key) => 
                        <>
                            <CustomCard right={false} title={element.name} textInfo={element.about} image={element.imageLink} link={element.link} googleMapsLink={element.googleMap} goOutside={true} />
                        </>
                    )}
                    <h2 id="osnovne-skole">Osnovne škole</h2>
                    {skole.map((element, key) => 
                        <>
                            <CustomCard right={false} title={element.name} textInfo={element.about} image={element.imageLink} link={element.link} googleMapsLink={element.googleMap} goOutside={true} />
                        </>
                    )}
                </div>
            </div>
        </>
    )
}

export default Familly;