USE `travelexperts`;

CREATE TABLE IF NOT EXISTS `webregistrations` (
  `CustomerId` int(11) NOT NULL,
  `UserId` varchar(50) NOT NULL,
  `Email` varchar(50) NOT NULL,
  `PasswordHash` varchar(255) NOT NULL,
  `TravelStart` date NOT NULL,
  `TravelEnd` date NOT NULL,
  `TravelPackage` varchar(100) DEFAULT NULL,
  `DestinationRegion` varchar(50) NOT NULL,
  `Interest` varchar(30) NOT NULL,
  `ReceiveUpdates` tinyint(1) NOT NULL DEFAULT 0,
  `CreatedAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`CustomerId`),
  UNIQUE KEY `webregistrations_userid_unique` (`UserId`),
  UNIQUE KEY `webregistrations_email_unique` (`Email`),
  CONSTRAINT `webregistrations_customer_fk`
    FOREIGN KEY (`CustomerId`) REFERENCES `customers` (`CustomerId`)
    ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
