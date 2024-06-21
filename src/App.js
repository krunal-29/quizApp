import Form from "./Form";
import Quizapp from "./Quizapp";
import Result from "./Result";
import Nav from "./Nav";
import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Nav />
      <Router>
        <Routes>
          <Route path="/" element={<Form />}></Route>
          <Route path="/Quizapp" element={<PrivateRoute ><Quizapp/></PrivateRoute>}></Route>
          <Route path="/Result" element={<PrivateRoute ><Result/></PrivateRoute>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

const PrivateRoute = (props) => {
  const isAuth = () => {
    let name = localStorage.getItem("Name");
    let email = localStorage.getItem("E-mail");
    console.log("in Auth ==>", name, email);
    if (name && email) {
      return true;
    } else {
      return false;
    }
  };
  return isAuth() ?<> {props.children}</> : <Navigate to="/"></Navigate>;
};



export default App;
