import React from "react";
import { Link } from "react-router-dom";

export default function SearchItem({ detailsPage = false, id, name, image_url, url, rating, phone, display_phone, distance, location, businessReviews }) {
    console.log(distance);
    distance = Math.round((distance / 1609.344) * 10) / 10;
    let ourRating;
    if (businessReviews && businessReviews.reviews.length > 1) {
        ourRating = Math.round((businessReviews.reviews.reduce((a, b) => a + b.rating, 0) / businessReviews.reviews.length) * 10) / 10;
    } else if (businessReviews) {
        ourRating = Math.round(businessReviews.reviews[0].rating * 10) / 10;
    } else {
        ourRating = 'Be the first to review!'
    }
    return (
        <div className={!detailsPage ? "business-card" : "business-card details-page"} id={id}>
            <div className="business-details">
                <img src={image_url}></img>
                <div className="business-details-content">
                    <h1>{name}</h1>
                    <p>{`${location.address1} ${location.city} ${location.state}, ${location.zip_code}`}</p>
                    <p><a href={`tel:${phone}`}>{display_phone}</a></p>
                    {
                        detailsPage
                            ?
                            <></>
                            :
                            <p>{`${distance} mi.`}</p>
                    }
                    <p className="yelp-rating">{`Yelp Rating: ${rating}`}</p>
                    <p className="our-rating">{`Our Rating: ${ourRating}`}</p>
                </div>
            </div>
            <div className="business-links">
                <div className='yelp-link'>
                    <a href={url} target='_blank'><img src="https://www.nymannings.com/wp-content/uploads/2021/05/yelp-logo-e1569950418653-300x148.png"></img></a>
                </div>
                {
                    detailsPage
                        ?
                        <div className="details-link leave-review">
                            <Link to={`/business/${id}/review`}>Review</Link>
                        </div>
                        :
                        <div className="details-link">
                            <Link to={`/business/${id}`}>Details</Link>
                        </div>

                }
            </div>
        </div>
    )
}