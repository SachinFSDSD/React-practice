import { useState } from "react";
import "./App.css";
import { LoremIpsum } from "react-lorem-ipsum";

function App() {
  const [cureIndex, setCurrIndex] = useState(0);
  const testimonial = [
    {
      quote: <LoremIpsum p={1} />,
      author: "sachin",
    },
    {
      quote: <LoremIpsum p={1} />,
      author: "sachin",
    },
    {
      quote: <LoremIpsum p={1} />,
      author: "sachin",
    },
    {
      quote: <LoremIpsum p={1} />,
      author: "sachin",
    },
  ];

  function handleForward() {
    setCurrIndex((cureIndex + testimonial.length + 1) % testimonial.length);
  }
  function handleBackword() {
    setCurrIndex((cureIndex + testimonial.length - 1) % testimonial.length);
  }

  return (
    <div className="testimonial">
      <div className="testimonial-Lines">{testimonial[cureIndex].quote}</div>
      <div className="testimonial-author">
        --{testimonial[cureIndex].author}
      </div>
      <div className="testimonial-nav">
        <button onClick={handleBackword}>Prev</button>
        <button onClick={handleForward}>Next</button>
      </div>
    </div>
  );
}

export default App;
