import React from "react";
import profile from '../assets/profile.jpg'

const Sidebar = () => {
    return (
        <div className="bg-[#F8FAFC] h-full p-4 border-r md:fixed block md:w-[19vw] w-[55vw]">
            <div className="flex justify-center items-center space-x-3 mb-5 md:block">
                <div className="flex flex-col justify-center items-center">
                    <img src={profile}
                        className="h-14 w-14 rounded-full"
                        alt="" />
                    <h2 className="font-bold mt-1">Bogdan</h2>
                    <p className="text-sm font-semibold text-gray-400">@nikitinteam</p>
                </div>
            </div>

            <ul className="md:space-y-4 space-y-2">
                <li className="font-semibold bg-black rounded-xl text-white p-2 text-nowrap	"><i className="ri-compass-3-fill text-xl mx-2 lg:inline"></i>News Feed</li>
                <li className="font-semibold p-2 hover:bg-black hover:text-white rounded-xl ease-in-linear"><i className="ri-mail-fill text-xl mx-2  lg:inline"></i>Messages</li>
                <li className="font-semibold p-2 hover:bg-black hover:text-white rounded-xl ease-in-linear "><i className="ri-wechat-fill text-xl mx-2  lg:inline"></i> Forums</li>
                <li className="font-semibold p-2 hover:bg-black hover:text-white rounded-xl ease-in-linear "><i className="ri-team-fill text-xl mx-2  lg:inline"></i>Friends</li>
                <li className="font-semibold p-2 hover:bg-black hover:text-white rounded-xl ease-in-linear "><i className="ri-image-fill text-xl mx-2  lg:inline"></i> Media</li>
                <li className="font-semibold p-2 hover:bg-black hover:text-white rounded-xl ease-in-linear "><i className="ri-settings-2-fill text-xl mx-2  lg:inline"></i>Settings</li>
            </ul>
            <div class="mt-5 hidden md:block relative inline-flex group w-full">
                <div
                    class="w-full absolute transitiona-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg filter group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200">
                </div>
                <button href="" target="" title="" role="button"
                    class="w-full relative  items-center justify-center px-5 py-2 text-base font-semibold text-black transition-all duration-200 bg-[#F8FAFC] border-dashed border-2 border-transparent focus:outline-none hover:bg-gray-300 rounded-xl text-center">
                    <div className="flex justify-center gap-2">
                        <i class="ri-google-play-fill text-3xl"></i>
                        <i class="ri-app-store-fill  text-3xl"></i>
                    </div>
                    Download the App
                </button>
            </div>
            {/* <div className="pt-5 hidden lg:block">
                <button className="font-semibold border-2 border-purple-300 border-dashed p-2 rounded-lg flex items-center justify-center w-full">
                    Download the App
                </button>
            </div> */}
        </div>
    );
};

export default Sidebar;
