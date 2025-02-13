import React from "react";
import Header from "./Header"; // Ensure this path is correct
import "./Experience.css";

const Projects = () => {
    return (
        <>
            <Header />  {/* Ensure navbar appears on top */}

            <div className="container-fluid">
                <section className="projects-section" id="projects">
                    <div className="projects-section-content">
                        <h2 className="mb-5">Projects</h2>

                        <div className="project-card">
                            <div className="project-info">
                                <h3 className="project-title">Student Detail Management System</h3>
                                <p>React-based application to update, view, and delete student details.</p>
                                <a href="#" className="project-link">View Project</a>
                            </div>
                            <div className="project-image">
                                <img src="\sm1.png" alt="Project 1" />
                            </div>
                        </div>

                        <div className="project-card">
                            <div className="project-info">
                                <h3 className="project-title">Book E-commerce Website</h3>
                                <p>Developing a full-featured MERN stack e-commerce site for book sales.</p>
                                <a href="http://localhost:3001/Home" className="project-link">View Project</a>
                            </div>
                            <div className="project-image">
                                <img src="\sm2.png" alt="Project 2" />
                            </div>
                        </div>

                        <div className="project-card">
                            <div className="project-info">
                                <h3 className="project-title">Unveiling Emotions</h3>
                                <p>Emotional analysis project using Python for interpreting emotional states.</p>
                                <a href="#" className="project-link">View Project</a>
                            </div>
                            <div className="project-image">
                                <img src="https://via.placeholder.com/200" alt="Project 3" />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Sliding Gallery */}
                {/* <div className="gallery">
                    <div className="gallery-container">
                        <img src="https://via.placeholder.com/400" alt="Gallery 1" />
                        <img src="https://via.placeholder.com/400" alt="Gallery 2" />
                        <img src="https://via.placeholder.com/400" alt="Gallery 3" />
                    </div>
                </div> */}

                <hr className="m-0" />
            </div>
        </>
    );
};

export default Projects;