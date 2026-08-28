// import { FaSearch } from "react-icons/fa"
import subtrac from "./assets/image/Frame 58511.png"
import subtra from "./assets/image/clarity_shopping-cart-outline-badged.png"



 



function Nav(){
return(

    <>
    
       <div className="flex justify-between px-24 pt-6">

<div>




       <div className="">
         
         <img src={subtrac} alt="" />

        </div>

</div>

         
         <div className="flex gap-16">
          

          <div>
             <p className="text-yellow-500 font-semibold">Products</p> 
          </div>


              <div>
              <p>Battarry Swap</p>
          </div>



        <div>
            <p>Charging Station</p>
        </div>

          

          <div>
            <p>Contact Us</p>
          </div>




           <div className="flex gap-5">

            <input className=" bg-gray-600 rounded-3xl w-24 px-2" placeholder="Search" />
            
            <div>
              <img src={subtra} alt="" />
            </div>

             

           </div>

         </div>















        </div>
    
    
    </>






)





}
export default Nav;