import "./LocalBusiness.css";

function LocalBusiness() {

    const services = [

        {
            icon: "🏨",
            title: "Hotels & Stays",
            rating: "4.7",
            description: "Find comfortable hotels, resorts and homestays near tourist places.",
            button: "Book Now"
        },

        {
            icon: "🍴",
            title: "Restaurants",
            rating: "4.8",
            description: "Discover authentic South Indian food and local restaurants.",
            button: "Reserve Table"
        },

        {
            icon: "🚗",
            title: "Vehicle Rentals",
            rating: "4.6",
            description: "Book bikes, cars and taxis for a comfortable journey.",
            button: "Rent Now"
        },

        {
            icon: "🧑‍💼",
            title: "Local Guides",
            rating: "4.9",
            description: "Hire verified local guides for a better travel experience.",
            button: "Hire Guide"
        },

        {
            icon: "🛍",
            title: "Handicrafts",
            rating: "4.7",
            description: "Support local artisans and shop authentic handmade products.",
            button: "Shop Now"
        },

        {
            icon: "📷",
            title: "Photography",
            rating: "4.8",
            description: "Book professional photographers for memorable trips.",
            button: "Book Photographer"
        }

    ];


    return (

        <section className="business-section">

            <h2>Support Local Businesses</h2>

            <p>
                Connect with trusted local services to make your journey more comfortable and support local communities.
            </p>

            <div className="business-container">

                {
                    services.map((service, index) => (

                        <div className="business-card" key={index}>

                            <div className="business-icon">
                                {service.icon}
                            </div>

                            <h3>{service.title}</h3>

                            <div className="rating">
                                ⭐ {service.rating}
                            </div>

                            <p>{service.description}</p>

                            <button>
                                {service.button}
                            </button>

                        </div>

                    ))
                }

            </div>

        </section>

    );

}

export default LocalBusiness;