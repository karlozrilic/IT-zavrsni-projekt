function CustomCard({customClass, right, title, smallText, textInfo, image, link, googleMapsLink, goOutside}) {
    console.log(image)

    function truncate(str) {
        return str.length > 600 ? str.substring(0, 597) + "..." : str;
    }

    return (
        <div className={customClass ? "custom-card "+customClass : "custom-card"}>
            {right ?
            <>
                <div className="custom-card-info">
                    <div className="custom-card-text">
                        <div className="title-wrapper">
                            <h3 className="custom-card-title">{title}</h3>
                            {smallText ? 
                                <h6 className="small-text">{smallText}</h6>
                            :
                                ""
                            }
                        </div>
                        {textInfo ?
                            <p>{truncate(textInfo)}</p>
                        :
                            ""
                        } 
                    </div>
                    <div className="custom-card-button-right">
                        {link && <a role="button" className="btn btn-outline-primary" href={link} target={goOutside && "_blank"} >More</a>}
                    </div>
                </div>
                {googleMapsLink && image ?
                    <div className="custom-card-image google-maps">
                        <img src={image} alt="Card" />
                        <iframe src={googleMapsLink} allowfullscreen="true" loading="lazy"></iframe>
                    </div>
                : (googleMapsLink && !image ? 
                    <div className="custom-card-image google-maps-only">
                        <iframe src={googleMapsLink} allowfullscreen="true" loading="lazy"></iframe>
                    </div>
                    :
                    <div className="custom-card-image">
                        <img src={image} alt="Card" />
                    </div>
                )
                }
            </>
            :
            <>
                {googleMapsLink && image ?
                    <div className="custom-card-image google-maps">
                        <img src={image} alt="Card" />
                        <iframe src={googleMapsLink} allowfullscreen="true" loading="lazy"></iframe>
                    </div>
                : (googleMapsLink && !image ? 
                    <div className="custom-card-image google-maps-only">
                        <iframe src={googleMapsLink} allowfullscreen="true" loading="lazy"></iframe>
                    </div>
                    :
                    <div className="custom-card-image">
                        <img src={image} alt="Card" />
                    </div>
                )
                }
                <div className="custom-card-info">
                    <div className="custom-card-text">
                        <div className="title-wrapper">
                            <h3 className="custom-card-title">{title}</h3>
                            {smallText ? 
                                <h6 className="small-text">{smallText}</h6>
                            :
                                ""
                            }
                        </div>
                        {textInfo ?
                            <p>{truncate(textInfo)}</p>
                        :
                            ""
                        }
                    </div>
                    <div className="custom-card-button-left">
                        {link && <a role="button" className="btn btn-outline-primary" href={link} target={goOutside && "_blank"} >More</a>}
                    </div>
                </div>
            </>
            }
        </div>
    )
}

export default CustomCard;