import Link from "next/link";
import Header from "../header";
import Footer from "../footer";

export default function Login() {
  return (
    <main>
      <Header />
      <div className="flex items-center justify-center h-screen bg-gray-100">
        <div className="bg-white w-full h-5/6 max-w-7xl rounded-lg shadow-lg overflow-hidden flex">
          {/* Left Side - Sign In */}
          <div className="w-1/2 p-8">
            <h2 className="text-2xl font-bold mb-6">Welcome back</h2>
            <form>
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Email"
                />
              </div>
              <div className="mb-6">
                <label htmlFor="password" className="block text-gray-700">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Password"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white font-semibold py-2 rounded-lg hover:bg-blue-700 transition duration-300"
              >
                Sign In
              </button>
            </form>
            <div className="flex justify-center space-x-4 mt-6">
              <button className="p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition">
                {/* Social Icons */}
                <img
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAwxJREFUSEvFVUtIVkEU/o5PkLJFRUTLDLIXFNEiEIqCqDZZYEbQPaPZ3wtBIrNAEumBBWFGmRXMjEaFYbXJXS1aVBBFYS9IwkWLHkTgI/l/8Z4cub9db7/2u4hmdefc78w35zsz3xD+8aB/vD4mJWhpacnOycnZQkQbASwFsAAYzekhole+73cmEomOWCw2NNFGJySw1q4XkWYABX+p8iOAPcz8IBUuJYG19oiInA52m46KvojUKKXORsF/EBhjqgE0pLNqFCMiVUqpxnB8HIG1dq2IuFKJiJy+ZVlZWfuIqBZABoBuAE7vQgA+gFOZmZmXhoeHLwDY5mK+7xeVlZU9TpKMETQ1NeXm5+e/ATA/+FnPzMfdd1tbW0EikfhSXl7e5+bt7e3TBgYG5iqlPri5tfaYiJwM8t7m5eUtKykpGXbzMQJr7XYRuRUqr5GZq9KRylp7RkQOJ7Eislkp1TmOwBhzHcDOsdKIVnue9yRNgmUi8jK04YvMfDBK4ORZlCyTmRens3gSY4x5DmBFMH/GzKuiBF8BzA4A95i5eIoENwDsCHK+M/OsKMFnAHNGg0QPPc9bNxUCa+19EdkU5PQz8/QowQsAywNAXzwenzmZBYTJnaXk5uZ+AzAjiL9nZneUf58iY8xVALtDTa7wPO9aOlVorSuI6Eoot83zvF3RY1osIncA/ADQD2AugJp4PN4ci8V+piJy92FwcPCAiJwKLuIoTERKlFK3xxGICFlr3UmaJyIbAOwlIg9AAkBnb29vaWVlZdwlBZLcBeBwWRHydz09PUvq6urcTR9v11rrrUTUMSLVp6GhoZXZ2dnu4q0ZaX4zM+8PL2SMuQmgNFqZiBQrpe6NyRUFGGPOA6gEUMvMJybqgda6johGrSQ5ROScUupQOJbSrrXWtURUD+DRiIl1ichrpdTlcKK1tl5EnAkmda9Oy66TCVrrIiJy1rtCRBqUUjURiVxjjwJ4Gtj001TVTvpkusa3trZu8X2/WynVFV5Aa70wIyOj0PM81+wJx/999CfbWbr/fgHbiUQoLUZtSgAAAABJRU5ErkJggg=="
                  alt="Google"
                  className="h-6 w-6"
                />
              </button>
              <button className="p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition">
                <img
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAhFJREFUSEvdlTuIU0EUhv8/V1CiWGkhaDSCiKAiYqWlIiiCDyQoS+7MmELEXlEU02tjsWJjZm64jSm2EIQtthHZRhQULawMLoiCWMkGNY8jA0nI5nGzWUizU84583+cx/0vMeXDKetjnQHK5fLmMAyXk9oWx/HWer3+gOQ5AFkAdZKzmUzmbrVa3REEwfkwDGdJitfptqhSqQS1Wu2TiOSMMR9HQZxzCwBODokvAdhF8qpS6nkn3gVYa/eQrAL4CeCi1nqxX6RUKh1NpVLvEip8C+CViMTGmPcrKrDWbiL5G8CGtsCzIAju5/P57x1B59wMgDgBsEzyplIqGqjAX0RRtCgix/sEXgN4AeANgCMAHicArNb6Wm+8dwZbarXafgDzALat5fsg+VApdWsoII7jnY1G4yuAXwC2rxHg2/NkKKBYLKay2ewXEdm9FnH/RkQOGGM+DwX4S2vtJZJ+xTqDnoRV1Vrv7X8wYBXOuRyAewAOTaIuIjeMMU/HAqy1Z0m+nEQcwFI6nd6Xy+X+jQX4BOec3+NwlZAGyRNKKb/GA2eom7YHflBE7gC4kgDyflPQWttROQMAb3gAjrVardsAziSI/xGRGWPMXFKlXUAURacAPBKRw70mOOLxPMnrSilvcIlnRQVtK75M8gKA0wA2AvhL8geAbyKy0Gw25wqFwodxwp34OvujrbbsSfKm3qL/aQGvGSPmF8YAAAAASUVORK5CYII="
                  alt="Twitter"
                  className="h-6 w-6"
                />
              </button>
            </div>
          </div>

          {/* Right Side - Sign Up */}
          <div className="w-1/2 bg-blue-600 text-white flex flex-col items-center justify-center p-8">
            <h2 className="text-3xl font-bold mb-4">New here?</h2>
            <p className="mb-6 text-center">
              Sign up and discover a great amount of new opportunities!
            </p>
            <Link href="/signup" passHref>
              <button className="bg-white text-blue-600 font-semibold py-2 px-6 rounded-lg hover:bg-gray-100 transition duration-300">
                Sign Up
              </button>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
