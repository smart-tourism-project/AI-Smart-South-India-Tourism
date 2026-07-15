import "./Footer.css";

function Footer() {

    return (

        <footer className="footer">

            <div className="footer-container">

                {/* About */}

                <div className="footer-section">

                    <h2>AI Smart South India Tourism</h2>

                    <p>
                        Discover South India with AI-powered travel planning.
                        Explore destinations, create personalized itineraries,
                        connect with local businesses, and enjoy unforgettable journeys.
                    </p>

                </div>

                {/* Quick Links */}

                <div className="footer-section">

                    <h3>Quick Links</h3>

                    <ul>

                        <li>Home</li>
                        <li>Explore</li>
                        <li>AI Planner</li>
                        <li>Booking</li>
                        <li>Business Portal</li>
                        <li>Contact</li>

                    </ul>

                </div>

                {/* States */}

                <div className="footer-section">

                    <h3>States Covered</h3>

                    <ul>

                        <li>Telangana</li>
                        <li>Andhra Pradesh</li>
                        <li>Tamil Nadu</li>

                    </ul>

                </div>

                {/* Contact */}

                <div className="footer-section">

                    <h3>Contact</h3>

                    <p>Email: support@aismarttourism.com</p>

                    <p>Phone: +91 98765 43210</p>

                    <p>Hyderabad, India</p>

                </div>

            </div>

            <hr />

            <div className="footer-bottom">

                <p>
                    © 2026 AI Smart South India Tourism. All Rights Reserved.
                </p>

            </div>

        </footer>

    );

}

export default Footer;