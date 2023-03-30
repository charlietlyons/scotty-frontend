import React from "react";

import jordan from "/public/michael-jordan-thumbnail.png";

const DataLoadingSpinner = () => {
    return <>
        <img src={jordan} alt="Loading Spinner" />
        <p>Loading///</p>
    </>
};

export default DataLoadingSpinner;