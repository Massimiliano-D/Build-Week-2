const endpointArtist = "https://striveschool-api.herokuapp.com/api/deezer/artist/";
const endpointAlbum = "https://striveschool-api.herokuapp.com/api/deezer/album/";
const endpointSearch = "https://striveschool-api.herokuapp.com/api/deezer/search?q=";
const endpointTrack = "https://striveschool-api.herokuapp.com/api/deezer/track/";

const colorsArr = ["#d6c400", "#f42c2c", "#2cf475", "#2c8df4", "#4d2cf4", "#9a2cf4", "#f42cb5"];

let urlBar = new URLSearchParams(window.location.search);
let searchParam = urlBar.get("param");

const goToAlbum = function (id) {
  location.assign("./album.html?albumid=" + id);
};

const goToArtist = function (id) {
  location.assign("./artist.html?artistid=" + id);
};

let selectedTrack = null;

const playAudio = async function () {
  if (selectedTrack) {
    var audio = new Audio(selectedTrack);
    audio.type = "audio/mp3";

    try {
      await audio.play();
      minutaggio();
      console.log("Playing...");
    } catch (err) {
      console.log("Failed to play..." + err);
    }
  }
};

const fetchTrack = function (id) {
  fetch(endpointTrack + id)
    .then((res) => {
      if (res.ok) {
        console.log(res);
        return res.json();
      } else {
        throw new Error(res.message);
      }
    })
    .then((data) => {
      console.log(data);
      selectedTrack = data.preview;

      document.querySelector(".img-player").src = data.album.cover_medium;
      document.getElementById("footer-title").innerText = data.title_short;
      document.getElementById("footer-artist").innerText = data.artist.name;
      playAudio();
    })
    .catch((err) => console.log(err));
};

const chooseColor = function () {
  return colorsArr[Math.floor(Math.random() * colorsArr.length)];
};

const costruisciCard = function (oggetti) {
  let row1 = document.getElementById("row-cards-1");

  row1.innerHTML = "";

  for (let i = 0; i < 15; i++) {
    let color = chooseColor();
    row1.innerHTML += `
            <div class=" col-5 col-lg-2 rounded-4 card px-1 py-2 position-relative overflow-hidden m-1" style="background-color: ${color}">
                <h5 class="text-light mb-0 pointer" onclick="fetchTrack('${oggetti[i].id}')">${oggetti[i].title_short}</h5>
                <p class="m-0 pointer text-light-50" onclick="goToArtist(${oggetti[i].artist.id})">${oggetti[i].artist.name}</p>
                <div class="d-flex justify-content-end align-items-end position-absolute bottom-0 end-0 ">
                    <img class="w-50 img" src="${oggetti[i].album.cover_medium}" alt="img" onclick="goToAlbum(${oggetti[i].album.id})">
                </div>
            </div>
        `;
  }
};

const fetchInit = function (par = null) {
  let parametro = par ? par : searchParam;
  fetch(endpointSearch + parametro)
    .then((res) => {
      if (res.ok) {
        console.log(res);
        return res.json();
      } else {
        throw new Error(res.message);
      }
    })
    .then((data) => {
      console.log(data);
      costruisciCard(data.data);
    })
    .catch((err) => console.log(err));
};

fetchInit();

document.getElementById("search-form").addEventListener("submit", function (e) {
  e.preventDefault();
  let param = document.getElementById("search-input").value;
  console.log("Ricerca: " + param);
  fetchInit(param);
  param = "";
});

/* MINUTAGGIO ANIMATO */

let counter = 0;

const minutaggio = function () {
  document.querySelector(".total-duration").innerText = `00:30`;
  let seconds = document.querySelector(".current-time");
  let slider = document.querySelector(".slider_container input");
  slider.setAttribute("value", 0);
  seconds.innerText = "00:00";
  slider.setAttribute("max", 30);

  let timer = setInterval(() => {
    if (counter == 30) {
      clearInterval(timer);
      counter = 0;
    } else {
      counter++;
      counter < 10 ? (seconds.innerText = "00:0" + counter) : (seconds.innerText = "00:" + counter);
      slider.setAttribute("value", counter);
    }
  }, 1000);
};
