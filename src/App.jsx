import { useState } from "react"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import About from "./components/About"
import Skills from "./components/Skills"
import Certificates from "./components/Certificates"
import Projects from "./components/Projects"
import Contact from "./components/Contact"
import Footer from "./components/Footer"

function App() {

const [darkMode,setDarkMode] = useState(true)

return (

<div className={darkMode ? "dark" : ""}>

<div className="bg-white dark:bg-black transition-colors duration-500">

<Navbar darkMode={darkMode} setDarkMode={setDarkMode}/>

<Hero/>
<About/>
<Skills/>
<Certificates/>
<Projects/>
<Contact/>
<Footer/>

</div>

</div>

)

}

export default App