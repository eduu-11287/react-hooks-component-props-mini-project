
import React from "react"
function Article({ title, date = "January 1, 1970", preview, minutes }) {
    const renderMinutesToRead = (minutes) => {
      if (minutes < 30) {
        const coffeeCount = Math.ceil(minutes / 5);
        return "☕️".repeat(coffeeCount) + ` ${minutes} min read`;
      } else {
        const bentoCount = Math.ceil(minutes / 10);
        return "🍱".repeat(bentoCount) + ` ${minutes} min read`;
      }
    };
  
    return (
      <article>
        <h3>{title}</h3>
        <small>{date}</small>
        <p>{preview}</p>
        <p>{renderMinutesToRead(minutes)}</p>
      </article>
    );
  }
  
  export default Article;
  