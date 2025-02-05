import React from "react";

const BrazilFlag = ({ className = "w-4 h-4" }: { className?: string }) => {
  return (
    <span className={`inline-block ${className}`} title="Brazilian Item">
      🇧🇷
    </span>
  );
};

export default BrazilFlag;
