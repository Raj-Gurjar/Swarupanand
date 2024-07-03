import React from "react";

export default function CurlyTitles({ titleName }) {
  return (
    <div>
      <div className="curly-title">
        <span1>
          <span>~</span>
          {titleName}
          <span>~</span>
        </span1>
      </div>
    </div>
  );
}
