import React from "react";
import { useGoogleLogin } from "react-use-googlelogin";

const GoooleAuthContext = React.createContext();

export const GoogleAuthProvider = ({ children }) => {
  const googleAuth = useGoogleLogin({
    clientId:
      "213504333534-j7eknusn92gio83jq5vmd7tsdo7vnjf3.apps.googleusercontent.com",
  });

  return (
    <GoooleAuthContext.Provider value={googleAuth}>
      {children}
    </GoooleAuthContext.Provider>
  );
};
export const useGoogleAuth = () => React.useContext(GoooleAuthContext);
