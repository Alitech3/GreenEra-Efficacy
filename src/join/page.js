"use client";
import Link from "next/link";

export default function Join() {
  return (
    <main className="h-screen bg-center bg-gradient-to-tr from-green-700 to-green-400">

        <div className="flex flex-col items-center justify-start h-screen bg-repeat bg-[length:106px] bg-bomb-pattern">

          <div className = "flex flex-col justify-center items-center bg-center avatar aspect-square overflow-visible h-screen bg-explosion bg-no-repeat bg-[length:950px]" >
            
              <div className = "flex flex-col justify-center items-center mt-10 mb-28">
                  
                  <h1 className="text-6xl font-bold tracking-wide my-12">
                    Join
                  </h1>  
                </div>
                  
                <div className="flex flex-col justify-center space-y-12"> 
                    <div className>
                        <input type="text" id="username" class="bg-yellow-500 border border-yellow-600 text-white rounded-full shadow-md text-xl font-bold tracking-widest px-10
                            focus:ring-yellow-500 focus:border-yellow-500 block w-full p-2.5" placeholder="Username" required />
                    </div>

                    <div className>
                        <input type="text" id="code" class="bg-yellow-500 border border-yellow-600 text-white rounded-full shadow-md text-xl font-bold tracking-widest px-10
                            focus:ring-yellow-500 focus:border-yellow-500 block w-full p-2.5" placeholder="Enter Code" required />
                    </div>
                </div>
            </div>
         </div>
    </main>
  );
}