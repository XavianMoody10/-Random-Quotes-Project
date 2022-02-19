"use strict ";
const quoteBnt = document.querySelector("#button-container button");
const quoteGen = document.querySelector("#content-container q");
const quoteName = document.querySelector("#content-container p");

const quote1 = {
  fullName: "John Cena",
  quote:
    "Be loyal to those who are loyal to you. And respect everyone, even your enemies and competition.",
  randomQuote: function () {
    quoteGen.textContent = `${this.quote}`;
    quoteName.textContent = `${this.fullName}`;
  },
};

const quote2 = {
  fullName: "Will Smith",
  quote:
    "Throughout life people will make you mad, disrespect you and treat you bad. Let God deal with the things they do, cause hate in your heart will consume you too.",
};

const quote3 = {
  fullName: "Tom Brady",
  quote:
    "A lot of times I find that people who are blessed with the most talent don't ever develop that attitude, and the ones who aren't blessed in that way are the most competitive and have the biggest heart.",
};

const quote4 = {
  fullName: "Barack Obama",
  quote:
    "Change will not come if we wait for some other person or some other time. We are the ones we've been waiting for. We are the change that we seek.",
};

quoteBnt.addEventListener("click", randomQuotesDisplay);
function randomQuotesDisplay() {
  const quotesArray = [quote1, quote2, quote3, quote4];
  let randomInt = Math.trunc(Math.random() * quotesArray.length);
  const randomQuotev2 = quote1.randomQuote.call(quotesArray[randomInt]);
}
