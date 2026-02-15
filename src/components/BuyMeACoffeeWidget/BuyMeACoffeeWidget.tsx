"use client";

import { useEffect } from "react";

const BuyMeACoffeeWidget = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.setAttribute("data-name", "BMC-Widget");
    script.setAttribute("data-cfasync", "false");
    script.src = "https://cdnjs.buymeacoffee.com/1.0.0/widget.prod.min.js";
    script.setAttribute("data-id", "coffeetechinsights");
    script.setAttribute("data-description", "Si eres fan de mi podcast apoyame con tu cafecito!");
    script.setAttribute("data-message", "");
    script.setAttribute("data-color", "#FF813F");
    script.setAttribute("data-position", "Right");
    script.setAttribute("data-x_margin", "18");
    script.setAttribute("data-y_margin", "18");
    
    script.onload = function() {
      // Force trigger event if needed
        var evt = document.createEvent('Event');
        evt.initEvent('DOMContentLoaded', false, false);
        window.dispatchEvent(evt);
    };

    document.body.appendChild(script);

    return () => {
       // Optional: cleanup if we wanted to remove it on unmount, 
       // but typically widgets like this can persist or might leave artifacts.
       // Usually better to leave it if it attaches to window.
       if (document.body.contains(script)) {
         document.body.removeChild(script);
       }
    };
  }, []);

  return null;
};

export default BuyMeACoffeeWidget;
