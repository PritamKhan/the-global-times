import Newsboard from "./components/Newsboard"
import Navbar from "./components/Navbar"
import { useState } from "react"
import './App.css'
import Footer from "./components/Footer"
import WeatherApp from "./components/WeatherApp"


const App = () => {
  const [category,setCategory] = useState("general");
  return(
    <div>
      <Navbar setCategory={setCategory}/>
      <Newsboard category={category}/>
      {/* <WeatherApp/> */}
      <hr style={{
            color: "white",
            backgroundColor: "white",
            height: 3
        }} />
      <Footer />
    </div>
  )
}

export default App