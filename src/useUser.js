import { useState, useEffect } from "react";
import api from "./api/apiClient";

function useUser() {
  const storedJwt = localStorage.getItem("token");
  const [jwt] = useState(storedJwt || null);
  const [user, setUser] = useState(false);

  const getUser = async () => {
    try {
      const { data } = await api.get("/user");
      setUser(data);
    } catch (err) {
      console.log(err);
    }
  };

  const logout = async () => {
    try {
      await api.get("/logout");
      localStorage.removeItem("token");
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getUser();
  }, [jwt]);

  return { user, logout };
}

export default useUser;
