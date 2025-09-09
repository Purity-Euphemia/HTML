const PRODUCT_URL = "https://fakestoreapi.com/products"; // Working API

const productTag = document.querySelector(".productContainer");
const searchForm = document.getElementById("search-form");
const searchInput = document.getElementById("query");
const resultsTag = document.getElementById("results");

// Fetch all products
const getProducts = async (url) => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    displayProducts(data);
  } catch (error) {
    console.error("Error fetching products:", error);
    productTag.innerHTML = `<p>Error loading products. Try again later.</p>`;
  }
};

// Display all or filtered products
const displayProducts = (products) => {
  productTag.innerHTML = ""; // Clear current products
  resultsTag.innerHTML = ""; // Clear search results

  products.forEach((product) => {
    const { image, title, price } = product;
    const productDiv = document.createElement("div");
    productDiv.classList.add("products");


    productDiv.innerHTML = `
      <img src="${image}" alt="${title}">
      <p>Title: ${title}</p>
      <p>Price: ₦ ${(price * 1000).toLocaleString()}</p>
    `;

    productTag.appendChild(productDiv);
  });
};

// Handle search form
searchForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  const query = searchInput.value.trim().toLowerCase();

  if (!query) return;

  try {
    const response = await fetch(PRODUCT_URL);
    const data = await response.json();

    const filtered = data.filter((product) =>
      product.title.toLowerCase().includes(query)
    );

    productTag.innerHTML = ""; // Hide main products

    if (filtered.length === 0) {
      resultsTag.innerHTML = `<p>No products found for "${query}"</p>`;
    } else {
      resultsTag.innerHTML = ""; // Clear any previous result
      filtered.forEach((product) => {
        const { image, title, price } = product;
        const productDiv = document.createElement("div");
        productDiv.classList.add("products");

        productDiv.innerHTML = `
          <img src="${image}" alt="${title}">
          <p>Title: ${title}</p>
          <p>Price: ₦ ${(price * 1000).toLocaleString()}</p>
        `;

        resultsTag.appendChild(productDiv);
      });
    }
  } catch (error) {
    resultsTag.innerHTML = `<p>Error fetching search results.</p>`;
    console.error("Search error:", error);
  }
});

// Load all products when the page loads
getProducts(PRODUCT_URL);
