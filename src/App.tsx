import Input from "./components/input";
import "./App.css";
import Button from "./components/button";
import Container from "./components/container";

function App() {
  return (
    <>
      <Input id="username" label="Username" />
      <Button>Submit Button</Button>
      <Container as={Button}>Button Container</Container>
    </>
  );
}

export default App;
