const btnloaded = document.getElementById("btn");
const sectionOl = document.getElementById("section-ol");

btnloaded.addEventListener("click", toggleButtonforFetchData);

function toggleButtonforFetchData() {
  fetch("https://quote-garden.herokuapp.com/api/v3/quotes/random")
    .then((response) => response.json())
    .then((festchData) => {
      //main.innerHTML = "";
      const festchDataQuoteText = festchData.data[0].quoteText;
      const quoteTextEl = document.createElement("li");
      quoteTextEl.innerText = festchDataQuoteText;
      sectionOl.appendChild(quoteTextEl);
    });
}
