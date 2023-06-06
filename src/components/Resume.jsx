import React from "react";
import pdfFile from "../img/resume.pdf"; // Adjust the path as needed

function Resume() {
  return (
    <a href={pdfFile} download>
      My Resume!
    </a>
  );
}

export default Resume;
