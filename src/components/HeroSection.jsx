import { ArrowDown } from "lucide-react";
import { useEffect, useState } from "react";

export const HeroSection = () => {

    const [currentTheme, setCurrentTheme] = useState(null);

    useEffect(() => {
        const updateThemeFromStorage = (event) => {
            const newTheme = event?.detail || localStorage.getItem('theme') || 'light';
            setCurrentTheme(newTheme);
        };
        updateThemeFromStorage();
        window.addEventListener('themeChange', updateThemeFromStorage);
        return () => {
            window.removeEventListener('themeChange', updateThemeFromStorage);
        };
    }, []);

    return (
        <div className="flex items-center 2xl:px-[15%]">
            <div>{currentTheme === 'dark' ?
                <img src="/pic.jpg" alt="" className="hidden md:block p-10 mt-20 h-135 w-105 z-45 rounded-full opacity-0 animate-fade-in-delay-1" /> :
                <img src="/picc.jpg" alt="" className="hidden md:block p-10 mt-20 h-135 w-105 z-45 rounded-full opacity-0 animate-fade-in-delay-1" />
            }</div>
            <section
                id="hero"
                className="md:flex-1 relative min-h-screen flex flex-col items-center justify-center px-4"
            >
                <div className="container max-w-4xl mx-auto text-center z-10">
                    <div className="space-y-6">
                        <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold tracking-tight md:text-start">
                            <span className="opacity-0 animate-fade-in"> Hi, I'm</span>
                            <span className="text-transparent bg-clip-text bg-gradient-to-tr from-indigo-500 to-purple-500 font-bold opacity-0 animate-fade-in-delay-1">
                                {" "}
                                Karthi
                            </span>
                            <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2">
                                J
                            </span>
                        </h1>
                        <p className="text-md sm:text-lg md:text-xl max-2-2xl md:text-start opacity-0 animate-fade-in-delay-3">
                            A motivated MERN-Full-Stack Developer ready to build the modern web. I'm fully equipped to architect,
                            develop, and deploy end-to-end applications.
                        </p>

                        <div className="pt-4 opacity-0 animate-fade-in-delay-4 md:text-start">
                            <a href="#projects" className="cosmic-button">
                                View My Work
                            </a>
                        </div>
                    </div>
                </div>

                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
                    <span className="text-sm mb-2"> Scroll </span>
                    <ArrowDown className="h-5 w-5 text-primary" />
                </div>
            </section>
        </div>
    );
};