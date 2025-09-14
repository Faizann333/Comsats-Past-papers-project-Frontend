import { createContext, useState, useEffect } from "react";
import { getMe } from "../../apis/authApi";
import Loader from "../loader/Loader";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
 const [loading, setLoading] = useState(true);

  // check if user already logged in
  useEffect(() => {
    const checkUser = async () => {
      try {

        const res = await getMe();
        if (res.success) {
          setUser(res.user);
           console.log(" data",res.user);
        }
       
      } catch (err) {
        
        setUser(null);
      }finally {
        setLoading(false);
      }
    };
    checkUser();
  }, []);

  return (
    <AuthContext.Provider value={{ user, setUser,loading }}>
    {loading ? <Loader/> :
     children
    }
     
    </AuthContext.Provider>
  );
};
