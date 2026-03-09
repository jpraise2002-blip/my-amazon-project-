import dayjs from 'https://unpkg.com/supersimpledev@8.5.0/dayjs/esm/index.js';

let ordersHTML = '';

const today = dayjs();
const orderDateOne = dayjs().subtract(5, 'day').format('dddd, MMMM D');
const deliveryDateOne = dayjs().subtract(5, 'day').add(7, 'day').format('dddd, MMMM D');
const orderDateTwo = today.format('dddd, MMMM D');
const deliveryDate = dayjs().add(7, 'day').format('dddd, MMMM D');

const orders = [{
  // orderplaced: 'August 12',
  orderplaced: orderDateTwo,
  total: '$35.06',
  // orderID: '27cba69d-4c3d-4098-b42d-ac7fa62b7664',
  orderID: crypto.randomUUID(),
  details: [{
    image: 'images/products/athletic-cotton-socks-6-pairs.jpg',
    name: 'Black and Gray Athletic Cotton Socks - 6 Pairs',
    // arrival: 'August 15',
    arrival: deliveryDate,
    quantity: '1',
  }, {
    image: 'images/products/adults-plain-cotton-tshirt-2-pack-teal.jpg',
    name: 'Adults Plain Cotton T-Shirt',
    // arrival: 'August 19',
    arrival: deliveryDate,
    quantity: '2',
  }]
},
{
  // orderplaced: 'June 10',
  orderplaced: orderDateOne,
  total: '$41.90',
  // orderID: 'b6b6c212-d30e-4d4a-805d-90b52ce6b37d',
  orderID: crypto.randomUUID(),
  details: [{
    image: 'images/products/intermediate-composite-basketball.jpg',
    name: 'Intermediate Size Basketball',
    // arrival: 'June 17',
    arrival: deliveryDateOne,
    quantity: '2',
  }]
}
];


orders.forEach((order) => {
  ordersHTML += `
    <div class="order-container">

      <div class="order-header">
        <div class="order-header-left-section">
          <div class="order-date">
            <div class="order-header-label">Order Placed:</div>
            <div>${order.orderplaced}</div>
          </div>
          <div class="order-total">
            <div class="order-header-label">Total:</div>
            <div>${order.total}</div>
          </div>
        </div>

        <div class="order-header-right-section">
          <div class="order-header-label">Order ID:</div>
          <div>${order.orderID}</div>
        </div>
      </div>

      <div class="order-details-grid">
        ${order.details
      .map((item) => {
        return `
              <div class="product-image-container">
                <img src="${item.image}">
              </div>

              <div class="product-details">
                <div class="product-name">
                  ${item.name}
                </div>
                <div class="product-delivery-date">
                  Arriving on: ${item.arrival}
                </div>
                <div class="product-quantity">
                  Quantity: ${item.quantity}
                </div>
                <button class="buy-again-button button-primary">
                  <img class="buy-again-icon" src="images/icons/buy-again.png">
                  <span class="buy-again-message">Buy it again</span>
                </button>
              </div>

              <div class="product-actions">
                <a href="tracking.html">
                  <button class="track-package-button button-secondary">
                    Track package
                  </button>
                </a>
              </div>
            `;
      })
      .join("")}
      </div>

    </div>
  `;
});

document.querySelector('.js-orders-grid').innerHTML = ordersHTML;
