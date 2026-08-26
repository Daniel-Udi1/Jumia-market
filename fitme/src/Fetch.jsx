import { useEffect, useState } from "react";

const Fetch = () => {
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



          <>
          

         <div className="bg-amber-700 h-28 w-[1270px] mt-24 ml-6">
            
            <div className="flex justify-center gap-5 pt-10 mr-10">
               <p className="font-bold text-white pt-2">Search By Resturant</p>
                  <input className="border-2 w-96 px-2 text-white h-10" placeholder="Enter item or restaurant you are looking for"/>
                  <button className="bg-black text-white rounded w-36">Search Now</button>
            </div>

         </div>

        <div className="mt-20 flex ml-10">

            {/* Food Sections */}
            <div className="flex justify-center gap-20">

                {/* Nearby Restaurants */}
                <div>
                    <h1 className="font-bold">What’s on your mind?</h1>

                    <div className="grid grid-cols-2 gap-10 pt-3">
                        {products.slice(9, 13).map((product) => (
                            <div key={product.id} className="rounded-lg">
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="rounded-lg"
                                    width={250}
                                />

                                <h2>{product.name}</h2>
                                <p>{product.cuisine}</p>

                                <button
                                    onClick={() => setSelectedProduct(product)}
                                    className="mt-2 bg-black text-white py-1 px-4 rounded-lg"
                                >
                                    View Recipe
                                </button>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Recommended Food */}
                <div>
                    <h1 className="font-bold"></h1>

                    <div className="grid grid-cols-2 gap-10 pt-9">
                        {products.slice(15, 19).map((product) => (
                            <div key={product.id} className="rounded-lg">
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="rounded-lg"
                                    width={250}
                                />

                                <h2>{product.name}</h2>
                                <p>{product.cuisine}</p>

                                <button
                                    onClick={() => setSelectedProduct(product)}
                                    className="mt-2 bg-black text-white py-1 px-4 rounded-lg"
                                >
                                    View Recipe
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Selected Recipe */}
            {selectedProduct && (
                <div className="mt-10 mx-auto max-w-xl p-5 rounded-lg shadow">
                    <img
                        src={selectedProduct.image}
                        alt={selectedProduct.name}
                        className="rounded-lg"
                        width={300}
                    />

                    <h2 className="text-xl font-bold mt-3">
                        {selectedProduct.name}
                    </h2>

                    <p className="mt-2">
                        {selectedProduct.instructions}
                    </p>

                    <button
                        onClick={() => setSelectedProduct(null)}
                        className="mt-4 bg-black text-white py-1 px-4 rounded-lg"
                    >
                        Close
                    </button>
                </div>
            )}
        </div>

        </>
    );
};

export default Fetch;