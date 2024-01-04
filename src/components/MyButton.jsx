import React from 'react';

function MyButton({setCount, count}) {
    return (
        <div>
            <button onClick={() => setCount((count) => count + 1)}>Count is {count}</button>
        </div>
    );
}

export default MyButton;