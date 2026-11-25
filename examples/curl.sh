#!/usr/bin/env bash
# Run coinglass-derivatives-scraper synchronously and get the dataset items back. Needs APIFY_TOKEN.
curl -s -X POST "https://api.apify.com/v2/acts/kamerozkan~coinglass-derivatives-scraper/run-sync-get-dataset-items" \
  -H "Authorization: Bearer $APIFY_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{"mode": "liquidations", "symbols": ["BTC", "ETH", "SOL", "XRP", "DOGE"], "maxItems": 5, "enrichCurrencyMetrics": true, "includeDailyOhlcv": false, "sortBy": "liquidation24h"}'
