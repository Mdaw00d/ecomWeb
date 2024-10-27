import Link from "next/link";
import Sidebar from "./sidebar";
function Header() {
  return (
    <header>
      {/* Nav1 Starts*/}
      <div className="bg-gray-100 p-2 flex justify-around ">
        <div className="md:mr-96">
          <p>Welcome to Megamart</p>
        </div>
        <div className="md:ml-48 gap-5 md:gap-12 flex  ">
          <div className="flex  gap-x-1">
            <img
              className=" w-6 h-6 gap-20"
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAzZJREFUSEu1lV+IVHUUxz/nzq4uO/O7u2zkX0yKQgW1LUFESyofolLZepj9zbpJ5IoR+ZIPYU8+5YsKohCSEbjp/KkeRJJe0qIUxGAl1KzQMC3UdTXnXte0ufc0965JrjNzl8Lzes89n/M753vOEe6zyX2OTzKgNPwQQSWHyIvA47cTGgDdT6UpT2/r+UZJ1gd8POTSPK4fZXmDAAqUSGdeZ5kM1/KrDdinrVz3jwCzgZsIO6gEW1nRfiYOsvuPR2hKvY2yGhgHcoRr6adZI3+NhtQGFMq7QF4FzgHPY80PNV+xx59LSr9AmQy6BeuuSwaU/DmE+j1QQZ355NIDlPxJKDsJdUEcwOEQQh9ZM0jRW4zyNXALdR4ml/7935B7X1DwtgFvAduxZm0cPNQBYNKo7M7hhJ1k265Q8HYDPYi+S7e7MQnwM/AoIbPpMSfIl/sR6QX2VvuxfuRn3Vyt+wvADqx5g6L3LMoB4BusWZwEuBk37lQmxQYJKXi/AVO4xURWmkt3mpxKnQZ+xZrplK51EDpDwBWseSAJcBVox7lhyE7wKXiRzqdSSU27o/loNsLgbLUP5+k209g7aLjRUgauYk1HY0C+/B0i80BnYN2fKPgfgb4Wl8jRdwidFgjfg2jw5ENspo+CNws4CXoU685PesEHQB+wFmu2U/IeJOA4woS7mhxl36ydvOIOUfTXoboJeB9r3mwM2OM9h8OXwDGseSJ2zl+fggQ7QRaghAjfEsoaejIX2aAOM/1T1fF7DNVF5NzDjQGqQtH7BWQ6aBfWjdRT34p+L6r9wI9YMzN50CKPopdFKQIXCHUOPe7lmoTS8FTC4HgsCg2Xkmv7fGyAyKvgHQSeiac0lVlCVoK7ft6v4yn7UTmeBNmHzdRcivW36cgEnwA6YrV0p1cjEm1POKhNXPQ/qfapK56FIOhkRXsk73us8T3Ilxci8hXQDLqLiWYVg4MthK150KXAMI4sIps5Vq9JyQcnX34ZkU/jFRcdGRUX4al4jau8RC4TKa6uJQNimfpLEP0MaLsd6QI4y7Hpow0VBmM4mf9EGJnWIuifaKpr9Fr+7yVKSjHh+9hK9D8gfwMfHiMoK9L0EAAAAABJRU5ErkJggg=="
            />
            <p className="hidden md:block">Deliver to 423651</p>
          </div>
          <div className="flex gap-x-1">
            <img
              className="w-6 h-6 "
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAZ5JREFUSEvdlT0vBEEcxn+zSLgzKoRCROUlwhcQIRqJQoGz3iqJUJH4AqInovAFyN26iEqiUVAoNUSQSIhG0JnlJLhh5bjb3K3D2Uhst7vP/H/zPDPzH4HPj/C5Pv8JEFG9CGaB+i/Gto0p27NpkxFZ6hBoyDbA9d+UWSNOBehvFXfEvgOSM4qBCHMcHGNGxFMnmpuDNMtiGrN4/vcA7xFF7A6E3gIUj0YtI8HLd0huDlLXwFJrQA+aCANy8PcBy3eVFMRPgcCrmxb6S3YdSG4OvLfdPqZs9hPwsYX9cvAngNtzENWJWBd4ypsj/3kamPrkhHvpDjFlo3sNwnYnht58K2ZQTkjeEFVlxLn2BGTWHbzqZzDluhvgvFnqBigFxil6CBMrHAaWgCtMWfEBstQO0JpBd4Ip6zKfZOfrqr2B1l3pHYA1+mVfEmAPgV5J02kmGZCL3oCw3YSho0BtUiTOMIw2QoELV0FLTaD1KEI4WR8hxAqh4DxCuLpy5n4eua/CeK4hjkHgYY/uMvXtVp4YkPXC+Gnh9F6UayWP8S8DY4oZRVw1ewAAAABJRU5ErkJggg=="
            />
            <p className="hidden md:block">Track your order</p>
          </div>
          <div className="flex gap-x-1">
            <img
              className="w-6 h-6 gap-20"
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAnxJREFUSEu1lUloE2EUx39vUrrYTLqggguKnjwoFm/WWxXFKgUvybSK9CAoShWlKEUKRRQVl4JWby4INosHwQ0RPIiIgherHnoRsYKoqG2TuLQ282TSlGydxBYyl2He977v9+b/vUUo8SMlPp/igGC0EUPCoCFETyYDUulCZReiWwn4nhUKsjCgRw1WxF8Bq1KHjKbeNan3Gwa9DfSI7QbJBwR/LoREO0g5IktB2wvKqHIV9CPoOHiu01r9KdM/HxCKnwY9PLu7kVNY3q4igNglYO/sAPRhmR3ugIhWYcfvABvSTnoe9ZzDsI+g7E/ZE8BjYGNOII/weVtolrEpe1qicHQdKv3AkqxNxt9a/PWjRGLzsPmayqJDtHp7CceOoXRnQ+Q9hr0dv++5Y08DQrEoYOZJo7qbOWNBflfuAC6D3MXytnBzpI4yz2uUxdPI+RnLXJANCMf6UPYV0X6IionVbKsbIRS9D9Ls4n8Ry0zKmf6DyGg9tmcItNpl0wQYjVjVLwnGOxE94+IXxbCX4a/5kQNIavxuWpkmq3dS90h0LbY8BTwugBi2LqfN9y33DtzTU/QhAd9mbg/XMlb2FlhUUErhAgHzQC5gGKjN36gfqEg0JHUPx++hugXRs9ieXoxEJyoH8xOD77Sac3Mu2SVNhW4C5vEs3adS90ZsPuV8yUtTEm1YNS+yAc6XU2jqRElT9iZ9ALIpQ/c9VP3p51flToS+DN8ChTblFSplq3AgJW92M23XyDVUnfr5z3adKf7kwBkAVqbMzsAxMmplgEHvmpkNnNycC8bXI3oL0SuUJ04kl8c9R5OFZ9CE33xSqCaKz+QizanYcskB/wBB3uUZ6ZbiFQAAAABJRU5ErkJggg=="
            />
            <p className="hidden md:block">All Offers</p>
          </div>
        </div>
      </div>
      {/* Nav1 Ends */}

      {/* Nav2 Starts*/}
      <nav className="bg-white mt-4">
        <div className="container mx-auto px-4 py-2 flex justify-between items-center">
          {/*  Left section: Logo and Menu  */}
          <div className="flex items-center space-x-5">
          <Sidebar />
          </div>
          {/*  Logo */}
          <Link href="/home" passHref>
            <div>
              <div className="bg-slate-100 p-2 w-[200px] rounded-md border border-slate-100">
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAGlJREFUSEtjZKAxYKSx+QyjFhAM4QEIoqKP/wk6C5+CPn4UR2P6gOYWUOR8TM0DEAc09wGpcYAWqejuozySSbaA5kE09C3AF8mMjLYMvXxHSPEkaZFMFQtIcR4RaodjTibC26QoGfpBBAACMxQZnsYpsQAAAABJRU5ErkJggg==" />
              </div>
              <div className="text-blue-500 text-3xl font-bold -mt-[42px] ml-10">
                MegaMart
              </div>
            </div>
          </Link>

          {/* Middle section: Search Bar */}

          <div className="hidden lg:flex flex-1 mx-4 items-center relative">
            <input
              type="text"
              placeholder="    Search essentials, groceries and more..."
              className=" bg-slate-100 ml-72 w-11/12 px-12 py-2  rounded-md border border-gray-300 focus:outline-none focus:ring focus:border-blue-500"
            />

            {/* Search Icon (inside input) */}
            <div className="absolute left-80 top-1/2 flex transform -translate-y-1/2 gap-x-96">
              <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAArFJREFUSEu1lV2ITGEYx3/PmWHWOTM+83UjJFz4ipILFIpQ7pbdOTMTNl+FC8qFK1fkhoRYRXbnnLGNe7naQsiNlRLZUlq5IOtjZ86unZnz6EyRtbtnpuw+l+953//ved7n/T9HGOeQcdZnVEC6zZunUb8Z2AGyspqISBf499Q37rgp80M9yQ0D2M6XyWI0ZFF2hQiooPlJBWv/jUPihYGGAA62quklvGcoy4CfirYq0Us5u+FdIJJ0BxYKlRMCB4CJKM/MornhxiEpjQYZArBdr13QtEAPEX9btinxeqSDmVxhha9yH5gLesGx4ydrAmynsFxEXgJlw2Bte7PVFVZ60u3faOA/AAbLBgs6mq2PI+3/U0HKLV4GjgJXHNs6Vk8D067nKpoU1dPZVPxcLUA3sCgi/rK2ZOJVPYCk27fJwOhE9JGTjG+sBSgC5qJuM3LmjPj1ABrz36fHStEvAr1Z25pRA+D9AE1IxYxnMxLAakZjXuOxktcHfHZsa1Y4IFd8gbISnzVO2npeUx2wHW+diD4F6XRsc0sowM5550X1lMJ117aO1ANIucU2ICPK5WzKOh4KyHQMLPYrlTdApZ5nmsr2b8DwH1ZFQ6oeYrR0rnhTlf3AeyMS2dre1PB2pKySbmGVQdVos1FanZR1uKbRgg3/jIoB0Gtlw7jY0Wz2BN+rVZYrJxBagGiwpvA0NuBtu9UyM2j2sBg27BrzvVNigzEXYWdIH74hehaVJmA10BUdHNx8e9+0b/+eGXVc773TP7/s+0lgO7AC6AeeCzypULqas6d+rfqgHO2svj548XNCecvd3VN6/4b89w8ngDSUJjxWdClot1R0fTaT+PQb8t+AQCjd3jdLI5GHoEtUaXFT1q0xBQRie/OFOeWSscexzUtjekW1DDkmVxQGGXfAL2/ADihStVCYAAAAAElFTkSuQmCC"
                className="h-5 w-5 text-gray-400"
                alt="Search Icon"
              />
              <img
                className="ml-22 -mr-20"
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAFJJREFUSEtjZKAxYKSx+QyjFhAMYfoHUczSr/8JOguPgiXR3CiOxvABzS2gxPXY9NI/DmjuA5rHAc0toHkQDX0LaB4HNLdg6MfBqA/QQ4DmpSkA4LYYGSjZDIMAAAAASUVORK5CYII="
              />
            </div>
          </div>

          {/* Right section: Account and Cart  */}
          <div className="flex items-center space-x-4">
            <img
              className=""
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAkZJREFUSEu1lb9PE2EYx7/Ptb3hrhIa/EE0ujDo6OQfYACtxNEqfd+KxtnE2CY4GdnA2OjgLErfOxRGNTTgj9HVzTiwaEQxGkjtXbDQPuYqJKVee/VIb32e5/t5fr5H6PJHXdZHR4CM7Zxnxh0AA9sJLUPDbTVqvgxKMBAgrfI4QJN+Qsycs2Q83w7SFpCxymcYVATjG4jHozEsemJbmxgG0xQI/cw8aMn461aQtgBhOUsEDILookobc40i0nZTYH4GYEEJ81wogLScNQC9v2PGvvkUlRtFLj8p9dWikR8AVpQwj4QFrAI4qG1V98+M9fxsAVhVwuwPC/B6PkSgVEEY874tYhSVNJOhAE1DzlGVl5i0CDQeAugugEN7GrKXlbTdm2D2xCJNWVaZKWdJ40HoNd0JlIXScYpEsswY9raUCG+4Ws2rTM/HPR9akECQveUdXJle693U9SwBpwCc9LapSew7gPcA3ukbbv7RtQO//GC+AKGcJBGmvSEGZbhtX9HAYzMi/qrZ/x+AnHVGUMOLbcfnNWBCr1SWH19NrDcGexVWdH1AY0yAMFK3ESdVOl5s9NsFSFvrCQ2xD38zpykljFudVJCx3XvMnAXwlXnjhCX7SjtxuwBCuTeI+D6B3haEcboT8boPMwnbXay/W6DrShgP/QFWeY5AF4KOxw8s7fJZMC0A/FSJ+KgvIGM5nxg4Gq1UEs09D6rm0qxzOFrDFwI+F4R5zBcgLYc9gxJm4I/Itwqf+FBCQdW03KL/CezUt+sV/AHjFeMZgtQSlAAAAABJRU5ErkJggg=="
            />
            <Link href="/login" passHref>
              <div className="text-gray-700 hover:text-gray-900 ">
                Sign Up/Sign In
              </div>
            </Link>

            <a href="#" className="relative text-gray-700 hover:text-gray-900">
              {/* Cart Icon  */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className=" h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2 9m13-9l2 9m-5-9v2a2 2 0 11-4 0v-2"
                />
              </svg>
            </a>
          </div>
        </div>
      </nav>

      <br />
    </header>
  );
}
export default Header;
