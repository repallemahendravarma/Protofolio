import { FaMoon, FaSun } from "react-icons/fa"

const Navbar = ({darkMode,setDarkMode}) => {

return (

<nav className="fixed w-full bg-white dark:bg-black text-black dark:text-white shadow-md z-50">

<div className="max-w-6xl mx-auto flex justify-between items-center p-4">

<h1 className="font-bold text-xl">

</h1>

<ul className="flex items-center gap-6 text-sm">

<li><a href="#home">Home</a></li>
<li><a href="#about">About</a></li>
<li><a href="#skills">Skills</a></li>
<li><a href="#certificates">Certificates</a></li>
<li><a href="#projects">Projects</a></li>
<li><a href="#contact">Contact</a></li>

<button
onClick={()=>setDarkMode(!darkMode)}
className="text-lg"
>

{darkMode ? <FaSun/> : <FaMoon/>}

</button>

</ul>

</div>

</nav>

)

}

export default Navbar