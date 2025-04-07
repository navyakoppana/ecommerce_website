'use strict';

/** @type {import('sequelize-cli').Migration} */
export default {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */

    await queryInterface.bulkInsert('products', 
    [
      {
        "_id": "WEST0111",
        "bestseller": false,
        "category": "Women",
        "description": "This olive tiered shirtdress is adorned with botanical motifs, woven from a soft blend fabric. It includes a collared neck extending to a buttoned placket and is completed with a detachable belt for a cinched fit.",
        "image": [
          "l_img1_1",
          "l_img1_2",
          "l_img1_3",
          "l_img1_4"
        ],
        "name": "Olive Tiered Shirt Dress with Belt",
        "price": "30.00",
        "sizes": [
          "S",
          "M",
          "L",
          "XL"
        ],
        "subCategory": "Dresses"
      },
      {
        "_id": "WEST0121",
        "bestseller": true,
        "category": "Women",
        "description": "This khaki shirt features a styling knot design. Made with soft and breathable fabric, it includes a notched collar, button-down front, and full sleeves.",
        "image": [
          "l_img2"
        ],
        "name": "Khaki Knot-Design Shirt",
        "price": "15.00",
        "sizes": [
          "M",
          "L",
          "XL"
        ],
        "subCategory": "Shirts"
      },
      {
        "_id": "WEST0122",
        "bestseller": false,
        "category": "Women",
        "description": "This brown top features a sophisticated notched collar and puff sleeves. It offers great breathability and comfort with its cotton-rich build.",
        "image": [
          "l_img3"
        ],
        "name": "Wardrobe Brown Top",
        "price": "15.00",
        "sizes": [
          "S",
          "M",
          "L"
        ],
        "subCategory": "Shirts"
      },
      {
        "_id": "WEST0131",
        "bestseller": false,
        "category": "Women",
        "description": "This rust t-shirt is designed with a stylish printed addition. The pure cotton garment carries a round neck and half sleeves.",
        "image": [
          "l_img4"
        ],
        "name": "Rust Printed Cotton T shirt",
        "price": "8.00",
        "sizes": [
          "XS",
          "S",
          "M",
          "L"
        ],
        "subCategory": "TShirts"
      },
      {
        "_id": "WEST0211",
        "bestseller": false,
        "category": "Men",
        "description": "This olive green checkered shirt features a classic button-down collar and chest pocket for effortless style. Crafted from soft fabric, its relaxed handle ensures all-day comfort and versatility.",
        "image": [
          "l_img5"
        ],
        "name": "Casuals Olive Checkered Relaxed-Fit Cotton Shirt",
        "price": "18.00",
        "sizes": [
          "S",
          "M",
          "L",
          "XL"
        ],
        "subCategory": "Shirts"
      },
      {
        "_id": "WEST0212",
        "bestseller": false,
        "category": "Men",
        "description": "This olive and white checked shirt a button-down front and a classic chest pocket. Designed in a relaxed fit, it offers a blend of style and comfort for everyday wear.",
        "image": [
          "l_img6"
        ],
        "name": "Casuals Olive Checks Design Relaxed-Fit Cotton Shirt",
        "price": "16.00",
        "sizes": [
          "S",
          "M",
          "XL"
        ],
        "subCategory": "Shirts"
      },
      {
        "_id": "WEST0213",
        "bestseller": true,
        "category": "Men",
        "description": "This navy and white checked shirt features a button-down front and a classic chest pocket. Designed in a relaxed fit, it ensures style and comfort for everyday wear.",
        "image": [
          "l_img7"
        ],
        "name": "Casuals Navy Checks Print Relaxed-Fit Cotton Shirt",
        "price": "20.00",
        "sizes": [
          "S",
          "M",
          "L",
          "XL"
        ],
        "subCategory": "Shirts"
      },
      {
        "_id": "WEST0311",
        "bestseller": false,
        "category": "Girls",
        "description": "This beige dress features a self-striped bodice. The quality fabric partywear offers an A-line silhouette adorned with layered mesh frills. It carries a round neck, sleeveless cut, bow and knot-detailing",
        "image": [
          "l_img8"
        ],
        "name": "Beige Bow Design Mesh A-Line Dress",
        "price": "25.00",
        "sizes": [
          "XS",
          "S",
          "M",
          "L"
        ],
        "subCategory": "Frocks"
      },
      {
        "_id": "WEST0312",
        "bestseller": true,
        "category": "Girls",
        "description": "This red dress adorned with intricate lace embroidery and a front bow design. The dress is completed with a round neck, sleeveless and knot detailing in the back.",
        "image": [
          "l_img9"
        ],
        "name": "Red Lace Embroidered A-Line Dress",
        "price": "20.00",
        "sizes": [
          "XS",
          "S",
          "M",
          "L"
        ],
        "subCategory": "Frocks"
      },
      {
        "_id": "WEST0411",
        "bestseller": true,
        "category": "Boys",
        "description": "This white polo t-shirt is designed with playful embroidery. Made in a cotton-rich blend, the regular-fit garment offers a polo collar leading to a three button placket and short sleeves.",
        "image": [
          "l_img10"
        ],
        "name": "White Embroidered Cotton Polo T-Shirt",
        "price": "15.00",
        "sizes": [
          "XS",
          "S",
          "M",
          "L"
        ],
        "subCategory": "TShirts"
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('products', null, {});
  }
};
