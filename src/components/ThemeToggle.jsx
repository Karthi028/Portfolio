import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "../lib/utils";


export const ThemeToggle = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        const storedTheme = localStorage.getItem("theme");
        if (storedTheme === "dark") {
            setIsDarkMode(true);
            document.documentElement.classList.add("dark");
        } else {
            localStorage.setItem("theme", "light");
            setIsDarkMode(false);
        }
    }, []);

    const toggleTheme = () => {
        const newTheme = isDarkMode ? "light" : "dark";
        if (newTheme === "dark") {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
        localStorage.setItem("theme", newTheme);
        setIsDarkMode(!isDarkMode);
        window.dispatchEvent(
            new CustomEvent('themeChange', { detail: newTheme })
        );
    };

    return (
        <button
            onClick={toggleTheme}
            className={cn(
                "fixed top-3 sm:top-2 right-1 z-50 p-2 rounded-full transition-colors duration-300",
                "focus:outlin-hidden"
            )}
        >
            {isDarkMode ? (
                <Sun className="h-6 w-6 text-yellow-300" />
            ) : (
                <Moon className="h-6 w-6 text-blue-300" />
            )}
        </button>
    );
};