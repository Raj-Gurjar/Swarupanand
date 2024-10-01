import React from "react";

export default function TestimonialCard({ data }) {
  return (
    <div className="testimonial-card-container">
      <figure className="">
        <img
          src={data?.img}
          alt={data?.name + "-img"}
          className=""
        />
      </figure>
      <p>{data?.review}</p>
      <h1 className="text-2xl text-bold m-5">{data?.name}</h1>
   
    </div>
  );
}
