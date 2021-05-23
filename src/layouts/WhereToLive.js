import { realEstateAgency } from "../components/real-estate-agency.json";
import { Helmet } from 'react-helmet'

const TITLE = 'Where to live?';

function WhereToLive() {
    return (
        <>
            <Helmet>
                <title>{ TITLE }</title>
            </Helmet>
            <div className="hero-image where-to-live">
                <div className="hero-text">
                    <h1>{ TITLE }</h1>
                    <p>Neki inspiracijski tekst</p>
                    <a href="#where-to-live">Go</a>
                </div>
            </div>
            <div className="content-wrapper">
                <div className="max-width content" id="where-to-live">
                    <section>
                        <p>
                            Zadar is one of the three cities in which housing construction has recently taken an upward 
                            trajectory and is heading towards its peak, so it can be placed side by side with Zagreb 
                            and Split in terms of new housing construction. As the deficit of apartments has appeared 
                            in Zadar, especially the medium-sized ones that buyers are primarily looking for in order 
                            to solve housing issues, construction companies and investors have found the right city 
                            to invest. Namely, it turned out that there were not enough apartments in Zadar with an area 
                            of ​​50 m2 to 60 m2, and a new phase of construction of apartments of such an area began. Most 
                            new apartments are being built in Plovanija, Bili brig, Belafuža, Višnjik, Vitrenjak, Borik, 
                            Petrići and other locations.
                        </p>
                        <p>
                            If you are actively looking to buy an apartment in Zadar in a new building, the choice is 
                            really great and you will surely find the right apartment for your needs. Thus, in addition 
                            to apartments in new construction, in Zadar you can find everything from luxuriously equipped 
                            apartments to smaller studios, apartments for housing and apartments for rent and lease in tourism.
                        </p>
                        <p>
                            As for the prices of apartments in Zadar, the prices are really diverse. If you are looking for 
                            the cheapest possible apartment in Zadar, you can find it already at a price of 38,000.00 EUR, there is 
                            a large offer of apartments for sale in Zadar up to 50,000.00 EUR, but if we are talking about some average 
                            price it would be around 150,000.00 euros for a medium-sized apartment. Keep in mind that if you are looking 
                            for an apartment in Zadar up to 50,000.00 EUR, that these are mostly apartments of some 30 m2.
                        </p>
                        <p>
                            Apartment prices in Zadar have been constantly rising in the last few years, and so far there 
                            has been an increase in prices of some 2.4% compared to before, while a similar increase is recorded 
                            in house prices.
                        </p>
                        <p>
                            When buying an apartment in Zadar, the neighborhood in which the apartment is located, the orientation 
                            of the apartment, the condition of the apartment, the number of rooms the apartment has, whether it 
                            is a new building or an apartment that has already been used, play a big role in the price. The approximate 
                            prices of apartments in Zadar neighborhoods are from 2,900.00 EUR / m2 and even higher, depending on 
                            whether it is a luxuriously equipped apartment over some 1,550.00 EUR / m2 or 1,300.00 EUR / m2.
                        </p>
                        <p>
                            The offer includes apartments in Višnjik of 1,800.00 EUR / m2 and 2,400.00 EUR / m2, in Jazine of 
                            2,700.00 EUR / m2, in Bili Brig of 1,800.00 EUR / m2, in Relja at a price of 1,900.00 EUR / m2, on 
                            the Peninsula of 2,600.00 EUR / m2 on Bokanjac of 1,800.00 EUR / m2 on Branimirova obala of 2,300.00 EUR / m2.
                        </p>
                        <p>
                            I hope that we have helped you to at least roughly orient yourself about the price of apartments in 
                            Zadar if you have decided to buy or sell an apartment. Of course, apartment prices vary depending 
                            on the characteristics of each apartment, so these prices should be taken only as an orientation 
                            on the current situation when buying or selling an apartment in Zadar.
                        </p>
                    </section>
                    <section class="google-maps-iframes">
                        {realEstateAgency.map((element) => 
                            <iframe class="google-maps-iframe" src={element.link}></iframe>
                        )}
                    </section>
                </div>
            </div>
        </>
    )
}

export default WhereToLive;