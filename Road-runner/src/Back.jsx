import Car from "./assets/image/pexels-elmir-jafarov-375483362-24376862.png"
import station from "./assets/image/pexels-bruggi-4678065.png"


function Back (){
 return(

    <>
       <div className="pt-10 flex ">


            <div>
          

            
        
          <div className="bg-blue-950 w-80 mt-220 h-26 ml-10 rounded-t-2xl">
               
         <div>
            <img src={Car} alt="" className=" w-80 pt-28" />
        </div>

       </div>
            
       



       <div className="abolute ">
     
          <div>
            <img src={station} alt="" className="ml-96 relative -top-24" />
          </div>
          

          
          <div className="bg-amber-700 relative -top-23 w-71 ml-96 h-40 rounded-b-2xl">
              
          </div>
       </div>










       </div>

         

         <div className="absolute mt-220 ml-180">
           <p className="text-amber-500 font-semibold text-2xl">About us</p>

           <div className="pt-6">


            
           </div>
               <p className="font-bold text-blue-950 text-2xl">Driving Africa’s Electric Future</p>
             <p className="pt-2">At RoadRunner EV, we’re on a mission to revolutionize mobility </p>
             <p className="pt-1.5"> through clean, smart, and accessible electric transportation. From eco</p> 
             <p className="pt-2">friendly tricycles to innovative battery swap services and expanding EV </p>
             <p className="pt-2 ">infrastructure, we provide solutions that power businesses and individuals</p> 
             <p className="pt-1.5">alike.Built for performance and sustainability, our vehicles are designed to</p> 
             <p className="pt-2">meet the unique challenges of urban and rural transportation emissions  </p> 
             <p className="pt-2">and fueling progress all while reducing carbon.</p>

              
              <p className="font-bold text-blue-950 text-2xl pt-14">Why RoadRunner?</p>
              <p className="pt-1.5">✔ Affordable, high performing EV s </p>
              <p className="pt-2"> ✔ Convenient battery swap and charging networks</p>
              <p className="pt-2" >  ✔ Trusted by riders, businesses, and delivery services </p>
              <p className="pt-1.5"> ✔ Committed to a greener, smarter tomorrows </p>

            </div>
       </div>
    
    
    </>
 )


}
    export default Back;