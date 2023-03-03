import { useEffect, useState } from "react";

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    const socket = new WebSocket("ws://localhost:8080");
    socket.addEventListener("message", (event) => {
      console.log("Message from server", event.data);
      setMessage(event.data);
    });
  }, []);

  return <div>{message}</div>;
}

export default App;
