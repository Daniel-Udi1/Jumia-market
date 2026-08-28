import {react} from "react"
import bag from "./assets/image/Bag.png"
import subtract from "./assets/image/Subtract.png"
import { FaSearch } from "react-icons/fa";

function Nav () {

return(

<>

    <div className=" flex justify-between px-10 pt-3">
          
          <div className="flex items-center gap-1.5">
            <img src={subtract} className="w-6" />
            <p className="font-bold text-black text-2xl">Fitme</p>
          </div>
        
          <div className="flex justify-between gap-7">

            <div className="flex items-center  gap-2 border-2 rounded">
                 <input className=" ml-4  w-96 " placeholder="Enter item or restaurant you are looking for"></input>
             <  FaSearch className="mr-4" />
             
            </div>

             

             <div className="flex justify-between px-3 gap-4 items-center">
                <img src={bag} className=""/>
             <button className="bg-black text-white h-8 w-20 rounded ">sign in</button>
             </div>
            
       
         </div>
    </div>




</>

)




}

export default Nav;




































