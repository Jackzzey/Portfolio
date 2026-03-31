import { useState, useEffect } from "react";

export default function Typewriter({ text, speed = 90, onComplete }) {
  const [displayed, setDisplayed] = useState("");
  //const [started, setStarted] = useState(false);
  const [finished, setFinished] = useState(false);

  useEffect(() => {
    let i = 0;
    //if (started) return;
    //setStarted(true);


    const interval = setInterval(() => {
      setDisplayed(text.slice(0, i));
      
      i++;

      if (i > text.length) {
        clearInterval(interval);
        setFinished(true);
        onComplete && onComplete();
      }


    }, speed);

    return () => clearInterval(interval);
  }, [text, speed, onComplete]);


  return <span>
    {displayed}
    {!finished && <span className="animate-pulse font-extrabold" >|</span>}
    </span>;
}