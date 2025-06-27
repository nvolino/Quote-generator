import React, { useState } from 'react';
import './app.css'


const quotes = [
  "You can't use up creativity. The more you use, the more you have. - Maya Angelou",
  "The best way to predict the future is to create it. - Peter Drucker",
  "Let us pick up our books and our pens, they are the most powerful weapons. - Malala Yousafzai",
  "The only way to do great work is to love what you do. - Steve Jobs",
  "It always seems impossible until it’s done. - Nelson Mandela",
  "I am not afraid... I was born to do this. - Joan of Arc",
  "Believe you can and you’re halfway there. - Theodore Roosevelt"
];

function QuoteGenerator() {
  const [quote, setQuote] = useState('');

  const generateQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setQuote(quotes[randomIndex]);
  };

  return (
    <div className="quote-generator">
      <h1>Random Quote Generator</h1>
      <button onClick={generateQuote}>Generate Quote</button>
      {quote && <p className="quote">{quote}</p>}
    </div>
  );
}

export default QuoteGenerator;