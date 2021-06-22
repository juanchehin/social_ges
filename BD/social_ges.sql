-- --------------------------------------------------------
-- Host:                         127.0.0.1
-- Versión del servidor:         10.1.21-MariaDB - mariadb.org binary distribution
-- SO del servidor:              Win32
-- HeidiSQL Versión:             11.2.0.6213
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

-- Volcando estructura para tabla social.facebook
CREATE TABLE IF NOT EXISTS `facebook` (
  `id` int(11) NOT NULL,
  `access_token` varchar(45) DEFAULT NULL COMMENT 'Almacena el access token obtenido desde facebook',
  `page_id` varchar(45) DEFAULT NULL COMMENT 'Esta columna posee el id de la pagina de facebook',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Volcando datos para la tabla social.facebook: ~0 rows (aproximadamente)
/*!40000 ALTER TABLE `facebook` DISABLE KEYS */;
/*!40000 ALTER TABLE `facebook` ENABLE KEYS */;

-- Volcando estructura para tabla social.instagram
CREATE TABLE IF NOT EXISTS `instagram` (
  `id` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Volcando datos para la tabla social.instagram: ~0 rows (aproximadamente)
/*!40000 ALTER TABLE `instagram` DISABLE KEYS */;
/*!40000 ALTER TABLE `instagram` ENABLE KEYS */;

-- Volcando estructura para tabla social.twitter
CREATE TABLE IF NOT EXISTS `twitter` (
  `id` int(11) NOT NULL,
  `consumer_key` varchar(45) DEFAULT NULL,
  `consumer_secret` varchar(60) DEFAULT NULL,
  `access_token` varchar(60) DEFAULT NULL,
  `access_token_secret` varchar(60) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Volcando datos para la tabla social.twitter: ~0 rows (aproximadamente)
/*!40000 ALTER TABLE `twitter` DISABLE KEYS */;
/*!40000 ALTER TABLE `twitter` ENABLE KEYS */;

-- Volcando estructura para tabla social.usuarios
CREATE TABLE IF NOT EXISTS `usuarios` (
  `id` int(11) NOT NULL,
  `email` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `enabled` tinyint(1) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL,
  `token` varchar(255) DEFAULT NULL,
  `expiracion` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Volcando datos para la tabla social.usuarios: ~1 rows (aproximadamente)
/*!40000 ALTER TABLE `usuarios` DISABLE KEYS */;
INSERT IGNORE INTO `usuarios` (`id`, `email`, `password`, `enabled`, `created_at`, `updated_at`, `deleted_at`, `token`, `expiracion`) VALUES
	(1, 'test@test.com', '123456', 1, NULL, NULL, NULL, NULL, NULL);
/*!40000 ALTER TABLE `usuarios` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
