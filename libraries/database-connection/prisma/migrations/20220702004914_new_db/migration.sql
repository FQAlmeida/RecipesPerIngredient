-- CreateTable
CREATE TABLE "Recipe" (
    "cod_recipe" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "cod_difficulty_level" INTEGER NOT NULL,
    "preparation_time" TEXT NOT NULL,
    "cooking_time" TEXT,
    CONSTRAINT "Recipe_cod_difficulty_level_fkey" FOREIGN KEY ("cod_difficulty_level") REFERENCES "DifficultyLevel" ("cod_difficulty_level") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Step" (
    "cod_step" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "cod_recipe" INTEGER NOT NULL,
    "cod_depends_on_step" INTEGER,
    "cod_technique" INTEGER,
    "description" TEXT NOT NULL,
    CONSTRAINT "Step_cod_recipe_fkey" FOREIGN KEY ("cod_recipe") REFERENCES "Recipe" ("cod_recipe") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Step_cod_depends_on_step_fkey" FOREIGN KEY ("cod_depends_on_step") REFERENCES "Step" ("cod_step") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "Step_cod_technique_fkey" FOREIGN KEY ("cod_technique") REFERENCES "Technique" ("cod_technique") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Technique" (
    "cod_technique" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Tool" (
    "cod_tool" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "details" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "ToolsRecipe" (
    "cod_tools_recipe" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "cod_tool" INTEGER NOT NULL,
    "cod_recipe" INTEGER NOT NULL,
    "is_required" BOOLEAN NOT NULL,
    CONSTRAINT "ToolsRecipe_cod_recipe_fkey" FOREIGN KEY ("cod_recipe") REFERENCES "Recipe" ("cod_recipe") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "ToolsRecipe_cod_tool_fkey" FOREIGN KEY ("cod_tool") REFERENCES "Tool" ("cod_tool") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Ingredient" (
    "cod_ingredient" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "IngredientsRecipe" (
    "cod_ingredient_recipe" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "cod_ingredient" INTEGER NOT NULL,
    "cod_recipe" INTEGER NOT NULL,
    "is_required" BOOLEAN NOT NULL,
    "quatity" REAL NOT NULL,
    "cod_measurement_unit" INTEGER NOT NULL,
    CONSTRAINT "IngredientsRecipe_cod_recipe_fkey" FOREIGN KEY ("cod_recipe") REFERENCES "Recipe" ("cod_recipe") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "IngredientsRecipe_cod_ingredient_fkey" FOREIGN KEY ("cod_ingredient") REFERENCES "Ingredient" ("cod_ingredient") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "IngredientsRecipe_cod_measurement_unit_fkey" FOREIGN KEY ("cod_measurement_unit") REFERENCES "MeasurementUnit" ("cod_measurement_unit") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "MeasurementUnit" (
    "cod_measurement_unit" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "DifficultyLevel" (
    "cod_difficulty_level" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "level" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Step_cod_depends_on_step_key" ON "Step"("cod_depends_on_step");

-- CreateIndex
CREATE UNIQUE INDEX "Step_cod_recipe_cod_depends_on_step_key" ON "Step"("cod_recipe", "cod_depends_on_step");
