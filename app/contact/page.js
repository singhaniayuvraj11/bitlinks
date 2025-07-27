import { Mail, Phone, MapPin, Send, Twitter, Linkedin, Github } from 'lucide-react';

// This is the main component for the "Contact Us" page.
// It's a functional component that uses Tailwind CSS and a purple theme.
export default function ContactPage() {
  return (
    <div className="bg-gray-50 min-h-screen font-sans text-gray-800">
      <main>
        {/* Header Section */}
        <section className="relative bg-purple-700 text-white py-24 sm:py-32 px-4 sm:px-6 lg:px-8 text-center">
          <div className="absolute inset-0 bg-purple-800 opacity-50"></div>
          <div className="relative max-w-4xl mx-auto">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-tight mb-4">
              Get In Touch
            </h1>
            <p className="max-w-2xl mx-auto text-lg sm:text-xl text-purple-200">
              We’d love to hear from you! Whether you have a question, feedback, or just want to say hello, feel free to reach out.
            </p>
          </div>
        </section>

        {/* Contact Form and Details Section */}
        <section className="py-20 sm:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
              
              {/* Contact Form */}
              <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
                <h2 className="text-3xl font-extrabold text-gray-900 mb-6">Send us a Message</h2>
                <form action="#" method="POST" className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                      Full Name
                    </label>
                    <div className="mt-1">
                      <input
                        type="text"
                        name="name"
                        id="name"
                        autoComplete="name"
                        className="py-3 px-4 block w-full shadow-sm text-gray-900 focus:ring-purple-500 focus:border-purple-500 border-gray-300 rounded-md"
                        placeholder="Your Name"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                      Email
                    </label>
                    <div className="mt-1">
                      <input
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        className="py-3 px-4 block w-full shadow-sm text-gray-900 focus:ring-purple-500 focus:border-purple-500 border-gray-300 rounded-md"
                        placeholder="you@example.com"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                      Message
                    </label>
                    <div className="mt-1">
                      <textarea
                        id="message"
                        name="message"
                        rows={4}
                        className="py-3 px-4 block w-full shadow-sm text-gray-900 focus:ring-purple-500 focus:border-purple-500 border border-gray-300 rounded-md"
                        placeholder="Your message..."
                      />
                    </div>
                  </div>
                  <div>
                    <button
                      type="submit"
                      className="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 transition-colors duration-300"
                    >
                      <Send className="mr-3 -ml-1 h-5 w-5" />
                      Send Message
                    </button>
                  </div>
                </form>
              </div>

              {/* Contact Information */}
              <div className="space-y-8">
                <h2 className="text-3xl font-extrabold text-gray-900">Contact Information</h2>
                <p className="text-lg text-gray-500">
                    Our team is available to assist you. Here’s how you can reach us directly.
                </p>
                <div className="space-y-6">
                    <div className="flex items-start">
                        <div className="flex-shrink-0">
                            <div className="flex items-center justify-center h-12 w-12 rounded-md bg-purple-600 text-white">
                                <Mail size={24} />
                            </div>
                        </div>
                        <div className="ml-4">
                            <h3 className="text-lg font-medium text-gray-900">Email</h3>
                            <p className="text-base text-gray-500">For support and general inquiries.</p>
                            <a href="mailto:support@yourshortener.com" className="text-base text-purple-600 hover:text-purple-800">
                                support@yourshortener.com
                            </a>
                        </div>
                    </div>
                     <div className="flex items-start">
                        <div className="flex-shrink-0">
                            <div className="flex items-center justify-center h-12 w-12 rounded-md bg-purple-600 text-white">
                                <Phone size={24} />
                            </div>
                        </div>
                        <div className="ml-4">
                            <h3 className="text-lg font-medium text-gray-900">Phone</h3>
                            <p className="text-base text-gray-500">Mon-Fri from 9am to 5pm.</p>
                            <a href="tel:+1-555-123-4567" className="text-base text-purple-600 hover:text-purple-800">
                                +1 (555) 123-4567
                            </a>
                        </div>
                    </div>
                    <div className="flex items-start">
                        <div className="flex-shrink-0">
                            <div className="flex items-center justify-center h-12 w-12 rounded-md bg-purple-600 text-white">
                                <MapPin size={24} />
                            </div>
                        </div>
                        <div className="ml-4">
                            <h3 className="text-lg font-medium text-gray-900">Location</h3>
                            <p className="text-base text-gray-500">123 Shortener Street, Web City, 98765</p>
                            <p className="text-base text-gray-500">United States</p>
                        </div>
                    </div>
                </div>
                <div className="pt-6 border-t border-gray-200">
                    <h3 className="text-lg font-medium text-gray-900">Follow Us</h3>
                    <div className="mt-4 flex space-x-6">
                        <a href="#" className="text-gray-400 hover:text-purple-600">
                            <span className="sr-only">Twitter</span>
                            <Twitter size={24} />
                        </a>
                        <a href="#" className="text-gray-400 hover:text-purple-600">
                            <span className="sr-only">LinkedIn</span>
                            <Linkedin size={24} />
                        </a>
                        <a href="#" className="text-gray-400 hover:text-purple-600">
                            <span className="sr-only">GitHub</span>
                            <Github size={24} />
                        </a>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-800 text-white">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
            <div className="text-center">
                <p>&copy; {new Date().getFullYear()} Your URL Shortener. All rights reserved.</p>
            </div>
        </div>
      </footer>
    </div>
  );
}
