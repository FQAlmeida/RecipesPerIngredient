/*
  Warnings:

  - Added the required column `serves_adults` to the `Recipe` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Recipe" (
    "cod_recipe" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "cod_difficulty_level" INTEGER NOT NULL,
    "preparation_time" TEXT NOT NULL,
    "cooking_time" TEXT,
    "serves_adults" INTEGER NOT NULL,
    CONSTRAINT "Recipe_cod_difficulty_level_fkey" FOREIGN KEY ("cod_difficulty_level") REFERENCES "DifficultyLevel" ("cod_difficulty_level") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Recipe" ("cod_difficulty_level", "cod_recipe", "cooking_time", "name", "preparation_time") SELECT "cod_difficulty_level", "cod_recipe", "cooking_time", "name", "preparation_time" FROM "Recipe";
DROP TABLE "Recipe";
ALTER TABLE "new_Recipe" RENAME TO "Recipe";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
