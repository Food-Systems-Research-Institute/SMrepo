CREATE TABLE `products` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`team` text,
	`author` text NOT NULL,
	`title` text NOT NULL,
	`host` text NOT NULL,
	`date` text,
	`doi` text NOT NULL,
	`adc_doi` text,
	`pub_ag` text,
	`notes` text
);
--> statement-breakpoint
CREATE UNIQUE INDEX `doi_idx` ON `products` (`doi`);