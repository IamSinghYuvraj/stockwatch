import TradingViewWidget from "@/components/TradingViewWidget";
import { Button } from "@/components/ui/button";
import { MARKET_OVERVIEW_WIDGET_CONFIG } from "@/lib/constants";

const Home = () => {
  const scriptURL = `https://s3.tradingview.com/external-embedding/embed-widget-`;

  //  GET /$%7BscriptURL%7Dmarket-overview.js 404 in 133ms ask this error
  return (
    <div className="flex min-h-screen home-wrapper">
      <section className="grid w-full gap-8">
        <div className="md:col-span-1 xl:col-span-1">
          <TradingViewWidget
            title="Market Overview"
            scriptUrl={`${scriptURL}market-overview.js`}
            config={MARKET_OVERVIEW_WIDGET_CONFIG}
            className="custom-chart"
            height={600}
          />
        </div>
        <div className="md-col-span xl:col-span-2">
          <TradingViewWidget
            title="Stock Heatmap"
            scriptUrl={`${scriptURL}stock-heatmap.js`}
            config={MARKET_OVERVIEW_WIDGET_CONFIG}
            className="custom-chart"
            height={600}
          />
        </div>
      </section>
    </div>
  );
};

export default Home;
