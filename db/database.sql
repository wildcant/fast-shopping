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
  `id_product` INT(11) NOT NULL,
  `name` VARCHAR(45) NOT NULL,
  `price` DECIMAL(10,2) NOT NULL,
  `category` VARCHAR(120) NOT NULL,
  `description` VARCHAR(120) NOT NULL,
  PRIMARY KEY (`id_product`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `fast_shopping`.`users`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `fast_shopping`.`users` (
  `id_user` INT(11) NOT NULL AUTO_INCREMENT,
  `email` VARCHAR(45) NOT NULL,
  `name` VARCHAR(45) NOT NULL,
  `id` INT(11) NOT NULL,
  `address` VARCHAR(45) NOT NULL,
  `phone` VARCHAR(45) NULL,
  PRIMARY KEY (`id_user`),
  UNIQUE INDEX `email_UNIQUE` (`email` ASC))
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
