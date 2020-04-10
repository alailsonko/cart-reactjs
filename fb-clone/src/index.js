import React from "react"
import ReactDOM from "react-dom"
import NavBar from "./components/NavBar"
import Footer from "./components/Footer"

class App extends React.Component {
    render() {
      return (
       <div>
        <NavBar />
        <Footer />
       </div>
      );
    }
  }

  ReactDOM.render(<App />, document.getElementById('root'));