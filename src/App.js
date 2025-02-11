import React, { useState } from "react";
import Header from "./components/Header";
import LandingPage from "./components/LandingPage";
import Statistics from "./components/Statistics";
import Footer from "./components/Footer";
import brand from './images/icon-brand-recognition.svg';
import records from './images/icon-detailed-records.svg';
import fully from './images/icon-fully-customizable.svg';
import "./sass/output.min.css";

function App() {
  const [fullUrl, setFullUrl] = useState("");
  const [shortUrls, setShortUrls] = useState([]);
  const [copiedIndex, setCopiedIndex] = useState(null);
  const [error, setError] = useState("");

  const handleShorten = async () => {
    if (!fullUrl.trim()) return;

    try {
      const response = await fetch(`https://tinyurl.com/api-create.php?url=${fullUrl}`);
      const shortUrl = await response.text();

      if (shortUrl.includes("Error")) {
        setError("Failed to shorten URL. Please try again.");
        return;
      }

      setShortUrls((prevUrls) => [...prevUrls, { original: fullUrl, short: shortUrl }]);
      setFullUrl("");
      setError("");
    } catch (err) {
      setError("Something went wrong. Try again later.");
    }
  };

  const handleCopy = (url, index) => {
    navigator.clipboard.writeText(url).then(() => {
      setCopiedIndex(index);
      setTimeout(() => setCopiedIndex(null), 2000);
    });
  };

  return (
    <div>
      <Header />
      <LandingPage />
      <main className="advanced-container">
        <section className="container advanced">
          <div className="input-container">
            <input
              type="text"
              value={fullUrl}
              onChange={(e) => setFullUrl(e.target.value)}
              placeholder="Shorten a link here..."
            />
            <button onClick={handleShorten}>Shorten It!</button>
          </div>
          
          {error && <p className="error-message">{error}</p>}

          {/* Display URLs */}
          <ul className="url-list">
            {shortUrls.map((item, index) => (
              <li key={index} className="url-item">
                <span className="original-url">{item.original}</span>
                <a href={item.short} target="_blank" rel="noopener noreferrer" className="short-url">
                  {item.short}
                </a>
                <button onClick={() => handleCopy(item.short, index)} className="copy-btn">
                  {copiedIndex === index ? "Copied!" : "Copy"}
                </button>
              </li>
            ))}
          </ul>
        </section>

        <section className="title container">
          <h2>Advanced Statistics</h2>
          <p>Track how your links are performing across the web with our advanced statistics dashboard.</p>
        </section>

        <section className="statistics container">
          <Statistics 
            image={brand}
            title="Brand Recognition"
            text="Boost your brand recognition with each click. Branded links help instill confidence in your content."
          />
          <Statistics 
            image={records}
            title="Detailed Records"
            text="Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions."
          />
          <Statistics 
            image={fully}
            title="Fully Customizable"
            text="Improve brand awareness and content discoverability through customizable links, supercharging audience engagement."
          />
        </section>
      </main>

      <section className="boost">
        <div className="container">
          <h3>Boost your links today</h3>
          <button>Get Started</button>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default App;
