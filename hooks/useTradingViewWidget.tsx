"use client"; //this file will run on browser
import { useEffect, useRef } from "react";
//useRef to rembember a html element and use its reference(memory)
//useEffect to run code after the screen renders(timing)

//passing props to this hook
const useTradingViewWidget = (
  scriptUrl: string,
  config: Record<string, unknown>,
  height = 600
) => {
  //A variable containerRef that points to a div element on the page
  const containerRef = useRef<HTMLDivElement | null>(null);

  //After the screen renders this code is executed
  useEffect(() => {
    if (!containerRef.current) return;
    //If div does not exist yet , stop.
    if (containerRef.current.dataset.loaded) return;

    // If script is already added , do nothing.

    //Inserting trading view widget inside the div .
    containerRef.current.innerHTML =
      '<div class="tradingview-widget-container__widget style="width: 100%; height: ${height}px;"></div>';

    const script = document.createElement("script"); //create script tag
    script.src = scriptUrl;
    script.async = true; //load it in the background dont block the code
    script.innerHTML = JSON.stringify(config);

    containerRef.current.appendChild(script); //Attaching the script to the page using containerref
    containerRef.current.dataset.loaded = "true"; //indicating the script has been loaded

    return () => {
      //When component is removed, clean everything.
      if (containerRef.current) {
        containerRef.current.innerHTML = "";
        delete containerRef.current.dataset.loaded;
      }
    };
  }, [scriptUrl, config, height]);

  return containerRef;
  //Give this ref to a <div> so React can connect it
};

export default useTradingViewWidget;
