import React from "react";

const StatsCard = ({ title, Icon, message, time, style }) => {
    return (
        <div className={`p-2 ${style}`}>
            <span className="block text-sm text-neutral-600">{title}</span>
            <div className={`flex gap-2 px-6 *:self-center my-1`}>
                {Icon ? (
                    <Icon style={"size-[34px] stroke-[1px] fill-neutral-700"} />
                ) : null}
                <span className="text-3xl font-semibold text-neutral-700">
                    {message}
                </span>
            </div>
            <div className={`w-full text-end text-sm text-neutral-600`}>
                {time}
            </div>
        </div>
    );
};

export default StatsCard;
