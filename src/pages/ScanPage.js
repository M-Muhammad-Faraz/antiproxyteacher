import React from "react";
import { useData } from "../context/DataProvidor";

import classes from "./ScanPage.module.css";

const ScanPage = () => {
  const { qrCode, setIsClassStarted, code } = useData();
  console.log(code);
  return (
    <div className={"" + classes.bg}>
      {" "}
      <div className={"" + classes.fg}>
        <h1>Please scan to join digital class</h1>
        <img src={qrCode} alt="" width={400} height={400} />
        <h4>Class Code: {code}</h4>
      </div>
      <button
        className={"" + classes.customBtn}
        onClick={() => {
          setIsClassStarted(true);
        }}
      >
        Start Class
      </button>
    </div>
  );
};

export default ScanPage;
