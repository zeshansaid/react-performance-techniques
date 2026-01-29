import React, { useState } from "react";
import Child from "./Child";

export default function Parent() {
    const [value, setValue] = useState("");
    console.log("Parent rendered");

    const handleChildClick = () => {
        alert("Child clicked");
    };

    return (
        <div>
            <input value={value} onChange={(e) => setValue(e.target.value)} />
            <Child onClick={handleChildClick} />
        </div>
    );
}
