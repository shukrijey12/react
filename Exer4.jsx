


import { useState } from "react";

function HandlingToggle() {
    const [isVisible, setIsVisible] = useState(false);

    const HandlingToggle = () => {
        setIsVisible(!isVisible);
    };

    return (
        <div>
            <button onClick={HandlingToggle}>
                {isVisible ? "off" : "on" }  
                Turn
                
            </button>
            <p> {isVisible ? "waa dansanyahy" : "waa daaran yahy"} </p>
        </div>
    );
}

export default HandlingToggle;
