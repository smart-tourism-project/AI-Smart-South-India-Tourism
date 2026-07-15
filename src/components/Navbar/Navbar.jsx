import "./Navbar.css";

import logo from "../../assets/Images/logo for project.png";

import { Link } from "react-router-dom";

import { useContext } from "react";

import { TripContext } from "../../context/TripContext";


function Navbar(){


    const { tripPlaces } = useContext(TripContext);


    return(

        <header className="navbar">


            {/* Logo */}

            <div className="logo-section">


                <img
                    src={logo}
                    alt="Tourism Logo"
                    className="logo-circle"
                />


                <h2 className="logo-title">
                    Smart Tourism
                </h2>


            </div>



            {/* Navigation */}

            <nav className="nav-links">


                <Link to="/">
                    Home
                </Link>


                <Link to="/explore">
                    Explore
                </Link>


                <Link to="/planner">

                    🤖 AI Trip

                    <span className="trip-count">
                        ({tripPlaces.length})
                    </span>

                </Link>


                <Link to="/booking">
                    Booking
                </Link>


                <Link to="/business">
                    Local Business
                </Link>


                <Link to="/login">
                    Login
                </Link>


            </nav>


        </header>


    );

}


export default Navbar;