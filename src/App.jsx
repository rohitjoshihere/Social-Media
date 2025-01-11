import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import Feed from "./components/Feed";
import RightSidebar from "./components/RightSidebar";
import SidebarToggle from "./components/SidebarToggle";
import WalletModal from "./components/WalletModal";

const App = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const closeModal = () => setModalOpen(false);
  const openModal = () => setModalOpen(true);

  return (
    <div className="flex flex-col md:flex-row min-h-screen font-sans">
      {/* Sidebar - Hidden on small screens */}
      <WalletModal isOpen={isModalOpen} onClose={closeModal}/>

      <div className="w-full md:w-1/5 order-1	">
        <SidebarToggle openModal={openModal}/>
      </div>

      {/* Main Feed - Takes full width on small screens */}
      <div className="w-full md:w-3/5 md:order-2	order-3">
        <Feed />
      </div>

      {/* Right Sidebar - Hidden on small screens */}
      <div className="w-full md:w-1/5 order-2 md:order-3">
        <RightSidebar />
      </div>
    </div>
  );
};

export default App;
