import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const jobs = [
    {
        "id": 1,
        "name": "React",
        "imageUrl": "/images/react.png"
    },
    {
        "id": 2,
        "name": "Node.js & Express",
        "imageUrl": "/images/nodejs.png"
    },
    {
        "id": 3,
        "name": "MongoDB",
        "imageUrl": "/images/mongo.png"
    },
    {
        "id": 4,
        "name": "JavaScript",
        "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png"
    },
    {
        "id": 5,
        "name": "Tailwind CSS",
        "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg"
    },
    {
        "id": 6,
        "name": "HTML & CSS",
        "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg"
    },
    {
        "id": 7,
        "name": "GitHub",
        "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg"
    },
    {
        "id": 8,
        "name": "Postman",
        "imageUrl": "/images/postman.png"
    },
    {
        "id": 9,
        "name": "Netlify",
        "imageUrl": "/images/netlify.png"
    },
    {
        "id": 10,
        "name": "Render",
        "imageUrl": "/images/render.png"
    }
]

export const SkillsSection = () => {

    return (
        <section id="skills" className="pt-24 pb-15 px-4 relative bg-secondary/20">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    My <span className="text-primary"> Skills</span>
                </h2>
            </div>
            <Carousel
                plugins={[
                    Autoplay({
                        delay: 2000,
                    }),
                ]}
                className="w-full py-10"
            >
                <CarouselContent className="flex gap-5 sm:gap-20 items-center">
                    {jobs.map(({ name, id, imageUrl }) => (
                        <CarouselItem key={id} className="basis-1/3 lg:basis-1/8">
                            <img
                                src={imageUrl}
                                alt={name}
                                className="h-15 sm:h-20 object-contain"
                            />
                        </CarouselItem>
                    ))}
                </CarouselContent>
            </Carousel>

        </section>
    );
};