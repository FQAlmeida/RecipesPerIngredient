--
-- PostgreSQL database dump
--

-- Dumped from database version 14.3 (Debian 14.3-1.pgdg110+1)
-- Dumped by pg_dump version 14.2 (Debian 14.2-1.pgdg110+1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: public; Type: SCHEMA; Schema: -; Owner: postgress
--

CREATE SCHEMA public;


ALTER SCHEMA public OWNER TO postgress;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: DifficultyLevel; Type: TABLE; Schema: public; Owner: postgress
--

CREATE TABLE public."DifficultyLevel" (
    cod_difficulty_level integer NOT NULL,
    level text NOT NULL
);


ALTER TABLE public."DifficultyLevel" OWNER TO postgress;

--
-- Name: DifficultyLevel_cod_difficulty_level_seq; Type: SEQUENCE; Schema: public; Owner: postgress
--

CREATE SEQUENCE public."DifficultyLevel_cod_difficulty_level_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."DifficultyLevel_cod_difficulty_level_seq" OWNER TO postgress;

--
-- Name: DifficultyLevel_cod_difficulty_level_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgress
--

ALTER SEQUENCE public."DifficultyLevel_cod_difficulty_level_seq" OWNED BY public."DifficultyLevel".cod_difficulty_level;


--
-- Name: Ingredient; Type: TABLE; Schema: public; Owner: postgress
--

CREATE TABLE public."Ingredient" (
    cod_ingredient integer NOT NULL,
    name text NOT NULL
);


ALTER TABLE public."Ingredient" OWNER TO postgress;

--
-- Name: Ingredient_cod_ingredient_seq; Type: SEQUENCE; Schema: public; Owner: postgress
--

CREATE SEQUENCE public."Ingredient_cod_ingredient_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."Ingredient_cod_ingredient_seq" OWNER TO postgress;

--
-- Name: Ingredient_cod_ingredient_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgress
--

ALTER SEQUENCE public."Ingredient_cod_ingredient_seq" OWNED BY public."Ingredient".cod_ingredient;


--
-- Name: IngredientsRecipe; Type: TABLE; Schema: public; Owner: postgress
--

CREATE TABLE public."IngredientsRecipe" (
    cod_ingredient_recipe integer NOT NULL,
    cod_ingredient integer NOT NULL,
    cod_recipe integer NOT NULL,
    is_required boolean NOT NULL,
    quatity double precision NOT NULL,
    cod_measurement_unit integer NOT NULL
);


ALTER TABLE public."IngredientsRecipe" OWNER TO postgress;

--
-- Name: IngredientsRecipe_cod_ingredient_recipe_seq; Type: SEQUENCE; Schema: public; Owner: postgress
--

CREATE SEQUENCE public."IngredientsRecipe_cod_ingredient_recipe_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."IngredientsRecipe_cod_ingredient_recipe_seq" OWNER TO postgress;

--
-- Name: IngredientsRecipe_cod_ingredient_recipe_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgress
--

ALTER SEQUENCE public."IngredientsRecipe_cod_ingredient_recipe_seq" OWNED BY public."IngredientsRecipe".cod_ingredient_recipe;


--
-- Name: MeasurementUnit; Type: TABLE; Schema: public; Owner: postgress
--

CREATE TABLE public."MeasurementUnit" (
    cod_measurement_unit integer NOT NULL,
    name text NOT NULL
);


ALTER TABLE public."MeasurementUnit" OWNER TO postgress;

--
-- Name: MeasurementUnit_cod_measurement_unit_seq; Type: SEQUENCE; Schema: public; Owner: postgress
--

CREATE SEQUENCE public."MeasurementUnit_cod_measurement_unit_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."MeasurementUnit_cod_measurement_unit_seq" OWNER TO postgress;

--
-- Name: MeasurementUnit_cod_measurement_unit_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgress
--

ALTER SEQUENCE public."MeasurementUnit_cod_measurement_unit_seq" OWNED BY public."MeasurementUnit".cod_measurement_unit;


--
-- Name: Media; Type: TABLE; Schema: public; Owner: postgress
--

CREATE TABLE public."Media" (
    cod_media integer NOT NULL,
    media_uri text NOT NULL,
    cod_recipe integer NOT NULL
);


ALTER TABLE public."Media" OWNER TO postgress;

--
-- Name: Media_cod_media_seq; Type: SEQUENCE; Schema: public; Owner: postgress
--

CREATE SEQUENCE public."Media_cod_media_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."Media_cod_media_seq" OWNER TO postgress;

--
-- Name: Media_cod_media_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgress
--

ALTER SEQUENCE public."Media_cod_media_seq" OWNED BY public."Media".cod_media;


--
-- Name: Recipe; Type: TABLE; Schema: public; Owner: postgress
--

CREATE TABLE public."Recipe" (
    cod_recipe integer NOT NULL,
    name text NOT NULL,
    cod_difficulty_level integer NOT NULL,
    preparation_time text NOT NULL,
    cooking_time text,
    serves_adults integer NOT NULL
);


ALTER TABLE public."Recipe" OWNER TO postgress;

--
-- Name: Recipe_cod_recipe_seq; Type: SEQUENCE; Schema: public; Owner: postgress
--

CREATE SEQUENCE public."Recipe_cod_recipe_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."Recipe_cod_recipe_seq" OWNER TO postgress;

--
-- Name: Recipe_cod_recipe_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgress
--

ALTER SEQUENCE public."Recipe_cod_recipe_seq" OWNED BY public."Recipe".cod_recipe;


--
-- Name: Step; Type: TABLE; Schema: public; Owner: postgress
--

CREATE TABLE public."Step" (
    cod_step integer NOT NULL,
    cod_recipe integer NOT NULL,
    cod_depends_on_step integer,
    cod_technique integer,
    description text NOT NULL
);


ALTER TABLE public."Step" OWNER TO postgress;

--
-- Name: Step_cod_step_seq; Type: SEQUENCE; Schema: public; Owner: postgress
--

CREATE SEQUENCE public."Step_cod_step_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."Step_cod_step_seq" OWNER TO postgress;

--
-- Name: Step_cod_step_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgress
--

ALTER SEQUENCE public."Step_cod_step_seq" OWNED BY public."Step".cod_step;


--
-- Name: Technique; Type: TABLE; Schema: public; Owner: postgress
--

CREATE TABLE public."Technique" (
    cod_technique integer NOT NULL,
    name text NOT NULL,
    description text NOT NULL
);


ALTER TABLE public."Technique" OWNER TO postgress;

--
-- Name: Technique_cod_technique_seq; Type: SEQUENCE; Schema: public; Owner: postgress
--

CREATE SEQUENCE public."Technique_cod_technique_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."Technique_cod_technique_seq" OWNER TO postgress;

--
-- Name: Technique_cod_technique_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgress
--

ALTER SEQUENCE public."Technique_cod_technique_seq" OWNED BY public."Technique".cod_technique;


--
-- Name: Tool; Type: TABLE; Schema: public; Owner: postgress
--

CREATE TABLE public."Tool" (
    cod_tool integer NOT NULL,
    name text NOT NULL,
    details text NOT NULL
);


ALTER TABLE public."Tool" OWNER TO postgress;

--
-- Name: Tool_cod_tool_seq; Type: SEQUENCE; Schema: public; Owner: postgress
--

CREATE SEQUENCE public."Tool_cod_tool_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."Tool_cod_tool_seq" OWNER TO postgress;

--
-- Name: Tool_cod_tool_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgress
--

ALTER SEQUENCE public."Tool_cod_tool_seq" OWNED BY public."Tool".cod_tool;


--
-- Name: ToolsRecipe; Type: TABLE; Schema: public; Owner: postgress
--

CREATE TABLE public."ToolsRecipe" (
    cod_tools_recipe integer NOT NULL,
    cod_tool integer NOT NULL,
    cod_recipe integer NOT NULL,
    is_required boolean NOT NULL
);


ALTER TABLE public."ToolsRecipe" OWNER TO postgress;

--
-- Name: ToolsRecipe_cod_tools_recipe_seq; Type: SEQUENCE; Schema: public; Owner: postgress
--

CREATE SEQUENCE public."ToolsRecipe_cod_tools_recipe_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."ToolsRecipe_cod_tools_recipe_seq" OWNER TO postgress;

--
-- Name: ToolsRecipe_cod_tools_recipe_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgress
--

ALTER SEQUENCE public."ToolsRecipe_cod_tools_recipe_seq" OWNED BY public."ToolsRecipe".cod_tools_recipe;


--
-- Name: _prisma_migrations; Type: TABLE; Schema: public; Owner: postgress
--

CREATE TABLE public._prisma_migrations (
    id character varying(36) NOT NULL,
    checksum character varying(64) NOT NULL,
    finished_at timestamp with time zone,
    migration_name character varying(255) NOT NULL,
    logs text,
    rolled_back_at timestamp with time zone,
    started_at timestamp with time zone DEFAULT now() NOT NULL,
    applied_steps_count integer DEFAULT 0 NOT NULL
);


ALTER TABLE public._prisma_migrations OWNER TO postgress;

--
-- Name: DifficultyLevel cod_difficulty_level; Type: DEFAULT; Schema: public; Owner: postgress
--

ALTER TABLE ONLY public."DifficultyLevel" ALTER COLUMN cod_difficulty_level SET DEFAULT nextval('public."DifficultyLevel_cod_difficulty_level_seq"'::regclass);


--
-- Name: Ingredient cod_ingredient; Type: DEFAULT; Schema: public; Owner: postgress
--

ALTER TABLE ONLY public."Ingredient" ALTER COLUMN cod_ingredient SET DEFAULT nextval('public."Ingredient_cod_ingredient_seq"'::regclass);


--
-- Name: IngredientsRecipe cod_ingredient_recipe; Type: DEFAULT; Schema: public; Owner: postgress
--

ALTER TABLE ONLY public."IngredientsRecipe" ALTER COLUMN cod_ingredient_recipe SET DEFAULT nextval('public."IngredientsRecipe_cod_ingredient_recipe_seq"'::regclass);


--
-- Name: MeasurementUnit cod_measurement_unit; Type: DEFAULT; Schema: public; Owner: postgress
--

ALTER TABLE ONLY public."MeasurementUnit" ALTER COLUMN cod_measurement_unit SET DEFAULT nextval('public."MeasurementUnit_cod_measurement_unit_seq"'::regclass);


--
-- Name: Media cod_media; Type: DEFAULT; Schema: public; Owner: postgress
--

ALTER TABLE ONLY public."Media" ALTER COLUMN cod_media SET DEFAULT nextval('public."Media_cod_media_seq"'::regclass);


--
-- Name: Recipe cod_recipe; Type: DEFAULT; Schema: public; Owner: postgress
--

ALTER TABLE ONLY public."Recipe" ALTER COLUMN cod_recipe SET DEFAULT nextval('public."Recipe_cod_recipe_seq"'::regclass);


--
-- Name: Step cod_step; Type: DEFAULT; Schema: public; Owner: postgress
--

ALTER TABLE ONLY public."Step" ALTER COLUMN cod_step SET DEFAULT nextval('public."Step_cod_step_seq"'::regclass);


--
-- Name: Technique cod_technique; Type: DEFAULT; Schema: public; Owner: postgress
--

ALTER TABLE ONLY public."Technique" ALTER COLUMN cod_technique SET DEFAULT nextval('public."Technique_cod_technique_seq"'::regclass);


--
-- Name: Tool cod_tool; Type: DEFAULT; Schema: public; Owner: postgress
--

ALTER TABLE ONLY public."Tool" ALTER COLUMN cod_tool SET DEFAULT nextval('public."Tool_cod_tool_seq"'::regclass);


--
-- Name: ToolsRecipe cod_tools_recipe; Type: DEFAULT; Schema: public; Owner: postgress
--

ALTER TABLE ONLY public."ToolsRecipe" ALTER COLUMN cod_tools_recipe SET DEFAULT nextval('public."ToolsRecipe_cod_tools_recipe_seq"'::regclass);


--
-- Data for Name: DifficultyLevel; Type: TABLE DATA; Schema: public; Owner: postgress
--

COPY public."DifficultyLevel" (cod_difficulty_level, level) FROM stdin;
1	easy
\.


--
-- Data for Name: Ingredient; Type: TABLE DATA; Schema: public; Owner: postgress
--

COPY public."Ingredient" (cod_ingredient, name) FROM stdin;
3	cebola
4	ervilha
5	salmão
6	creme fresco
7	cebolinha
8	caldo de vegetais
1	macarrão
2	manteiga
9	azeite
10	salsão
11	cenoura
12	alho
13	pancetta
14	carne bovina
15	carne suína
16	leite
17	tomate
18	louro
19	alecrim
20	tomilho
21	orégano
22	caldo de carne
23	vinho
24	massa de lasanha
25	parmesão
26	cravo
27	farinha
28	noz moscada
29	pão
30	ovo
31	sal
33	muçarela
32	pimenta-do-reino 
\.


--
-- Data for Name: IngredientsRecipe; Type: TABLE DATA; Schema: public; Owner: postgress
--

COPY public."IngredientsRecipe" (cod_ingredient_recipe, cod_ingredient, cod_recipe, is_required, quatity, cod_measurement_unit) FROM stdin;
1	1	1	t	240	1
2	2	1	t	1	5
3	3	1	t	1	2
4	4	1	t	140	1
5	5	1	t	2	2
6	6	1	t	140	1
7	8	1	t	0.5	3
8	7	1	f	1	4
9	9	2	t	3	9
10	3	2	t	1	2
11	10	2	t	2	2
12	11	2	t	1	2
13	12	2	t	3	2
14	13	2	t	140	1
15	14	2	t	500	1
16	15	2	t	500	1
17	16	2	t	200	8
18	17	2	t	800	1
19	18	2	t	2	7
20	19	2	t	1	7
21	20	2	f	1	7
22	21	2	t	2	9
23	22	2	t	2	3
24	23	2	f	500	8
25	24	2	t	400	1
26	25	2	t	50	1
27	16	2	t	1.5	6
28	3	2	f	1	2
29	19	2	t	3	2
30	26	2	t	3	2
31	27	2	t	100	1
32	28	2	f	1	4
33	29	3	t	1	2
34	30	3	t	1	2
35	33	3	t	2	10
36	31	3	t	1	4
37	32	3	f	1	4
\.


--
-- Data for Name: MeasurementUnit; Type: TABLE DATA; Schema: public; Owner: postgress
--

COPY public."MeasurementUnit" (cod_measurement_unit, name) FROM stdin;
1	grama
2	unidade
3	cubo
4	a gosto
5	pedaço
6	litro
7	folha
8	mililitro
9	colher de chá
10	fatia
\.


--
-- Data for Name: Media; Type: TABLE DATA; Schema: public; Owner: postgress
--

COPY public."Media" (cod_media, media_uri, cod_recipe) FROM stdin;
1	https://st2.depositphotos.com/5987562/8953/i/950/depositphotos_89537068-stock-photo-pasta-casserole-with-salmon-and.jpg	1
2	https://images.immediate.co.uk/production/volatile/sites/30/2020/08/recipe-image-legacy-id-1273588_8-8139dd6.jpg	2
3	https://t1.rg.ltmcdn.com/pt/posts/0/5/8/pao_com_ovo_na_airfryer_10850_600.jpg	3
\.


--
-- Data for Name: Recipe; Type: TABLE DATA; Schema: public; Owner: postgress
--

COPY public."Recipe" (cod_recipe, name, cod_difficulty_level, preparation_time, cooking_time, serves_adults) FROM stdin;
1	Macarrão com Salmão e Ervilhas	1	5m	12m	2
2	Lasanha	1	PT60M	PT190M	8
3	Receita de Pão com ovo na Airfryer	1	PT1M	PT10M	1
\.


--
-- Data for Name: Step; Type: TABLE DATA; Schema: public; Owner: postgress
--

COPY public."Step" (cod_step, cod_recipe, cod_depends_on_step, cod_technique, description) FROM stdin;
1	1	\N	\N	Ferva bastante água com sal em uma panela. Após a fervura, adicione o macarrão. Deixe cozinhar de acordo com as instruções na embalagem.
2	1	1	\N	Enquanto isso, derreta a manteiga em uma frigideira. Adicione a cebola e deixe cozinhar por 5 minutos.
3	1	2	\N	Adicione as ervilhas, o salmão, o creme, 50ml de água e o caldo de vegetais à frigideira. 
4	1	3	\N	Cozinhe por 3 à 4 minutos. Misture a cebolinha. Então adicione o macarrão. E está pronto para servir. 
6	2	\N	\N	First, make the béchamel sauce. Put the milk, onion, bay leaves and cloves into a large saucepan and bring very gently just up to the boil. Turn off the heat and set aside for 1 hr to infuse.
7	2	6	\N	For the meat sauce, put the oil, celery, onion, carrot, garlic and pancetta in another large saucepan. Gently cook together until the veg is soft but not coloured.
8	2	7	\N	Tip in the beef and pork mince, the milk and chopped tomatoes. Using a wooden spoon, stir together and break up and mash the lumps of mince against the sides of the pan. When the mince is mostly broken down, stir in all the herbs, the stock cubes and the red wine, and bring to a simmer. Cover and cook for 1 hr, stirring occasionally to stop the bottom catching.
9	2	8	\N	Uncover and gently simmer for another 30 mins-1 hr until the meat is tender and saucy. Taste and season.
10	2	9	\N	To finish the béchamel sauce, strain the milk through a fine sieve into one or two jugs. Melt the butter in the same pan then, using a wooden spoon, mix in the flour and cook for 2 mins.
11	2	10	\N	Stir in the strained milk, a little at a time – the mix will thicken at first to a doughy paste, but keep going, adding milk gradually to avoid lumps. Bring to a gentle simmer, stirring constantly (if you have lumps, give it a quick whisk). Gently bubble for a few minutes until thickened. Season with salt, pepper and a good grating of nutmeg.
12	2	11	\N	Heat the oven to 180C/160C fan/gas 4. Spread a spoonful of the meat sauce over the base of a roughly 3.5-litre baking dish. Cover with a single layer of dried pasta sheets, snapping them to fit if needed, then top with a quarter of the béchamel. Spoon over a third of the meat sauce and scatter over a little of the parmesan.
13	2	12	\N	Repeat the layers – pasta, béchamel, meat and parmesan – two more times to use all the meat sauce. Add a final layer of pasta, the last of the béchamel and remaining parmesan. Sit the dish on a baking tray to catch spills and bake for 1 hr until bubbling, browned and crisp on top.
14	3	\N	\N	Comece cortando o pão francês ao meio, separando em duas bandas.
15	3	14	\N	Com auxílio de uma colher de sopa, pressione o miolo para que ele faça um fundo para acomodar o ovo.
16	3	15	\N	Com cuidado para não vazar dos lados, coloque o ovo no pão e adicione o sal e a pimenta-do-reino.
17	3	16	\N	Coloque as fatias de queijo e leve na Airfryer, a 180 graus, por 9 minutos. Dica: nesse tempo, a gema ficará mole. Caso queira ela durinha, deixe por mais 5 minutos.
18	3	17	\N	Retire seu pão com ovo na Airfryer, prepare a mesa e aproveite!
\.


--
-- Data for Name: Technique; Type: TABLE DATA; Schema: public; Owner: postgress
--

COPY public."Technique" (cod_technique, name, description) FROM stdin;
\.


--
-- Data for Name: Tool; Type: TABLE DATA; Schema: public; Owner: postgress
--

COPY public."Tool" (cod_tool, name, details) FROM stdin;
1	panela	uma panela
2	frigideira	uma frigideira
3	colher de pau	uma colher de pau
4	colher	uma colher
5	air fryer	uma air fryer
\.


--
-- Data for Name: ToolsRecipe; Type: TABLE DATA; Schema: public; Owner: postgress
--

COPY public."ToolsRecipe" (cod_tools_recipe, cod_tool, cod_recipe, is_required) FROM stdin;
1	1	1	t
2	2	1	t
3	1	2	t
4	3	2	t
5	4	3	t
6	5	3	t
\.


--
-- Data for Name: _prisma_migrations; Type: TABLE DATA; Schema: public; Owner: postgress
--

COPY public._prisma_migrations (id, checksum, finished_at, migration_name, logs, rolled_back_at, started_at, applied_steps_count) FROM stdin;
86899c0c-07e8-49aa-93fe-b5b33828d330	f7420c58f846edfd80dcfbc04fc5fc9bb836120246a841f8b6297ffc0b11486b	2022-07-05 21:24:34.808783+00	20220705212051_	\N	\N	2022-07-05 21:24:33.099163+00	1
1cecafd4-f020-4cfa-b904-b975b14a91b5	e71bb75c61007bf163dd8051a3d9bc02cbda9620e2c351145c91de91ee30c840	2022-07-08 23:04:00.686487+00	20220708230359_media	\N	\N	2022-07-08 23:04:00.001715+00	1
\.


--
-- Name: DifficultyLevel_cod_difficulty_level_seq; Type: SEQUENCE SET; Schema: public; Owner: postgress
--

SELECT pg_catalog.setval('public."DifficultyLevel_cod_difficulty_level_seq"', 1, false);


--
-- Name: Ingredient_cod_ingredient_seq; Type: SEQUENCE SET; Schema: public; Owner: postgress
--

SELECT pg_catalog.setval('public."Ingredient_cod_ingredient_seq"', 3, true);


--
-- Name: IngredientsRecipe_cod_ingredient_recipe_seq; Type: SEQUENCE SET; Schema: public; Owner: postgress
--

SELECT pg_catalog.setval('public."IngredientsRecipe_cod_ingredient_recipe_seq"', 1, true);


--
-- Name: MeasurementUnit_cod_measurement_unit_seq; Type: SEQUENCE SET; Schema: public; Owner: postgress
--

SELECT pg_catalog.setval('public."MeasurementUnit_cod_measurement_unit_seq"', 1, true);


--
-- Name: Media_cod_media_seq; Type: SEQUENCE SET; Schema: public; Owner: postgress
--

SELECT pg_catalog.setval('public."Media_cod_media_seq"', 2, true);


--
-- Name: Recipe_cod_recipe_seq; Type: SEQUENCE SET; Schema: public; Owner: postgress
--

SELECT pg_catalog.setval('public."Recipe_cod_recipe_seq"', 2, true);


--
-- Name: Step_cod_step_seq; Type: SEQUENCE SET; Schema: public; Owner: postgress
--

SELECT pg_catalog.setval('public."Step_cod_step_seq"', 2, true);


--
-- Name: Technique_cod_technique_seq; Type: SEQUENCE SET; Schema: public; Owner: postgress
--

SELECT pg_catalog.setval('public."Technique_cod_technique_seq"', 1, false);


--
-- Name: Tool_cod_tool_seq; Type: SEQUENCE SET; Schema: public; Owner: postgress
--

SELECT pg_catalog.setval('public."Tool_cod_tool_seq"', 1, true);


--
-- Name: ToolsRecipe_cod_tools_recipe_seq; Type: SEQUENCE SET; Schema: public; Owner: postgress
--

SELECT pg_catalog.setval('public."ToolsRecipe_cod_tools_recipe_seq"', 1, false);


--
-- Name: DifficultyLevel DifficultyLevel_pkey; Type: CONSTRAINT; Schema: public; Owner: postgress
--

ALTER TABLE ONLY public."DifficultyLevel"
    ADD CONSTRAINT "DifficultyLevel_pkey" PRIMARY KEY (cod_difficulty_level);


--
-- Name: Ingredient Ingredient_pkey; Type: CONSTRAINT; Schema: public; Owner: postgress
--

ALTER TABLE ONLY public."Ingredient"
    ADD CONSTRAINT "Ingredient_pkey" PRIMARY KEY (cod_ingredient);


--
-- Name: IngredientsRecipe IngredientsRecipe_pkey; Type: CONSTRAINT; Schema: public; Owner: postgress
--

ALTER TABLE ONLY public."IngredientsRecipe"
    ADD CONSTRAINT "IngredientsRecipe_pkey" PRIMARY KEY (cod_ingredient_recipe);


--
-- Name: MeasurementUnit MeasurementUnit_pkey; Type: CONSTRAINT; Schema: public; Owner: postgress
--

ALTER TABLE ONLY public."MeasurementUnit"
    ADD CONSTRAINT "MeasurementUnit_pkey" PRIMARY KEY (cod_measurement_unit);


--
-- Name: Media Media_pkey; Type: CONSTRAINT; Schema: public; Owner: postgress
--

ALTER TABLE ONLY public."Media"
    ADD CONSTRAINT "Media_pkey" PRIMARY KEY (cod_media);


--
-- Name: Recipe Recipe_pkey; Type: CONSTRAINT; Schema: public; Owner: postgress
--

ALTER TABLE ONLY public."Recipe"
    ADD CONSTRAINT "Recipe_pkey" PRIMARY KEY (cod_recipe);


--
-- Name: Step Step_pkey; Type: CONSTRAINT; Schema: public; Owner: postgress
--

ALTER TABLE ONLY public."Step"
    ADD CONSTRAINT "Step_pkey" PRIMARY KEY (cod_step);


--
-- Name: Technique Technique_pkey; Type: CONSTRAINT; Schema: public; Owner: postgress
--

ALTER TABLE ONLY public."Technique"
    ADD CONSTRAINT "Technique_pkey" PRIMARY KEY (cod_technique);


--
-- Name: Tool Tool_pkey; Type: CONSTRAINT; Schema: public; Owner: postgress
--

ALTER TABLE ONLY public."Tool"
    ADD CONSTRAINT "Tool_pkey" PRIMARY KEY (cod_tool);


--
-- Name: ToolsRecipe ToolsRecipe_pkey; Type: CONSTRAINT; Schema: public; Owner: postgress
--

ALTER TABLE ONLY public."ToolsRecipe"
    ADD CONSTRAINT "ToolsRecipe_pkey" PRIMARY KEY (cod_tools_recipe);


--
-- Name: _prisma_migrations _prisma_migrations_pkey; Type: CONSTRAINT; Schema: public; Owner: postgress
--

ALTER TABLE ONLY public._prisma_migrations
    ADD CONSTRAINT _prisma_migrations_pkey PRIMARY KEY (id);


--
-- Name: Step_cod_depends_on_step_key; Type: INDEX; Schema: public; Owner: postgress
--

CREATE UNIQUE INDEX "Step_cod_depends_on_step_key" ON public."Step" USING btree (cod_depends_on_step);


--
-- Name: Step_cod_recipe_cod_depends_on_step_key; Type: INDEX; Schema: public; Owner: postgress
--

CREATE UNIQUE INDEX "Step_cod_recipe_cod_depends_on_step_key" ON public."Step" USING btree (cod_recipe, cod_depends_on_step);


--
-- Name: IngredientsRecipe IngredientsRecipe_cod_ingredient_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgress
--

ALTER TABLE ONLY public."IngredientsRecipe"
    ADD CONSTRAINT "IngredientsRecipe_cod_ingredient_fkey" FOREIGN KEY (cod_ingredient) REFERENCES public."Ingredient"(cod_ingredient) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- Name: IngredientsRecipe IngredientsRecipe_cod_measurement_unit_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgress
--

ALTER TABLE ONLY public."IngredientsRecipe"
    ADD CONSTRAINT "IngredientsRecipe_cod_measurement_unit_fkey" FOREIGN KEY (cod_measurement_unit) REFERENCES public."MeasurementUnit"(cod_measurement_unit) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- Name: IngredientsRecipe IngredientsRecipe_cod_recipe_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgress
--

ALTER TABLE ONLY public."IngredientsRecipe"
    ADD CONSTRAINT "IngredientsRecipe_cod_recipe_fkey" FOREIGN KEY (cod_recipe) REFERENCES public."Recipe"(cod_recipe) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- Name: Media Media_cod_recipe_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgress
--

ALTER TABLE ONLY public."Media"
    ADD CONSTRAINT "Media_cod_recipe_fkey" FOREIGN KEY (cod_recipe) REFERENCES public."Recipe"(cod_recipe) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- Name: Recipe Recipe_cod_difficulty_level_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgress
--

ALTER TABLE ONLY public."Recipe"
    ADD CONSTRAINT "Recipe_cod_difficulty_level_fkey" FOREIGN KEY (cod_difficulty_level) REFERENCES public."DifficultyLevel"(cod_difficulty_level) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- Name: Step Step_cod_depends_on_step_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgress
--

ALTER TABLE ONLY public."Step"
    ADD CONSTRAINT "Step_cod_depends_on_step_fkey" FOREIGN KEY (cod_depends_on_step) REFERENCES public."Step"(cod_step) ON UPDATE CASCADE ON DELETE SET NULL;


--
-- Name: Step Step_cod_recipe_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgress
--

ALTER TABLE ONLY public."Step"
    ADD CONSTRAINT "Step_cod_recipe_fkey" FOREIGN KEY (cod_recipe) REFERENCES public."Recipe"(cod_recipe) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- Name: Step Step_cod_technique_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgress
--

ALTER TABLE ONLY public."Step"
    ADD CONSTRAINT "Step_cod_technique_fkey" FOREIGN KEY (cod_technique) REFERENCES public."Technique"(cod_technique) ON UPDATE CASCADE ON DELETE SET NULL;


--
-- Name: ToolsRecipe ToolsRecipe_cod_recipe_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgress
--

ALTER TABLE ONLY public."ToolsRecipe"
    ADD CONSTRAINT "ToolsRecipe_cod_recipe_fkey" FOREIGN KEY (cod_recipe) REFERENCES public."Recipe"(cod_recipe) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- Name: ToolsRecipe ToolsRecipe_cod_tool_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgress
--

ALTER TABLE ONLY public."ToolsRecipe"
    ADD CONSTRAINT "ToolsRecipe_cod_tool_fkey" FOREIGN KEY (cod_tool) REFERENCES public."Tool"(cod_tool) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- PostgreSQL database dump complete
--

