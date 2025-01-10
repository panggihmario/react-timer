import Input from "./components/input";
import "./App.css";
import Button from "./components/button";

function App() {
  return (
    <>
      <Input id="username" label="Username" />
      <Button el="button">Submit Button</Button>
    </>
  );
}

export default App;
