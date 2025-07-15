import { useContext } from "react";
import { ThemeContext, type ThemeContextType } from "../context/ThemeProvider";

const useTheme = (): ThemeContextType => {
    const context = useContext(ThemeContext);
    if(!context){
        throw new Error("useTheme must be used within a theme provider");
    }

    return context;
};

export default useTheme;