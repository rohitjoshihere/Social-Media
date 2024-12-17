import React from "react";
import story1 from '../assets/mountain.webp'
import story2 from '../assets/beach.jpeg'

const RightSidebar = () => {
    return (
        <div className="p-4 md:fixed static bg-[#F8FAFC] border-l w-100 md:w-[19vw] md:h-screen h-fit">
            {/* Stories */}
            <div>
                <h3 className="font-extrabold mb-3 text-xl">Stories</h3>
                <div className="flex lg:overflow-auto overflow-scroll gap-2">
                    <img
                        className="h-32 w-32 bg-gray-300 rounded-xl  md:hidden block"
                        src={story1} alt="" />
                    <img
                        className="h-32 w-32 bg-gray-300 rounded-xl "
                        src={story2} alt="" />
                    <img
                        className="h-32 w-32 bg-gray-300 rounded-xl md:hidden block"
                        src={story1} alt="" />
                    <img
                        className="h-32 w-32 bg-gray-300 rounded-xl"
                        src={story2} alt="" />
                    <img
                        className="h-32 w-32 bg-gray-300 rounded-xl md:hidden block"
                        src={story1} alt="" />
                </div>
            </div>

            {/* Suggestions */}
            <div className="mt-6 hidden md:block">
                <h3 className="font-extrabold text-xl mb-3">Suggestions</h3>
                <ul>
                    <li className="flex items-center justify-between mb-4 text-sm">
                        <span className="font-bold">Nick Shelburne</span>
                        <button className="text-white bg-black font-semibold rounded-full px-3 py-1 text-sm">Follow</button>
                    </li>
                    <li className="flex items-center justify-between mb-4 text-sm">
                        <span className="font-bold">Brittni Lando</span>
                        <button className="text-white bg-black font-semibold rounded-full px-3 py-1 text-sm">Follow</button>
                    </li>
                    <li className="flex items-center justify-between mb-1 text-sm">
                        <span className="font-bold">Nick Shelburne</span>
                        <button className="text-white bg-black font-semibold rounded-full px-3 py-1 text-sm">Follow</button>
                    </li>
                    <p className="font-semibold text-zinc-400">See all</p>
                </ul>
            </div>
            <div className="mt-6 hidden lg:block">
                <h3 className="font-extrabold text-xl mb-3">Recommendations</h3>
                <div className="flex flex-wrap gap-2">
                    <div className="flex flex-col justify-center items-center bg-[#D9EAFD] p-5 rounded-full">
                        <i className="ri-brush-4-fill"></i>
                        <p>
                            UI/UX
                        </p>
                    </div>
                    <div className="flex flex-col justify-center items-center bg-[#BCCCDC] p-5 rounded-full">
                        <i className="ri-music-2-fill"></i>
                        <p>
                            Music
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RightSidebar;
