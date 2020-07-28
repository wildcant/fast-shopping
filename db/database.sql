-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema fast_shopping
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema fast_shopping
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `fast_shopping` DEFAULT CHARACTER SET utf8 ;
USE `fast_shopping` ;

-- -----------------------------------------------------
-- Table `fast_shopping`.`products`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `fast_shopping`.`products` (
  `id_product` VARCHAR(45) NOT NULL,
  `name` VARCHAR(120) NOT NULL,
  `price` FLOAT NOT NULL,
  `category` VARCHAR(120) NOT NULL,
  `description` VARCHAR(1000) NOT NULL,
  `date` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id_product`),
  UNIQUE INDEX `id_product_UNIQUE` (`id_product` ASC))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `fast_shopping`.`users`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `fast_shopping`.`users` (
  `id_user` INT(11) NOT NULL AUTO_INCREMENT,
  `email` VARCHAR(45) NOT NULL,
  `name` VARCHAR(45) NOT NULL,
  `id` BIGINT(11) NOT NULL,
  `address` VARCHAR(45) NOT NULL,
  `phone` VARCHAR(45) NULL,
  PRIMARY KEY (`id_user`),
  UNIQUE INDEX `email_UNIQUE` (`email` ASC),
  UNIQUE INDEX `id_user_UNIQUE` (`id_user` ASC))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `fast_shopping`.`orders`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `fast_shopping`.`orders` (
  `id_order` VARCHAR(45) NOT NULL,
  `id_user` INT(11) NOT NULL,
  `total_price` VARCHAR(45) NOT NULL,
  `date` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id_order`, `id_user`),
  INDEX `fk_orders_users_idx` (`id_user` ASC),
  UNIQUE INDEX `id_order_UNIQUE` (`id_order` ASC),
  CONSTRAINT `fk_orders_users`
    FOREIGN KEY (`id_user`)
    REFERENCES `fast_shopping`.`users` (`id_user`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `fast_shopping`.`order_items`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `fast_shopping`.`order_items` (
  `id_order_item` INT NOT NULL AUTO_INCREMENT,
  `id_order` VARCHAR(45) NOT NULL,
  `id_user` INT(11) NOT NULL,
  `id_product` VARCHAR(45) NOT NULL,
  `quantity` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id_order_item`, `id_order`, `id_user`, `id_product`),
  INDEX `fk_order_item_orders1_idx` (`id_order` ASC, `id_user` ASC),
  INDEX `fk_order_item_products1_idx` (`id_product` ASC),
  UNIQUE INDEX `id_order_item_UNIQUE` (`id_order_item` ASC),
  CONSTRAINT `fk_order_item_orders1`
    FOREIGN KEY (`id_order` , `id_user`)
    REFERENCES `fast_shopping`.`orders` (`id_order` , `id_user`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_order_item_products1`
    FOREIGN KEY (`id_product`)
    REFERENCES `fast_shopping`.`products` (`id_product`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
