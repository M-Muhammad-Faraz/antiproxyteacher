import { onAuthStateChanged } from "firebase/auth";
import React, { useContext, useEffect, useState } from "react";
import { auth } from "../settings/firebase";
import { signOut } from "firebase/auth";
import axios from "axios";
import { teacher } from "../model/teacher";
const DataContext = React.createContext();

export const useData = () => {
  return useContext(DataContext);
};

export const DataProvidor = ({ children }) => {
  const [user, setUser] = useState(null);
  const [teacherInfo, setTeacherInfo] = useState(null);
  const [lectures, setLectures] = useState([]);

  const [classInfo, setClassInfo] = useState({});
  const [listOfStudents, setListOfStudents] = useState([]);
  const [isClassStarted, setIsClassStarted] = useState(false);
  const [qrCode, setQrCode] = useState("");
  const [code, setCode] = useState("");

  const signout = async () => {
    await signOut(auth);
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
        setTeacherInfo(
          new teacher(usr.uid, usr.displayName, usr.email, usr.phoneNumber)
        );
        getLectures(usr.uid);
      } else {
        setTeacherInfo(null);
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
        teacherInfo,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
