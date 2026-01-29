import React, { useState } from "react";
import { RenderTracker } from "./RenderTracker";
 
const RenderTrackerDemo = () => {
  const [value, setValue] = useState("");
  const [childProp, setChildProp] = useState("prop from parent");


  return (
    <div style={{ padding: "20px", maxWidth: "300px", margin: "40px auto" }}>
      <RenderTracker name={childProp} />
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
      <button
        onClick={() => setChildProp("Updated prop: " + Date.now())}
        style={{ marginTop: "10px", padding: "8px 12px", cursor: "pointer" }}
      >
        Click
      </button>

    </div>
  );
};

export default RenderTrackerDemo;
