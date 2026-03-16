import { motion } from "framer-motion"

const About = () => {

return (

<section id="about" className="py-20 text-white">

<div className="max-w-6xl mx-auto">

<motion.h2
initial={{opacity:0}}
whileInView={{opacity:1}}
transition={{duration:0.6}}
className="text-4xl font-bold mb-6"
>

About Me

</motion.h2>

<p className="text-gray-400 leading-relaxed">

I am a Computer Science student at Lovely Professional University
specializing in full-stack web development using the MERN stack.
I enjoy building scalable applications and designing efficient
backend systems while creating smooth user interfaces with React.

</p>

</div>

</section>

)

}

export default About