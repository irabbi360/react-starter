import { useState } from 'react'

function MyButton() {
    const [count, setCount] = useState(0)

    return (
        <div>
            <button onClick={() => setCount((count) => count + 1)}>Count is {count}</button>
        </div>
    );
}

export default MyButton;