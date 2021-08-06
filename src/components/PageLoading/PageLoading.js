import React from "react";
import './PageLoading.css'
import Loader from "../Loader/Loader";

const PageLoading = () => {
    return (
        <div className={'PageLoading'}>
            <Loader/>
        </div>
    )
}

export default PageLoading