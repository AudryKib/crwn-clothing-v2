import react, { useState } from "react";
import { createContext } from "react";

// as the avctual value you want to access 
export const userContext = createContext({
currentUser: null,
setCurrentuser: () => null

});


export const UserProvider  = ({children }) => {

    const [currentUser, setCurrentuser] = useState(null);

    const value = {currentUser, setCurrentuser}
    return <userContext.Provider value={value}>{children}</ userContext.Provider>
}
 