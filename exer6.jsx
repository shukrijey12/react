import React from "react";
import { useEffect, useState } from "react";

function GreetingTitle() {
  const [name, setName] = useState("");
  const [greeting, setGreeting] = useState("Hello");

  useEffect(() => {
    if (name === "") {
      document.title = "Welcome!";
    } else {
      document.title = `${greeting}, ${name}`;
    }
  }, [name, greeting]);

  return (
    <>
      <h1>UseEffect practice</h1>
      <h2>Greeting Title</h2>

      <input
        type="text"
        placeholder="Greeting"
        value={greeting}
        onChange={(e) => setGreeting(e.target.value)}
      />
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <p>
        Title: {name === "" ? "Welcome!" : `${greeting}, ${name}`}
      </p>
    </>
  );
}

export default GreetingTitle;