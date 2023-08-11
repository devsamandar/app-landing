import React from "react";

function TestimonialCard({ item }) {
  return (
    <div className="swiper-slide">
      <div className="p-10 bg-white">
        <p className="text-slate-800">{item.text}</p>
        <div className="flex items-center justify-between mt-5">
          <div className="flex items-center gap-3">
            <div>
              <img
                src="assets/images/avatars/img-1.jpg"
                className="w-10 rounded-full"
              />
            </div>
            <div>
              <h6>{item.person}</h6>
              <p className="text-sm text-slate-500">{item.job}</p>
            </div>
          </div>
          {item.stars}
        </div>
      </div>
    </div>
  );
}

export default TestimonialCard;
