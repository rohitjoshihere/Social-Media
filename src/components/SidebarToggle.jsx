import React, { useState } from "react";
import Sidebar from "./Sidebar"; // Import your Sidebar component

const SidebarToggle = () => {
    // State to control sidebar visibility
    const [isSidebarVisible, setIsSidebarVisible] = useState(false);

    // Toggle function to show/hide the sidebar
    const toggleSidebar = () => {
        setIsSidebarVisible(!isSidebarVisible);
    };

    return (
        <div className="relative w-full md:w-1/5 order-1 md:fixed">
            {/* Toggle Button */}
            <button
                className="md:hidden p- text-black text-xl font-extrabold rounded fixed top-4 right-4 z-50"
                onClick={toggleSidebar}
            >
                <i class="ri-menu-fold-line"></i>
                {isSidebarVisible ? "Hide Sidebar" : "Show Sidebar"}
            </button>

            {/* Sidebar */}
            <div
                className={`h-screen transition-transform duration-300 ease-in-out
          fixed md:relative top-0 left-0 z-40 
          ${isSidebarVisible ? "translate-x-0" : "-translate-x-full"} 
          md:translate-x-0`}
            >
                <Sidebar />
            </div>

            {/* Overlay (optional for better UX) */}
            {isSidebarVisible && (
                <div
                    className="md:hidden fixed inset-0 bg-black opacity-50 z-30"
                    onClick={toggleSidebar}
                ></div>
            )}
        </div>
    );
};

export default SidebarToggle;
