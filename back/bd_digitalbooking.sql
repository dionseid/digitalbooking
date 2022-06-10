-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
-- -----------------------------------------------------
-- Schema digitalbooking
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema digitalbooking
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `digitalbooking` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `digitalbooking` ;

-- -----------------------------------------------------
-- Table `digitalbooking`.`categorias`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `digitalbooking`.`categorias` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `titulo` VARCHAR(55) NOT NULL,
  `descripcion` VARCHAR(100) NOT NULL,
  `url_Img` VARCHAR(500) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 1
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_general_ci;


-- -----------------------------------------------------
-- Table `digitalbooking`.`ciudades`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `digitalbooking`.`ciudades` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(55) NOT NULL,
  `provincia` VARCHAR(45) NOT NULL,
  `pais` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 1
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_general_ci;


-- -----------------------------------------------------
-- Table `digitalbooking`.`productos`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `digitalbooking`.`productos` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(60) NOT NULL,
  `descripcion` VARCHAR(500) NOT NULL,
  `ciudades_id` INT NOT NULL,
  `categorias_id` INT NOT NULL,
  PRIMARY KEY (`id`, `ciudades_id`, `categorias_id`),
  INDEX `fk_productos_ciudades1_idx` (`ciudades_id` ASC),
  INDEX `fk_productos_categorias1_idx` (`categorias_id` ASC),
  CONSTRAINT `fk_productos_categorias1`
    FOREIGN KEY (`categorias_id`)
    REFERENCES `digitalbooking`.`categorias` (`id`),
  CONSTRAINT `fk_productos_ciudades1`
    FOREIGN KEY (`ciudades_id`)
    REFERENCES `digitalbooking`.`ciudades` (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 1
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_general_ci;


-- -----------------------------------------------------
-- Table `digitalbooking`.`caracteristicas`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `digitalbooking`.`caracteristicas` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(45) NOT NULL,
  `icono` VARCHAR(45) NOT NULL,
  `productos_id` INT NOT NULL,
  PRIMARY KEY (`id`, `productos_id`),
  INDEX `fk_caracteristicas_productos1_idx` (`productos_id` ASC),
  CONSTRAINT `fk_caracteristicas_productos1`
    FOREIGN KEY (`productos_id`)
    REFERENCES `digitalbooking`.`productos` (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_general_ci;


-- -----------------------------------------------------
-- Table `digitalbooking`.`imagenes`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `digitalbooking`.`imagenes` (
  `id` INT NOT NULL,
  `nombre` VARCHAR(45) NOT NULL,
  `url` VARCHAR(500) NOT NULL,
  `productos_id` INT NOT NULL,
  PRIMARY KEY (`id`, `productos_id`),
  INDEX `fk_imagenes_productos1_idx` (`productos_id` ASC),
  CONSTRAINT `fk_imagenes_productos1`
    FOREIGN KEY (`productos_id`)
    REFERENCES `digitalbooking`.`productos` (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_general_ci;


-- -----------------------------------------------------
-- Table `digitalbooking`.`politicas`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `digitalbooking`.`politicas` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `tipo` INT NOT NULL,
  `descripcion` MEDIUMTEXT NOT NULL,
  `productos_id` INT NOT NULL,
  PRIMARY KEY (`id`, `productos_id`),
  INDEX `fk_tiposDePolitica_productos1_idx` (`productos_id` ASC),
  CONSTRAINT `fk_tiposDePolitica_productos1`
    FOREIGN KEY (`productos_id`)
    REFERENCES `digitalbooking`.`productos` (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_general_ci;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;