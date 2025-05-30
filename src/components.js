import SurveyPieChart from "./SurveyChart";
import { NavLink } from "react-router-dom";
import { RxHamburgerMenu,RxCross1 } from "react-icons/rx";
import { useState } from "react";

export function Section1(){
  const [isMenuOpen , SetisMenuOpen] = useState(false);
  const toggleMenu = ()=>{
    SetisMenuOpen(!isMenuOpen)
  }
    return(
        <>
        <section className="bg-gradient-to-r from-blue-700 via-blue-600 to-pink-400 min-h-[100vh] w-full xl:px-36 lg:px-34 md:px-22 sm:px-14 px-6 pt-4 text-white">
          <div className="flex flex-col">
            <header className="flex justify-between items-center w-full">
              <input
                type="text"
                placeholder="search"
                className="backdrop-blur-sm bg-blue-400/30 px-4 py-2 border border-white rounded-2xl placeholder-white text-white focus:outline-none w-72"
              />
              <ul className="gap-12 text-lg lg:flex hidden">
                <NavLink to="/documentation"><li className="cursor-pointer hover:underline">Docs</li></NavLink>
                <li className="cursor-pointer hover:underline">Blog</li>
                <li className="cursor-pointer hover:underline">Reference</li>
                <li className="cursor-pointer hover:underline">Download</li>
              </ul>
              <button className='code112 rounded-full p-2 ml-2 lg:hidden' onClick={toggleMenu}>
                {isMenuOpen ? (<RxCross1 className='text-[14px]'/>) : (<RxHamburgerMenu className='text-[14px]'/>)}
              </button>
  
              {isMenuOpen && (
                <div className="absolute top-16 right-0 bg-blue-400/90 backdrop-blur-sm w-full lg:hidden z-50">
                  <ul className="flex flex-col items-center gap-6 py-6 text-lg">
                    <NavLink to="/documentation" onClick={toggleMenu}>
                      <li className="cursor-pointer hover:underline">Docs</li>
                    </NavLink>
                    <li className="cursor-pointer hover:underline">Blog</li>
                    <li className="cursor-pointer hover:underline">Reference</li>
                    <li className="cursor-pointer hover:underline">Download</li>
                  </ul>
                </div>
              )}
            </header>
            <div className="flex flex-col lg:flex-row justify-between items-center"> 
              <div className="flex-2 pt-16">
                <div className="flex gap-4 mb-4">
                <img src="./Zero-logo.png" alt="" className="h-16 w-auto" />
                </div>
                <h1 className="text-white font-extrabold xl:text-[52px] lg:text-[46px] md:text-[44px] sm:text-[40px] px-36px leading-tight">
                  Zero distractions<br />Zero context switching.
                </h1>
                <p className="xl:text-[24px] text-[20px] sm:text-[22px] pt-8 font-normal text-[#dee0df] text-justify pr-16">
                  Code switch is a CLI tool that uses local LLMs via Ollama to solve and explain code without internet access.
                  It’s built for fast, private, and reliable development in offline or secure environments.
                </p>
                <div className="gap-6 mt-12 flex-wrap lg:flex hidden">
                  <button className="bg-[#178249] px-6 py-4 rounded-2xl w-40 text-[18px] font-semibold">
                    <a href="https://www.ollama.com/library/llama3.2:1b">llama</a>
                  </button>
                </div>
              </div>
              <div className="flex-1 flex justify-center mt-4 lg:mt-0 lg:mb-0 mb-4">
                <div className="xl:h-[300px] xl:w-[400px] sm:h-[280px] sm:w-[380px] h-[260px] w-[340px] bg-slate-950 shadow-xl pt-4 pl-4">
                  <div className='h-10 flex gap-2'>
                    <div className='size-3 rounded-full bg-red-600'></div>
                    <div className='size-3 rounded-full bg-yellow-500'></div>
                    <div className='size-3 rounded-full bg-lime-700'></div>
                  </div>
                  <p className="font-['Lucida_Console','monospace'] text-[12px]">$ debug main.cpp</p>
                  <p className="font-['Lucida_Console','monospace'] text-[12px]">🪛 Debugging main.cpp...</p>
                  <br />
                  <p className="font-['Lucida_Console','monospace'] text-[12px]">🛑 Error on line 12: 'cout' was not declared in this scope.</p>
                  <p className="font-['Lucida_Console','monospace'] text-[12px]">
  💡 Suggestion: Did you forget to include &lt;iostream&gt;?
</p>

                </div>
              </div>
              <div className="sm:gap-6 gap-4 mb-4 mt-4 lg:hidden flex buttons">
                  <button className="bg-[#178249] sm:px-6 px-2 sm:py-4 py-2 md:rounded-2xl sm:rounded-xl rounded-lg w-40 sm:text-[18px]  text-[16px] font-semibold">
                    Get Started
                  </button>
                  <button className="bg-slate-300 text-indigo-800 sm:px-6 px-2 sm:py-4 py-2 md:rounded-2xl sm:rounded-xl rounded-lg w-40 sm:text-[18px] text-[16px] font-semibold">
                    GitHub
                  </button>
              </div>
            </div>
          </div>
        </section>
        </>
      )
}

