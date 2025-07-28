import React from "react";

const Loader: React.FC = () => {
  return (
    <div className="fixed inset-0 bg-white/80 flex items-center justify-center z-50 bg-[url(/background.png)]">
    <div className="w-12 h-12 border-4 border-t-black border-gray-300 rounded-full animate-spin"></div>
    </div>
  );
};

export default Loader;