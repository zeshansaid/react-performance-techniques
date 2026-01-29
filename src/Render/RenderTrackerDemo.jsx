import React, { useState } from "react";
import { RenderTracker } from "./RenderTracker";

const RenderTrackerDemo = () => {
  const [value, setValue] = useState("");

  return (
    <div style={{ padding: "20px", maxWidth: "300px", margin: "40px auto" }}>
        <RenderTracker />
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Type here..."
        style={{
          width: "100%",
          padding: "10px",
          borderRadius: "6px",
          outline: "none",
        }}
      />
    </div>
  );
};

export default RenderTrackerDemo;
