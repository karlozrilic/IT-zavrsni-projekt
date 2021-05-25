import CustomCard from "../components/CustomCard";
import { vrtici } from "../json/vrtici";
import { skole } from "../json/osnovneSkole";
import { Helmet } from 'react-helmet'

const TITLE = 'Family';

function Family() {

    return (
        <>
            <Helmet>
                <title>{ TITLE }</title>
            </Helmet>
            <div className="hero-image family">
                <div className="hero-text">
                    <h1>{ TITLE }</h1>
                    <p>Here you can find all necessary information for your family</p>
                    <a href="#family-info" class="btn btn-outline-warning">Go</a>
                </div>
            </div>
            <div className="content-wrapper">
                <div className="max-width content" id="family-info" style={{ whiteSpace: 'pre-wrap' }}>
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

export default Family;