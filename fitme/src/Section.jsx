import {react} from "react"
import union from "/src/assets/image/Union.png"
import component from "/src/assets/image/Component 4.png"
import compo from "/src/assets/image/Component 5.png"
import Reatangle from "/src/assets/image/Rectangle 1.png"
import Red from "/src/assets/image/Rectangle 2.png"


function Section(){


return(

<>

 
<div className="flex justify-center pt-32 ">

 
<div>
     <img src={union} className="flex justify-between items-center pt-20 mr-20" />
     
 </div>



      <div >

        
        <div className="flex gap-2 pt-3">
          <p className="text-black font-bold text-2xl">Premium </p>
          <p className="text-amber-700 font-bold text-2xl">Quality</p>
         </div>


         <div className="flex pt-6 gap-3" >
            <p className="font-sans text-black text-3xl">Food for your</p>
            <img src={component} className="w-15 "/>
            <p className="font-serif text-amber-700 text-3xl">healthy</p>

         </div>

      
                    <div className="flex pt-7">
                        <img src={compo}  className="w-15"/>
                        <p className="font-serif text-amber-700  text-3xl ml-4">& Daily Life</p>
                    </div>

            
            <div className="pt-5">
              <p cl>Lorem ipsum dolor sit amet, consectetur incididunt  ut labore </p>
                 <p className="pt-2">Lorem ipsum dolor sit amet, consectetur incididunt  ut labore </p>
                  <p className="pt-2">Lorem ipsum dolor sit amet, consectetur incididunt  ut labore </p>
                   <p className="pt-2">Lorem ipsum dolor sit amet, consectetur incididunt  ut labore </p>



            </div>

              
            <div className="flex pt-4  gap-6">
              
             <input className=" w-64 border-2 rounded  px-4" placeholder="Enter your delivery location" />
             <button className="bg-black rounded text-white w-32 h-8">Get Started</button>

              </div>            
               

               <div className="pt-6">
                <p>Popular cities in India</p>
               </div>

               <div className="flex gap-3 pt-4">
                 
                 <p>Hyderabad</p>
                 <p  className="text-amber-600">Chennal</p>
                 <p>Mumbai</p>
                 <p  className="text-amber-600">Bangalore</p>
                 <p >Delhi</p>
                 <p className="text-amber-600">Kolkata</p>



               </div>


      </div>



         <div className="flex gap-3.5 ml-6">
              <img src={Reatangle} className="h-[500px]" />
              <img src={Red} className="h-[450px] pt-20" />

             </div>








</div>







</>



)



}

export default Section;