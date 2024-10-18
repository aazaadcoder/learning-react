import { createContext, useContext } from "react";



export const ThemeContext = createContext({
    themeMode : "light",
    darkTheme: ()=>{},
    lightTheme:()=>{}
})
// default value daal sakte hai 

export const ThemeProvider = ThemeContext.Provider

export default function useTheme(){
    return useContext(ThemeContext)
}



//mostly production code mai ese hi hota hai