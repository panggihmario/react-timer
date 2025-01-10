import Input from "./components/input";
import "./App.css";
import Button from "./components/button";
// import Container from "./components/container";
import Form from "./components/form";

function App() {
  function handleSave(data: unknown) {
    const extractedData = data as { name: string; age: string };
    console.log(extractedData);
  }

  return (
    <main>
      {/* <Input id="username" label="Username" />
      <Button>Submit Button</Button>
      <Container as={Button}>Button Container</Container> */}

      <Form onSave={handleSave}>
        <Input id="name" label="Name" type="text" />
        <Input id="age" label="Age" type="number" />
        <Button>Save</Button>
      </Form>
    </main>
  );
}

export default App;
