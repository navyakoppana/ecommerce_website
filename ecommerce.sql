CREATE TABLE IF NOT EXISTS products (
    _id VARCHAR(20) PRIMARY KEY NOT NULL,
    name VARCHAR(100) NOT NULL,
    description TEXT,
    price NUMERIC(10, 2) NOT NULL,
    image TEXT[], 
    category VARCHAR(50),
    subCategory VARCHAR(50),
    sizes TEXT[],
    bestseller BOOLEAN
);

-- Insert product data into the products table
INSERT INTO products (_id, name, description, price, image, category, subCategory, sizes, bestseller)
VALUES 
('WEST0111', 'Olive Tiered Shirt Dress with Belt', 
 'This olive tiered shirtdress is adorned with botanical motifs, woven from a soft blend fabric. It includes a collared neck extending to a buttoned placket and is completed with a detachable belt for a cinched fit.', 
 30.00, ARRAY['l_img1_1', 'l_img1_2', 'l_img1_3', 'l_img1_4'], 
 'Women', 'Dresses', ARRAY['S', 'M', 'L', 'XL'], FALSE),

('WEST0121', 'Khaki Knot-Design Shirt', 
 'This khaki shirt features a styling knot design. Made with soft and breathable fabric, it includes a notched collar, button-down front, and full sleeves.', 
 15.00, ARRAY['l_img2'], 
 'Women', 'Shirts', ARRAY['M', 'L', 'XL'], TRUE),

('WEST0122', 'Wardrobe Brown Top', 
 'This brown top features a sophisticated notched collar and puff sleeves. It offers great breathability and comfort with its cotton-rich build.', 
 15.00, ARRAY['l_img3'], 
 'Women', 'Shirts', ARRAY['S', 'M', 'L'], FALSE),

('WEST0131', 'Rust Printed Cotton T shirt', 
 'This rust t-shirt is designed with a stylish printed addition. The pure cotton garment carries a round neck and half sleeves.', 
 8.00, ARRAY['l_img4'], 
 'Women', 'TShirts', ARRAY['XS', 'S', 'M', 'L'], FALSE),

('WEST0211', 'Casuals Olive Checkered Relaxed-Fit Cotton Shirt', 
 'This olive green checkered shirt features a classic button-down collar and chest pocket for effortless style. Crafted from soft fabric, its relaxed handle ensures all-day comfort and versatility.', 
 18.00, ARRAY['l_img5'], 
 'Men', 'Shirts', ARRAY['S', 'M', 'L', 'XL'], FALSE),

('WEST0212', 'Casuals Olive Checks Design Relaxed-Fit Cotton Shirt', 
 'This olive and white checked shirt a button-down front and a classic chest pocket. Designed in a relaxed fit, it offers a blend of style and comfort for everyday wear.', 
 16.00, ARRAY['l_img6'], 
 'Men', 'Shirts', ARRAY['S', 'M', 'XL'], FALSE),

('WEST0213', 'Casuals Navy Checks Print Relaxed-Fit Cotton Shirt', 
 'This navy and white checked shirt features a button-down front and a classic chest pocket. Designed in a relaxed fit, it ensures style and comfort for everyday wear.', 
 20.00, ARRAY['l_img7'], 
 'Men', 'Shirts', ARRAY['S', 'M', 'L', 'XL'], TRUE),

('WEST0311', 'Beige Bow Design Mesh A-Line Dress', 
 'This beige dress features a self-striped bodice. The quality fabric partywear offers an A-line silhouette adorned with layered mesh frills. It carries a round neck, sleeveless cut, bow and knot-detailing', 
 25.00, ARRAY['l_img8'], 
 'Girls', 'Frocks', ARRAY['XS', 'S', 'M', 'L'], FALSE),

('WEST0312', 'Red Lace Embroidered A-Line Dress', 
 'This red dress adorned with intricate lace embroidery and a front bow design. The dress is completed with a round neck, sleeveless and knot detailing in the back.', 
 20.00, ARRAY['l_img9'], 
 'Girls', 'Frocks', ARRAY['XS', 'S', 'M', 'L'], TRUE),

('WEST0411', 'White Embroidered Cotton Polo T-Shirt', 
 'This white polo t-shirt is designed with playful embroidery. Made in a cotton-rich blend, the regular-fit garment offers a polo collar leading to a three button placket and short sleeves.', 
 15.00, ARRAY['l_img10'], 
 'Boys', 'TShirts', ARRAY['XS', 'S', 'M', 'L'], TRUE);


