import { ShieldCheck, Target, Zap, Link as LinkIcon } from 'lucide-react';

// This is the main component for the "About Us" page.
// It's a functional component that uses Tailwind CSS for styling.
export default function AboutPage() {
  return (
    <div className="bg-gray-50 min-h-screen font-sans text-gray-800">
      <main>
        {/* Hero Section */}
        <section className="relative bg-purple-700 text-white py-24 sm:py-32 px-4 sm:px-6 lg:px-8 text-center">
          <div className="absolute inset-0 bg-purple-800 opacity-50"></div>
          <div className="relative max-w-4xl mx-auto">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-tight mb-4">
              More Than Just Shorter Links
            </h1>
            <p className="max-w-2xl mx-auto text-lg sm:text-xl text-purple-200">
              We believe in the power of a short link. It's not just about saving space; it's about creating connections, building brands, and analyzing performance with a single click.
            </p>
          </div>
        </section>

        {/* Our Mission Section */}
        <section className="py-20 sm:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="lg:text-center">
              <h2 className="text-base text-purple-600 font-semibold tracking-wide uppercase">Our Mission</h2>
              <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                Simplifying Your Digital Footprint
              </p>
              <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
                Our goal is to provide a fast, simple, and reliable tool for shortening URLs. We're dedicated to helping individuals and businesses manage their links more effectively, turning long, cumbersome web addresses into powerful marketing and communication tools.
              </p>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="bg-gray-50 py-20 sm:py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-3xl mx-auto text-center">
                     <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">How It Works</h2>
                     <p className="mt-4 text-lg text-gray-500">
                        Shortening a URL is as easy as 1-2-3.
                     </p>
                </div>
                <div className="mt-12 grid gap-8 md:grid-cols-3">
                    {/* Step 1 */}
                    <div className="flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
                        <div className="flex items-center justify-center h-16 w-16 rounded-full bg-purple-100 text-purple-600 mb-4 ring-4 ring-purple-200">
                            <span className="text-2xl font-bold">1</span>
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">Paste Your URL</h3>
                        <p className="text-gray-500">Copy your long, unwieldy link and paste it into our input field.</p>
                    </div>
                    {/* Step 2 */}
                    <div className="flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
                        <div className="flex items-center justify-center h-16 w-16 rounded-full bg-purple-100 text-purple-600 mb-4 ring-4 ring-purple-200">
                            <span className="text-2xl font-bold">2</span>
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">Shorten It</h3>
                        <p className="text-gray-500">Click the "Shorten" button and watch as we instantly generate a compact, shareable link.</p>
                    </div>
                    {/* Step 3 */}
                    <div className="flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
                        <div className="flex items-center justify-center h-16 w-16 rounded-full bg-purple-100 text-purple-600 mb-4 ring-4 ring-purple-200">
                            <span className="text-2xl font-bold">3</span>
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">Copy & Share</h3>
                        <p className="text-gray-500">Copy your new short link and share it across your social media, emails, and more.</p>
                    </div>
                </div>
            </div>
        </section>


        {/* Features Section */}
        <section className="py-20 sm:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="lg:text-center">
              <h2 className="text-base text-purple-600 font-semibold tracking-wide uppercase">Features</h2>
              <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                Everything You Need in a Link
              </p>
              <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
                We offer more than just shortening. Our platform is packed with features to help you get the most out of every link.
              </p>
            </div>

            <div className="mt-12">
              <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
                <div className="relative">
                  <dt>
                    <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-purple-600 text-white">
                      <Zap size={24} />
                    </div>
                    <p className="ml-16 text-lg leading-6 font-medium text-gray-900">Lightning-Fast Redirects</p>
                  </dt>
                  <dd className="mt-2 ml-16 text-base text-gray-500">
                    Our infrastructure is optimized for speed, ensuring your users get to their destination in the blink of an eye.
                  </dd>
                </div>

                <div className="relative">
                  <dt>
                    <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-purple-600 text-white">
                      <LinkIcon size={24} />
                    </div>
                    <p className="ml-16 text-lg leading-6 font-medium text-gray-900">Custom Branded Links</p>
                  </dt>
                  <dd className="mt-2 ml-16 text-base text-gray-500">
                    Strengthen your brand recognition with custom aliases for your short links. Make your links memorable and trustworthy.
                  </dd>
                </div>

                <div className="relative">
                  <dt>
                    <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-purple-600 text-white">
                      <Target size={24} />
                    </div>
                    <p className="ml-16 text-lg leading-6 font-medium text-gray-900">Detailed Analytics</p>
                  </dt>
                  <dd className="mt-2 ml-16 text-base text-gray-500">
                    Track every click. Understand your audience with detailed statistics on who is clicking your links, where they're from, and when.
                  </dd>
                </div>

                <div className="relative">
                  <dt>
                    <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-purple-600 text-white">
                      <ShieldCheck size={24} />
                    </div>
                    <p className="ml-16 text-lg leading-6 font-medium text-gray-900">Secure & Reliable</p>
                  </dt>
                  <dd className="mt-2 ml-16 text-base text-gray-500">
                    Your links are safe with us. We actively block malicious URLs and ensure high availability for all our services.
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="bg-purple-700">
          <div className="max-w-3xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
              <span className="block">Ready to dive in?</span>
              <span className="block">Shorten your first link today.</span>
            </h2>
            <p className="mt-4 text-lg leading-6 text-purple-200">
              Join thousands of users who are simplifying their digital presence with us. It's free to get started.
            </p>
            <a
              href="/"
              className="mt-8 w-full inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-purple-600 bg-white hover:bg-purple-50 sm:w-auto transition-colors duration-300"
            >
              Get Started
            </a>
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
