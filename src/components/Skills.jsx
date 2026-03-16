import { motion } from "framer-motion"

import { 
FaReact,
FaNodeJs,
FaHtml5,
FaCss3Alt,
FaJs,
FaGitAlt,
FaJava
} from "react-icons/fa"

import { 
SiMongodb,
SiExpress,
SiTailwindcss
} from "react-icons/si"

const Skills = () => {

const skills = [

{icon:<FaJs/>, name:"JavaScript"},
{icon:<FaReact/>, name:"React"},
{icon:<FaNodeJs/>, name:"Node.js"},
{icon:<SiExpress/>, name:"Express.js"},
{icon:<SiMongodb/>, name:"MongoDB"},
{icon:<FaHtml5/>, name:"HTML5"},
{icon:<FaCss3Alt/>, name:"CSS3"},
{icon:<SiTailwindcss/>, name:"Tailwind CSS"},
{icon:<FaGitAlt/>, name:"Git"},
{icon:<FaJava/>, name:"Java"}

]

return (

<section id="skills" className="py-20 bg-gray-100 dark:bg-gray-900 text-black dark:text-white">

<div className="max-w-6xl mx-auto">

<h2 className="text-4xl font-bold mb-12 text-center">
Technical Skills
</h2>

<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">

{skills.map((skill,index)=>(

<motion.div
key={index}
whileHover={{scale:1.1}}
className="flex flex-col items-center justify-center gap-3 bg-white dark:bg-black p-6 rounded-xl shadow-lg transition"
>

<div className="text-4xl text-blue-500">
{skill.icon}
</div>

<p className="font-medium">
{skill.name}
</p>

</motion.div>

))}

</div>

</div>

</section>

)

}

export default Skills