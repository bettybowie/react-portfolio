import React from "react";
import { IconContext } from "react-icons";
import { FaGithub, FaLinkedin, FaTwitter  } from "react-icons/fa";

export default function Footer() {
  return (
    <footer>
<a href="https://github.com/bettybowie" target="_blank" rel="noreferrer">
        <IconContext.Provider
          value={{
            size: "50px",
            color: "white",
            className: "global-class-name",
          }}
        >
          <FaGithub />
        </IconContext.Provider>
      </a>
      <a href="https://www.linkedin.com/in/bettybowielu/" target="_blank" rel="noreferrer">
        <IconContext.Provider
          value={{
            size: "50px",
            color: "white",
            className: "global-class-name",
          }}
        >
          <FaLinkedin />
        </IconContext.Provider>
      </a>
      <a href="https://twitter.com/xxxibbettyxxx" target="_blank" rel="noreferrer">
        <IconContext.Provider
          value={{
            size: "50px",
            color: "white",
            className: "global-class-name",
          }}
        >
          <FaTwitter />
        </IconContext.Provider>
      </a>
    </footer>
  );
}