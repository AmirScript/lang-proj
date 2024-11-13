-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "词汇表" (
    "id" SERIAL NOT NULL,
    "ch" TEXT NOT NULL,
    "en" TEXT NOT NULL,
    "lvl" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "词汇表_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "汉字表" (
    "id" SERIAL NOT NULL,
    "hanzi" TEXT NOT NULL,

    CONSTRAINT "汉字表_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "enword" (
    "id" SERIAL NOT NULL,
    "word" TEXT NOT NULL,

    CONSTRAINT "enword_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "enexp" (
    "id" SERIAL NOT NULL,
    "wordkey" TEXT NOT NULL,
    "exp" TEXT NOT NULL,

    CONSTRAINT "enexp_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "词汇表_ch_key" ON "词汇表"("ch");

-- CreateIndex
CREATE UNIQUE INDEX "汉字表_hanzi_key" ON "汉字表"("hanzi");

-- CreateIndex
CREATE UNIQUE INDEX "enword_word_key" ON "enword"("word");

-- AddForeignKey
ALTER TABLE "enexp" ADD CONSTRAINT "enexp_wordkey_fkey" FOREIGN KEY ("wordkey") REFERENCES "enword"("word") ON DELETE CASCADE ON UPDATE CASCADE;
