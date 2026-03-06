import image from "../public//image.jpg"
import image2 from "../public//image2.jpg"
import { Link } from "react-router-dom"

const Home = () => {
  return (
    <div className="relative flex items-center justify-center h-screen">
          <div
      className="absolute inset-0 block md:hidden bg-cover bg-top"
      style={{ backgroundImage: `url(${image2})` }}
    ></div>
      <div
        className="absolute inset-0 hidden md:block bg-cover bg-top"
        style={{ backgroundImage: `url(${image})` }}
      ></div>
      <div className="absolute inset-0 bg-black opacity-70"></div>
      <div className="relative z-10 flex flex-col items-center gap-2">
        <h1 className="text-3xl md:text-5xl text-white">Mock AI Symptom Checker</h1>
        <p className="text-white md:text-lg">
          Enter your symptoms and get mock recommendations.
        </p>

        <div className="flex gap-3 mt-2">
          <Link
            to="/symptom"
            className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 mt-3 mb-6 transition"
          >
            Start Checking
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Home