-- CreateTable
CREATE TABLE `User` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `email` VARCHAR(191) NOT NULL,
    `password` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    UNIQUE INDEX `User_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `词汇表` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `ch` VARCHAR(191) NOT NULL,
    `en` VARCHAR(191) NOT NULL,
    `lvl` INTEGER NOT NULL DEFAULT 0,

    UNIQUE INDEX `词汇表_ch_key`(`ch`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `汉字表` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `hanzi` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `汉字表_hanzi_key`(`hanzi`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `enword` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `word` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `enword_word_key`(`word`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `enexp` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `keyWord` VARCHAR(191) NOT NULL,
    `exp` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `enexp` ADD CONSTRAINT `enexp_keyWord_fkey` FOREIGN KEY (`keyWord`) REFERENCES `enword`(`word`) ON DELETE CASCADE ON UPDATE CASCADE;
