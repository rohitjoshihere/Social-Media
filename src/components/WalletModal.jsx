import React from "react";

const WalletModal = ({ isOpen, onClose }) => {
  return isOpen ? (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white rounded-lg p-6 w-80 shadow-lg relative">
        <button
          className="absolute top-4 right-4 text-gray-600 hover:text-gray-800"
          onClick={onClose}
        >
          ✕
        </button>
        <h2 className="text-xl font-bold mb-4 text-center">Connect MetaMask</h2>
        <p className="text-sm text-gray-600 mb-4 text-center">
          Connect your wallet to start using the app.
        </p>
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded-md w-full hover:bg-blue-600"
        >
          Connect Wallet
        </button>
      </div>
    </div>
  ) : null;
};

export default WalletModal;
