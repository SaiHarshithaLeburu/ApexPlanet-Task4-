const products = [

    {
        name: "Wireless Headphones",
        category: "electronics",
        price: 1499,
        rating: 4.5,
        icon: "🎧",
        description: "Comfortable wireless headphones with clear sound."
    },

    {
        name: "Smart Watch",
        category: "electronics",
        price: 2499,
        rating: 4.7,
        icon: "⌚",
        description: "Track your activities and stay connected."
    },

    {
        name: "Bluetooth Speaker",
        category: "electronics",
        price: 999,
        rating: 4.3,
        icon: "🔊",
        description: "Portable speaker with powerful sound."
    },

    {
        name: "Casual Hoodie",
        category: "fashion",
        price: 799,
        rating: 4.4,
        icon: "👕",
        description: "Comfortable hoodie for everyday wear."
    },

    {
        name: "Classic Sneakers",
        category: "fashion",
        price: 1899,
        rating: 4.6,
        icon: "👟",
        description: "Stylish sneakers designed for everyday use."
    },

    {
        name: "Denim Jacket",
        category: "fashion",
        price: 1599,
        rating: 4.2,
        icon: "🧥",
        description: "Classic denim jacket with a modern look."
    },

    {
        name: "Atomic Habits",
        category: "books",
        price: 499,
        rating: 4.8,
        icon: "📖",
        description: "A practical book about building better habits."
    },

    {
        name: "The Palace of Illusions",
        category: "books",
        price: 399,
        rating: 4.7,
        icon: "📚",
        description: "A retelling of the Mahabharata from Draupadi's perspective."
    },

    {
        name: "Notebook",
        category: "accessories",
        price: 199,
        rating: 4.1,
        icon: "📓",
        description: "Simple notebook for ideas and notes."
    },

    {
        name: "Desk Lamp",
        category: "accessories",
        price: 699,
        rating: 4.4,
        icon: "💡",
        description: "Minimal desk lamp for your workspace."
    },

    {
        name: "Backpack",
        category: "accessories",
        price: 1299,
        rating: 4.5,
        icon: "🎒",
        description: "Spacious backpack for everyday use."
    },

    {
        name: "Water Bottle",
        category: "accessories",
        price: 349,
        rating: 4.2,
        icon: "🥤",
        description: "Reusable bottle for everyday hydration."
    }

];


const productGrid =
    document.getElementById("productGrid");

const categoryFilter =
    document.getElementById("categoryFilter");

const priceFilter =
    document.getElementById("priceFilter");

const sortFilter =
    document.getElementById("sortFilter");

const noProducts =
    document.getElementById("noProducts");


/* Display products */

function displayProducts(productArray) {

    productGrid.innerHTML = "";


    if (productArray.length === 0) {

        noProducts.style.display = "block";

        return;

    } else {

        noProducts.style.display = "none";
    }


    productArray.forEach(
        product => {

            const card =
                document.createElement("div");


            card.classList.add(
                "product-card"
            );


            card.innerHTML = `

                <div class="product-image">
                    ${product.icon}
                </div>

                <h3>
                    ${product.name}
                </h3>

                <p class="category">
                    ${product.category}
                </p>

                <p class="product-description">
                    ${product.description}
                </p>

                <div class="product-bottom">

                    <span class="price">
                        ₹${product.price}
                    </span>

                    <span class="rating">
                        ⭐ ${product.rating}
                    </span>

                </div>

            `;


            productGrid.appendChild(card);

        }
    );
}


/* Filter + Sort */

function updateProducts() {

    let filteredProducts =
        [...products];


    /* Category */

    const category =
        categoryFilter.value;


    if (category !== "all") {

        filteredProducts =
            filteredProducts.filter(
                product =>
                    product.category === category
            );
    }


    /* Price */

    const maxPrice =
        priceFilter.value;


    if (maxPrice !== "all") {

        filteredProducts =
            filteredProducts.filter(
                product =>
                    product.price <=
                    Number(maxPrice)
            );
    }


    /* Sorting */

    const sort =
        sortFilter.value;


    if (sort === "low") {

        filteredProducts.sort(
            (a, b) =>
                a.price - b.price
        );
    }


    if (sort === "high") {

        filteredProducts.sort(
            (a, b) =>
                b.price - a.price
        );
    }


    if (sort === "rating") {

        filteredProducts.sort(
            (a, b) =>
                b.rating - a.rating
        );
    }


    displayProducts(
        filteredProducts
    );
}


/* Event listeners */

categoryFilter.addEventListener(
    "change",
    updateProducts
);


priceFilter.addEventListener(
    "change",
    updateProducts
);


sortFilter.addEventListener(
    "change",
    updateProducts
);


/* Initial display */

displayProducts(products);