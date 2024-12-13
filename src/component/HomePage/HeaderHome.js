import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './HomePage.css'

const HeaderHome = ({ image1, image2 }) => {
    return (
        <div style={{ position: 'relative', width: '100%', height: 720,


            margin: 0,
            padding: 0, }}>
            {/* Background Image */}
            <img
                src={image2}
                alt="Background"
                style={{
                    width: '100%',
                    height: '100%',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    objectFit: 'cover',

                }}
            />

            {/* Gradient Overlay */}
            <div
                style={{
                    position: 'absolute',
                    width: '100%',
                    height: '100%',
                    background: 'linear-gradient(119deg, #ED4690 0%, #5522CC 100%)',
                    opacity: 0.9,
                }}
            />

            {/* Navbar */}
            <nav className="navbar navbar-expand-lg" style={{ position: 'absolute', width: '100%' }}>
                <div className="container-fluid">
                    <a className="navbar-brand text-white fw-bold" href="#home">
                        My Tickets
                    </a>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNav"
                        aria-controls="navbarNav"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link text-white" href="#music">Music</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white" href="#sports">Sports</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white" href="#stage">Stage and Art</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white" href="#talkshow">Talkshow</a>
                            </li>
                            <li className="nav-item">
                                <a className="btn btn-outline-light rounded-pill px-4" href="#login">Login</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            {/* Content */}
            <div className="container-fluid text-white position-relative" style={{ top: '150px' }}>
                <h1 className="fw-bold" style={{ fontSize: '40px' }}>
                    SBS MTV The Kpop Show Ticket Package
                </h1>
                <p style={{ fontSize: '18px', lineHeight: '1.5' }}>
                    Look no further! Our SBS The Show tickets are the simplest way for you to experience a live Kpop recording.
                </p>
                <div className="d-flex gap-3">
                    <a href="#get-ticket" className="btn btn-pink text-white fw-bold rounded-pill px-5">
                        Get Ticket
                    </a>
                    <a href="#learn-more" className="btn btn-outline-light fw-bold rounded-pill px-5">
                        Learn More
                    </a>
                </div>
            </div>

            {/* Highlight Image */}
            <div className="position-absolute" style={{ bottom: '50px', left: '50px' }}>
                <img src={image1} alt="Highlight" className="img-fluid" style={{ maxHeight: '500px' }} />
            </div>
        </div>
    );
};

export default HeaderHome;
