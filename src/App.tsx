import React, { useState, useEffect } from "react";

// Define an interface for the page state
interface PageState {
  __html: string;
}

// Extend the Window interface to include jQuery
declare global {
  interface Window {
    $: any; // Using 'any' for simplicity, or you can install @types/jquery
  }
}

const App: React.FC = () => {
  const [page, setPage] = useState<PageState | null>(null);

  useEffect(() => {
    const loadJQuery = () => {
      const script = document.createElement("script");
      script.src = "https://code.jquery.com/jquery-3.6.0.min.js";
      script.async = true; // It's good practice to load scripts asynchronously
      script.onload = () => {
        // Check if jQuery is loaded
        if (window.$) {
          fetch("landing-page-one/index.html")
            .then((res) => {
              if (!res.ok) {
                throw new Error(`HTTP error! status: ${res.status}`);
              }
              return res.text();
            })
            .then((html) => {
              setPage({ __html: html });
              // Ensure jQuery's getScript method is available
              if (typeof window.$.getScript === 'function') {
                window.$.getScript("landing-page-one/js/index.js");
              } else {
                console.error("jQuery getScript method not found.");
              }
            })
            .catch((error) => {
              console.error("Error fetching or processing HTML:", error);
              // Optionally set an error state or display a message to the user
            });
        } else {
          console.error("jQuery failed to load.");
        }
      };
      script.onerror = () => {
        console.error("Failed to load jQuery script.");
        // Optionally set an error state or display a message to the user
      };
      document.body.appendChild(script);

      // Cleanup function to remove the script if the component unmounts
      return () => {
        document.body.removeChild(script);
      };
    };

    loadJQuery();
  }, []); // Empty dependency array means this effect runs once on mount

  return (
    <>
      <h2>
        <span>Inserting project using React's </span>
        <code>dangerouslySetInnerHTML</code>:
      </h2>
      {/* Ensure that the HTML content from "landing-page-one/index.html" is trusted 
        and sanitized to prevent XSS vulnerabilities when using dangerouslySetInnerHTML.
      */}
      {page ? (
        <div dangerouslySetInnerHTML={page} />
      ) : (
        <p>Loading page content...</p> // Or some other loading indicator
      )}
    </>
  );
};

export default App;