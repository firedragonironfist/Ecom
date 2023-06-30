import React from "react";

const Featured = ({ title, description, imageUrl, price }) => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
        <img
          className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded"
          alt="hero"
          src={imageUrl}
        />
        <div className="text-center lg:w-2/3 w-full">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-yellow-300">
            {title}
          </h1>
          <p className="text-yellow-100 mb-8 leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Featured;
