-- CreateTable
CREATE TABLE "responsables" (
    "id" TEXT NOT NULL,
    "full_name" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "address_number" INTEGER NOT NULL,
    "complement" TEXT NOT NULL,
    "cep" TEXT NOT NULL,
    "is_main_responsable" BOOLEAN NOT NULL,
    "company_id" TEXT NOT NULL,
    "places_id" TEXT NOT NULL,

    CONSTRAINT "responsables_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "responsables_id_key" ON "responsables"("id");

-- AddForeignKey
ALTER TABLE "responsables" ADD CONSTRAINT "responsables_company_id_fkey" FOREIGN KEY ("company_id") REFERENCES "companies"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "responsables" ADD CONSTRAINT "responsables_places_id_fkey" FOREIGN KEY ("places_id") REFERENCES "places"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
