import React, { useRef } from "react";
import useWindowSize from "../Hooks/useWindowSize";
import UseLocalStorage from "../Hooks/UseLocalStorage";
import useLocalStorage from "../Hooks/UseLocalStorage";
import useOnlineStatus from "../Hooks/UseOnlineStatus";
import useHover from "../Hooks/UseHover";
import useCountdown from "../Hooks/UseCountdown";
import useFetch from "../Hooks/UseFetch";
export default function HooksTrial() {
  const windowSize = useWindowSize();
  // const [counter, setCounter] = useState(UseLocalStorage("counter") || 0);
  const [counter, setCounter] = UseLocalStorage("counter", 0);
  const [language, setLanguage] = useLocalStorage("language");
  const isOnline = useOnlineStatus();
  const H1Hover = useRef();
  const isHoverd = useHover(H1Hover);
  const [time, setIsActive] = useCountdown(10);
  const { data, isLoading } = useFetch(
    "https://jsonplaceholder.typicode.com/posts"
  );

  return (
    <div>
      <h1>Width: {windowSize.width}</h1>
      <h1>Height: {windowSize.height}</h1>
      <button onClick={() => setCounter(+counter + 1)}>
        Counter {counter}
      </button>
      <h1>App</h1>
      <h1 onClick={() => setLanguage(language === "en" ? "ar" : "en")}>
        Language: {language}
      </h1>
      <h1>Online Status: {isOnline ? "Online" : "Offline"}</h1>
      <div
        style={{
          width: "100px",
          height: "100px",
          background: "red",
          backgroundColor: isHoverd ? "lightgreen" : "lightcoral",
        }}
        ref={H1Hover}
      >
        Hover ME!!
      </div>
      <h1> Hovered: {isHoverd.toString()}</h1>
      <h1>time: {time}</h1>
      <button
        onClick={() => {
          setIsActive(true);
        }}
      >
        Start Countdown
      </button>
      {isLoading
        ? "Loading..."
        : data.map((post) => <p key={post.id}>{post.title}</p>)}
    </div>
  );
}
