-- Adminer 4.8.1 PostgreSQL 14.3 (Debian 14.3-1.pgdg110+1) dump

INSERT INTO "DifficultyLevel" ("cod_difficulty_level", "level") VALUES
(1,	'easy');

INSERT INTO "Ingredient" ("cod_ingredient", "name") VALUES
(3,	'cebola'),
(4,	'ervilha'),
(5,	'salmão'),
(6,	'creme fresco'),
(7,	'cebolinha'),
(8,	'caldo de vegetais'),
(1,	'macarrão'),
(2,	'manteiga'),
(9,	'azeite'),
(10,	'salsão'),
(11,	'cenoura'),
(12,	'alho'),
(13,	'pancetta'),
(14,	'carne bovina'),
(15,	'carne suína'),
(16,	'leite'),
(17,	'tomate'),
(18,	'louro'),
(19,	'alecrim'),
(20,	'tomilho'),
(21,	'orégano'),
(22,	'caldo de carne'),
(23,	'vinho'),
(24,	'massa de lasanha'),
(25,	'parmesão'),
(26,	'cravo'),
(27,	'farinha'),
(28,	'noz moscada'),
(29,	'pão'),
(30,	'ovo'),
(31,	'sal'),
(33,	'muçarela'),
(32,	'pimenta-do-reino');

INSERT INTO "IngredientsRecipe" ("cod_ingredient_recipe", "cod_ingredient", "cod_recipe", "is_required", "quatity", "cod_measurement_unit") VALUES
(1,	1,	1,	'1',	240,	1),
(2,	2,	1,	'1',	1,	5),
(3,	3,	1,	'1',	1,	2),
(4,	4,	1,	'1',	140,	1),
(5,	5,	1,	'1',	2,	2),
(6,	6,	1,	'1',	140,	1),
(7,	8,	1,	'1',	0.5,	3),
(8,	7,	1,	'0',	1,	4),
(9,	9,	2,	'1',	3,	9),
(10,	3,	2,	'1',	1,	2),
(11,	10,	2,	'1',	2,	2),
(12,	11,	2,	'1',	1,	2),
(13,	12,	2,	'1',	3,	2),
(14,	13,	2,	'1',	140,	1),
(15,	14,	2,	'1',	500,	1),
(16,	15,	2,	'1',	500,	1),
(17,	16,	2,	'1',	200,	8),
(18,	17,	2,	'1',	800,	1),
(19,	18,	2,	'1',	2,	7),
(20,	19,	2,	'1',	1,	7),
(21,	20,	2,	'0',	1,	7),
(22,	21,	2,	'1',	2,	9),
(23,	22,	2,	'1',	2,	3),
(24,	23,	2,	'0',	500,	8),
(25,	24,	2,	'1',	400,	1),
(26,	25,	2,	'1',	50,	1),
(27,	16,	2,	'1',	1.5,	6),
(28,	3,	2,	'0',	1,	2),
(29,	19,	2,	'1',	3,	2),
(30,	26,	2,	'1',	3,	2),
(31,	27,	2,	'1',	100,	1),
(32,	28,	2,	'0',	1,	4),
(33,	29,	3,	'1',	1,	2),
(34,	30,	3,	'1',	1,	2),
(35,	33,	3,	'1',	2,	10),
(36,	31,	3,	'1',	1,	4),
(37,	32,	3,	'0',	1,	4);

INSERT INTO "MeasurementUnit" ("cod_measurement_unit", "name") VALUES
(1,	'grama'),
(2,	'unidade'),
(3,	'cubo'),
(4,	'a gosto'),
(5,	'pedaço'),
(6,	'litro'),
(7,	'folha'),
(8,	'mililitro'),
(9,	'colher de chá'),
(10,	'fatia');

INSERT INTO "Media" ("cod_media", "media_uri", "cod_recipe") VALUES
(1,	'https://st2.depositphotos.com/5987562/8953/i/950/depositphotos_89537068-stock-photo-pasta-casserole-with-salmon-and.jpg',	1),
(2,	'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/recipe-image-legacy-id-1273588_8-8139dd6.jpg',	2),
(3,	'https://t1.rg.ltmcdn.com/pt/posts/0/5/8/pao_com_ovo_na_airfryer_10850_600.jpg',	3);

