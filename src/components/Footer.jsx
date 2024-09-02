import React from "react";

const Footer = () => {
  return (
    <footer className="p-4 footer footer-center bg-base-300 text-base-content">
      <aside>
        <p className="font-medium">
          Copyright © {new Date().getFullYear()} - Tagalonggo
        </p>
      </aside>
    </footer>
  );
};

export default Footer;
