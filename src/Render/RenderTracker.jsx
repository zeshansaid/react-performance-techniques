import React, { useRef } from 'react'

export const RenderTracker = () => {
    const render = useRef(0);
    render.current += 1;

    return (
        <div>
            <h1>Child Rendered : {render.current} times</h1>
        </div>
    )
}
