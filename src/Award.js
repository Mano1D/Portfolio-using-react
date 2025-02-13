import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Header from "./Header";
import "./Award.css";

const certificates = [
  { name: "AWS Academy Cloud Foundations", img: "/aws.jpg" },
  { name: "Oracle Cloud Infrastructure", img: "/oracle.jpg" },
  { name: "Infosys SpringBoard - Programming using Java", img: "/info.jpg" },
  { name: "NPTEL Data Base Management System", img: "/db.jpg" },
  { name: "IIT Bombay - RDBMS PostgreSQL Training", img: "/rdm.jpg" },
];

const Award = () => {
  return (
    <>
      <div className="container-fluid p-0">
        <Header />
        <section className="resume-section" id="awards">
          <div className="resume-section-content">
            <h2 className="mb-5">Awards & Certifications</h2>

            <div className="certificate-slider">
              <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={30}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                autoplay={{ delay: 3000, disableOnInteraction: false }}
              >
                {certificates.map((cert, index) => (
                  <SwiperSlide key={index}>
                    <div className="certificate-card">
                      <img src={cert.img} alt={cert.name} className="certificate-img" />
                      <p className="certificate-name">{cert.name}</p>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>

          </div>
        </section>
      </div>
    </>
  );
};

export default Award;
