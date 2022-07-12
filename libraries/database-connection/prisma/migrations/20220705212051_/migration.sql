-- CreateTable
CREATE TABLE "Recipe" (
    "cod_recipe" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "cod_difficulty_level" INTEGER NOT NULL,
    "preparation_time" TEXT NOT NULL,
    "cooking_time" TEXT,
    "serves_adults" INTEGER NOT NULL,

    CONSTRAINT "Recipe_pkey" PRIMARY KEY ("cod_recipe")
);

-- CreateTable
CREATE TABLE "Step" (
    "cod_step" SERIAL NOT NULL,
    "cod_recipe" INTEGER NOT NULL,
    "cod_depends_on_step" INTEGER,
    "cod_technique" INTEGER,
    "description" TEXT NOT NULL,

    CONSTRAINT "Step_pkey" PRIMARY KEY ("cod_step")
);

-- CreateTable
CREATE TABLE "Technique" (
    "cod_technique" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "Technique_pkey" PRIMARY KEY ("cod_technique")
);

-- CreateTable
CREATE TABLE "Tool" (
    "cod_tool" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "details" TEXT NOT NULL,

    CONSTRAINT "Tool_pkey" PRIMARY KEY ("cod_tool")
);

-- CreateTable
CREATE TABLE "ToolsRecipe" (
    "cod_tools_recipe" SERIAL NOT NULL,
    "cod_tool" INTEGER NOT NULL,
    "cod_recipe" INTEGER NOT NULL,
    "is_required" BOOLEAN NOT NULL,

    CONSTRAINT "ToolsRecipe_pkey" PRIMARY KEY ("cod_tools_recipe")
);

-- CreateTable
CREATE TABLE "Ingredient" (
    "cod_ingredient" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Ingredient_pkey" PRIMARY KEY ("cod_ingredient")
);

-- CreateTable
CREATE TABLE "IngredientsRecipe" (
    "cod_ingredient_recipe" SERIAL NOT NULL,
    "cod_ingredient" INTEGER NOT NULL,
    "cod_recipe" INTEGER NOT NULL,
    "is_required" BOOLEAN NOT NULL,
    "quatity" DOUBLE PRECISION NOT NULL,
    "cod_measurement_unit" INTEGER NOT NULL,

    CONSTRAINT "IngredientsRecipe_pkey" PRIMARY KEY ("cod_ingredient_recipe")
);

-- CreateTable
CREATE TABLE "MeasurementUnit" (
    "cod_measurement_unit" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "MeasurementUnit_pkey" PRIMARY KEY ("cod_measurement_unit")
);

-- CreateTable
CREATE TABLE "DifficultyLevel" (
    "cod_difficulty_level" SERIAL NOT NULL,
    "level" TEXT NOT NULL,

    CONSTRAINT "DifficultyLevel_pkey" PRIMARY KEY ("cod_difficulty_level")
);

-- CreateIndex
CREATE UNIQUE INDEX "Step_cod_depends_on_step_key" ON "Step"("cod_depends_on_step");

-- CreateIndex
CREATE UNIQUE INDEX "Step_cod_recipe_cod_depends_on_step_key" ON "Step"("cod_recipe", "cod_depends_on_step");

-- AddForeignKey
ALTER TABLE "Recipe" ADD CONSTRAINT "Recipe_cod_difficulty_level_fkey" FOREIGN KEY ("cod_difficulty_level") REFERENCES "DifficultyLevel"("cod_difficulty_level") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Step" ADD CONSTRAINT "Step_cod_recipe_fkey" FOREIGN KEY ("cod_recipe") REFERENCES "Recipe"("cod_recipe") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Step" ADD CONSTRAINT "Step_cod_depends_on_step_fkey" FOREIGN KEY ("cod_depends_on_step") REFERENCES "Step"("cod_step") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Step" ADD CONSTRAINT "Step_cod_technique_fkey" FOREIGN KEY ("cod_technique") REFERENCES "Technique"("cod_technique") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ToolsRecipe" ADD CONSTRAINT "ToolsRecipe_cod_recipe_fkey" FOREIGN KEY ("cod_recipe") REFERENCES "Recipe"("cod_recipe") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ToolsRecipe" ADD CONSTRAINT "ToolsRecipe_cod_tool_fkey" FOREIGN KEY ("cod_tool") REFERENCES "Tool"("cod_tool") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "IngredientsRecipe" ADD CONSTRAINT "IngredientsRecipe_cod_recipe_fkey" FOREIGN KEY ("cod_recipe") REFERENCES "Recipe"("cod_recipe") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "IngredientsRecipe" ADD CONSTRAINT "IngredientsRecipe_cod_ingredient_fkey" FOREIGN KEY ("cod_ingredient") REFERENCES "Ingredient"("cod_ingredient") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "IngredientsRecipe" ADD CONSTRAINT "IngredientsRecipe_cod_measurement_unit_fkey" FOREIGN KEY ("cod_measurement_unit") REFERENCES "MeasurementUnit"("cod_measurement_unit") ON DELETE RESTRICT ON UPDATE CASCADE;
