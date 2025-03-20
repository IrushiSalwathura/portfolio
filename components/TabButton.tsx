import React, { ReactNode } from "react";

const TabButton = ({
  active,
  selectTab,
  children,
}: {
  active: boolean;
  selectTab: () => void;
  children: ReactNode;
}) => {
  const buttonClasses = active
    ? "text-yellow-800 border-b border-yellow-800"
    : "text-black-200 border-b border-black-200";
  return (
    <button
      onClick={selectTab}
      className={`mr-3 font-semibold hover:text-yellow-100 ${buttonClasses}`}
    >
      {children}
    </button>
  );
};

export default TabButton;
