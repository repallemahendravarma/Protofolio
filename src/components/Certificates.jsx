import { motion } from "framer-motion"
import { FaExternalLinkAlt } from "react-icons/fa"

import javaCert from "../assets/certificates/java-certificate.pdf"
import aiCert from "../assets/certificates/infosys-ai.pdf"
import networkCert from "../assets/certificates/coursera-network.pdf"
import webCert from "../assets/certificates/freecodecamp.pdf"
import cloudCert from "../assets/certificates/NPTEL CLOUD CERTIFICATE.pdf"

const Certificates = () => {

const certificates = [

{
title:"Java Programming",
org:"Iamneo",
desc:"Completed comprehensive training in Java programming covering core concepts such as OOP, exception handling, collections, and database connectivity. Built practical applications using Java and MySQL.",
file:javaCert
},

{
title:"Build Generative AI Apps",
org:"Infosys",
desc:"Learned how to design and develop generative AI applications using no-code tools and AI platforms. Covered prompt engineering, AI workflows, and automation techniques.",
file:aiCert
},

{
title:"Computer Communications",
org:"Coursera",
desc:"Studied networking concepts including protocols, data transmission, internet architecture, and communication models used in modern distributed systems.",
file:networkCert
},

{
title:"Responsive Web Design",
org:"freeCodeCamp",
desc:"Learned modern web design principles including HTML, CSS, Flexbox, Javascript,and responsive layout techniques to build mobile-friendly websites.",
file:webCert
},
{
title:"Cloud Computing",
org:"NPTEL",
desc:"Studied cloud computing architecture, virtualization, service models and scalable infrastructure used in modern distributed systems.",
file:cloudCert
}

]

return (

<section id="certificates" className="py-20 bg-gray-100 dark:bg-black text-black dark:text-white">

<div className="max-w-6xl mx-auto">

<h2 className="text-4xl font-bold mb-12 text-center">
Certificates
</h2>

<div className="grid md:grid-cols-2 gap-8">

{certificates.map((cert,index)=>(

<motion.div
key={index}
initial={{opacity:0,y:30}}
whileInView={{opacity:1,y:0}}
transition={{duration:0.6}}
whileHover={{scale:1.03}}
className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg"
>

<h3 className="text-xl font-bold mb-2">
{cert.title}
</h3>

<p className="text-sm text-blue-500 mb-3">
{cert.org}
</p>

<p className="text-gray-600 dark:text-gray-400 mb-4">
{cert.desc}
</p>

<a
href={cert.file}
target="_blank"
className="flex items-center gap-2 w-fit bg-black text-white dark:bg-white dark:text-black px-4 py-2 rounded-lg hover:scale-105 transition"
>

View Certificate <FaExternalLinkAlt/>

</a>

</motion.div>

))}

</div>

</div>

</section>

)

}

export default Certificates