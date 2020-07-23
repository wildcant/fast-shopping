import os
import pandas as pd

url = './amazon_ecommerce_sample.csv'
df = pd.read_csv(url)
df['price'] = df['price'].str.strip("£")
df = df.dropna(subset=["uniq_id", "product_name", "price", "amazon_category_and_sub_category", "description"])
products_data = df.loc[0:118, ["uniq_id", "product_name", "price", "amazon_category_and_sub_category", "description"]]
products_data = products_data.rename(
    columns={"uniq_id": "id_product", "product_name": "name", "amazon_category_and_sub_category": "category"})
products_data.to_csv('products_data.csv', index=False)
