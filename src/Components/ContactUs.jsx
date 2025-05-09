import contactImage from '../assets/contactus.jpg';

export default function ContactForm() {
  return (
    <section className="w-full bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold green">Contact Us</h2>
        <p className="mt-2 text-gray-600">
          We'd love to hear from you. Whether you're curious about our work or need support — we're ready to answer any questions.
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-stretch">
        {/* Image */}
        <div className="hidden md:block h-full">
          <div className="h-full">
            <img
              src={contactImage}
              alt="Contact NatureCipher"
              className="w-full h-full object-cover rounded-2xl shadow-md"
            />
          </div>
        </div>

        {/* Form */}
        <div className="bg-white rounded-2xl shadow-md p-6 flex flex-col justify-center">
          <form className="space-y-5">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                placeholder="Enter your full name"
                required
                className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 focus:ring-theme-green focus:border-theme-green"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                placeholder="you@example.com"
                required
                className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 focus:ring-theme-green focus:border-theme-green"
              />
            </div>

            <div>
              <label htmlFor="organisation" className="block text-sm font-medium text-gray-700">
                Organisation
              </label>
              <input
                type="text"
                id="organisation"
                placeholder="Your company or organization (optional)"
                className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 focus:ring-theme-green focus:border-theme-green"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                Message
              </label>
              <textarea
                id="message"
                rows="4"
                placeholder="Type your message here..."
                required
                className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 focus:ring-theme-green focus:border-theme-green"
              ></textarea>
            </div>

            <button
              type="submit"
              className="bg-theme-green text-white px-6 py-2 rounded-md hover:bg-green-700 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
