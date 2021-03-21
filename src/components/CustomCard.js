function CustomCard({right, title, textInfo, image, link}) {
    console.log(image)
    return (
        <div className="custom-card">
            {right ?
            <>
                <div className="custom-card-info">
                    <div className="custom-card-text">
                        <h3 className="custom-card-title">{title}</h3>
                        {textInfo.map((element) => 
                            <p>{element}</p>
                        )}
                    </div>
                    <div className="custom-card-button-right">
                        <a role="button" className="btn btn-outline-primary" href={link}>More</a>
                    </div>
                </div>
                <div className="custom-card-image">
                    <img src={image} alt="Card image" />
                </div>
            </>
            :
            <>
                <div className="custom-card-image">
                    <img src={image} alt="Card image" />
                </div>
                <div className="custom-card-info">
                    <div className="custom-card-text">
                        <h3 className="custom-card-title">{title}</h3>
                        {textInfo.map((element) => 
                            <p>{element}</p>
                        )}
                    </div>
                    <div className="custom-card-button-left">
                        <a role="button" className="btn btn-outline-primary" href={link}>More</a>
                    </div>
                </div>
            </>
            }
        </div>
    )
}

export default CustomCard;