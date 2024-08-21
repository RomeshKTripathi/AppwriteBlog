import React from "react";
import { AvatarDefault, BellIcon } from "../../assets/Icons";
import ShowProfileOptionsOnClick from "./ShowProfileOptionsOnClick";

function Profile() {
    return (
        <div className="flex gap-5 *:self-center">
            <BellIcon style={"size-7 cursor-pointer"} />
            <ShowProfileOptionsOnClick>
                <div className="relative size-10 shrink-0 rounded-full border">
                    <AvatarDefault
                        style={"size-full fill-neutral-400 cursor-pointer"}
                    />
                </div>
            </ShowProfileOptionsOnClick>
        </div>
    );
}

export default Profile;
