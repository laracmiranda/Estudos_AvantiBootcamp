-- CreateTable
CREATE TABLE "techs" (
    "id" TEXT NOT NULL,
    "name" VARCHAR(100) NOT NULL,

    CONSTRAINT "techs_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "users" (
    "id" TEXT NOT NULL,
    "name" VARCHAR(100) NOT NULL,
    "email" VARCHAR(100) NOT NULL,
    "phone" VARCHAR(20),

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "user_tech" (
    "id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "tech_id" TEXT NOT NULL,

    CONSTRAINT "user_tech_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- AddForeignKey
ALTER TABLE "user_tech" ADD CONSTRAINT "user_tech_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user_tech" ADD CONSTRAINT "user_tech_tech_id_fkey" FOREIGN KEY ("tech_id") REFERENCES "techs"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
