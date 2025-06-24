import React from "react";

const StatCard = ({
  title,
  value,
  titleColor = "text-prime",
  valueColor = "text-[#FF897B]",
  bgColor = "bg-white",
  borderColor = "border-transparent",
  borderWidth = "border-0",
  borderRadius = "rounded-2xl",
  padding = "p-6",
  titleFont = "font-sfpro-medium",
  valueFont = "font-sfpro-bold",
  className = "",
  children,
}) => {
  return (
    <div
      className={`${bgColor} ${borderColor} ${borderWidth} ${borderRadius} ${padding} ${className}`}
    >
      <div className="space-y-1">
        <p className={`${titleFont} ${titleColor} text-base`}>{title}</p>
        <p className={`${valueFont} ${valueColor} text-2xl`}>{value}</p>
        {children}
      </div>
    </div>
  );
};

export default StatCard;
