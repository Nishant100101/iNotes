const Contact = () => {
  document.title = "iNotes- Contact us";
  return (
    <div className="flex flex-col flex-grow px-[10vw] py-[13vh]">
      <div className="flex flex-col items-center">
        <div className="text-3xl font-semibold text-slate-950">
          GET IN Touch
          <div className="h-2.5 w-full bg-slate-800" />
        </div>
        <p className="text-center text-gray-600 max-w-2xl my-[2vh]">
          Have questions or need support? Fill out the form below to get in
          touch with us.
        </p>
      </div>

      <form className="flex w-full flex-col items-center justify-center">
        <div className="w-full md:grid md:grid-flow-col relative">
          <div className="select-none px-2">
            <div className="flex flex-col flex-wrap">
              <div className="w-full px-2 mb-7">
                <input
                  required
                  className="bg-white select-all shadow-inner border-2 border-slate-200 w-full h-12 focus:outline-none focus:border-slate-400 rounded-md px-4 py-1.5"
                  name="FirstName"
                  placeholder="First Name"
                />
              </div>
              <div className="w-full select-none px-2 mb-7">
                <input
                  required
                  className="bg-white select-all shadow-inner border-2 border-slate-200 w-full h-12 focus:outline-none focus:border-slate-400 rounded-md px-4 py-1.5"
                  name="Last Name"
                  placeholder="Last Name"
                />
              </div>
              <div className="w-full select-none px-2 mb-7">
                <input
                  required
                  className="bg-white select-all shadow-inner border-2 border-slate-200 w-full h-12 focus:outline-none focus:border-slate-400 rounded-md px-4 py-1.5"
                  name="Email"
                  placeholder="Email Address"
                />
              </div>
              <div className="w-full select-none px-2 mb-7">
                <input
                  required
                  className="bg-white select-all shadow-inner border-2 border-slate-200 w-full h-12 focus:outline-none focus:border-slate-400 rounded-md px-4 py-1.5"
                  name="PhoneNumber"
                  placeholder="Phone Number"
                />
              </div>
            </div>
          </div>
          {/* Message */}
          <div className="select-none px-4 md:py-[2px] mb-6">
            <textarea
              className="w-full md:h-full h-48 bg-white select-all shadow-inner rounded-md p-5 border-2 border-slate-200 focus:outline-none focus:border-slate-400"
              placeholder="Message"
            ></textarea>
          </div>
        </div>
        <button
          type="submit"
          className={`bg-slate-800 w-5/6 mb-5 font-semibold px-5 py-3 hover:bg-slate-700 text-white rounded-lg shadow-md shadow-black `}
          onClick={(e) => e.preventDefault()}
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default Contact;
