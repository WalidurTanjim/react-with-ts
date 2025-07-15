import React, { createContext, useEffect, useState, type ReactNode } from "react";

type Theme = "light" | "dark";

export interface ThemeContextType {
    theme: Theme;
    toggleTheme: () => void;
}

export const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

const ThemeProvider:React.FC<{children: ReactNode}> = ({ children }) => {
    const [theme, setTheme] = useState<Theme>("light");

    const toggleTheme = () => {
        setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'))
    }

    const value = {
        theme,
        toggleTheme
    }

    useEffect(() => {
        if(theme === 'dark'){
            document.documentElement.classList.add('dark');
        }else{
            document.documentElement.classList.remove('dark');
        }
    }, [theme]);

    return (
        <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
    );
};

export default ThemeProvider;