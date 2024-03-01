
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/about";
import Contact from "./components/Contact";
import Login from "./components/Login"
import Registration from "./components/Registration ";
import Footer from "./components/Footer";
// const fetcher =(...args)=> fetch(...args).then{(response: string) => response.json();}
 function App() {
//   const {data,error}=useSWR{ "http://localhost3001/users",fetcher}
//  if {error} return <h1>{error</h1>;

  return (
    <div className="App">
      {/* {data ?(
          data.map((user) => {
            return<h1>{user}</h1>;
          })
       } )
      } */}

      <Router>
        <Routes>
          <Route  path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Registration" element={<Registration />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
    }
export default App;
