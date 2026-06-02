const dashboardTitle = document.getElementById('header');
dashboardTitle.textContent = 'Product Dashboard';

const productList = document.getElementById('product-list');

products.forEach(product => {
const productContainer = document.createElement('div');
productContainer.className = product.inStock ? 'card' : 'card outOfStock';

  const productTitle = document.createElement('h3');
  productTitle.textContent = product.name;

  const productPrice = document.createElement('p');
  productPrice.textContent = product.price;

  const productAvailability = document.createElement('p');
  productAvailability.textContent = product.inStock ? 'In Stock' : 'Out of Stock';

  const productImage = document.createElement('img');
  productImage.src = product.image;
  productImage.alt = product.name;

  const removeButton = document.createElement('button');
  removeButton.textContent = 'Remove';
  removeButton.addEventListener('click', () => {
    productList.removeChild(productContainer);
  });

  productContainer.append(productTitle, productPrice, productAvailability, productImage, removeButton);
  productList.appendChild(productContainer);
});