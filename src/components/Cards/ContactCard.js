import React from "react";

export default function ContactCard({ icon, head, data }) {
  return (
    <div className="lg:w-[33%] sm:w-[60%]">
      <div className="contact-card  h-[full]">
        <p>{icon}</p>
        <h1>{head}</h1>
        <h3>{data}</h3>
      </div>
    </div>
  );
}
