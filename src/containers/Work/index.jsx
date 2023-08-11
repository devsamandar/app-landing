import React from "react";
import Title from "../../components/Title";
import WorkCard from "../../components/WorkCard";
import worksData from "../../data/works.data";

function Work() {
  return (
    <section className="py-20" id="morefeatures">
      <div className="container">
        <Title
          title="More Features"
          page="Features that showcase your app"
          text="Start working with Prompt to showcase your app to thousands of people."
        />
        <div className="grid lg:grid-cols-3 grid-cols-1 gap-6 mt-16">
          {worksData.map((item, index) => (
            <WorkCard item={item} key={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Work;
