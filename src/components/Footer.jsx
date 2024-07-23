import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="bg-[#132d3e] text-sm p-4 text-center text-white">
      Copyright © {currentYear} <strong>Ibtissam Neggaoui</strong>. All Rights reserved.
    </div>
  );
};

export default Footer;

