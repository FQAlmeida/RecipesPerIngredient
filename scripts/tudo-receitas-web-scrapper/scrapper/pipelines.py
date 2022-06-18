# Define your item pipelines here
#
# Don't forget to add your pipeline to the ITEM_PIPELINES setting
# See: https://docs.scrapy.org/en/latest/topics/item-pipeline.html


# useful for handling different item types with a single interface
import json
from itemadapter import ItemAdapter


class ScrapperPipeline:
    recipes = list()

    def open_spider(self, spider):
        pass

    def close_spider(self, spider):
        with open("data/recipes.json", "w") as json_file:
            json.dump(self.recipes, json_file, ensure_ascii=False)

    def process_item(self, item, spider):
        self.recipes.append(ItemAdapter(item).asdict())
        return item
