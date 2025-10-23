import { ArrowUp } from "lucide-react";

export const Footer = () => {
    return (
        <footer className="backgrounds py-2 px-4  relative mt-4 pt-1 flex flex-wrap justify-between items-center">
            {" "}
            <p className="text-sm text-muted-foreground">
                {" "}
                &copy; {new Date().getFullYear()} Ready for a Code Racing....
            </p>
            <a
                href="#hero"
                className="p-2 absolute -top-12 right-[2%] rounded-full bg-primary/10 hover:bg-primary/20 border border-violet-400 text-primary transition-colors"
            >
                <ArrowUp size={20} />
            </a>
        </footer>
    );
};
