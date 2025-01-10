import Input from "./components/input";
import "./App.css";
import Button from "./components/button";
// import Container from "./components/container";
import Form, { type FormHandle } from "./components/form";
import { useRef } from "react";

function App() {
  const customForm = useRef<FormHandle>(null);
  function handleSave(data: unknown) {
    const extractedData = data as { name: string; age: string };
    console.log(extractedData);
    customForm.current?.clear();
  }

  return (
    <main>
      {/* <Input id="username" label="Username" />
      <Button>Submit Button</Button>
      <Container as={Button}>Button Container</Container> */}

      <Form onSave={handleSave} ref={customForm}>
        <Input id="name" label="Name" type="text" />
        <Input id="age" label="Age" type="number" />
        <Button>Save</Button>
      </Form>
    </main>
  );
}

export default App;
