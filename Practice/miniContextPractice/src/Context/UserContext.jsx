import { createContext, useContext, useState } from "react";


const UserContext = createContext()

// export default userContext;

const UserContextProvider = ({children})=>{
    const [user, setUser] = useState(null)

    return(
        <UserContext.Provider value={{user, setUser}}>
        {children}
        </UserContext.Provider>
    )
}

export {UserContextProvider,
    UserContext};