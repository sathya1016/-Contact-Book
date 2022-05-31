import Hometable from "./Components/Home";
import Navbar from "./Components/NavBar";
import SignInContainer from "./containers";

function App() {
  return (
    <>
      <Navbar />
      <Hometable />
      <SignInContainer/>
    </>
  );
}

export default App;
