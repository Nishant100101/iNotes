import { Link } from "react-router-dom";
import bg from "../images/Samples/bg.jpg";
import find from "../images/Samples/find.jpeg";
import frame from "../images/Samples/frame.png";
import sample from "../images/Samples/sample.jpeg";
import sample2 from "../images/Samples/sample2.png";

function Homepage() {
  return (
    <>
      <div
        style={{
          backgroundImage: `url(${bg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="w-[200vw] h-[200vh] fixed -z-50"
      ></div>

      <div className="w-full py-[15vh] max-md:py-[10vh] text-center font-sans">
        <h2 className="text-6xl text-slate-50 mb-6 px-1">
          <div> Save your thoughts,</div>
          whenever you want
        </h2>

        <Link
          to="/signup"
          className="bg-slate-950 hover:bg-slate-900/90 text-lg shadow-md shadow-slate-500 text-white px-6 py-3 rounded-lg"
        >
          Try <span className="font-mono font-bold"> iNotes</span>
        </Link>
      </div>

      <div className="py-20 px-6 bg-gradient-to-r from-orange-400 to-yellow-500">
        <div className="container mx-auto flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 text-center md:text-left">
            <h2 className="text-3xl font-extrabold mb-6 text-white">
              Reminders That Keep You on Track
            </h2>
            <p className="text-lg text-white/90 px-2 text-justify">
              Life is busy, and it's easy to forget important tasks or errands.
              That's where our reminders come in. They're designed to keep you
              organized, focused, and on top of everything that matters. Whether
              you're managing daily tasks, setting goals, or simply trying to
              remember those small but crucial details, our reminders are here
              to help. With just a few taps, you can ensure that nothing slips
              through the cracks, no matter how hectic your day gets.
            </p>
          </div>
          <div className="md:w-1/2 mt-10 md:mt-0">
            <div className="bg-slate-50 p-8 rounded-lg shadow-2xl transform hover:scale-105 transition-transform duration-300">
              <h3 className="text-xl font-semibold text-gray-800">
                Never Miss a Beat
              </h3>
              <p className="text-gray-600 my-2">
                It’s all about making your life easier, whether it's a critical
                deadline or a simple to-do list.
                <img
                  src={sample}
                  alt="todo"
                  className="w-[40%] h-[40%] transition-all duration-300 ease-linear hover:rotate-0 rotate-12 m-5 mx-auto hover:scale-105"
                />
                So you can focus on what truly matters. Say goodbye to missed
                opportunities and forgotten tasks. Let us take care of the
                reminders, so you can take care of everything else.
              </p>
              <Link
                to="/login"
                className="mt-4 px-4 py-2 bg-orange-500 text-white font-medium rounded-md shadow-md hover:bg-orange-600 transition-colors duration-200"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-orange-500 to-purple-500 md:bg-gradient-to-r md:from-teal-300 md:via-green-300 md:to-yellow-300 py-16">
        <div className="container mx-auto flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 text-center md:text-left px-6">
            <h2 className="text-3xl font-extrabold mb-6 text-gray-800">
              Design Stunning Notes with Ease
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Transform your notes into eye-catching, colorful creations. With
              our intuitive editor, you can customize backgrounds, apply stylish
              fonts, and use source formatting to make your notes stand out.
              Whether for personal reminders or professional projects, elevate
              your note-taking experience with vibrant aesthetics and practical
              formatting.
            </p>
          </div>
          <div className="md:w-1/2 mt-8 md:mt-0 px-6">
            <div
              className="bg-slate-50 p-4 rounded-lg shadow-2xl"
              style={{ backgroundColor: "#f8fafc" }}
            >
              <h3 className="text-xl font-semibold mb-4 text-gray-800">
                Explore Note Customization
              </h3>
              <div className="bg-slate-50 h-64 rounded-lg flex items-center justify-center text-gray-500">
                <img
                  src={sample2}
                  alt="todo"
                  className="w-full h-full scale-90 rounded-s-3xl hover:rotate-6 transition-all duration-300 ease-linear"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="py-16 bg-slate-50">
        <div className="container mx-auto flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 text-center md:text-left px-4">
            <h2 className="text-2xl font-bold mb-4">
              Find what you need, fast
            </h2>
            <p className="text-lg">
              Quickly filter and search for notes by color and other attributes
              like lists with images, audio notes with reminders or just see
              shared notes. Find what you're looking for even faster, and let
              Keep do the remembering for you.
            </p>
          </div>
          <div className="md:w-1/2 mt-8 md:mt-0 px-6 flex justify-center">
            <div className="hover:scale-105 transition-transform duration-300 relative h-fit">
              <img src={frame} alt="iPhone" className="w-full max-w-xs" />
              <div className="absolute w-[66.9%] left-[27px] top-[42px] bg-slate-950 h-[5px]"></div>
              <div className="-top-[80px] left-[-52px] absolute m-0 flex items-center justify-center">
                <img
                  src={find}
                  alt="Content"
                  className="scale-x-[.65] scale-y-[.64] w-[89%] rounded-b-[35px] h-auto rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="py-16 px-5">
        <div className="container mx-auto text-center text-slate-50">
          <h2 className="text-4xl font-extrabold mb-6">Why Choose iNotes?</h2>
          <p className="text-lg mb-8 leading-relaxed">
            Discover the key features that make iNotes your go-to tool for
            seamless note-taking and organization:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-gradient-to-r from-slate-900 to-slate-950 p-8 text-slate-100 hover:text-slate-200 rounded-lg hover:shadow-slate-950 shadow-xl  shadow-slate-950 hover:bg-gradient-to-r hover:from-slate-700 hover:to-slate-800 hover:scale-105 transition-all duration-300 ease-in-out">
              <h3 className="text-2xl font-bold mb-4">Work on Any Device</h3>
              <p className="text-slate-300">
                iNotes is designed to be fully compatible with all your devices.
                Access and manage your notes from your phone, tablet, or
                computer with ease.
              </p>
            </div>

            <div className="bg-gradient-to-r from-slate-900 to-slate-950 p-8 text-slate-100 hover:text-slate-200 rounded-xl hover:shadow-slate-950 shadow-xl hover:shadow-xl shadow-slate-950 hover:bg-gradient-to-r hover:from-slate-700 hover:to-slate-800 hover:scale-105 transition-all duration-300 ease-in-out">
              <h3 className="text-2xl font-bold mb-4">Rich Text Formatting</h3>
              <p className="text-slate-300">
                Enhance your notes with a variety of formatting options. Use
                bold, italics, lists, and headers to create organized and
                impactful notes.
              </p>
            </div>

            <div className="bg-gradient-to-r from-slate-900 to-slate-950 p-8 text-slate-100 hover:text-slate-200 rounded-xl hover:shadow-slate-950 shadow-xl hover:shadow-xl shadow-slate-950 hover:bg-gradient-to-r hover:from-slate-700 hover:to-slate-800 hover:scale-105 transition-all duration-300 ease-in-out">
              <h3 className="text-2xl font-bold mb-4">Easy Organization</h3>
              <p className="text-slate-300">
                Keep your notes neatly organized with tags and categories.
                Easily locate and manage your notes with our intuitive
                organization tools.
              </p>
            </div>

            <div className="bg-gradient-to-r from-slate-900 to-slate-950 p-8 text-slate-100 hover:text-slate-200 rounded-xl hover:shadow-slate-950 shadow-xl hover:shadow-xl shadow-slate-950 hover:bg-gradient-to-r hover:from-slate-700 hover:to-slate-800 hover:scale-105 transition-all duration-300 ease-in-out">
              <h3 className="text-2xl font-bold mb-4">Offline Access</h3>
              <p className="text-slate-300">
                Access your notes anytime, even without an internet connection.
                iNotes ensures your important information is always at your
                fingertips.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Homepage;
