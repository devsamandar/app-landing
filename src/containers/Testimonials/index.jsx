import React from "react";
import TestimonialCard from "../../components/TestimonialCard";
import testimonialData from "../../data/testimonial.data";

function Testimonials() {
  return (
    <section
      className="bg-gray-100 relative py-20 overflow-x-hidden"
      data-aos="fade-up"
      data-aos-duration={500}
      id="testimonials"
    >
      <div className="absolute top-0 inset-x-0 hidden sm:block">
        <img
          src="assets/images/shapes/white-wave.svg"
          alt="svg"
          className="w-full -scale-x-100"
        />
      </div>
      <div className="container relative">
        <div className="relative z-20">
          <div className="flex items-center justify-between pb-14">
            <div>
              <span className="text-sm font-medium py-1 px-3 rounded-full text-primary bg-primary/10">
                Testimonials
              </span>
              <h2 className="md:text-3xl text-xl font-semibold my-5">
                What people say
              </h2>
            </div>
            <div className="flex items-center gap-5">
              <div className="button-prev">
                <i className="fa-solid fa-arrow-left" />
              </div>
              <div className="button-next ">
                {" "}
                <i className="fa-solid fa-arrow-right" />
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="hidden sm:block">
              <div className="before:w-24 before:h-24 before:absolute before:-top-10 before:-end-10 before:bg-[url('https://coderthemes.com/prompt/images/pattern/dot3.svg')]" />
              <div className="after:w-24 after:h-24 after:absolute after:-bottom-10 after:-start-10 after:bg-[url('https://coderthemes.com/prompt/images/pattern/dot3.svg')]" />
            </div>
            {/* Swiper */}
            <div id="swiper_two" className="swiper">
              <div className="swiper-wrapper">
                {testimonialData.map((item, index) => (
                  <TestimonialCard item={item} key={index} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
