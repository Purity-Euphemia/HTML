//const PRODUCT_URL = "https://fakestoreapi.com/products";

// const getProducts=(url)=>{
//     fetch(url)
//     .then((response)=>response.json())
//     .then((data)=>{
//         console.log(data);
//     })
//     .catch((error)=>{
//         console.error("Error fetching products:", error);
//     });
// };

//getProducts(PRODUCT_URL);

const PRODUCT_URL = "https://fakestoreapi.com/products";

const getProducts=async (url)=>{
    try {
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
        displayProducts(data);

    } catch (error) {
        console.error("Error fetching products:", error);
    }
}

getProducts(PRODUCT_URL);

const productTag = document.querySelector(".productContainer");

const displayProducts=(products)=>{
    products.forEach((product)=>{
        const {image, title, price} = product;
        const productWrapper = document.createElement("div");
        productWrapper.innerHTML= `
                <img src="${image}" alt="">
                <p>Title: ${title}</p>
                <p>Price: &#8358; ${price}</p>
        `
        productWrapper.classList.add("products");
        productTag.appendChild(productWrapper);   
    })
}