import React, { useState, useEffect } from "react";

function Typewriter({ text="", speed=10, onComplete = ()=>{} }) {
  const [displayedText, setDisplayedText] = useState("");
  useEffect(() => {
    if(!text || typeof text !== "string"){
        setDisplayedText("");
        return;
    }
    let localText = "";
    let i = 0;
    const interval = setInterval(() => {
      if (i < text.length) {
        localText += text.charAt(i);
        setDisplayedText(localText);
        i++;
      } else {
        clearInterval(interval);
        onComplete(); // call only AFTER last character is fully rendered
      }
    }, speed);
    return () => clearInterval(interval);
  }, [text, speed]);

  return <div id="intro" className=" text-xl font-mono">{displayedText}</div>;
}

export default Typewriter;
