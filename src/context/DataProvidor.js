import { onAuthStateChanged } from "firebase/auth";
import React, { useContext, useEffect, useState } from "react";
import { auth } from "../settings/firebase";
import { signOut } from "firebase/auth";
import axios from "axios";
const DataContext = React.createContext();

export const useData = () => {
  return useContext(DataContext);
};

export const DataProvidor = ({ children }) => {
  const [user, setUser] = useState(null);
  const [lectures, setLectures] = useState([]);

  const [classInfo, setClassInfo] = useState({});
  const [listOfStudents, setListOfStudents] = useState([]);
  const [isClassStarted, setIsClassStarted] = useState(false);
  const [qrCode, setQrCode] = useState("");
  const [code, setCode] = useState("");
  const signout = async () => {
    const res = await signOut(auth);
  };
  const getLectures = async (teacherID) => {
    const res = await axios.post("http://localhost:8000/lectures", {
      teacherID,
    });
    setLectures(res.data.msg);
  };

  useEffect(() => {
    onAuthStateChanged(auth, (usr) => {
      if (usr) {
        setUser(usr);
        getLectures(usr.uid);
      } else {
        setUser(null);
      }
    });
  }, [auth]);

  return (
    <DataContext.Provider
      value={{
        user,
        signout,
        lectures,
        classInfo,
        setClassInfo,
        listOfStudents,
        setListOfStudents,
        isClassStarted,
        setIsClassStarted,
        qrCode,
        setQrCode,
        code,
        setCode,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
