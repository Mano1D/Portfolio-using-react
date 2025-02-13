import React, { useState } from "react";
import Header from "./Header";
import "./Skills.css";

const Skills = () => {
    const [activeTab, setActiveTab] = useState("skillSet");

    return (
        <>
            <div className="container-fluid p-0">
                <Header />
                <section className="resume-section" id="skills">
                    <div className="resume-section-content">
                        <h2 className="mb-5">Skills</h2>

                        {/* Tab Buttons */}
                        <div className="tabs">
                            <button
                                className={activeTab === "skillSet" ? "active" : ""}
                                onClick={() => setActiveTab("skillSet")}
                            >
                                Skill Set
                            </button>
                            <button
                                className={activeTab === "softSkills" ? "active" : ""}
                                onClick={() => setActiveTab("softSkills")}
                            >
                                Soft Skills
                            </button>
                        </div>

                        {/* Skill Set Section */}
                        {activeTab === "skillSet" && (
                            <ul className="skill-list">
                                <li><i className="fas fa-code"></i> Java Programming</li>
                                <li><i className="fas fa-cloud"></i> Cloud Computing</li>
                                <li><i className="fas fa-tools"></i> DevOps (Learning)</li>
                                <li><i className="fab fa-react"></i> MERN Stack</li>
                                <li><i className="fas fa-database"></i> MySQL</li>
                            </ul>
                        )}

                        {/* Soft Skills Section */}
                        {activeTab === "softSkills" && (
                            <ul className="skill-list">
                                <li><i className="fas fa-user-tie"></i> Leadership</li>
                                <li><i className="fas fa-comments"></i> Communication</li>
                                <li><i className="fas fa-bolt"></i> Fast Learner</li>
                            </ul>
                        )}
                    </div>
                </section>
                <hr className="m-0" />
            </div>
        </>
    );
};

export default Skills;
