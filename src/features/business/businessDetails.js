import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams, Link, useNavigate } from "react-router-dom";
import { getBusiness, resetBusiness, selectBusiness } from "./businessSlice";
import SearchItem from "../../components/searchItem";

export default function BusinessDetails() {
    const dispatch = useDispatch();
    const { businessId } = useParams();
    const business = useSelector(selectBusiness);
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(getBusiness(businessId));
    }, [dispatch]);

    useEffect(() => {
        return () => {
            dispatch(resetBusiness());
        }
    }, [])

    return (
        <>
            <div className="nav-back">
                    <p onClick={() => navigate(-1)}><span>{'<'}</span> Go Back To Search</p>
            </div>
            {
                business.status === 'success'
                    ?
                    <SearchItem detailsPage={true} {...business.business} />
                    :
                    <></>
            }
            <div className="review-list">
                {
                    business.business.businessReviews
                    ?
                    business.business.businessReviews.reviews.map(review => {
                        return (
                            <div className="review-item" key={review._id}>
                                <h1>{review.rating}</h1>
                                <p>{review.reviewText}</p>
                            </div>
                        )
                    })
                    :
                    business.status === 'success'
                    ?
                    <h1 className="no-reviews">Be the first to review!</h1>
                    :
                    <p className="loading-animation">Loading...</p>
                }
            </div>
        </>
    )
}