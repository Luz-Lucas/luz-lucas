export function Contact() {
  return (
    <section id="contact" className="px-6 py-20">
      <div className="mx-auto w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-10">
        <div className="space-y-6">
          <p className="text-sm uppercase tracking-[0.3em] text-gray-400">Contact</p>
          <h2 className="text-3xl md:text-4xl font-semibold">Let’s build something together</h2>
          <p className="text-gray-300">
            Have a project in mind or want to discuss an opportunity? Share the details and I’ll get back to you.
          </p>
          <div className="space-y-3 text-sm text-gray-300">
            <p>
              <span className="text-gray-400">Email:</span>{" "}
              <a className="hover:text-blue-400 transition" href="mailto:lucapmluz@hotmail.com">
                lucapmluz@hotmail.com
              </a>
            </p>
            <p>
              <span className="text-gray-400">LinkedIn:</span>{" "}
              <a
                className="hover:text-blue-400 transition"
                href="https://www.linkedin.com/in/lucas-luz"
                target="_blank"
                rel="noreferrer"
              >
                linkedin.com/in/lucas-luz
              </a>
            </p>
            <p>
              <span className="text-gray-400">GitHub:</span>{" "}
              <a
                className="hover:text-blue-400 transition"
                href="https://github.com/Luz-lucas"
                target="_blank"
                rel="noreferrer"
              >
                github.com/Luz-lucas
              </a>
            </p>
          </div>
        </div>
        <form className="rounded-2xl border border-white/10 bg-white/5 p-6 space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              name="name"
              placeholder="Name"
              className="w-full rounded-lg bg-black/40 border border-white/10 px-4 py-3 text-sm text-white placeholder:text-gray-500 focus:outline-none focus:border-blue-600"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="w-full rounded-lg bg-black/40 border border-white/10 px-4 py-3 text-sm text-white placeholder:text-gray-500 focus:outline-none focus:border-blue-600"
            />
          </div>
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            className="w-full rounded-lg bg-black/40 border border-white/10 px-4 py-3 text-sm text-white placeholder:text-gray-500 focus:outline-none focus:border-blue-600"
          />
          <textarea
            name="message"
            rows={5}
            placeholder="Message"
            className="w-full rounded-lg bg-black/40 border border-white/10 px-4 py-3 text-sm text-white placeholder:text-gray-500 focus:outline-none focus:border-blue-600"
          />
          <button
            type="submit"
            className="w-full md:w-auto px-6 py-3 rounded-full bg-blue-600 text-white font-medium hover:bg-blue-500 transition"
          >
            Send message
          </button>
        </form>
      </div>
    </section>
  );
}
