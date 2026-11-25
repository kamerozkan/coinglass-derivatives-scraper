# CoinGlass Derivatives Scraper - Liquidations, OI and Funding

Scrape live crypto derivatives data from CoinGlass without login or API key: 1h-24h long/short liquidations, open interest, funding rates, ETF net flows, spot and futures volume, taker flow, Fear and Greed, and 21-day OHLCV for BTC, ETH, SOL and any listed symbol.

**[Run it on Apify Store](https://apify.com/kamerozkan/coinglass-derivatives-scraper)**: no servers, no proxies to manage, results as JSON, CSV or Excel, or straight into your app through the API.

## Why use it

- Runs in the cloud on [Apify](https://apify.com/kamerozkan/coinglass-derivatives-scraper); start it from the browser, the API, a schedule, or tools like Make, n8n and Zapier.
- Pay only for results. The current price and plan discounts are always on the [Store page](https://apify.com/kamerozkan/coinglass-derivatives-scraper).
- Cap the cost of any run with the maximum cost per run setting.

## Quick start

1. Open the [Actor page](https://apify.com/kamerozkan/coinglass-derivatives-scraper) and click **Try for free**.
2. Paste an input like the one below and click **Start**.
3. Download the dataset or read it over the API.

```json
{
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
}
```

## Use it from code

Python ([examples/python_example.py](examples/python_example.py)), Node.js ([examples/node_example.js](examples/node_example.js)) and cURL ([examples/curl.sh](examples/curl.sh)) examples are in the `examples` folder. All of them need an [Apify API token](https://console.apify.com/settings/integrations).

## Use in n8n & Make

- **n8n:** Import [integrations/n8n-workflow.json](integrations/n8n-workflow.json) directly into your n8n workspace, set your `APIFY_TOKEN` environment variable (or Bearer token header), and click **Execute Workflow**.
- **Make / Zapier:** Call the Apify **Run an Actor** module with Actor ID `kamerozkan/coinglass-derivatives-scraper` and the JSON input above, or POST to `https://api.apify.com/v2/acts/kamerozkan~coinglass-derivatives-scraper/run-sync-get-dataset-items`.

## Use with AI Agents (Apify MCP)

This Actor works with Claude Desktop, Cursor, Windsurf and any MCP-compatible AI agent through the official [Apify MCP Server](https://mcp.apify.com). Copy [integrations/mcp-config.json](integrations/mcp-config.json) into your MCP client configuration and replace `YOUR_APIFY_TOKEN` with your token.

## Sample output

Real rows from a recent run, with any contact details masked. Full sample: [sample-output.json](sample-output.json).

```json
[
  {
    "symbol": "BTC",
    "name": "Bitcoin",
    "rank": 1,
    "price": 60182.9,
    "priceChangePercent24h": 0.27,
    "high24h": 60474.9,
    "low24h": 57256.5,
    "marketCapUsd": 1208519288005.4158,
    "fdvUsd": 1263840900000,
    "circulatingSupply": 20117403,
    "maxSupply": 21000000,
    "openInterestUsd": 39839629266.6982,
    "oiChangePercent24h": 1.48,
    "oiMarketCapPct": 18,
    "fundingRate": 0.009386083264,
    "fundingRateAnnualized": 10.27776117408,
    "spotVolume24hUsd": 7304603347.1392,
    "spotVolumeChangePercent24h": 14.54,
    "futuresVolume24hUsd": 83149071111.3368,
    "futuresVolumeChangePercent24h": 14.65,
    "liquidation1hLongUsd": 197008.54112411,
    "liquidation1hShortUsd": 180.5343,
    "liquidation1hTotalUsd": 197189.0754,
    "liquidation1hLongCount": 56,
    "liquidation1hShortCount": 1,
    "liquidation4hLongUsd": 959464.56105403,
    "liquidation4hShortUsd": 16180089.98014933,
    "liquidation4hTotalUsd": 17139554.5412,
    "liquidation12hLongUsd": 100031656.37909082,
    "liquidation12hShortUsd": 86290521.51377843,
    "liquidation12hTotalUsd": 186322177.8929,
    "liquidation24hLongUsd": 136884578.89177564,
    "liquidation24hShortUsd": 94114643.31020813,
    "liquidation24hTotalUsd": 230999222.202,
    "liquidation24hLongCount": 11197,
    "liquidation24hShortCount": 7947,
    "etfNetFlowUsd": -231400000,
    "etfNetFlowDate": "2026-11-24",
    "fearGreedIndex": 14,
    "spotNetFlow24hUsd": -162515958.5425,
    "futuresNetFlow24hUsd": -1078417938.621594,
    "takerBuySellRatio24h": 0.970907374048,
    "takerBuyPercent24h": 49.26194842,
    "ma200": 72129.88982092193,
    "ma200DistancePercent": -16.56316106,
    "volatility30d": 47.74553807,
    "athUsd": 126198.0696034339,
    "athTime": "2025-10-06T00:00:00+00:00",
    "performance": {
      "h1": -0.17,
      "h4": 0.99,
      "h24": 0.27,
      "d7": -4.45227516,
      "d30": -24.77763251,
      "d90": -25.01277983,
      "ytd": -31.22647922,
      "y1": -31.09503651
    },
    "priceSource": "Binance BTCUSDT",
    "refExchange": "Binance",
    "refInstrument": "BTCUSDT",
    "tags": [
      "layer-1",
      "pow"
    ],
    "logoUrl": "https://cdn.coinglasscdn.com/static/img/coins/bitcoin-BTC.png",
    "links": {
      "website": "https://bitcoin.org/",
      "whitepaper": "https://bitcoin.org/bitcoin.pdf",
      "explorer": "https://blockchain.info/"
    },
    "sourceUrl": "https://www.coinglass.com/currencies/BTC",
    "updatedAt": "2026-11-25T22:40:53.807000+00:00",
    "scrapedAt": "2026-11-25T22:47:22.317829+00:00"
  }
]
```

## Support

Found a problem or need a field? Open an issue on the [Actor's Issues tab](https://apify.com/kamerozkan/coinglass-derivatives-scraper/issues) and include your run link.

---
This repository holds usage examples and sample data. The Actor itself runs on Apify.
