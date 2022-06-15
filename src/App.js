import Navbar from "./components/NavBar";
import Hometable from "./components/Home";
import SignInContainer from "./containers/index";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import EditContact from "./components/EditContact";
function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/home" element={<Hometable />} />
          <Route path="/signup" element={<SignInContainer />} />
          <Route path="/editcontact" element={<EditContact />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
