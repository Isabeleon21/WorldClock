//Mxico City
function upDateTime() {
  let mexicoCityElement = document.querySelector("#mexico-city");
  let mexicoCityDateElement = mexicoCityElement.querySelector(".date");
  let mexicoCityTimeElement = mexicoCityElement.querySelector(".time");
  let mexicoCityTime = moment().tz("America/Mexico_City");
  mexicoCityDateElement.innerHTML = `${mexicoCityTime.format("MMMM Do YYYY")}`;
  mexicoCityTimeElement.innerHTML = `${mexicoCityTime.format(
    "h:mm:ss [<small>]A[</small>]"
  )}`;

  //Dublin
  let dublinElement = document.querySelector("#dublin");
  let dublinDateElement = dublinElement.querySelector(".date");
  let dublinTimeElement = dublinElement.querySelector(".time");
  let dublinTime = moment().tz("Europe/Dublin");
  dublinDateElement.innerHTML = `${dublinTime.format("MMMM Do YYYY")}`;
  dublinTimeElement.innerHTML = `${dublinTime.format(
    "h:mm:ss [<small>]A[</small>]"
  )}`;
}

upDateTime();
setInterval(upDateTime), 1000;
