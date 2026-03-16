import { FaGithub, FaLinkedin } from "react-icons/fa"

const Contact = () => {

return (

<section id="contact" className="py-20 text-white bg-gray-900">

<div className="max-w-4xl mx-auto text-center">

<h2 className="text-4xl font-bold mb-6">
Contact Me
</h2>

<p className="mb-2">Phone: 8639833939</p>
<p className="mb-6">Email: mahendrarepalle7777@gmail.com</p>

<div className="flex justify-center gap-6">

<a
href="https://github.com/repallemahendravarma"
className="flex items-center gap-2 bg-white text-black px-6 py-2 rounded"
>

<FaGithub/> GitHub

</a>

<a
href="https://www.linkedin.com/in/repallemahendravarma77/"
className="flex items-center gap-2 border px-6 py-2 rounded"
>

<FaLinkedin/> LinkedIn

</a>

</div>

</div>

</section>

)

}

export default Contact