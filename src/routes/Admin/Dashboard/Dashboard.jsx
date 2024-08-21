import React from "react";
import {
    AvatarDefault,
    BellIcon,
    SearchIcon,
    ViewsIcon,
    WritePostIcon,
} from "../../../assets/Icons";
import StatsCard from "./StatsCard";

const Dashboard = () => {
    return (
        <div className="w-full p-6">
            {/* Header section of Dashboard Page */}
            <div className="flex w-full justify-end gap-6 pr-4 *:self-center">
                <SearchIcon style={"size-8"} />
                <BellIcon style={"size-8"} />
                <div className="size-12 shrink-0 rounded-full border">
                    <AvatarDefault style={"size-full fill-neutral-200"} />
                </div>
            </div>

            {/* TOTAL POST + TOTAL VIEWS + MOST VIEWD ARTICLE SECTION */}

            <div
                className={`flex w-full justify-between gap-6 *:rounded-lg *:border-[2px] *:border-neutral-500 my-4`}
            >
                <StatsCard
                    title={"Total Posts"}
                    message={"214"}
                    Icon={WritePostIcon}
                    time="All Time"
                />
                <StatsCard
                    title="Total Views"
                    message="315K"
                    Icon={ViewsIcon}
                    time="This Month"
                />

                <div className={`grow p-2`}>
                    <span className="block text-sm text-neutral-600">
                        Most Views Article
                    </span>
                    <div
                        className={`my-1 px-2 text-3xl font-medium line-clamp-1`}
                    >
                        The Most Awesome Article Man has ever written.
                    </div>
                    <div className={`w-full text-end text-sm text-neutral-600`}>
                        All Time
                    </div>
                </div>
            </div>

            {/* CHART: Views Chart  */}
            <div className={`w-full`}>
                <h2 className="text-[34px] font-medium">Total Views</h2>
                <div>Chart</div>
            </div>
        </div>
    );
};

export default Dashboard;
