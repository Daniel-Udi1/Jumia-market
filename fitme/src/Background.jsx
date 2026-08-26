import { useEffect, useState } from "react";

const Background = () => {
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
        <div className="mt-20 flex ml-10">

            {/* Food Sections */}
            <div className="flex justify-center gap-20">

                {/* Nearby Restaurants */}
                <div>
                    <h1 className="font-bold">Nearby Restaurants</h1>

                    <div className="grid grid-cols-2 gap-10 pt-3">
                        {products.slice(0, 4).map((product) => (
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
                    <h1 className="font-bold">Recommended Food Items</h1>

                    <div className="grid grid-cols-2 gap-10 pt-3">
                        {products.slice(4, 8).map((product) => (
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
    );
};

export default Background;