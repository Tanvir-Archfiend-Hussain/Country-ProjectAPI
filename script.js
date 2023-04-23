let searchBtn = document.getElementById("search-btn");
let countryInp = document.getElementById("country-inp");

/** When Search Button.... */
searchBtn.addEventListener("click", () => {
  let countryName = countryInp.value;
  let finalURL = `https://restcountries.com/v3.1/name/${countryName}?fullText=true`;
});
