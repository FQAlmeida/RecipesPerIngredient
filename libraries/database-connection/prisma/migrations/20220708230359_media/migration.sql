-- CreateTable
CREATE TABLE "Media" (
    "cod_media" SERIAL NOT NULL,
    "media_uri" TEXT NOT NULL,
    "cod_recipe" INTEGER NOT NULL,

    CONSTRAINT "Media_pkey" PRIMARY KEY ("cod_media")
);

-- AddForeignKey
ALTER TABLE "Media" ADD CONSTRAINT "Media_cod_recipe_fkey" FOREIGN KEY ("cod_recipe") REFERENCES "Recipe"("cod_recipe") ON DELETE RESTRICT ON UPDATE CASCADE;
