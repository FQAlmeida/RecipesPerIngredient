import logging
import re
import scrapy
from scrapy import Request
from bs4 import BeautifulSoup
from ..items import IngredientList, IngredientsItem, RecipeItem


class ReceitasSpider(scrapy.Spider):
    name = 'receitas'
    allowed_domains = ['www.tudoreceitas.com']
    start_urls = ['https://www.tudoreceitas.com/']

    def parse(self, response):
        body_data = response.body
        body = BeautifulSoup(body_data, 'html.parser')
        menus = body.find(class_="lista_menu")
        for link in menus.find_all("a"):
            yield Request(url=link.get("href"), callback=self.parse_category_page)

    def parse_category_page(self, response):
        body_data = response.body
        body = BeautifulSoup(body_data, 'html.parser')
        recipes_links = body.find_all(class_="titulo", recursive=True)
        # if not last page, return next one
        next_page = body.find(class_="next")
        if next_page:
            link = next_page.get("href")
            if link:
                yield Request(url=link, callback=self.parse_category_page)
        for recipe_link in recipes_links:
            link = recipe_link.get("href")
            if link:
                yield Request(url=link, callback=self.parse_recipe)

    def parse_recipe(self, response):
        body_data = response.body
        body = BeautifulSoup(body_data, 'html.parser')

        name = body.find(class_="titulo--articulo", recursive=True)
        if not name:
            return
        name = name.string

        prep_time_str = body.find(class_="duracion", recursive=True)
        prep_time_match = re.search(
            "[0-9]+", prep_time_str.string if prep_time_str else "")

        prep_time = prep_time_match.group() if prep_time_match else -1

        difficulty = body.find(class_="dificultad", recursive=True)
        if not difficulty:
            return
        difficulty = " ".join(difficulty.string.split(" ")[1:])

        serves = body.find(class_="comensales", recursive=True)
        if not serves:
            return
        serves_re = re.search("[0-9]+", serves.string)
        serves = 0
        if serves_re:
            serves = int(serves_re.group())

        ingredients_step: list[IngredientList] = list()

        ingredients_data = body.find(
            class_="ingredientes", recursive=True).find("ul")

        ingredients_list: list[IngredientsItem] = list()
        cat_name = "no-cat"
        for step_ingredient_data in ingredients_data.findAll("li"):
            if step_ingredient_data.find("label"):
                ingredient_data: str = step_ingredient_data.find(
                    "label").string.strip()
                # ingredient
                qtd = 1
                if qtd_aux := re.search("[0-9]+", ingredient_data):
                    qtd = int(qtd_aux.group())
                unit = "unknown"
                if unit_aux := re.search("(xícara|colher|grama|talo|dente)(s)? (de)?", ingredient_data):
                    unit = unit_aux.group(1)
                ingredients_list.append(
                    IngredientsItem(
                        name=ingredient_data,
                        quantity=qtd,
                        unit=unit
                    )
                )
            else:
                # category (Massa | Cobertura | Recheio | etc)
                aux_name = step_ingredient_data.string.strip().replace(":", "")
                if cat_name != "no-cat":
                    ingredients = IngredientList(aux_name, ingredients_list)
                    ingredients_step.append(ingredients)
                    ingredients_list.clear()
                cat_name = aux_name

        ingredients = IngredientList(cat_name, ingredients_list)
        ingredients_step.append(ingredients)

        steps: list[str] = list()

        steps_data = body.findAll(
            id=re.compile("anchor_"), recursive=True)

        for step_data in steps_data:
            if step_ps := step_data.findAll("p"):
                step = []
                for step_p in step_ps:
                    if not step_p.string:
                        return
                    step.append(step_p.string)
                steps.append("\n".join(step))

        recipe_item = RecipeItem(
            name, ingredients_step, prep_time, difficulty, serves, steps)
        return recipe_item
