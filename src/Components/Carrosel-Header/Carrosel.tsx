import "./Carrosel.css";

const services = [
    {
        image: "/services/website.jpg",
        title: "Websites",
    },
    {
        image: "/services/ecommerce.jpg",
        title: "E-commerce",
    },
    {
        image: "/services/system.jpg",
        title: "Sistemas Web",
    },
    {
        image: "/services/mobile.jpg",
        title: "Responsivos",
    },
];

export const Carrosel = () => {
    return (
        <div className="hero-slider">
            <div className="slider-track">

                {[...services, ...services].map((service, index) => (
                    <div className="slide" key={index}>
                        <img src={service.image} alt={service.title} />
                        <span>{service.title}</span>
                    </div>
                ))}

            </div>
        </div>
    );
};