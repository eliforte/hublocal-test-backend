-- CreateTable
CREATE TABLE "places" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "address_number" INTEGER NOT NULL,
    "complement" TEXT NOT NULL,
    "cep" TEXT NOT NULL,
    "company_id" TEXT NOT NULL,

    CONSTRAINT "places_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "places_id_key" ON "places"("id");

-- AddForeignKey
ALTER TABLE "places" ADD CONSTRAINT "places_company_id_fkey" FOREIGN KEY ("company_id") REFERENCES "companies"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
