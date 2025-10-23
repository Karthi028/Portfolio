import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const Docs = [
    {
        "id": 1,
        "name": "AdvancedJs",
        "imageUrl": "/certificates/AdvancedJs.png"
    },
    {
        "id": 2,
        "name": "Database",
        "imageUrl": "/certificates/Database.png"
    },
    {
        "id": 3,
        "name": "Fullstack",
        "imageUrl": "/certificates/Fullstack.png"
    },
    {
        "id": 4,
        "name": "HTML",
        "imageUrl": "/certificates/Html.png"
    },
    {
        "id": 5,
        "name": "JsBasic",
        "imageUrl": "/certificates/JsBasic.png"
    },
    {
        "id": 6,
        "name": "Node",
        "imageUrl": "/certificates/Node.png"
    },
    {
        "id": 7,
        "name": "Reactjs",
        "imageUrl": "/certificates/ReactJs.png"
    }
]

export const Certifications = () => {

    return (
        <section id="Certificates" className="pt-18 pb-8 px-4 relative bg-secondary/20">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-7 text-center">
                    Certi<span className="text-primary">fications</span>
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
                    {Docs.map(({ name, id, imageUrl }) => (
                        <CarouselItem key={id} className="basis-1/1 md:basis-1/2 lg:basis-1/3 rounded-2xl">
                            <img
                                src={imageUrl}
                                alt={name}
                                className="h-80 sm:h-100 object-contain"
                            />
                        </CarouselItem>
                    ))}
                </CarouselContent>
            </Carousel>

        </section>
    );
};