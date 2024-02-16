import "./App.scss";
import Navbar from "src/components/UI/Navbar/Navbar";
import Container from "./components/UI/Container/Container";
import SearchForm from "./components/UI/Form/SearchForm";
import SearchResults from "./components/Layout/SearchResults/SearchResults";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Container>
        <>
          <SearchForm></SearchForm>
          <SearchResults></SearchResults>
        </>
      </Container>
    </>
  );
}

export default App;
