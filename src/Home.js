import React from "react";
import Header from "./Header";
import "./Home.css";
import '@fortawesome/fontawesome-free/css/all.min.css'; // Import FontAwesome styles

const Home = () => {
    return (
        <>
            <div className="container-fluid p-0">
                <Header />
                <section className="resume-section" id="about">
                    <div className="resume-section-content">
                        <h1 className="mb-0">
                            MANONMANI G
                        </h1>
                        <div className="subheading mb-5">
                            Karpagam Institute Of Technology, Coimbatore<br />
                            {/* 9894939261<br /> */}
                            <a href="mailto:manonmani192005@gmail.com">manonmani192005@gmail.com</a>
                        </div>
                        <p className="lead mb-5">
                            ☁️ **Cloud & DevOps Enthusiast** | **Java Lover** | **MERN Developer** 🚀
                            <br /><br />
                            Passionate about **Cloud Computing & DevOps**, with **AWS certification** and hands-on experience in **CI/CD, automation, and scalable deployments**. A **Java enthusiast** who enjoys solving complex problems and building robust applications. 
                            Skilled in the **MERN stack**, I’ve developed a **Student Management System** and am currently working on an **E-commerce Bookstore** 📚.
                            <br /><br />
                            With a strong foundation in **SQL & database management**, I ensure efficiency and scalability in every project. A **problem-solver, fast learner, and team player**, always eager to **innovate, collaborate, and make an impact**. Let’s create something amazing! 💡✨
                        </p>

                        {/* Social Icons */}
                        <div className="social-icons">
                            <a className="social-icon" href="https://www.linkedin.com/in/manonmani-g/" target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-linkedin-in"></i>
                            </a>
                            <a className="social-icon" href="https://github.com/Mano1D" target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-github"></i>
                            </a>
                            <a className="social-icon" href="https://leetcode.com/u/Manonmani19/" target="_blank" rel="noopener noreferrer">
                                <i className="fa-solid fa-code"></i>
                            </a>
                            <a className="social-icon" href="https://www.geeksforgeeks.org/user/manonmanoccj/" target="_blank" rel="noopener noreferrer">
                                <i className="fa-solid fa-book"></i>
                            </a>
                        </div>
                    </div>
                </section>
                <hr className="m-0" />
            </div>
        </>
    );
};

export default Home;
