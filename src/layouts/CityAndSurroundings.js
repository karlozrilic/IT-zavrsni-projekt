import CustomCard from "../components/CustomCard";
import { cityAndSurroundings } from "../components/city-and-surroundings.json";

function CityAndSurroundings() {
    return (
        <>
            <div className="hero-image city-and-surroundings">
                <div className="hero-text">
                    <h1>Meet the city and its surroundings</h1>
                    <p>Neki inspiracijski tekst</p>
                    <a href="#city-and-surroundings">Go</a>
                </div>
            </div>
            <div className="content-wrapper">
                <div className="max-width content" id="city-and-surroundings">
                {cityAndSurroundings.map((element, key) => 
                    <>
                        {key % 2 === 0 ? 
                            <CustomCard customClass={"middle-text"} right={false} title={element.title} textInfo={element.text} image={element.image} />
                        :
                            <CustomCard customClass={"middle-text"} right={true} title={element.title} textInfo={element.text} image={element.image} />
                        }
                    </>
                )}
                </div>
            </div>
        </>
    )
}

export default CityAndSurroundings;