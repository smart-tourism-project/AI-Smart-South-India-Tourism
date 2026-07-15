import "./Festivals.css";

function Festivals() {

    const festivals = [

        {
            emoji: "🌸",
            name: "Bathukamma",
            state: "Telangana",
            month: "October"
        },

        {
            emoji: "🎭",
            name: "Bonalu",
            state: "Telangana",
            month: "July"
        },

        {
            emoji: "🛕",
            name: "Tirupati Brahmotsavam",
            state: "Andhra Pradesh",
            month: "September"
        },

        {
            emoji: "☕",
            name: "Araku Coffee Festival",
            state: "Andhra Pradesh",
            month: "November"
        },

        {
            emoji: "🎉",
            name: "Pongal",
            state: "Tamil Nadu",
            month: "January"
        },

        {
            emoji: "🎼",
            name: "Chennai Music Festival",
            state: "Tamil Nadu",
            month: "December"
        }

    ];

    return (

        <section className="festival-section">

            <h2>Upcoming Festivals & Events</h2>

            <p>
                Experience the culture and traditions of South India through its vibrant festivals.
            </p>

            <div className="festival-container">

                {festivals.map((festival, index) => (

                    <div className="festival-card" key={index}>

                        <div className="festival-icon">
                            {festival.emoji}
                        </div>

                        <h3>{festival.name}</h3>

                        <h4>{festival.state}</h4>

                        <p>{festival.month}</p>

                    </div>

                ))}

            </div>

        </section>

    );

}

export default Festivals;