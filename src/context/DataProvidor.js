import { onAuthStateChanged } from "firebase/auth";
import React, { useContext, useEffect, useState } from "react";
import { auth } from "../settings/firebase";
const DataContext = React.createContext();

export const useData = () => {
  return useContext(DataContext);
};

export const DataProvidor = ({ children }) => {
  const [user, setUser] = useState(undefined);
  useEffect(()=>{
    onAuthStateChanged(auth, (usr) => {
      if (usr) {
        console.log(usr);
        setUser(usr);
      } else {
        console.log("else Ran");
        setUser(undefined);
      }
    });

  },[
    auth
  ])

  return (
    <DataContext.Provider
      value={{
        user: true,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
