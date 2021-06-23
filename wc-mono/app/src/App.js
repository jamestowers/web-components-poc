import {useState} from "react";
import { IlNotice, IlForm } from 'il-wc-react';
import './App.css';

function App() {
  const [status, setStatus]  = useState("error");
  const [msg, setMsg]  = useState("Something bad happened");

  function toggle() {
    const s = status === "error" ? "info" : "error";
    setStatus(s);
  }

  function handleSubmit(event) {
    console.log(event.nativeEvent.detail);
    setMsg(`Hi ${event.nativeEvent.detail.name}, your email is ${event.nativeEvent.detail.email}`)
  }
  return (
    <div className="App">
      <IlNotice variation={status} isDismissable>{msg}</IlNotice>
      <header className="App-header">
        <button onClick={toggle}>Change</button>
        <IlForm onSubmit={handleSubmit} />
      </header>
    </div>
  );
}

export default App;
