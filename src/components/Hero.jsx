import { motion } from "framer-motion"
import { FaGithub, FaLinkedin } from "react-icons/fa"
import profile from "../assets/profile.jpg"

const Hero = () => {

return (

<section id="home" className="h-screen flex items-center text-white">

<div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">

<motion.div
initial={{opacity:0,y:50}}
animate={{opacity:1,y:0}}
transition={{duration:0.8}}
>

<h1 className="text-5xl font-bold mb-4">
Repalle Mahendra Varma
</h1>

<p className="text-xl text-gray-400 mb-6">
MERN Stack Developer
</p>

<p className="text-gray-500 mb-6">
Passionate MERN Stack developer focused on building scalable
full-stack web applications using React, Node.js and MongoDB.
Interested in solving real-world problems through technology.
</p>

<div className="flex gap-4">

<motion.a
whileHover={{scale:1.1}}
href="https://github.com/repallemahendravarma"
className="flex items-center gap-2 bg-white text-black px-6 py-2 rounded-lg"
>

<FaGithub/> GitHub

</motion.a>

<motion.a
whileHover={{scale:1.1}}
href="https://www.linkedin.com/in/repallemahendravarma77/"
className="flex items-center gap-2 border px-6 py-2 rounded-lg"
>

<FaLinkedin/> LinkedIn

</motion.a>

</div>

</motion.div>

<div className="flex justify-center">

<motion.img
src={profile}
className="w-72 rounded-xl shadow-2xl"
initial={{opacity:0,scale:0.8}}
animate={{opacity:1,scale:1}}
transition={{duration:0.8}}
/>

</div>

</div>

</section>

)

}

export default Hero