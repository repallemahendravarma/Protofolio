import { motion } from "framer-motion"
import { FaGithub } from "react-icons/fa"

const Projects = () => {

return (

<section id="projects" className="py-20 bg-gray-100 dark:bg-black text-black dark:text-white">

<div className="max-w-6xl mx-auto">

<h2 className="text-4xl font-bold mb-12 text-center">
Projects
</h2>

<div className="grid md:grid-cols-2 gap-10">

{/* PROJECT 1 */}

<motion.div
initial={{opacity:0,y:40}}
whileInView={{opacity:1,y:0}}
transition={{duration:0.6}}
whileHover={{scale:1.03}}
className="bg-white dark:bg-gray-900 shadow-xl p-6 rounded-xl"
>

<h3 className="text-2xl font-bold mb-3">
Startup Match Platform
</h3>

<p className="text-gray-600 dark:text-gray-400 mb-4">

Startup Match is a full-stack web platform designed to connect
startup founders with potential co-founders through an intelligent
matching system. The platform allows users to create profiles,
post startup ideas, apply to projects, and communicate through
real-time chat.

</p>

<p className="text-gray-600 dark:text-gray-400 mb-4">

The application includes secure authentication, project
marketplace functionality, and a rule-based matching engine
to recommend suitable collaborators. Live notifications and
message tracking improve communication between users.

</p>

<p className="text-sm mb-4 text-blue-500">
Tech Stack: React, Node.js, Express, MongoDB, Socket.io, JWT, Tailwind
</p>

<a
href="https://github.com/repallemahendravarma/Startup-match"
className="flex items-center gap-2 bg-black text-white dark:bg-white dark:text-black px-5 py-2 rounded-lg hover:scale-105 transition"
>

<FaGithub/> View GitHub

</a>

</motion.div>


{/* PROJECT 2 */}

<motion.div
initial={{opacity:0,y:40}}
whileInView={{opacity:1,y:0}}
transition={{duration:0.6}}
whileHover={{scale:1.03}}
className="bg-white dark:bg-gray-900 shadow-xl p-6 rounded-xl"
>

<h3 className="text-2xl font-bold mb-3">
MERN Grocery Store
</h3>

<p className="text-gray-600 dark:text-gray-400 mb-4">

The MERN Grocery Store is a full-stack e-commerce style
application built to manage grocery products and provide a
smooth shopping experience for users.

</p>

<p className="text-gray-600 dark:text-gray-400 mb-4">

Users can browse products, search for items, and add products
to their shopping cart. The backend provides RESTful APIs
for managing product data and handling user interactions.

</p>

<p className="text-sm mb-4 text-blue-500">
Tech Stack: React, Node.js, Express, MongoDB, Tailwind, JWT
</p>

<a
href="https://github.com/repallemahendravarma/MERN-GROCERY-STORE"
className="flex items-center gap-2 bg-black text-white dark:bg-white dark:text-black px-5 py-2 rounded-lg hover:scale-105 transition"
>

<FaGithub/> View GitHub

</a>

</motion.div>

</div>

</div>

</section>

)

}

export default Projects