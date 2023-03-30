import React from 'react';

import frameImage from "/public/scotty-featured-frame.png";

const Frame = (props) => {
    return <>
        <div style={{
            backgroundImage: `url(${frameImage})`,
            minHeight: "100vh",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
        }}>
            {props.children}
        </div>
        
        
    </>
}

export default Frame;