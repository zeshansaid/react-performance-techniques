import React, { memo, useRef } from 'react'

export const RenderTracker = memo(({ name }) => {
    const render = useRef(0);
    render.current += 1;

    return (
        <div>
            <h1>{name}</h1>
            <h1>Child Rendered : {render.current} times</h1>
        </div>
    )
});
