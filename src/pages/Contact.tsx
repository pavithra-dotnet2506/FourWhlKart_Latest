const Contact = () => {
  return (
    <main className="py-6">
      <div className="bg-white border rounded-2xl p-6 shadow-sm max-w-xl">
        <h1 className="text-2xl font-bold mb-4">Contact Us</h1>
        <form className="space-y-4">
          <div>
            <label className="block text-sm text-gray-600">Name</label>
            <input
              className="mt-1 w-full rounded-xl border px-3 py-2"
              placeholder="Your full name"
            />
          </div>
          <div>
            <label className="block text-sm text-gray-600">Email</label>
            <input
              type="email"
              className="mt-1 w-full rounded-xl border px-3 py-2"
              placeholder="you@example.com"
            />
          </div>
          <div>
            <label className="block text-sm text-gray-600">Message</label>
            <textarea
              className="mt-1 w-full rounded-xl border px-3 py-2"
              rows={5}
              placeholder="How can we help?"
            />
          </div>
          <button
            type="button"
            className="rounded-xl bg-sky-600 text-white px-4 py-2"
          >
            Send
          </button>
        </form>
      </div>
    </main>
  );
};
export default Contact;
