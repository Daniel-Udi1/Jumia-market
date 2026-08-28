import subtract from "./assets/image/mortorcycle.png"

function Section(){

    return(
      
         <>
          <div>
<div className="absolute">
  <img src={subtract} alt="" className="pt-1.5" />

  <div className="ml-10">
    <button className="bg-green-500 text-white rounded-2xl h-10 -top-[550px] relative w-30">Eco Friendly</button>
      <p className="  relative -top-[500px]  text-white font-bold text-5xl"> Power your journey</p>
            <p className="  relative -top-[500px]  text-white font-bold text-5xl"> Charge your future</p>
            <p className=" relative -top-[500px]  text-white ">Explore a new era of electric mobility with EV’s built for urban delivery, <br /> sustainability and convenience Explore a new era of electric mobility with <br /> EV’s built for urban delivery, sustainability and convenience...  </p>

       
  </div>
   

   <div className="gap-8 flex absolute ml-4">
      <button className="bg-amber-500 relative h-13 w-40 rounded-2xl -top-96 text-white">Shop Now</button>
      <button className="bg-white text-black rounded-2xl h-13 w-40 relative -top-96">Charging Stations</button>


   </div>




</div>
      
   

          </div>
         
             

             
    

         </>

    )
}
export default Section;