import dayjs from 'https://unpkg.com/supersimpledev@8.5.0/dayjs/esm/index.js';

let trackingHTML = '';

const deliveryDate = dayjs().add(7, 'day').format('dddd, MMMM D');

const tracking = [{
    // arrival: 'Monday, June 13',
    arrival: deliveryDate,
    name: 'Black and Gray Athletic Cotton Socks - 6 Pairs',
    quantity: '1',
    image: 'images/products/athletic-cotton-socks-6-pairs.jpg',
}];

tracking.forEach((order) => {
    trackingHTML += `
    <div class="order-tracking-container">
          <a class="back-to-orders-link link-primary" href="orders.html">
            View all orders
          </a>

          <div class="delivery-date">
            Arriving on ${order.arrival}
          </div>

          <div class="product-info">
            ${order.name}
          </div>

          <div class="product-info">
            Quantity: ${order.quantity}
          </div>

          <img class="product-image" src="${order.image}">

          <div class="progress-labels-container">
            <div class="progress-label">
              Preparing
            </div>
            <div class="progress-label current-status">
              Shipped
            </div>
            <div class="progress-label">
              Delivered
            </div>
          </div>

          <div class="progress-bar-container">
            <div class="progress-bar"></div>
          </div>
        </div>`
})

document.querySelector('.js-order-tracking').innerHTML = trackingHTML;