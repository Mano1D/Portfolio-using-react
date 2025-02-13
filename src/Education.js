import React from "react";
import Header from "./Header";
import "./Education.css";

const Education = () => {
    return (
        <>
            <div className="container-fluid p-0">
                <Header />
                <div className="content">
                    <p className="edu">Education</p>

                    <div className="school">
                        <p>Karpagam Institute Of Technology</p>
                        <p>B.Tech Information Technology</p>
                        <p><b>GPA: 8.11</b></p>
                        <p>2022 - 2026</p>
                    </div>

                    <div className="school">
                        <p>Sri Jayendra Swamigal Silver Jubliee Hr. Sec. Mat. School</p>
                        <p>Higher Secondary Certificate (HSC)</p>
                        <p><b>Percentage: 87%</b></p>
                        <p>2020 - 2022</p>
                    </div>

                    <div className="school">
                        <p>Socratees Matriculation School</p>
                        <p>Secondary School Leaving Certificate (SSLC)</p>
                        <p><b>Percentage: 98%</b></p>
                        <p>2006 - 2020</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Education;
