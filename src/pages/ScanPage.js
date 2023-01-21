import React from "react";
import { useData } from "../context/DataProvidor";

const ScanPage = () => {
  const { qrCode, setIsClassStarted } = useData();
  return (
    <div className="">
      {" "}
      <h1>Please Scan In order to join class room</h1>
      <img src={qrCode} alt="" width={400} height={400} />
      <button
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
