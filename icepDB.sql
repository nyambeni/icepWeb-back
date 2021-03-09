CREATE TABLE applicant_info(
        id int(11) AUTO_INCREMENT PRIMARY KEY,
	firstName VARCHAR(50),
        lastName VARCHAR(30) NOT NULL,
        email VARCHAR(50) NOT NULL UNIQUE,
        address VARCHAR(50) NOT NULL,
        contactNumber VARCHAR(13) NOT NULL,
        specialization VARCHAR(70) NOT NULL, 
        gender varchar(10) NOT NULL,
        password VARCHAR(30) NOT NULL  
);
CREATE TABLE admin_reg(
       id int(11) AUTO_INCREMENT PRIMARY KEY,
       firstName varchar(50) NOT NULL,
       lastName varchar(50) NOT NULL,
       email varchar(255) NOT NULL UNIQUE,
       phone_no varchar(10) NOT NULL,
       password varchar(50) NOT NULL
);

CREATE TABLE file_uploads(
        id int(11) AUTO_INCREMENT PRIMARY KEY,
        name varchar(255) NOT NULL,
        type varchar(255) NOT NULL,
        size varchar(255) NOT NULL
);



