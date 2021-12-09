import React, { useEffect } from "react"
import { useDispatch } from "react-redux"
import { useParams } from "react-router-dom";
import { getBusiness } from "./businessSlice";

export default function BusinessDetails() {
    const dispatch = useDispatch();
    const { businessId } = useParams();
    
    useEffect(() => {
        dispatch(getBusiness(businessId));
    }, [dispatch]);

    return (
        <>
            <h1>Business Details Page</h1>
            <p>This page fetched the business by id in URL, adds it to state, and will display that information via a display component</p>
        </>
    )
}