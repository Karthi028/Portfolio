import { Briefcase, Code, User } from "lucide-react";

export const AboutSection = () => {
    return (
        <section id="about" className="py-15 px-4 relative">
            {" "}
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    About <span className="text-primary"> Me</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <h3 className="text-2xl font-semibold text-start sm:text-center">
                            Full-Stack Developer (MERN Certified) & End-to-End Creator
                        </h3>

                        <p className="text-start sm:text-center">
                            I am a <strong className="font-bold">MERN Full-Stack Developer</strong> equipped with comprehensive training from <strong className="font-bold">GUVI (an IIT-M & IIM-A incubated venture)</strong>, specializing in the entire application lifecycle. My focus is on delivering <strong className="font-bold">modern, production-ready</strong> web solutions that are <strong className="font-bold">high-performing, responsive</strong>, and <strong className="font-bold">user-friendly</strong>.
                        </p>

                        <p className="text-start sm:text-center">
                            I thrive on the challenge of developing clean, <strong className="font-bold">scalable code</strong> for both backend logic and dynamic React interfaces. I am committed to <strong className="font-bold">continuous skill refinement</strong>, always seeking out new technologies and techniques to build <strong className="font-bold">effective and elegant solutions</strong>.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                            <a href="#contact" className="cosmic-button">
                                {" "}
                                Get In Touch
                            </a>

                            <a
                                href="https://drive.google.com/file/d/1c2rGIyO-fyWvOli72i5ZcVGp6UtB2xO_/view?usp=drivesdk"
                                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Download CV
                            </a>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 gap-6">
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Code className="h-6 w-6 text-primary" />
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg"> Web Development</h4>
                                    <p className="text-muted-foreground">
                                        Creating responsive websites and web applications with
                                        modern frameworks.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <User className="h-6 w-6 text-primary" />
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg">Full-Stack Development</h4>
                                    <p className="text-muted-foreground">
                                        Architecting scalable APIs with Node.js/Express and managing robust
                                        data persistence with MongoDB.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Briefcase className="h-6 w-6 text-primary" />
                                </div>

                                <div className="text-left">
                                    <h4 className="font-semibold text-lg">End-to-End Application</h4>
                                    <p className="text-muted-foreground">
                                        Managing the entire application lifecycle, from conceptual
                                        design to version control and live deployment.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};