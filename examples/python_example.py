"""Run coinglass-derivatives-scraper on Apify and print the results. pip install apify-client"""
import os

from apify_client import ApifyClient

client = ApifyClient(os.environ["APIFY_TOKEN"])
run_input = {'mode': 'liquidations',
 'symbols': ['BTC', 'ETH', 'SOL', 'XRP', 'DOGE'],
 'maxItems': 5,
 'enrichCurrencyMetrics': True,
 'includeDailyOhlcv': False,
 'sortBy': 'liquidation24h'}
run = client.actor("kamerozkan/coinglass-derivatives-scraper").call(run_input=run_input)
for item in client.dataset(run["defaultDatasetId"]).iterate_items():
    print(item)
