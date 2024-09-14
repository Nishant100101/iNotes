const About = () => {
  document.title = "iNotes- About Us";
  return (
    <div className="flex flex-col flex-grow text-justify text-lg font-sans py-[13vh] px-[5vw]">
      <h2 className="text-4xl font-extrabold mb-6 text-slate-900">
        About iNotes
      </h2>
      <p className="mt-4 text-lg leading-relaxed text-gray-800 font-medium">
        Welcome to iNotes, your modern and intuitive note-keeping app, designed
        to streamline productivity and organization. With its sleek, futuristic
        interface, iNotes makes it effortless to manage tasks and goals, helping
        you stay ahead in your personal and professional life.
      </p>
      <p className="mt-4 text-lg leading-relaxed text-gray-800">
        Whether you're a student balancing assignments, a professional keeping
        track of projects, or simply someone who loves staying organized, iNotes
        is equipped with powerful features to meet all your note-taking needs.
        With iNotes, you can organize, prioritize, and manage your day with ease
        and efficiency.
      </p>
      <div className="mt-6">
        <h3 className="text-2xl font-semibold mb-4 text-slate-900">
          Key Features:
        </h3>
        <ul className="list-disc list-inside space-y-2 text-gray-800">
          <li className="font-sans">
            <strong>Advanced Search:</strong> Easily find notes with keyword
            search
          </li>
          <li className="font-sans">
            <strong>Checklist Support:</strong> Create checklists for seamless
            task tracking
          </li>
          <li className="font-sans">
            <strong>Rich Text Editing:</strong> Customize your notes with
            formatting tools & formatting changer.
          </li>
          <li className="font-sans">
            <strong>Reminders & Deadlines:</strong> Set time-sensitive reminders
            for your important notes
          </li>
          <li className="font-sans">
            <strong>Tagging & Categorization:</strong> Organize notes by tags or
            categories for easy navigation
          </li>
          <li className="font-sans">
            <strong>Custom Backgrounds:</strong> Add background images or colors
            for a personal touch
          </li>
          <li className="font-mono font-semibold text-gray-600">
            <em>More innovative features on the way...</em>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default About;
