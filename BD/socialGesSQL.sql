-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema social
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema social
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `social` DEFAULT CHARACTER SET utf8 ;
USE `social` ;

-- -----------------------------------------------------
-- Table `social`.`Usuarios`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `social`.`Usuarios` (
  `id` INT(11) NOT NULL,
  `email` VARCHAR(255) NULL,
  `password` VARCHAR(255) NULL,
  `enable` TINYINT(1) NULL,
  `created_at` TIMESTAMP NULL DEFAULT NULL,
  `updated_at` TIMESTAMP NULL DEFAULT NULL,
  `deleted_at` TIMESTAMP NULL DEFAULT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `social`.`Facebook`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `social`.`Facebook` (
  `id` INT(11) NOT NULL,
  `access_token` VARCHAR(45) NULL COMMENT 'Almacena el access token obtenido desde facebook',
  `page_id` VARCHAR(45) NULL COMMENT 'Esta columna posee el id de la pagina de facebook',
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `social`.`Twitter`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `social`.`Twitter` (
  `id` INT(11) NOT NULL,
  `consumer_key` VARCHAR(45) NULL,
  `consumer_secret` VARCHAR(60) NULL,
  `access_token` VARCHAR(60) NULL,
  `access_token_secret` VARCHAR(60) NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `social`.`Instagram`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `social`.`Instagram` (
  `id` INT(11) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
