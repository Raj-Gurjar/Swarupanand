import React from "react";

export default function ContactCard({ icon, head, data }) {
  return (
    <div className="w-[33%]">
      <div className="contact-card-container  h-[full]">
        <p>{icon}</p>
        <h1>{head}</h1>
        <h3>{data}</h3>
      </div>
    </div>
  );
}
