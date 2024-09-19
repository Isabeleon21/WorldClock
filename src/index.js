//Mxico City
function upDateTime() {
  let mexicoCityElement = document.querySelector("#mexico-city");
  if (mexicoCityElement) {
    let mexicoCityDateElement = mexicoCityElement.querySelector(".date");
    let mexicoCityTimeElement = mexicoCityElement.querySelector(".time");
    let mexicoCityTime = moment().tz("America/Mexico_City");
    mexicoCityDateElement.innerHTML = `${mexicoCityTime.format(
      "MMMM Do YYYY"
    )}`;
    mexicoCityTimeElement.innerHTML = `${mexicoCityTime.format(
      "h:mm:ss [<small>]A[</small>]"
    )}`;
  }
  //Dublin
  let dublinElement = document.querySelector("#dublin");
  if (dublinElement) {
    let dublinDateElement = dublinElement.querySelector(".date");
    let dublinTimeElement = dublinElement.querySelector(".time");
    let dublinTime = moment().tz("Europe/Dublin");
    dublinDateElement.innerHTML = `${dublinTime.format("MMMM Do YYYY")}`;
    dublinTimeElement.innerHTML = `${dublinTime.format(
      "h:mm:ss [<small>]A[</small>]"
    )}`;
  }
}
function updateCity(event) {
  let cityTimeZones = event.target.value;
  let cityName = cityTimeZones.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimeZones);
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = `<div class="country-container">
            <div>
              <h2>${cityName}</h2>
              <div class="date">${cityTime.format("MMM Do YYY")}</div>
            </div>
            <div class="time-container">
              <span class="time">${cityTime.format(
                "h:mm:ss"
              )} <small>${cityTime.format("A")}</small>
              </span>
              </div>
            </div>`;
}

upDateTime();
setInterval(upDateTime), 1000;

let selectCityElement = document.querySelector("#select-city");

selectCityElement.addEventListener("change", updateCity);
