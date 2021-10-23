CREATE TABLE gallery (
    id SERIAL PRIMARY KEY,
    path VARCHAR(256) NOT NULL,
    description VARCHAR(512),
    likes INT,
    display_photo BOOLEAN DEFAULT true
);

INSERT INTO gallery(path, description, likes)
VALUES
('images/IMG_9983.jpeg', 'Photo of Levi and Chase being silly at picture day', 0),
('/images/IMG_0352.jpeg', 'Honoring a fallen paramedic', 0),
('/images/IMG_0385.jpeg', 'Movie night with family', 0),
('/images/IMG_0878.jpeg', 'Camping with Levi and Chase', 0),
('/images/IMG_0985.jpeg', 'Levi and Chase at the headwaters of the Mississippi River', 0),
('/images/IMG_1317.jpeg', 'Levi showing off his robot that he drew from scratch', 0),
('/images/IMG_1556.jpeg', 'Christmas 2020 with the boys', 0),
('/images/IMG_1700.jpeg', 'My father, Mike shortly before he was diagnosed with Alzheimer''s and ALS', 0),
('/images/IMG_1845.jpeg', 'Life is about friends and family.  Here are some of the friends I call family', 0),
('/images/IMG_1983.jpeg', 'Family portrait as requested by Levi', 0),
('/images/IMG_2037.jpeg', 'Best brothers!', 0),
('/images/IMG_2096.jpeg', 'Breakfast while camping', 0),
('/images/IMG_2146.jpeg', 'Chase on a bumper boat at the Minnesota State Fair', 0),
('/images/IMG_2179.jpeg', 'Levi on a lawn tractor at the Minnesota State Fair', 0)