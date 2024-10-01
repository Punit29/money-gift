import { createContext, useCallback, useContext, useMemo, useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import { readLocalStorageValue, useLocalStorage } from "@mantine/hooks";

import {FormValues} from "../Pages/AuthForm/index"

interface AuthContextType {
  handleLogout: () => void;
  user: FormValues | undefined;
  setUser: React.Dispatch<React.SetStateAction<FormValues | undefined>>;
}

const AuthContext = createContext<AuthContextType | null>(null);

export function useAuthContext() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuthContext must be used within a AuthProvider");
  }
  return context;
}

export function AuthProvider({ children }:any) {
  const navigate = useNavigate();
  const loggedInUser = readLocalStorageValue<FormValues>({
    key: "loggedUser"
  });
  
console.log("logged", loggedInUser);

  const [user, setUser] = useState<FormValues>();

  useEffect(() => {
    console.log("1111111111111");
    setUser(loggedInUser);
  }, [])
  
  const handleLogout = useCallback(() => {
    console.log("adasdasdasdas");
    navigate("/auth");
  }, [navigate]);

  const value = useMemo(() => {
    return {
      handleLogout,
      user,
      setUser,
    };
  }, [handleLogout, user, setUser]);

  useEffect(() => {
    console.log("adasdasdasdas");
    const getUserDetails = async () => {
      if (loggedInUser?.loggedUser) {
        navigate("/");
      } else {
        navigate("/auth");
      }
    };
    getUserDetails().catch((err) => {
      console.log(err);
    });
  }, [navigate, loggedInUser?.loggedUser]);

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}

AuthProvider.propTypes = {
    children: PropTypes.any,
  };