import React, { useEffect, useState } from "react";
import Header from "./Header";
import "./Interest.css";

const Interest = () => {
    const [leetcodeProgress, setLeetcodeProgress] = useState(0);
    const [gfgProgress, setGfgProgress] = useState(0);

    useEffect(() => {
        setTimeout(() => setLeetcodeProgress(60), 500); // Example: 80% progress
        setTimeout(() => setGfgProgress(70), 500); // Example: 70% progress
    }, []);

    return (
        <>
            <div className="container-fluid p-0">
                <Header />
                <section className="resume-section" id="interests">
                    <div className="resume-section-content">
                        <h2 className="mb-5">🚀 Interests</h2>
                        <ul className="interest-list">
                            <li>🚀 Passionate about **exploring new technologies** & learning Cloud & DevOps ☁️.</li>
                            <li>💻 Love **problem-solving & coding challenges**, especially in **Java & MERN stack**.</li>
                            <li>🎯 Active in **competitive coding** on **LeetCode & GFG** to sharpen problem-solving skills.</li>
                            <li>🖊️ Enjoy **tech blogging**, **open-source contributions**, and **UI/UX exploration** 🎨.</li>
                            <li>🌍 Fascinated by **AI for sustainability** & love working on impactful projects.</li>
                            <li>📚 Love **reading**, **drawing**, and **creative writing** ✨.</li>
                        </ul><hr></hr>

                        {/* Progress Bar Section */}
                        <div className="progress-container">
                            <h3>📊 Coding Progress</h3>
                            <div className="progress-bar">
                                <span>LeetCode</span>
                                <div className="progress">
                                    <div className="progress-fill leetcode" style={{ width: `${leetcodeProgress}%` }}>
                                        {leetcodeProgress}%
                                    </div>
                                </div>
                            </div>
                            <div className="progress-bar">
                                <span>GeeksforGeeks</span>
                                <div className="progress">
                                    <div className="progress-fill gfg" style={{ width: `${gfgProgress}%` }}>
                                        {gfgProgress}%
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </section>
                <hr className="m-0" />
            </div>
        </>
    );
};

export default Interest;
