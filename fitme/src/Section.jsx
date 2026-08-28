import { react } from "react"
import union from "/src/assets/image/Union.png"
import component from "/src/assets/image/Component 4.png"
import compo from "/src/assets/image/Component 5.png"
import Reatangle from "/src/assets/image/Rectangle 1.png"
import Red from "/src/assets/image/Rectangle 2.png"

function Section() {
 return (
   <div className="px-4 pb-12 pt-10 sm:px-6 lg:px-20 lg:pt-20">
     <div className="flex flex-col items-center gap-8 lg:flex-row lg:items-center lg:justify-center">
       <div className="flex items-center justify-center lg:pr-4">
         <img src={union} className="w-full max-w-[160px] lg:max-w-[220px]" alt="Fitme banner" />
       </div>

       <div className="w-full max-w-2xl text-center lg:text-left">
         <div className="flex justify-center gap-2 pt-3 lg:justify-start">
           <p className="text-2xl font-bold text-black">Premium</p>
           <p className="text-2xl font-bold text-amber-700">Quality</p>
         </div>

         <div className="mt-6 flex flex-col items-center gap-3 sm:flex-row sm:justify-center lg:justify-start">
           <p className="text-3xl font-sans text-black">Food for your</p>
           <img src={component} className="w-14" alt="healthy" />
           <p className="text-3xl font-serif text-amber-700">healthy</p>
         </div>

         <div className="mt-5 flex items-center justify-center lg:justify-start">
           <img src={compo} className="w-14" alt="daily life" />
           <p className="ml-4 text-3xl font-serif text-amber-700">& Daily Life</p>
         </div>

         <div className="mt-6 space-y-2 text-sm text-slate-600 sm:text-base">
           <p>Lorem ipsum dolor sit amet, consectetur incididunt ut labore</p>
           <p>Lorem ipsum dolor sit amet, consectetur incididunt ut labore</p>
           <p>Lorem ipsum dolor sit amet, consectetur incididunt ut labore</p>
           <p>Lorem ipsum dolor sit amet, consectetur incididunt ut labore</p>
         </div>

         <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center lg:justify-start">
           <input
             className="w-full rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-amber-500 focus:ring-2 focus:ring-amber-200 sm:w-64"
             placeholder="Enter your delivery location"
           />
           <button className="h-11 rounded-lg bg-black px-5 text-sm font-medium text-white transition duration-200 hover:-translate-y-1 hover:bg-slate-800 hover:shadow-lg">
             Get Started
           </button>
         </div>

         <div className="mt-8 text-sm text-slate-700">
           <p>Popular cities in India</p>
         </div>

         <div className="mt-4 flex flex-wrap justify-center gap-3 text-sm text-slate-600 lg:justify-start">
           <p>Hyderabad</p>
           <p className="text-amber-600">Chennal</p>
           <p>Mumbai</p>
           <p className="text-amber-600">Bangalore</p>
           <p>Delhi</p>
           <p className="text-amber-600">Kolkata</p>
         </div>
       </div>

       <div className="flex items-end justify-center gap-3 sm:gap-4">
         <img src={Reatangle} className="h-[320px] w-auto rounded-2xl object-cover shadow-lg sm:h-[420px] lg:h-[500px]" alt="Meal" />
         <img src={Red} className="h-[260px] w-auto rounded-2xl object-cover pt-10 shadow-lg sm:h-[360px] lg:h-[450px]" alt="Meal detail" />
       </div>
     </div>
   </div>
 )
}

export default Section;