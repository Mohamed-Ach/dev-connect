-- CreateTable
CREATE TABLE "Widget" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),

    CONSTRAINT "Widget_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "User" (
    "_id" STRING NOT NULL,
    "email" STRING NOT NULL,
    "firstName" STRING NOT NULL,
    "lastName" STRING NOT NULL,
    "sex" STRING NOT NULL,
    "title" STRING NOT NULL,
    "bio" STRING NOT NULL,
    "avatar" STRING NOT NULL,
    "programmingLang" STRING[],
    "techStack" STRING[],
    "intrests" STRING[],
    "password" STRING NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("_id")
);

-- CreateTable
CREATE TABLE "Session" (
    "_id" STRING NOT NULL,
    "userId" STRING NOT NULL,
    "expiresAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Session_pkey" PRIMARY KEY ("_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- AddForeignKey
ALTER TABLE "Session" ADD CONSTRAINT "Session_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("_id") ON DELETE CASCADE ON UPDATE CASCADE;
