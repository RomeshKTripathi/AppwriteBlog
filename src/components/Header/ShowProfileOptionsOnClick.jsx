import React, { cloneElement, useState } from "react";
import ProfileNavigation from "./ProfileNavigation";

function ShowProfileOptionsOnClick({ children }) {
    const [displayNavigation, setDisplayNavigation] = useState(false);
    const handleClick = () => {
        setDisplayNavigation((prev) => !prev);
    };
    return (
        <>
            {cloneElement(children, { onClick: handleClick })}
            {displayNavigation ? (
                <ProfileNavigation
                    onMouseLeave={() => setDisplayNavigation(false)}
                />
            ) : null}
        </>
    );
}

export default ShowProfileOptionsOnClick;
