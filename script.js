const req = new XMLHttpRequest();
req.addEventListener("load", (e) => {
  let data = JSON.parse(e.target.responseText);
  displayName(data);
});
req.open("GET", "https://restcountries.com/v3.1/all");
req.send();

function displayName(data) {
  console.log(data);
  //  // country names of asian continents
  let asiaCon = data.filter((e) => {
    return e.region === "Asia";
  });

  let con = asiaCon.map((e) => {
    console.log(`Country Name of Asia continents is ${e.name.common}`);
  });

  // country names which have less than 2 lakhs population
  let pop = data.filter((e) => {
    return e.population < 200000;
  });

  let cou = pop.map((e) => {
    console.log(
      `Country Name of less than 2 Lakh population is ${e.name.common}`
    );
  });

  //using forEach method to name and capital and flags
  let name = data.forEach((e) => {
    console.log(e.name.common);
  });
  let capital = data.forEach((e) => {
    console.log(` ${e.capital}`);
  });
  let flag = data.forEach((e) => {
    console.log(` ${e.flags.png}`);
  });

  // using reduce to find total population
  let totalPopulation = data.map((e) => e.population).reduce((a, b) => a + b);
  console.log(`Total Population is ${totalPopulation}`);

  //using filter and map to countries that uses US Dollar

  let val = data.filter((e) => {
    if (e.currencies?.USD) {
      return e.currencies;
    }
  });

  let cName = val.map((e) => {
    console.log(`Countries that uses US Dollar is ${e.name.common}`);
  });
}
