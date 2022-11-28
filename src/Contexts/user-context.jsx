
import { createContext,  useState, useEffect  } from "react";
import { onAuthStateChangedListener, signoutUser } from "../utils/firebase/firebase.utils";

// as the avctual value you want to access 
export const userContext = createContext({
currentUser: null,
setCurrentuser: () => null

});


export const UserProvider  = ({children }) => {

    const [currentUser, setCurrentuser] = useState(null);
    const value = {currentUser, setCurrentuser}

    signoutUser();
    
    useEffect(()=> {
        const unsubscribe = onAuthStateChangedListener((user)=>{
            console.log(user)
        })
        
        return unsubscribe
    },[]);

    return <userContext.Provider value={value}>{children}</ userContext.Provider>
}
 