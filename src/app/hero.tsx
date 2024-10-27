
function Hero() {
  return (
    <section>
      <hr /> {/* Nav2 Ends */}
      {/* dropdown btn 1 */}
      <div className=" hidden  md:flex relative text-left items-center ">
        <button
          type="button"
          className="flex mt-4 ml-12 w-28 justify-center gap-x-1.5 rounded-3xl bg-blue-400 px-3 py-2 text-sm font-semibold text-white ring-1 ring-inset ring-gray-300 hover:bg-blue-500"
          id="menu-button"
          aria-expanded="true"
          aria-haspopup="true"
        >
          Groceries
          <svg
            className="-mr-1 h-5 w-5 text-white "
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
            data-slot="icon"
          >
            <path
              fill-rule="evenodd"
              d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z"
              clip-rule="evenodd"
            />
          </svg>
        </button>
        {/* dropdown btn 2 */}
        <button
          type="button"
          className="flex mt-4 ml-4 w-40 justify-center gap-x-1.5 rounded-3xl bg-blue-50 px-3 py-2 text-sm font-semibold text-black ring-1 ring-inset ring-gray-300 hover:bg-blue-100"
          id="menu-button"
          aria-expanded="true"
          aria-haspopup="true"
        >
          Premium Fruits
          <svg
            className="-mr-1 h-5 w-5 text-blue-400"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
            data-slot="icon"
          >
            <path
              fill-rule="evenodd"
              d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z"
              clip-rule="evenodd"
            />
          </svg>
        </button>

        {/* dropdown btn 3 */}
        <button
          type="button"
          className="flex mt-4 ml-4 w-44 justify-center gap-x-1.5 rounded-3xl bg-blue-50 px-3 py-2 text-sm font-semibold text-black ring-1 ring-inset ring-gray-300 hover:bg-blue-100"
          id="menu-button"
          aria-expanded="true"
          aria-haspopup="true"
        >
          Home & Kitchen
          <svg
            className="-mr-1 h-5 w-5 text-blue-400"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
            data-slot="icon"
          >
            <path
              fill-rule="evenodd"
              d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z"
              clip-rule="evenodd"
            />
          </svg>
        </button>

        {/* dropdown btn 4 */}
        <button
          type="button"
          className="flex mt-4 ml-4 w-28 justify-center gap-x-1.5 rounded-3xl bg-blue-50 px-3 py-2 text-sm font-semibold text-black ring-1 ring-inset ring-gray-300 hover:bg-blue-100"
          id="menu-button"
          aria-expanded="true"
          aria-haspopup="true"
        >
          Fashion
          <svg
            className="-mr-1 h-5 w-5 text-blue-400"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
            data-slot="icon"
          >
            <path
              fill-rule="evenodd"
              d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z"
              clip-rule="evenodd"
            />
          </svg>
        </button>

        {/* dropdown btn 5 */}
        <button
          type="button"
          className="flex mt-4 ml-4 w-32 justify-center gap-x-1.5 rounded-3xl bg-blue-50 px-3 py-2 text-sm font-semibold text-black ring-1 ring-inset ring-gray-300 hover:bg-blue-100"
          id="menu-button"
          aria-expanded="true"
          aria-haspopup="true"
        >
          Electronics
          <svg
            className="-mr-1 h-5 w-5 text-blue-400"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
            data-slot="icon"
          >
            <path
              fill-rule="evenodd"
              d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z"
              clip-rule="evenodd"
            />
          </svg>
        </button>
        {/* dropdown btn 6 */}

        <button
          type="button"
          className="flex mt-4 ml-4 w-24 justify-center gap-x-1.5 rounded-3xl bg-blue-50 px-3 py-2 text-sm font-semibold text-black ring-1 ring-inset ring-gray-300 hover:bg-blue-100"
          id="menu-button"
          aria-expanded="true"
          aria-haspopup="true"
        >
          Beauty
          <svg
            className="-mr-1 h-5 w-5 text-blue-400"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
            data-slot="icon"
          >
            <path
              fill-rule="evenodd"
              d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z"
              clip-rule="evenodd"
            />
          </svg>
        </button>

        {/* dropdown btn 7 */}

        <button
          type="button"
          className="flex mt-4 ml-4 w-52 justify-center gap-x-1.5 rounded-3xl bg-blue-50 px-3 py-2 text-sm font-semibold text-black ring-1 ring-inset ring-gray-300 hover:bg-blue-100"
          id="menu-button"
          aria-expanded="true"
          aria-haspopup="true"
        >
          Home Improvement
          <svg
            className="-mr-1 h-5 w-5 text-blue-400"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
            data-slot="icon"
          >
            <path
              fill-rule="evenodd"
              d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z"
              clip-rule="evenodd"
            />
          </svg>
        </button>

        {/* dropdown btn 8 */}

        <button
          type="button"
          className="flex mt-4 ml-4 w-56 mr-12 justify-center gap-x-1.5 rounded-3xl bg-blue-50 px-3 py-2 text-sm font-semibold text-black ring-1 ring-inset ring-gray-300 hover:bg-blue-100"
          id="menu-button"
          aria-expanded="true"
          aria-haspopup="true"
        >
          Sports, Toys & Luggage
          <svg
            className="-mr-1 h-5 w-5 text-blue-400"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
            data-slot="icon"
          >
            <path
              fill-rule="evenodd"
              d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z"
              clip-rule="evenodd"
            />
          </svg>
        </button>
      </div>
      <br />
      <br />
      {/* Banner Starts */}
      <div className=" bg-customBlue p-52 pb-9 ml-11 mr-9 rounded-2xl hidden lg:block">
        <img
          className="-mb-80 ml-[254px] -mt-40 h-[362px] w-[800px] absolute bottom-[358px]  hidden lg:block"
          src="image1.png"
          alt=""
        />

        <h2 className="text-white -ml-20 -mt-32 font-sans font-normal text-2xl  ">
          Best Deal Online on smart watches{" "}
        </h2>
        <h1 className="text-white mt-3 -ml-20 font-semibold text-6xl ">
          SMART WEARABLE.
        </h1>
        <h2 className="text-white mt-4 -ml-20 text-4xl">UP to 80% OFF</h2>
        <div>
          <div className="bg-white h-2 w-6 mt-20 -ml-20 rounded-2xl"></div>
          <div className="bg-white h-2 w-2 rounded-2xl -ml-12 -mt-2"></div>
          <div className="bg-white h-2 w-2 rounded-2xl -ml-8 -mt-2"></div>
          <div className="bg-white h-2 w-2 rounded-2xl -ml-4 -mt-2"></div>
          <div className="bg-white h-2 w-2 rounded-2xl -ml-0 -mt-2"></div>
          <div className="bg-white h-2 w-2 rounded-2xl -ml-[-16px] -mt-2"></div>
          <div className="bg-white h-2 w-2 rounded-2xl -ml-[-32px] -mt-2"></div>
        </div>
      </div>
      <img
        className="md:hidden"
        src="https://cdn.create.vista.com/downloads/0d580ee7-3241-41e5-bb21-47ec3df2dc0a_1024.jpeg"
        alt=""
      />
      {/* Heading */}
      <div className="py-16 ">
        <h2 className="text-xl font-semibold text-gray-600 mt-12 ml-5">
          Grab the best deal on
          <span className="text-blue-500"> Smartphones</span>
        </h2>
        <br />
        <div className="bg-blue-500 w-[360px] h-1 ml-5 -mt-3 "> </div> <hr />
        <h3 className="  md:ml-[1250px]  font-medium ml-[400px] -mt-9">
          View All{" "}
        </h3>
      </div>
      {/* photos */}
      <div className=" grid grid-cols-1 gap-y-3 md:gap-x-3 md:grid-cols-5 justify-around ">
        <div className="border-2 rounded-2xl transform hover:scale-105 hover:shadow-2xl duration-300 ease-in-out">
          <img className="h-48 w-60  " src="img4.png" alt="" />
          <h4 className="font-semibold text-lg mt-1  p-2">Galaxy S22 Ultra</h4>
          <p className="font-bold mt-1 ml-2">
            ₹32999 <span className="line-through font-light">₹74999</span>
          </p>
          <hr className="w-48 mt-1" />
          <p className="text-green-600 font-semibold  mt-1 ml-2 p-2">
            Save-₹32999
          </p>
        </div>

        <div className="border-2 border-blue-400 rounded-2xl shadow-2xl transform hover:scale-105 hover:shadow-2xl duration-300 ease-in-out">
          <img className="h-48 w-60  rounded-t-2xl" src="img2.png" alt="" />
          <h4 className="font-semibold text-lg mt-1  p-2">
            Galaxy M13 (4GB|64GB)
          </h4>
          <p className="font-bold mt-1 ml-2">
            ₹10499 <span className="line-through font-light">₹14999</span>
          </p>
          <hr className="w-48 mt-1" />
          <p className="text-green-600 font-semibold mt-1 ml-2 p-2">
            Save-₹4500
          </p>
        </div>

        <div className="border-2 rounded-2xl transform hover:scale-105 hover:shadow-2xl duration-300 ease-in-out">
          <img className="h-48 w-60  rounded-t-2xl" src="img3.png" alt="" />
          <h4 className="font-semi-lg mt-1  p-2">Galaxy M33 (4GB|64GB) </h4>
          <p className="font-bold mt-1 ml-2">
            ₹16999 <span className="line-through font-light">₹24999</span>
          </p>
          <hr className="w-48 mt-1" />
          <p className="text-green-600 font-semibold mt-1 ml-2 p-2">
            Save-₹8000
          </p>
        </div>

        <div className="border-2 rounded-2xl transform hover:scale-105 hover:shadow-2xl duration-300 ease-in-out">
          <img className="h-48 w-60  rounded-t-2xl" src="img5.png" alt="" />
          <h4 className="font-semibold text-lg mt-1  p-2">
            Galaxy M53 (4GB|64GB){" "}
          </h4>
          <p className="font-bold mt-1 ml-2">
            ₹31999 <span className="line-through font-light">₹40999</span>
          </p>
          <hr className="w-48 mt-1" />
          <p className="text-green-600 font-semibold mt-1 ml-2 p-2">
            Save-₹9000
          </p>
        </div>
        <div className="border-2 rounded-2xl transform hover:scale-105 hover:shadow-2xl duration-300 ease-in-out">
          <img className="h-48 w-60  rounded-t-2xl" src="img6.png" alt="" />
          <h4 className="font-semibold text-lg mt-1  p-2">Galaxy S22 Ultra</h4>
          <p className="font-bold mt-1 ml-2">
            ₹67999 <span className="line-through font-light">₹85999</span>
          </p>
          <hr className="w-48 mt-1" />
          <p className="text-green-600 font-semibold mt-1 ml-2 p-2">
            Save-₹18000
          </p>
        </div>
      </div>
      {/* Heading2 */}
      <div className="py-16 ">
        <h2 className="text-xl font-semibold text-gray-600 mt-12 ml-5 ">
          {" "}
          Shop From <span className="text-blue-500 ">Top Categeories</span>
        </h2>
        <div className="bg-blue-500 w-80 h-1 ml-5 -mt-[-12px]  "> </div> <hr />
        <h3 className="md:ml-[1250px] ml-[400px] font-medium -mt-9">View All </h3>
      </div>
      {/* Photos2 */}
      <div className="grid grid-cols-2 md:grid md:grid-cols-7 gap-y-10  ">
        <div >
          <img
            className=" transform hover:scale-105 hover:shadow-2xl duration-300 ease-in-out w-[850px]   "
            src="img02.png"
            alt=""
          />
          <h4 className="ml-[90px] md:ml-[60px] -mt-9 font-semibold">Mobile</h4>
        </div>
        <div>
          <img
            className=" transform hover:scale-105 hover:shadow-2xl duration-300 ease-in-out w-[850px]  "
            src="img01.png"
            alt=""
          />
          <h4 className="ml-[90px] md:ml-[60px] -mt-9 font-semibold">Cosmetics</h4>
        </div>
        <div>
          <img
            className="transform hover:scale-105 hover:shadow-2xl duration-300 ease-in-out w-[850px] "
            src="img04.png"
            alt=""
          />
          <h4 className="ml-[90px] md:ml-[60px] -mt-9 font-semibold">Electronics</h4>
        </div>
        <div>
          <img
            className="transform hover:scale-105 hover:shadow-2xl duration-300 ease-in-out w-[850px] "
            src="img05.png"
            alt=""
          />
          <h4 className="ml-[90px] md:ml-[60px] -mt-9 font-semibold">Furniture</h4>
        </div>
        <div>
          <img
            className="transform hover:scale-105 hover:shadow-2xl duration-300 ease-in-out w-[850px] "
            src="img03.png"
            alt=""
          />
          <h4 className=" ml-[90px] md:ml-[60px] -mt-9 font-semibold">Watches</h4>
        </div>
        <div>
          <img
            className="transform hover:scale-105 hover:shadow-2xl duration-300 ease-in-out w-[850px] "
            src="img06.png"
            alt=""
          />
          <h4 className="ml-[90px] md:ml-[70px] -mt-9 font-semibold">Decor</h4>
        </div>
        <div>
          
          <img
            className="transform hover:scale-105 hover:shadow-2xl duration-300 ease-in-out w-[850px] md:-ml-0 ml-28  "
            src="img07.png"
            alt=""
          />
          <h4 className="ml-[185px]  md:ml-[60px] -mt-8 font-semibold">Accessories</h4>
        </div>
      </div>
      {/* Heading3 */}
      <div className="py-16 ">
        <h2 className="text-xl font-semibold text-gray-600 mt-12 ml-5 ">
          {" "}
          Top <span className="text-blue-500">Electronic Brands</span>
        </h2>
        <div className="bg-blue-500 w-80 h-1 mt-3 ml-5  "> </div> <hr />
        <h3 className="md:ml-[1250px] ml-[400px] font-medium -mt-9 ">View All </h3>
      </div>
      {/* Photos 3 */}
      <div className=" gap-y-8 md:grid md:grid-cols-3 justify-around grid grid-cols-1 ">
        <div>
          <img
            className="hover:scale-105 hover:shadow-lg transition-transform duration-300 w-[400px] h-[400px] -mt-32 ml-6 "
            src="img001.png"
            alt=""
          />
        </div>

        <div>
          <img
            className="hover:scale-105 hover:shadow-lg transition-transform duration-300 w-[400px] h-[400px] -mt-[108px] ml-6"
            src="img002.png"
            alt=""
          />
        </div>

        <div>
          <img
            className="hover:scale-105 hover:shadow-lg transition-transform duration-300 w-[400px] h-[400px] -mt-[79px] ml-6"
            src="img003.png"
            alt=""
          />
        </div>
      </div>
      <div className="flex justify-center gap-x-2 -mt-24">
        <div className="bg-blue-500 h-2 w-7 rounded-full"></div>

        <div className="bg-gray-300 h-2 w-2 rounded-full"></div>
        <div className="bg-gray-300 h-2 w-2 rounded-full"></div>
        <div className="bg-gray-300 h-2 w-2 rounded-full"></div>
        <div className="bg-gray-300 h-2 w-2 rounded-full"></div>
        <div className="bg-gray-300 h-2 w-2  rounded-full"></div>
        <div className="bg-gray-300 h-2 w-2 rounded-full "></div>
      </div>
      {/* Heading 4 */}
      <div className="py-16 ">
        <h2 className="text-xl font-semibold text-gray-600 mt-12 ml-5 ">
          Daily <span className="text-blue-500">Essentials</span>
        </h2>
        <div className="bg-blue-500 w-80 h-1 mt-3 ml-1  "> </div> <hr />
        <h3 className="md:ml-[1250px] ml-[400px] font-medium -mt-9">View All </h3>
      </div>
      {/* Photo 4 */}
      <div className="grid grid-cols-3 md:grid-cols-6 justify-around md:hiddenflex gap-y-7 ">
        <div>
          <img
            className="hover:scale-105 hover:shadow-lg transition-transform duration-300 w-[150px] rounded-xl "
            src="cart.png"
            alt=""
          />
          <p className=" font-semibold text-normal text-gray-500 mt-3  ml-6">
            Daily Essentials
          </p>
          <h4 className=" font-semibold text-black text-lg  ml-5">
            UP to 50% OFF
          </h4>
        </div>
        <div>
          <img
            className="hover:scale-105 hover:shadow-lg transition-transform duration-300 w-[150px] rounded-xl "
            src="basket.png"
            alt=""
          />
          <p className=" font-semibold tex-normalg text-gray-500 mt-3 ml-12">
            Vegeatable
          </p>
          <h4 className="font-semibold text-black text-lg ml-3 ">
            UP to 50% OFF
          </h4>
        </div>
        <div>
          <img
            className="hover:scale-105 hover:shadow-lg transition-transform duration-300 w-[150px] rounded-xl "
            src="tropical.png"
            alt=""
          />
          <p className="font-semibold text-normal text-gray-500 mt-3 ml-12">
            Fruits
          </p>
          <h4 className="font-semibold text-black text-lg ml-3 ">
            UP to 50% OFF
          </h4>
        </div>
        <div>
          <img
            className="hover:scale-105 hover:shadow-lg transition-transform duration-300 w-[150px] rounded-xl "
            src="strawberry.png"
            alt=""
          />
          <p className="font-semibold text-normal text-gray-500 mt-3 ml-12">
            Strawberry
          </p>
          <h4 className="font-semibold text-black text-lg  ml-3">
            UP to 50% OFF
          </h4>
        </div>
        <div>
          <img
            className="hover:scale-105 hover:shadow-lg transition-transform duration-300 w-[150px] rounded-xl "
            src="mango.png"
            alt=""
          />
          <p className="font-semibold text-normal text-gray-500 mt-3 ml-12">
            Mango
          </p>
          <h4 className="font-semibold text-black text-lg ml-3 ">
            UP to 50% OFF
          </h4>
        </div>
        <div>
          <img
            className="hover:scale-105 hover:shadow-lg transition-transform duration-300 w-[150px] rounded-xl "
            src="cherry.png"
            alt=""
          />
          <p className="font-semibold text-normal text-gray-500 mt-3 ml-12">
            Cherry
          </p>
          <h4 className="font-semibold text-black text-lg ml-3 ">
            UP to 50% OFF
          </h4>
        </div>
      </div>
    </section>
  );
}

// React Foundation
// http://nextjs.org/learn/react-foundation

// NextJS Book
// http://nextjs.org/learn/dasboard-app/

export default Hero;
