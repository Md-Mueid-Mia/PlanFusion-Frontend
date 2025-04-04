const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-gray-800 via-gray-700 to-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Brand Info */}
        <div>
          <h1 className="text-3xl font-bold mb-4">PlanFusion</h1>
          <p className="text-gray-300">
            Bringing teams together with seamless collaboration and management solutions.
          </p>
          <div className="mt-4 flex space-x-4">
            <a href="#" aria-label="Facebook" className="hover:text-blue-400 transition duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-6 h-6" viewBox="0 0 24 24">
                <path d="M22.675 0h-21.35c-.737 0-1.325.588-1.325 1.325v21.351c0 .737.588 1.324 1.325 1.324h11.475v-9.294h-3.127v-3.622h3.127v-2.671c0-3.1 1.894-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24h-1.917c-1.505 0-1.796.715-1.796 1.764v2.312h3.591l-.467 3.622h-3.124v9.294h6.126c.737 0 1.325-.588 1.325-1.324v-21.35c0-.737-.588-1.325-1.325-1.325z" />
              </svg>
            </a>
            <a href="#" aria-label="Twitter" className="hover:text-blue-400 transition duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-6 h-6" viewBox="0 0 24 24">
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.611 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.955-2.178-1.555-3.594-1.555-2.717 0-4.92 2.203-4.92 4.917 0 .386.044.762.127 1.124-4.09-.205-7.719-2.164-10.148-5.144-.424.729-.666 1.577-.666 2.482 0 1.71.87 3.213 2.188 4.096-.807-.026-1.566-.248-2.228-.616v.062c0 2.385 1.693 4.374 3.946 4.828-.412.112-.846.171-1.294.171-.314 0-.622-.03-.922-.087.623 1.947 2.432 3.366 4.573 3.406-1.675 1.311-3.787 2.096-6.086 2.096-.395 0-.785-.023-1.17-.067 2.169 1.393 4.747 2.207 7.527 2.207 9.025 0 13.966-7.479 13.966-13.975 0-.213-.004-.425-.013-.636.96-.695 1.796-1.562 2.457-2.549z" />
              </svg>
            </a>
            <a href="#" aria-label="LinkedIn" className="hover:text-blue-400 transition duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-6 h-6" viewBox="0 0 24 24">
                <path d="M22.23 0h-20.46c-.978 0-1.77.792-1.77 1.77v20.46c0 .978.792 1.77 1.77 1.77h20.46c.978 0 1.77-.792 1.77-1.77v-20.46c0-.978-.792-1.77-1.77-1.77zm-13.845 20.339h-3.709v-11.041h3.709v11.041zm-1.854-12.636c-1.185 0-2.146-.961-2.146-2.146 0-1.184.961-2.145 2.146-2.145 1.184 0 2.145.961 2.145 2.145 0 1.185-.961 2.146-2.145 2.146zm13.385 12.636h-3.709v-5.998c0-1.428-.027-3.271-1.993-3.271-1.993 0-2.299 1.555-2.299 3.163v6.106h-3.709v-11.041h3.563v1.508h.05c.496-.937 1.704-1.923 3.51-1.923 3.75 0 4.445 2.467 4.445 5.671v5.785z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Navigation Links */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Navigation</h2>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-blue-400 transition duration-300">About Us</a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-400 transition duration-300">Privacy Policy</a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-400 transition duration-300">Terms of Service</a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-400 transition duration-300">Contact</a>
            </li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Resources</h2>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-blue-400 transition duration-300">Blog</a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-400 transition duration-300">Help Center</a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-400 transition duration-300">FAQ</a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-400 transition duration-300">Careers</a>
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Stay Updated</h2>
          <p className="text-gray-300 mb-4">Subscribe to our newsletter to receive the latest news and updates.</p>
          <form className="flex flex-col sm:flex-row gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-2 rounded-md text-gray-400 focus:outline-sky-400 focus:ring-2 focus:ring-blue-400 transition duration-300"
            />
            <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-2 rounded-md transition duration-300">
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-gray-700 mt-12 pt-4">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400">&copy; 2025 PlanFusion. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-blue-400 transition duration-300">Terms</a>
            <a href="#" className="hover:text-blue-400 transition duration-300">Privacy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;