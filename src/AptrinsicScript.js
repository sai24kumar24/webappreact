import React, { useEffect } from 'react';

const AptrinsicScript = () => {
  useEffect(() => {
    (function(n,t,a,e,co){
      var i="aptrinsic";
      n[i]=n[i]||function(){
        (n[i].q=n[i].q||[]).push(arguments);
      };
      n[i].p=e;
      n[i].c=co;
      var r=t.createElement("script");
      r.async=!0;
      r.src=a+"?a="+e;
      var c=t.getElementsByTagName("script")[0];
      c.parentNode.insertBefore(r,c);
    })(window,document,"https://web-sdk.aptrinsic.com/api/aptrinsic.js","AP-GBHANBHUKHYZ-2",{htmlSanitization: true});
  }, []); // Run once on component mount

  return null; // Since this component doesn't render anything, return null
};

export default AptrinsicScript;
