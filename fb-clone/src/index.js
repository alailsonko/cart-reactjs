import React from "react"
import ReactDOM from "react-dom"
import NavBar from "./components/NavBar"
import Footer from "./components/Footer"
import Register from "./components/Register"

class App extends React.Component {
    render() {
      return (
       <div>
        <NavBar />
        <Register />
        <Footer />

       </div>
      );
    }
  }

  ReactDOM.render(<App />, document.getElementById('root'));