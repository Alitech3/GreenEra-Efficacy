import Link from "next/link";

export default function Home() {
    return (
        <main className="h-screen bg-center bg-gradient-to-tr from-green-700 to-green-400">
            <div>
                <Link href={"./game"}>Game - REMOVE ME</Link>
            </div>
            <div className="flex flex-col items-center justify-start h-screen bg-repeat bg-[length:106px] bg-bomb-pattern">

                <div className = "flex flex-col justify-center items-center bg-center avatar aspect-square overflow-visible h-screen bg-explosion bg-no-repeat bg-[length:950px]" >
            
                    <div className = "flex flex-col justify-center items-center mt-10 mb-28">
                  
                        <h1 className="text-6xl font-bold tracking-wide my-12">
                    Bomber Chess
                        </h1>
                    
                    </div>
                  
                    <div className="flex flex-col justify-center space-y-12"> 
                        <button className="p-12 bg-yellow-500 text-white rounded-full shadow-md hover:bg-yellow-600 transition hover:text-black duration-200">
                            <Link className = "text-xl font-bold tracking-widest px-10" 
                                href={"./create"}
                                id="create">
                              CREATE
                            </Link>
                    
                        </button>
                        <button className="p-12 bg-yellow-500 text-white rounded-full shadow-md hover:bg-yellow-600 transition hover:text-black duration-200">
                            <Link className = "text-xl font-bold tracking-widest px-10"
                                href={"./join"}
                                id="create">
                      JOIN
                            </Link>
                        
                        </button>
                    </div>
                </div>
            </div>

            

        

        </main>

    );
}