INSERT INTO "Recipe" ("cod_recipe", "name", "cod_difficulty_level", "preparation_time", "cooking_time", "serves_adults") VALUES
(1,	'Macarrão com Salmão e Ervilhas',	1,	'5m',	'12m',	2),
(2,	'Lasanha',	1,	'PT60M',	'PT190M',	8),
(3,	'Receita de Pão com ovo na Airfryer',	1,	'PT1M',	'PT10M',	1);

INSERT INTO "Step" ("cod_step", "cod_recipe", "cod_depends_on_step", "cod_technique", "description") VALUES
(1,	1,	NULL,	NULL,	'Ferva bastante água com sal em uma panela. Após a fervura, adicione o macarrão. Deixe cozinhar de acordo com as instruções na embalagem.'),
(2,	1,	1,	NULL,	'Enquanto isso, derreta a manteiga em uma frigideira. Adicione a cebola e deixe cozinhar por 5 minutos.'),
(3,	1,	2,	NULL,	'Adicione as ervilhas, o salmão, o creme, 50ml de água e o caldo de vegetais à frigideira. '),
(4,	1,	3,	NULL,	'Cozinhe por 3 à 4 minutos. Misture a cebolinha. Então adicione o macarrão. E está pronto para servir. '),
(6,	2,	NULL,	NULL,	'First, make the béchamel sauce. Put the milk, onion, bay leaves and cloves into a large saucepan and bring very gently just up to the boil. Turn off the heat and set aside for 1 hr to infuse.'),
(7,	2,	6,	NULL,	'For the meat sauce, put the oil, celery, onion, carrot, garlic and pancetta in another large saucepan. Gently cook together until the veg is soft but not coloured.'),
(8,	2,	7,	NULL,	'Tip in the beef and pork mince, the milk and chopped tomatoes. Using a wooden spoon, stir together and break up and mash the lumps of mince against the sides of the pan. When the mince is mostly broken down, stir in all the herbs, the stock cubes and the red wine, and bring to a simmer. Cover and cook for 1 hr, stirring occasionally to stop the bottom catching.'),
(9,	2,	8,	NULL,	'Uncover and gently simmer for another 30 mins-1 hr until the meat is tender and saucy. Taste and season.'),
(10,	2,	9,	NULL,	'To finish the béchamel sauce, strain the milk through a fine sieve into one or two jugs. Melt the butter in the same pan then, using a wooden spoon, mix in the flour and cook for 2 mins.'),
(11,	2,	10,	NULL,	'Stir in the strained milk, a little at a time – the mix will thicken at first to a doughy paste, but keep going, adding milk gradually to avoid lumps. Bring to a gentle simmer, stirring constantly (if you have lumps, give it a quick whisk). Gently bubble for a few minutes until thickened. Season with salt, pepper and a good grating of nutmeg.'),
(12,	2,	11,	NULL,	'Heat the oven to 180C/160C fan/gas 4. Spread a spoonful of the meat sauce over the base of a roughly 3.5-litre baking dish. Cover with a single layer of dried pasta sheets, snapping them to fit if needed, then top with a quarter of the béchamel. Spoon over a third of the meat sauce and scatter over a little of the parmesan.'),
(13,	2,	12,	NULL,	'Repeat the layers – pasta, béchamel, meat and parmesan – two more times to use all the meat sauce. Add a final layer of pasta, the last of the béchamel and remaining parmesan. Sit the dish on a baking tray to catch spills and bake for 1 hr until bubbling, browned and crisp on top.'),
(14,	3,	NULL,	NULL,	'Comece cortando o pão francês ao meio, separando em duas bandas.'),
(15,	3,	14,	NULL,	'Com auxílio de uma colher de sopa, pressione o miolo para que ele faça um fundo para acomodar o ovo.'),
(16,	3,	15,	NULL,	'Com cuidado para não vazar dos lados, coloque o ovo no pão e adicione o sal e a pimenta-do-reino.'),
(17,	3,	16,	NULL,	'Coloque as fatias de queijo e leve na Airfryer, a 180 graus, por 9 minutos. Dica: nesse tempo, a gema ficará mole. Caso queira ela durinha, deixe por mais 5 minutos.'),
(18,	3,	17,	NULL,	'Retire seu pão com ovo na Airfryer, prepare a mesa e aproveite!');


INSERT INTO "Tool" ("cod_tool", "name", "details") VALUES
(1,	'panela',	'uma panela'),
(2,	'frigideira',	'uma frigideira'),
(3,	'colher de pau',	'uma colher de pau'),
(4,	'colher',	'uma colher'),
(5,	'air fryer',	'uma air fryer');

