import React, { useEffect, useState } from "react";

const useAuth = () => {
  const [authToken, setAuthToken] = useState(
    sessionStorage.getItem("authToken") || null
  );
  const isAuthenticated = !!authToken;

  useEffect(() => {
    if (authToken) {
      sessionStorage.setItem("authToken", authToken);
    } else {
      sessionStorage.removeItem("authToken");
    }
  }, [authToken]);

  const login = (token: string) => {
    setAuthToken(token);
  };

  const logout = () => {
    setAuthToken(null);
  };

  return { isAuthenticated, logout, login };
};

export default useAuth;
