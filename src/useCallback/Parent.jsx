import React, { useCallback, useState } from "react";
import Child from "./Child";

export default function Parent() {
    const [value, setValue] = useState("");
    console.log("Parent rendered");

    const handleChildClick = useCallback(() => {
        alert("Child clicked");
    }, []);

    return (
        <div>
            <input value={value} onChange={(e) => setValue(e.target.value)} />
            <Child onClick={handleChildClick} />
        </div>
    );
}
