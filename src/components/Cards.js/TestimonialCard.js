import React from "react";

export default function TestimonialCard({ data }) {
  return (
    <div className="bg-red-300 h-[300px] p-4 flex flex-col justify-center align-middle text-center">
      <figure className="flex justify-center">
        <img
          src={data?.img}
          alt={data?.name + "-img"}
          className="w-[70px] h-[70px] bg-purple-400"
        />
      </figure>
      <h1 className="text-2xl text-bold m-5">{data?.name}</h1>
      <p>{data?.review}</p>
      <div></div>
    </div>
  );
}
