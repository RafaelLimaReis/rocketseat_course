import { useState } from "react";

export function Counter() {
    const [counter, setCounter] = useState(0);

    function increment() {
        // função que segue o principio da IMUTABILIADE
        setCounter(counter + 1);
    }
    return (
        <div>
            <h2>{counter}</h2>
            <button type="button" onClick={increment}>Increment</button>
        </div>
    );
}