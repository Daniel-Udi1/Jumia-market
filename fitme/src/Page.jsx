import Subtract from "/src/assets/image/Subtract (1).png"

function Page() {
 return (
   <div className="mt-24 w-full bg-amber-700 px-4 py-8 text-white sm:px-6 lg:px-10">
     <div className="mx-auto flex max-w-6xl flex-col gap-5 md:flex-row md:items-center md:justify-between">
       <div className="flex items-center gap-2.5">
         <img src={Subtract} className="w-6" alt="FitMe" />
         <p className="text-lg font-bold">FitMe</p>
       </div>

       <div className="flex flex-wrap items-center justify-center gap-5 text-sm font-light md:justify-start md:gap-8">
         <p className="transition hover:text-amber-200">About Us</p>
         <p className="transition hover:text-amber-200">Delivery</p>
         <p className="transition hover:text-amber-200">Help and Support</p>
         <p className="transition hover:text-amber-200">T&C</p>
       </div>

       <div className="text-sm font-light md:text-right">
         <p>Contact: +91 1234567899</p>
       </div>
     </div>
   </div>
 )
}

export default Page;