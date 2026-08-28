import { FaMapMarkerAlt } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { FaUser } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa";












function Newlook(){
    return(
        <>
         <div>
           
           <div className="flex justify-between pt-7 px-28  "> 
            
             <div className="flex gap-3">
                <FaMapMarkerAlt className="mt-1" />
                <p >Fine a store</p>
             </div>

                <div>
                    <p className="font-bold text-2xl">NEW LOOK</p>
                </div>


               <div className="flex gap-3">
                <FaHeart />
                <FaCartShopping />
                <FaUser />


               </div>

           </div>

             

         {/* sales */}

             <div className="flex justify-center gap-10 pt-7">
                 

                 <div className="flex gap-1">
                 <p>Sale</p>
                 <FaChevronDown className="mt-1.5" />

                 </div>
                  

                  <div className="flex gap-1">
                 <p>Wemens</p>
                 <FaChevronDown className="mt-1.5" />

                 </div>

                   
                   <div className="flex gap-1">
                 <p>Mens</p>
                 <FaChevronDown className="mt-1.5"/>

                 </div>

                 <div className="flex gap-1">
                 <p>Girls</p>
                 <FaChevronDown className="mt-1.5" />

                 </div>

                 <div className="flex gap-1">
                 <p>Christmas</p>
                 <FaChevronDown className="mt-1.5" />

                 </div>
               
                  <  FaSearch className="mt-1.5"/>

             </div>



                     <div className="flex pt-10 gap-2 ml-30">

                        <div className="flex gap-1.5">
                         <p>Home</p>
                         <p>/</p>

                        </div>

                         <div className="flex gap-1.5">
                        <p>Womens Cloth</p>
                          <p>/</p>
                         </div>

                       <div className="flex gap-1.5">
                        <p>Dresses</p>
                          <p>/</p>
                         </div>

                      <p>Camel Cuffle Juggers</p>
                       
                    </div>

         </div>
         
        
        </>
    )
}
export default Newlook;