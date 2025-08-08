import os
import time
import csv
import json
import requests
from urllib.parse import urlparse, parse_qs, urlunparse
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from webdriver_manager.chrome import ChromeDriverManager

# Config
BASE_URL = "https://www.gzeromedia.com/u/ariwinkleman"
OUTPUT_DIR = "images"
MAX_CLICKS = 31
WAIT_TIME = 3

# Ensure output dir
os.makedirs(OUTPUT_DIR, exist_ok=True)

# Setup Selenium
chrome_options = Options()
chrome_options.add_argument("--start-maximized")
driver = webdriver.Chrome(service=Service(ChromeDriverManager().install()), options=chrome_options)
wait = WebDriverWait(driver, 15)

driver.get(BASE_URL)
time.sleep(5)

# Function to click "Load More"
def click_load_more(click_count):
    try:
        if click_count == 0:
            button = wait.until(EC.element_to_be_clickable((By.CSS_SELECTOR, ".button-load-more")))
        else:
            last_wrapper = driver.find_elements(By.CSS_SELECTOR, ".load-more-scroll-wrapper")[-1]
            button = last_wrapper.find_element(By.XPATH, "following::div[contains(@class,'button-load-more')][1]")

        driver.execute_script("arguments[0].scrollIntoView(true);", button)
        time.sleep(1)
        driver.execute_script("arguments[0].click();", button)
        print(f"🔄 Clicked 'Load More' ({click_count+1}/{MAX_CLICKS})")

        time.sleep(WAIT_TIME)
        return True
    except Exception as e:
        print(f"ℹ️ No more 'Load More' button or click failed: {e}")
        return False

# Keep clicking until limit or no button
clicks = 0
while clicks < MAX_CLICKS:
    before_count = len(driver.find_elements(By.CSS_SELECTOR, "article"))
    if not click_load_more(clicks):
        break
    after_count = len(driver.find_elements(By.CSS_SELECTOR, "article"))
    print(f"📄 Articles before click: {before_count}, after click: {after_count}")
    if after_count <= before_count:
        break
    clicks += 1

# Scrape articles
articles_data = []
articles = driver.find_elements(By.CSS_SELECTOR, "article")
print(f"📄 Total articles found: {len(articles)}")

for idx, article in enumerate(articles, start=1):
    try:
        img_tag = article.find_element(By.CSS_SELECTOR, "img")
        img_url = img_tag.get_attribute("src")

        # Skip SVG placeholders
        if img_url.startswith("data:image/svg+xml"):
            print(f"⚠️ Skipping SVG placeholder: image_{idx}")
            continue

        # Convert to full-size by changing width param and removing coordinates
        parsed_url = urlparse(img_url)
        query = parse_qs(parsed_url.query)

        if "width" in query:
            query["width"] = ["1200"]
        if "coordinates" in query:
            del query["coordinates"]

        parsed_url = parsed_url._replace(query="&".join([f"{k}={v[0]}" for k, v in query.items()]))
        full_img_url = urlunparse(parsed_url)

        # Download image
        img_data = requests.get(full_img_url).content
        img_name = f"image_{idx}.jpg"
        with open(os.path.join(OUTPUT_DIR, img_name), "wb") as f:
            f.write(img_data)

        # Get headline and article link
        headline_tag = article.find_element(By.CSS_SELECTOR, "h3 a, h2 a")
        headline = headline_tag.text.strip()
        article_link = headline_tag.get_attribute("href")

        # Generate keywords
        keywords = [word.strip(",.?!").lower() for word in headline.split() if len(word) > 3]

        print(f"✅ Saved: {headline}")
        articles_data.append({
            "headline": headline,
            "image": img_name,
            "article_url": article_link,
            "keywords": keywords
        })

    except Exception as e:
        print(f"⚠️ Error extracting article {idx}: {e}")

# Save CSV
csv_path = "articles_data.csv"
with open(csv_path, "w", newline="", encoding="utf-8") as csvfile:
    writer = csv.DictWriter(csvfile, fieldnames=["headline", "image", "article_url", "keywords"])
    writer.writeheader()
    for row in articles_data:
        writer.writerow(row)

# Save JSON
json_path = "articles_data.json"
with open(json_path, "w", encoding="utf-8") as jsonfile:
    json.dump(articles_data, jsonfile, indent=4)

print(f"💾 Done! Files saved: {csv_path}, {json_path}, and images/")

driver.quit()
