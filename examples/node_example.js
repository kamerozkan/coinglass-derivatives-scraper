// Run coinglass-derivatives-scraper on Apify and print the results. npm install apify-client
import { ApifyClient } from 'apify-client';

const client = new ApifyClient({ token: process.env.APIFY_TOKEN });
const input = {
  "mode": "liquidations",
  "symbols": [
    "BTC",
    "ETH",
    "SOL",
    "XRP",
    "DOGE"
  ],
  "maxItems": 5,
  "enrichCurrencyMetrics": true,
  "includeDailyOhlcv": false,
  "sortBy": "liquidation24h"
};
const run = await client.actor('kamerozkan/coinglass-derivatives-scraper').call(input);
const { items } = await client.dataset(run.defaultDatasetId).listItems();
console.log(items);
