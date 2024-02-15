import "./App.scss";
import Navbar from "src/components/UI/Navbar/Navbar";
import Input from "./components/UI/Form/Input/Input";
import Container from "./components/UI/Container/Container";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Container>
        <Input
          type="text"
          name="search"
          label="Search for a publication"
        ></Input>
      </Container>
    </>
  );
}

export default App;
