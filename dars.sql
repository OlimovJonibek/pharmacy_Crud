CREATE TABLE `region`(
    `id` INT UNSIGNED  AUTO_INCREMENT PRIMARY KEY,
    `name` VARCHAR(32) 
);
CREATE TABLE `medicines`(
    `id` INT UNSIGNED  AUTO_INCREMENT PRIMARY KEY,
    `name` VARCHAR(32) ,
    `manufacturer` VARCHAR(32) ,
    `medicine_type_id` INT ,
    `price` FLOAT(8, 2) ,
    `expiry_date` DATE ,
    `info` TEXT 
);
CREATE TABLE `distirict`(
    `id` INT UNSIGNED  AUTO_INCREMENT PRIMARY KEY,
    `name` VARCHAR(32) ,
    `region_id` INT 
);
CREATE TABLE `medicinetype`(
    `id` INT UNSIGNED  AUTO_INCREMENT PRIMARY KEY,
    `name` VARCHAR(32) 
);
CREATE TABLE `pharmacy`(
    `id` INT UNSIGNED  AUTO_INCREMENT PRIMARY KEY,
    `name` VARCHAR(32) ,
    `email` VARCHAR(32) ,
    `phone` VARCHAR(32) ,
    `address` VARCHAR(32) ,
    `location` VARCHAR(32) ,
    `region_id` INT ,
    `district_id` INT 
);
CREATE TABLE `stock`(
    `id` INT UNSIGNED  AUTO_INCREMENT PRIMARY KEY,
    `pharmacy_id` INT ,
    `medicine_id` INT ,
    `quantity` INT 
);

ALTER TABLE
    `pharmacy` ADD CONSTRAINT `pharmacy_region_id_foreign` FOREIGN KEY(`region_id`) REFERENCES `region`(`id`) on delete cascade;
ALTER TABLE
    `medicines` ADD CONSTRAINT `medicines_medicine_type_id_foreign` FOREIGN KEY(`medicine_type_id`) REFERENCES `medicinetype`(`id`) on delete cascade;
ALTER TABLE
    `pharmacy` ADD CONSTRAINT `pharmacy_district_id_foreign` FOREIGN KEY(`district_id`) REFERENCES `distirict`(`id`) on delete cascade;
ALTER TABLE
    `stock` ADD CONSTRAINT `stock_medicine_id_foreign` FOREIGN KEY(`medicine_id`) REFERENCES `medicines`(`id`) on delete cascade;
ALTER TABLE
    `distirict` ADD CONSTRAINT `distirict_region_id_foreign` FOREIGN KEY(`region_id`) REFERENCES `region`(`id`) on delete cascade;
ALTER TABLE
    `stock` ADD CONSTRAINT `stock_pharmacy_id_foreign` FOREIGN KEY(`pharmacy_id`) REFERENCES `pharmacy`(`id`) on delete cascade;