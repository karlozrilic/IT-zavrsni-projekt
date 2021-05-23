import { Helmet } from 'react-helmet'

const TITLE = 'Events';

function Events() {
    return (
        <>
            <Helmet>
                <title>{ TITLE }</title>
            </Helmet>
            <div className="hero-image events">
                <div className="hero-text">
                    <h1>{ TITLE }</h1>
                    <p>Neki inspiracijski tekst</p>
                    <a href="#events">Go</a>
                </div>
            </div>
        </>
    )
}

export default Events;