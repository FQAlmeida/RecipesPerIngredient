# Define here the models for your scraped items
#
# See documentation in:
# https://docs.scrapy.org/en/latest/topics/items.html

import scrapy
from dataclasses import dataclass


@dataclass
class IngredientsItem:
    name: str
    quantity: float
    unit: str


@dataclass
class IngredientList:
    category_name: str
    ingredientes: list[IngredientsItem]


@dataclass
class RecipeItem:
    name: str
    ingredients: list[IngredientList]
    prep_time: str
    difficulty: str
    serves: int
    steps: list[str]
