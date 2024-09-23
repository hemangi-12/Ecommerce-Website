// helpers/addDynamicScript.js
const addDynamicScript = (src) => {
    return new Promise((resolve, reject) => {
      const existingScript = document.querySelector(`script[src="${src}"]`);
  
      // If the script is already in the DOM, resolve immediately
      if (existingScript) {
        resolve();
        return;
      }
  
      const script = document.createElement('script');
      script.src = src;
      script.async = true;
      script.onload = () => {
        resolve();
      };
      script.onerror = () => {
        reject(new Error(`Failed to load script ${src}`));
      };
  
      document.body.appendChild(script);
    });
  };
  
  export default addDynamicScript;
  