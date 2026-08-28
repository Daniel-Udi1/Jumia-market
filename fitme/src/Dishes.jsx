import { useEffect, useState } from "react";

const Dishes = () => {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);

  async function getItem() {
    try {
      const res = await fetch("https://dummyjson.com/recipes");
      const data = await res.json();
      setProducts(data.recipes);
    } catch (error) {
      console.log("Error fetching data:", error);
    }
  }

  useEffect(() => {
    getItem();
  }, []);

  return (
    <div className="mt-20 px-4 sm:px-6 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-8 lg:flex-row lg:justify-center lg:gap-12">
         <div className="w-full">
           <h1 className="text-xl font-bold text-slate-900">What’s on your mind?</h1>

           <div className="mt-4 grid grid-cols-1 gap-6 sm:grid-cols-2">
             {products.slice(21, 25).map((product) => (
               <div key={product.id} className="group overflow-hidden rounded-2xl border border-slate-200 bg-white p-3 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
                 <img
                   src={product.image}
                   alt={product.name}
                   className="h-48 w-full rounded-xl object-cover transition duration-300 group-hover:scale-105"
                 />

                 <div className="mt-4 space-y-2">
                   <h2 className="text-base font-semibold text-slate-800">{product.name}</h2>
                   <p className="text-sm text-slate-500">{product.cuisine}</p>

                   <button
                     onClick={() => setSelectedProduct(product)}
                     className="mt-2 inline-flex rounded-lg bg-black px-4 py-2 text-sm text-white transition duration-200 hover:-translate-y-1 hover:bg-slate-800 hover:shadow-lg"
                   >
                     View Recipe
                   </button>
                 </div>
               </div>
             ))}
           </div>
         </div>

         <div className="w-full">
           <div className="mt-4 grid grid-cols-1 gap-6 sm:grid-cols-2">
             {products.slice(26, 31).map((product) => (
               <div key={product.id} className="group overflow-hidden rounded-2xl border border-slate-200 bg-white p-3 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
                 <img
                   src={product.image}
                   alt={product.name}
                   className="h-48 w-full rounded-xl object-cover transition duration-300 group-hover:scale-105"
                 />

                 <div className="mt-4 space-y-2">
                   <h2 className="text-base font-semibold text-slate-800">{product.name}</h2>
                   <p className="text-sm text-slate-500">{product.cuisine}</p>

                   <button
                     onClick={() => setSelectedProduct(product)}
                     className="mt-2 inline-flex rounded-lg bg-black px-4 py-2 text-sm text-white transition duration-200 hover:-translate-y-1 hover:bg-slate-800 hover:shadow-lg"
                   >
                     View Recipe
                   </button>
                 </div>
               </div>
             ))}
           </div>
         </div>
        </div>

        {selectedProduct && (
         <div className="mx-auto mt-10 max-w-xl rounded-2xl border border-slate-200 bg-white p-5 shadow-lg">
           <img
             src={selectedProduct.image}
             alt={selectedProduct.name}
             className="h-64 w-full rounded-xl object-cover"
           />

           <h2 className="mt-4 text-xl font-bold text-slate-900">{selectedProduct.name}</h2>
           <p className="mt-3 text-sm leading-6 text-slate-600">{selectedProduct.instructions}</p>

           <button
             onClick={() => setSelectedProduct(null)}
             className="mt-4 rounded-lg bg-black px-4 py-2 text-sm text-white transition duration-200 hover:-translate-y-1 hover:bg-slate-800 hover:shadow-lg"
           >
             Close
           </button>
         </div>
        )}
      </div>
    </div>
  );
};

export default Dishes;