import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Link } from "react-router-dom";

export default function ReviewForm() {
    const { businessId } = useParams();
    const navigate = useNavigate();
    const [rating, setRating] = useState(5);
    const [reviewText, setReviewText] = useState("");
    const [submitting, setSubmitting] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitting(true);

        fetch(`https://assorted-cultured-hearing.glitch.me/businesses/${businessId}`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                businessId,
                review: {
                    rating,
                    reviewText
                }
            })
        })
            .then(res => res.json())
            .then(data => {
                if (data.errors) {
                    setSubmitting(false);
                    return window.alert("Submission failed. Try again later");
                }
                window.alert("Thank you for your review!");
                navigate(`/business/${businessId}`);
            });

    }

    return (
        <>
            <div className="nav-back">
                <p onClick={() => navigate(-1)}><span>{'<'}</span> Go Back To Business Details</p>
            </div>
            {
                !submitting
                    ?
                    <form onSubmit={handleSubmit} className="review-form">
                        <div>
                            <h1>{rating}</h1>
                            <input name="rating" type="range" min="1" max="10" step="0.5" value={rating} onChange={(e) => setRating(e.target.value)}></input>
                        </div>
                        <textarea value={reviewText} onChange={(e) => setReviewText(e.target.value)} name="review-text" maxLength="2000" placeholder="Type your review here..."></textarea>
                        <button type="submit">Submit Review</button>
                    </form>
                    :
                    <p className="loading-animation submitting">Submitting...</p>
            }
        </>
    )
}