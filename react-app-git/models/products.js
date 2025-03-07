// const Sequelize = require('sequelize');
// module.exports = function(sequelize, DataTypes) {
//   return sequelize.define('products', {
  
//     _id: Sequelize.DataTypes.STRING,
       
//     name: Sequelize.DataTypes.STRING,
    
//     description:Sequelize.DataTypes.TEXT,
    
//     price:Sequelize.DataTypes.DECIMAL,
     
//     image:Sequelize.DataTypes.ARRAY(Sequelize.DataTypes.TEXT),
 
//     category: Sequelize.DataTypes.STRING,
     
//     subCategory:Sequelize.DataTypes.STRING,
   
//     sizes: Sequelize.DataTypes.ARRAY(Sequelize.DataTypes.TEXT),
     
//     bestseller:{
//       type:Sequelize.DataTypes.BOOLEAN,
//       defaultValue:false,
//       allowNull : false,
//     },
//   }, {
//     sequelize,
//     tableName: 'products',
//     schema: 'public',
//     timestamps: false,
//     indexes: [
//       {
//         name: "products_pkey",
//         unique: true,
//         fields: [
//           { name: "_id" },
//         ]
//       },
//     ]
//   });
// };
'use strict';
module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define('Product', {
    _id: {
      type: DataTypes.STRING,
      primaryKey: true
    },
    name: DataTypes.STRING,
    description: DataTypes.TEXT,
    price: DataTypes.NUMERIC,
    image: DataTypes.ARRAY(DataTypes.TEXT),
    category: DataTypes.STRING,
    subCategory: DataTypes.STRING,
    sizes: DataTypes.ARRAY(DataTypes.TEXT),
    bestseller: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    }
  }, {});
  Product.associate = function(models) {
    // associations can be defined here
  };
  return Product;
};
