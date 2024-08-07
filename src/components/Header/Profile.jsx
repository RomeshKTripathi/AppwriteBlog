import React, { useState } from "react";
import { AvatarDefault, BellIcon } from "../../assets/Icons";
import ProfileNavigation from "./ProfileNavigation";

function Profile() {
    const [displayNavigation, setDisplayNavigation] = useState(false);
    return (
        <div className="flex gap-5 *:self-center">
            <BellIcon style={"size-7 cursor-pointer"} />
            <div
                onClick={() => {
                    setDisplayNavigation((prev) => !prev);
                }}
                className="relative size-10 shrink-0 rounded-full border"
            >
                <AvatarDefault
                    style={"size-full fill-neutral-400 cursor-pointer"}
                />
            </div>
            {displayNavigation ? (
                <ProfileNavigation
                    onMouseLeave={() => setDisplayNavigation(false)}
                />
            ) : null}
        </div>
    );
}

export default Profile;
