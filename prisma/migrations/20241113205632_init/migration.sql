-- CreateTable
CREATE TABLE "User" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateTable
CREATE TABLE "词汇表" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "ch" TEXT NOT NULL,
    "en" TEXT NOT NULL,
    "lvl" INTEGER NOT NULL DEFAULT 0
);

-- CreateTable
CREATE TABLE "汉字表" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "hanzi" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "enword" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "word" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "enexp" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "wordkey" TEXT NOT NULL,
    "exp" TEXT NOT NULL,
    CONSTRAINT "enexp_wordkey_fkey" FOREIGN KEY ("wordkey") REFERENCES "enword" ("word") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "词汇表_ch_key" ON "词汇表"("ch");

-- CreateIndex
CREATE UNIQUE INDEX "汉字表_hanzi_key" ON "汉字表"("hanzi");

-- CreateIndex
CREATE UNIQUE INDEX "enword_word_key" ON "enword"("word");