export function Section2(){
    return(
        <>
        <section className='min-h-[100vh] bg-gradient-to-r from-gray-900 to-gray-800 pt-4 w-full xl:px-36 lg:px-34 md:px-22 sm:px-14 px-6'> 
          <div className="mx-2">       
          <div className="h-full flex items-center lg:gap-14 sm:gap-10 gap-6 sm:justify-center py-4">
            <h1 className="text-[20px] text-slate-200 whitespace-nowrap">Built by:</h1>
            <div className="flex items-center">
            <img src="./ollama-bg.png" alt="" className="invert sm:h-20 h-16" />
            <p className="text-slate-300 lg:text-[38px] sm:text-[36px] text-[34px] sm:pl-6 pl-3">Ollama</p>
            </div>
          </div>
          <div className="h-full w-full">
            <h1 className="xl:text-[48px] lg:text-[46px] md:text-[44px] sm:text-[42px] text-[36px] font-extrabold bg-gradient-to-r from-blue-800 via-slate-50 to-sky-900 text-transparent bg-clip-text mb-4">A build tool for rest of distraction.</h1>
            <p className="lg:text-[26px] sm:text-[24px] text-[18px] font-medium text-[#9ca3af] text-justify leading-8 mb-2">In a world full of complex setups and noisy tooling, our solution brings peace to your workflow. Designed for simplicity, speed, and clarity, it helps you stay focused on what matters—building great software, without the distractions.</p>
          </div>
          <div className="bg-gradient-to-r from-purple-600 via-sky-600 to-blue-600 p-6 rounded-2xl mt-6 flex flex-col lg:flex-row items-center justify-between lg:mb-0">
            <div>
                <h1 className="text-[30px] font-semibold h11 text-green-400">Diagnostics</h1>
              <div className="max-w-[650px] text-[16px] ">
                <p className="para">Digital distractions like Instagram, YouTube, and WhatsApp are a major cause of reduced focus during coding. Our survey revealed that most developers frequently get sidetracked while searching for solutions or debugging.</p>
                <p className="para">This constant context switching not only affects productivity but also increases cognitive fatigue and error rates. Developers struggle to stay in flow due to overwhelming notifications and unnecessary internet browsing.</p>
                <p className="para">To combat this, we built a Python-based offline CLI tool using the Ollama model that provides coding help without internet distractions. It offers focused, fast assistance directly from the terminal—keeping developers in the zone.</p>
              </div>
            </div>
            <div className="xl:h-[300px] xl:w-[400px] sm:h-[280px] sm:w-[380px] h-[260px] w-[310px] bg-slate-950 shadow-xl pt-4 pl-4">
                  <div className='h-10 flex gap-2'>
                    <div className='size-3 rounded-full bg-red-600'></div>
                    <div className='size-3 rounded-full bg-yellow-500'></div>
                    <div className='size-3 rounded-full bg-lime-700'></div>
                  </div>
                  <p className="font-['Lucida_Console','monospace'] text-[12px] text-slate-300">$ optimize sort.js</p>
                  <p className="font-['Lucida_Console','monospace'] text-[12px] text-slate-300">🔍 Optimizing sort.js...</p>
                  <br />
                  <p className="font-['Lucida_Console','monospace'] text-[12px] text-slate-300">✅ Replaced inefficient nested loops with a built-in sort method.</p>
                  <p className="font-['Lucida_Console','monospace'] text-[12px] text-slate-300">💡 Tip: Use `Array.prototype.sort()` for better performance in large datasets.</p>
            </div>
          </div>
          </div>
        </section>
        </>
    )
}

export function Section3(){
    return(
        <>
        <section className="min-h-screen bg-gradient-to-r from-gray-900 to-gray-800 text-white p-8">
          <h1 className="text-4xl font-bold mb-8 text-center mt-4">User Survey Insights</h1>
          <SurveyPieChart />
        </section>
        </>
    )
}

