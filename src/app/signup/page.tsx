import Header from "../header";
import Footer from "../footer";

export default function Signup() {
  return (
    <main>
      <Header />
      <div className="flex items-center justify-center h-screen bg-gray-100">
        <div className="bg-white w-6/12  rounded-lg shadow-lg p-6">
          {/* Tabbed Header */}
          <div className="flex mb-6">
            <button className="flex-1 text-center py-2 border-b-2 border-transparent text-gray-500 hover:text-gray-900">
              LOGIN
            </button>
            <button className="flex-1 text-center py-2 border-b-2 border-blue-500 text-blue-600">
              REGISTER
            </button>
          </div>

          {/* Social Media Signup */}
          <div className="text-center mb-4">
            <p className="text-sm text-gray-600">Sign up with:</p>
            <div className="flex justify-center space-x-4 my-2 ml-3">
              <a href="#" className="text-blue-600">
                <i className="fab fa-facebook-f"></i>{" "}
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAS1JREFUSEvtlKFOA0EQQN8U2rttcJSk24QfAIdAYDB8AAmhfwABiUFhEHgcJFgcNQSLQGDhAyBBkdsEsNzdJpQlvasgpPSOK5dUdNWKnfd2Z2ZHKHlJyXzGSzDTtItd4QhhGWjgCATOQ+Md/JaJ3C+oz7+33Mf0E+D9gHUi422OLPB1fCLIzgDQRWS89sgCpe0dsJSC5CYy1TWQblaT5E6R0vELyFyCR3ZDUzvNgqdncy6l7Rsw2xdsh6Z2lid0qEA1bVsqLPRAzrEPqATquJIK973tJ+42DvzrQjVQ2naAjeE3dXuR8Y9LE4iwHgbeZSFBvWUPnXOraePICo5qH/QAziQpmmLLPvuPhQTfg5SOX0Ea/1rkieCPH21Sg4zBUnqb5hlsg87knqZjK/gCsrpwGUxvYpsAAAAASUVORK5CYII=" />
              </a>
              <a href="#" className="text-blue-400">
                <i className="fab fa-twitter"></i>{" "}
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAndJREFUSEvVVUtoE1EUPXdqNMFKre6CLooILYpSF/5AXKqIS6OVZtK4EoTOm0CkC2mDRUqhnUwausgqZoq/uFBK0ZUg2I0rQVFREcWVitDWUpummVyZmrT5TJJBKeJbvnfuOXPOe/cOYZ0XrTM//r1ANDpxAOATAA6BcBQAgfCGGe+IaUpV/Q/qpVDTwcBAeuPW1swwANEgxulll3n2yuXgFzucrUA0anSAcA/AHmd3xMOqCPQ5Eogkk+6WOekFQLttCt4CyBGwiwH373O+PTf7sTsSieQdCei6oTGgloCXQHw9l6VEOCx/s/YTiYRrYdHTD6Bjh9d9zufzmbWclkWkjRnHKY8nJeD5Jinf2dvb88FZVNWoMoGonroFUFcRxkQXQ4o/+afkVl25QMx4BsbBAuEPVcgtpeSalvYQZR7VE5QkaVBRuh8XMRUOjO8AthcOp1UhHyslGx9PN2eXM/N1HRGFVcU/UkvgM4CdfyPARCKk+GP2AjFjEowzhcNFofg3ExEXwbYR0YrjvWuEfF6IwF1bAU03Bgm4uhoBI6iq8o16kURjE6NgDq3VmG2qGvxkKxCPG22middrTYRZAu8XImBFV7V0PbWPQdMAthQOX6lCXnVT9YqsDU1P9RFoqIRthkA9Qvgni3vWnGptzVxi8DWAVl8aE7pCinyn9EuqZpHVpT8XPc9t5tAMCO+Z0WyNCgCbKogeCiGfrrRpO+xG4sn2DWbTfQbaHTUZ4Wkui1PhsLzgSMACrYzrbUtDZRdYUU1ABmDN6/X015pHDf9oo2OpTsmkk5BwBIzDVvcT8JKZp4hcN4W48LWey4YCjiKqA/r/BX4Bfw3XGdUXp0gAAAAASUVORK5CYII=" />
              </a>
              <a href="#" className="text-red-500">
                <i className="fab fa-google"></i>{" "}
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAjlJREFUSEvdlc1LFHEYxz/P7KaCvTiT7m5WZEJEYC/obIc6FkER9EJIIXSwQ4T3oij6A+rSwegSInipg4cg8CBEhCC6W0kSnZKEcnZMd6OktnbniYE0X2Z33QUv/o7zPM/3w/f5zXxHWOMja6zPOgNEx5za1MHYXLG1WcMzm6vCxl3gtMJu4I+qdrs/zFuNtbPbPJEzjm12I6K+zv8VPdVQtPnbOHjtKdt6VwgSHU0PIhwLqE8COxG5lGqrezJfXwDE3qSbNM8EMK2q59y4NbRcpDGRac2jyYIOlYQIL/MefdOHzbdLHDS9mKj5uanuOxD+J/A4T+7OV7thal4wkpztEJW+IiucE+hybLN3hQP/QTSZHkI5slhA4RXIs5ChI57HIeBBEQc9qbjZubi+sKKGcXdjOFu111MdAOor+T5U9Z4bt64HArYPz+zIhY1PwAzQUAlA0C7Hth4GAlA1osnMR2BXJeL+TIj8vi92/YdgABBJps+L4r9i8xddDmsiZZvNywdWREUsmWlX1dvA/nLUFb3m2taj0oDR2VMq8rwccWBya03dnvct8rskwG+IJdK9CpdXCcmJGked+JaRoP7gNFU1Iq/TLYJxE9WLRUAqwhWnzewp1LMC4AeeZKttLyQ3RPVkYXH9pSIdbpvZX8zpAiA6mjmO6H3gwJIQDJgWlQER7+qUbfkBV/QsceBH8YaQcQE4i3ACqAaygIPwWZRBz6DfbTXHSgkHZtFqh8rpW2e/zHKsr7b3L2jCuxk0SMPFAAAAAElFTkSuQmCC" />
              </a>
              <a href="#" className="text-gray-500">
                <i className="fab fa-github"></i>
              </a>
            </div>
          </div>

          {/* Divider */}
          <div className="flex items-center mb-4">
            <div className="flex-grow border-t border-gray-300"></div>
            <span className="px-4 text-gray-500">or</span>
            <div className="flex-grow border-t border-gray-300"></div>
          </div>

          {/* Registration Form */}
          <form>
            <div className="mb-4">
              <input
                type="text"
                placeholder="Name"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="mb-4">
              <input
                type="text"
                placeholder="Username"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="mb-4">
              <input
                type="email"
                placeholder="Email"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="mb-4">
              <input
                type="password"
                placeholder="Password"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="mb-4">
              <input
                type="password"
                placeholder="Repeat password"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Terms and Conditions */}
            <div className="mb-4">
              <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  className="form-checkbox h-5 w-5 text-blue-600"
                />
                <span className="ml-2 text-gray-600 text-sm">
                  I have read and agree to the terms
                </span>
              </label>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-300"
            >
              SIGN IN
            </button>
          </form>
        </div>

  </div>
      <Footer />
    </main>
  );
}
