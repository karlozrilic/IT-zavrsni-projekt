import CustomCard from "../components/CustomCard";
import { events } from "../json/events";
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
                    <p>Here you can find informations about different events</p>
                    <a href="#events" class="btn btn-outline-warning">Go</a>
                </div>
            </div>
            <div className="content-wrapper">
                <div className="max-width content" id="events">
                    <h2>Events</h2>
                    {events.map(element => 
                        <>
                            <CustomCard title={element.title} smallText={element.date} textInfo={element.text} image={element.image} link={element.link} />
                        </>
                    )}
                </div>
            </div>
        </>
    )
}

export default Events;
