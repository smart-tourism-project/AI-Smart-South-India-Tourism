import "./FacilityCard.css";

function FacilityCard({ title, facilities }) {

    return (

        <div className="facility-card">

            <h3>{title}</h3>

            {facilities.map((facility, index) => (

                <div className="facility-item" key={index}>

                    <h4>{facility.name}</h4>

                    {facility.rating && (
                        <p>⭐ {facility.rating}</p>
                    )}

                    {facility.distance && (
                        <p>📍 {facility.distance}</p>
                    )}

                    {facility.phone && (
                        <p>📞 {facility.phone}</p>
                    )}

                    <button
                        className="navigate-btn"
                        onClick={() =>
                            window.open(
                                `https://www.google.com/maps/dir/?api=1&destination=${facility.latitude},${facility.longitude}`,
                                "_blank"
                            )
                        }
                    >
                        🗺 Get Directions
                    </button>

                </div>

            ))}

        </div>

    );

}

export default FacilityCard;