import styles from "@/styles/Product.module.css";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";


import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCommentSlash } from "@fortawesome/free-solid-svg-icons";


const Comments = ({ data }) => {
  return (
    <div className="container-fluid pt-5">
      <div className="container">
        <div className="section-title">
          <h4
            className="text-primary text-uppercase"
            style={{ letterSpacing: "5px" }}
          >
            TESTIMONIAL
          </h4>
          <h1 className="display-4">Product Comments</h1>
        </div>
        <div className="row">
          <Swiper
            loop={true}
            slidesPerView={1}
            spaceBetween={10}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 40,
              },
              1024: {
                slidesPerView: 2,
                spaceBetween: 100,
              },
            }}
            modules={[Pagination]}
            className={styles.swiper}
          >
            {data && data.length > 0 ? (
              data.slice(0,6).map((comment) => (
                <SwiperSlide key={comment.id} className={styles.swiper_slide}>
                  <div className="testimonial-item">
                    <div className="d-flex align-items-center mb-3">
                      <img
                        className="img-fluid"
                        width={100}
                        src={comment.profile}
                        alt=""
                      />
                      <div className="ml-3">
                        <h4>{comment.username}</h4>
                        <p className="text-left mb-0">User</p>
                      </div>
                    </div>
                    <p className="m-0 mb-4">{comment.body}</p>
                  </div>
                </SwiperSlide>
              ))
            ) : (
              <div className={styles.noComment}>
                <FontAwesomeIcon icon={faCommentSlash} size="3x" />
                <h3>No comments available</h3>
              </div>
            )}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Comments;
