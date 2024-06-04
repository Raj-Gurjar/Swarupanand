import React from "react";

export default function ContactCard({ icon, head, data }) {
  return (
    <div className="w-[33%]">
      <div className="bg-[#76a713] contact-card-container">
        <p>{icon}</p>
        <h1>{head}</h1>
        <p>{data}</p>
      </div>
    </div>
  );
}