INSERT INTO "ToolsRecipe" ("cod_tools_recipe", "cod_tool", "cod_recipe", "is_required") VALUES
(1,	1,	1,	'1'),
(2,	2,	1,	'1'),
(3,	1,	2,	'1'),
(4,	3,	2,	'1'),
(5,	4,	3,	'1'),
(6,	5,	3,	'1');

INSERT INTO "_prisma_migrations" ("id", "checksum", "finished_at", "migration_name", "logs", "rolled_back_at", "started_at", "applied_steps_count") VALUES
('86899c0c-07e8-49aa-93fe-b5b33828d330',	'f7420c58f846edfd80dcfbc04fc5fc9bb836120246a841f8b6297ffc0b11486b',	'2022-07-05 21:24:34.808783+00',	'20220705212051_',	NULL,	NULL,	'2022-07-05 21:24:33.099163+00',	1),
('1cecafd4-f020-4cfa-b904-b975b14a91b5',	'e71bb75c61007bf163dd8051a3d9bc02cbda9620e2c351145c91de91ee30c840',	'2022-07-08 23:04:00.686487+00',	'20220708230359_media',	NULL,	NULL,	'2022-07-08 23:04:00.001715+00',	1);

ALTER TABLE ONLY "public"."IngredientsRecipe" ADD CONSTRAINT "IngredientsRecipe_cod_ingredient_fkey" FOREIGN KEY (cod_ingredient) REFERENCES "Ingredient"(cod_ingredient) ON UPDATE CASCADE ON DELETE RESTRICT NOT DEFERRABLE;
ALTER TABLE ONLY "public"."IngredientsRecipe" ADD CONSTRAINT "IngredientsRecipe_cod_measurement_unit_fkey" FOREIGN KEY (cod_measurement_unit) REFERENCES "MeasurementUnit"(cod_measurement_unit) ON UPDATE CASCADE ON DELETE RESTRICT NOT DEFERRABLE;
ALTER TABLE ONLY "public"."IngredientsRecipe" ADD CONSTRAINT "IngredientsRecipe_cod_recipe_fkey" FOREIGN KEY (cod_recipe) REFERENCES "Recipe"(cod_recipe) ON UPDATE CASCADE ON DELETE RESTRICT NOT DEFERRABLE;

ALTER TABLE ONLY "public"."Media" ADD CONSTRAINT "Media_cod_recipe_fkey" FOREIGN KEY (cod_recipe) REFERENCES "Recipe"(cod_recipe) ON UPDATE CASCADE ON DELETE RESTRICT NOT DEFERRABLE;

ALTER TABLE ONLY "public"."Recipe" ADD CONSTRAINT "Recipe_cod_difficulty_level_fkey" FOREIGN KEY (cod_difficulty_level) REFERENCES "DifficultyLevel"(cod_difficulty_level) ON UPDATE CASCADE ON DELETE RESTRICT NOT DEFERRABLE;

ALTER TABLE ONLY "public"."Step" ADD CONSTRAINT "Step_cod_depends_on_step_fkey" FOREIGN KEY (cod_depends_on_step) REFERENCES "Step"(cod_step) ON UPDATE CASCADE ON DELETE SET NULL NOT DEFERRABLE;
ALTER TABLE ONLY "public"."Step" ADD CONSTRAINT "Step_cod_recipe_fkey" FOREIGN KEY (cod_recipe) REFERENCES "Recipe"(cod_recipe) ON UPDATE CASCADE ON DELETE RESTRICT NOT DEFERRABLE;
ALTER TABLE ONLY "public"."Step" ADD CONSTRAINT "Step_cod_technique_fkey" FOREIGN KEY (cod_technique) REFERENCES "Technique"(cod_technique) ON UPDATE CASCADE ON DELETE SET NULL NOT DEFERRABLE;

ALTER TABLE ONLY "public"."ToolsRecipe" ADD CONSTRAINT "ToolsRecipe_cod_recipe_fkey" FOREIGN KEY (cod_recipe) REFERENCES "Recipe"(cod_recipe) ON UPDATE CASCADE ON DELETE RESTRICT NOT DEFERRABLE;
ALTER TABLE ONLY "public"."ToolsRecipe" ADD CONSTRAINT "ToolsRecipe_cod_tool_fkey" FOREIGN KEY (cod_tool) REFERENCES "Tool"(cod_tool) ON UPDATE CASCADE ON DELETE RESTRICT NOT DEFERRABLE;

-- 2022-07-27 01:02:35.825628+00
