// FUNZIONE PER POPOLARE I 6 DIV  DOPO BUONASERA + AVVIO CANZONE DI COPERTINA
const URL = "https://striveschool-api.herokuapp.com/api/deezer/search?q=";

document.addEventListener("DOMContentLoaded", async () => {
  try {
    const resp = await fetch(URL + "vasco rossi", {
      method: "GET",
    });
    const albumSelected = await resp.json();
    console.log(albumSelected);

    const gamingTracks = document.getElementById("gaming-tracks");
    gamingTracks.innerHTML = "";

    gamingTracks.onclick = () => {
      const albumId = albumSelected.data[0].album.id;
      window.location.href = `./album.html?albumId=${albumId}`;
    };

    gamingTracks.innerHTML = `             
     <div class="w-100 col-lg-4 col-6 rounded-1 justify-content-between d-flex align-items-center pointer custom-cols-w"  id="gaming-tracks">
    <div class="row w-100 m-0 align-items-center">
      <div class="col-3 d-flex align-items-center p-0">
        <img src="${albumSelected.data[0].album.cover}" class="w-100" />
      </div>
      <div class="col-9">
        <p class="m-0 fw-bold pointer">${albumSelected.data[0].album.title}</p>
      </div>
    </div>
  </div>`;

    const resp2 = await fetch(URL + "ligabue", {
      method: "GET",
    });
    const albumSelected2 = await resp2.json();
    console.log(albumSelected);

    const kickassMetal = document.getElementById("kickass-metal");
    kickassMetal.innerHTML = "";

    kickassMetal.onclick = () => {
      const albumId = albumSelected2.data[0].album.id;
      window.location.href = `./album.html?albumId=${albumId}`;
    };

    kickassMetal.innerHTML = `<div class="w-100 col-lg-4 col-6 rounded-1 d-flex align-items-center pointer custom-cols-w"  id="kickass-metal">
    <div class="row w-100 m-0 align-items-center">
      <div class="col-3 d-flex align-items-center p-0">
        <img src="${albumSelected2.data[0].album.cover}" class="w-100" />
      </div>
      <div class="col-9">
        <p class="m-0 fw-bold pointer">${albumSelected2.data[0].album.title}</p>
      </div>
    </div>
  </div>`;

    const resp3 = await fetch(URL + "punk tracks", {
      method: "GET",
    });
    const albumSelected3 = await resp3.json();
    console.log(albumSelected);

    const punkTracks = document.getElementById("punk-tracks");

    punkTracks.onclick = () => {
      const albumId = albumSelected3.data[0].album.id;
      window.location.href = `./album.html?albumId=${albumId}`;
    };

    punkTracks.innerHTML = ` <div class=" w-100 col-lg-4 col-6 rounded-1 d-flex align-items-center pointer custom-cols-w"  id="punkTracks">
    <div class="row w-100 m-0 align-items-center">
      <div class="col-3 d-flex align-items-center p-0">
        <img src="${albumSelected3.data[0].album.cover}" class="w-100" />
      </div>
      <div class="col-9">
        <p class="m-0 fw-bold pointer">${albumSelected3.data[0].album.title}</p>
      </div>
    </div>
  </div>`;

    const resp4 = await fetch(URL + "eminem", {
      method: "GET",
    });
    const albumSelected4 = await resp4.json();
    console.log(albumSelected);

    const hitsTracks = document.getElementById("hits-tracks");

    hitsTracks.onclick = () => {
      const albumId = albumSelected4.data[0].album.id;
      window.location.href = `./album.html?albumId=${albumId}`;
    };

    hitsTracks.innerHTML = `<div class="w-100 col-lg-4 col-6 rounded-1 justify-content-between d-flex align-items-center pointer custom-cols-w"  id="hits-tracks">
    <div class="row w-100 m-0 align-items-center">
      <div class="col-3 d-flex align-items-center p-0">
        <img src="${albumSelected4.data[0].album.cover}" class="w-100" />
      </div>
      <div class="col-9">
        <p class="m-0 fw-bold pointer">${albumSelected4.data[0].album.title}</p>
      </div>
    </div>
  </div>`;

    const resp5 = await fetch(URL + "muse", {
      method: "GET",
    });
    const albumSelected5 = await resp5.json();
    console.log(albumSelected);

    const sleepTracks = document.getElementById("sleep-tracks");
    sleepTracks.innerHTML = "";

    sleepTracks.onclick = () => {
      const albumId = albumSelected5.data[0].album.id;
      window.location.href = `./album.html?albumId=${albumId}`;
    };

    sleepTracks.innerHTML = `<div class="w-100 col-lg-4 col-6 rounded-1 d-flex align-items-center pointer custom-cols-w"  id="sleep-tracks">
    <div class="row w-100 m-0 align-items-center">
      <div class="col-3 d-flex align-items-center p-0">
        <img src="${albumSelected5.data[0].album.cover}" class="w-100" />
      </div>
      <div class="col-9">
        <p class="m-0 fw-bold pointer">${albumSelected5.data[0].album.title}</p>
      </div>
    </div>
  </div>`;

    const resp6 = await fetch(URL + "u2", {
      method: "GET",
    });
    const albumSelected6 = await resp6.json();
    console.log(albumSelected);

    const focusTracks = document.getElementById("focus-tracks");
    focusTracks.innerHTML = "";

    focusTracks.onclick = () => {
      const albumId = albumSelected6.data[0].album.id;
      window.location.href = `./album.html?albumId=${albumId}`;
    };

    focusTracks.innerHTML = `<div class="w-100 col-lg-4 col-6 rounded-1 d-flex align-items-center pointer custom-cols-w" id="focus-tracks">
    <div class="row w-100 m-0 align-items-center">
      <div class="col-3 d-flex align-items-center p-0">
        <img src="${albumSelected6.data[0].album.cover}" class="w-100" />
      </div>
      <div class="col-9">
        <p class="m-0 fw-bold pointer">${albumSelected6.data[0].album.title}</p>
      </div>
    </div>
  </div>`;
  } catch (error) {
    console.error(error);
  }

  try {
    const resp = await fetch(URL + "chillstep mix", {
      method: "GET",
    });

    const albumSelected = await resp.json();
    console.log(albumSelected);
    const totalSeconds = albumSelected.data[0].duration;
    console.log(totalSeconds);

    const formattedDuration = formatDuration(totalSeconds);

    function formatDuration(seconds) {
      const hours = Math.floor(seconds / 3600);
      const minutes = Math.floor((seconds % 3600) / 60);
      const remainingSeconds = seconds % 60;

      if (hours > 0) {
        const formattedTime = `${hours.toString().padStart(2, "0")}:${minutes
          .toString()
          .padStart(2, "0")}:${remainingSeconds.toString().padStart(2, "0")}`;
        return formattedTime;
      } else {
        const formattedTimeSecond = `${minutes.toString().padStart(1, "0")}:${remainingSeconds
          .toString()
          .padStart(2, "0")}`;
        return formattedTimeSecond;
      }
    }
    const buttonPlay = document.getElementById("btn-play");
    const dynamicPlayer = document.getElementById("dynamic-player");
    const songOne = document.getElementById("song-1");

    buttonPlay.addEventListener("click", () => {
      // const playAudio = async function () {
      //   if (selectedTrack) {
      //     let audio = new Audio(selectedTrack);
      //     audio.type = "audio/mp3";
      //   }
      // };
      // playAudio();
      dynamicPlayer.innerHTML = `<div class="d-flex align-items-center">
    <div class="d-flex align-items-center">
      <img class="img-player" src="https://e-cdns-images.dzcdn.net/images/cover/7597ea739f7e67e94aa7ea36880d4efe/500x500-000000-80-0-0.jpg" alt="img" />
      <div class="d-flex flex-column justify-content-center mx-3">
        <h4  class="fs-6 m-0" id="footer-title">${albumSelected.data[0].title}</h4>
        <span class="fs-6 m-0" id="footer-artist">${albumSelected.data[0].artist.name}</span>
      </div>
    </div>
    <div class="d-flex align-items-center">
      <a href="#" class="text-light"><i class="bi bi-heart like"></i></a>
    </div>
  </div>
  <div class="d-flex flex-column">
    <div class="d-flex align-items-center justify-content-center">
      <i class="bi bi-shuffle mx-3 fs-4 text-success"></i>
      <i class="bi bi-skip-start-fill mx-3 fs-4"></i>
      <i class="bi bi-play-circle-fill mx-3 fs-3 pointer"></i>
      <i class="bi bi-skip-end-fill mx-3 fs-4"></i>
      <i class="bi bi-arrow-clockwise mx-3 fs-4 text-success"></i>
    </div>
    <div class="slider_container">
      <div class="current-time">00:00</div>
      <input type="range" min="0" max="100" value="0" class="seek_slider" />
      <div class="total-duration">${formattedDuration}</div>
    </div>
  </div>

  <div class="d-flex align-items-center">
    <i class="bi bi-mic-fill mx-1 text-white-50"></i>
    <i class="bi bi-list mx-1 text-white-50"></i>
    <i class="bi bi-music-player mx-1 text-white-50"></i>
    <label class="slider">
      <input type="range" class="level" />
      <svg
        class="volume"
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        width="512"
        height="512"
        x="0"
        y="0"
        viewBox="0 0 24 24"
        style="enable-background: new 0 0 512 512"
        xml:space="preserve"
      >
        <g>
          <path
            d="M18.36 19.36a1 1 0 0 1-.705-1.71C19.167 16.148 20 14.142 20 12s-.833-4.148-2.345-5.65a1 1 0 1 1 1.41-1.419C20.958 6.812 22 9.322 22 12s-1.042 5.188-2.935 7.069a.997.997 0 0 1-.705.291z"
            fill="currentColor"
            data-original="#000000"
          ></path>
          <path
            d="M15.53 16.53a.999.999 0 0 1-.703-1.711C15.572 14.082 16 13.054 16 12s-.428-2.082-1.173-2.819a1 1 0 1 1 1.406-1.422A6 6 0 0 1 18 12a6 6 0 0 1-1.767 4.241.996.996 0 0 1-.703.289zM12 22a1 1 0 0 1-.707-.293L6.586 17H4c-1.103 0-2-.897-2-2V9c0-1.103.897-2 2-2h2.586l4.707-4.707A.998.998 0 0 1 13 3v18a1 1 0 0 1-1 1z"
            fill="currentColor"
            data-original="#000000"
          ></path>
        </g>
      </svg>
    </label>
    <i class="bi bi-arrows-angle-expand mx-2 text-white-50"></i>
  </div>
</div>`;

      songOne.innerHTML = `<div class="song ">
<p class="name my-0" id="badge-song">${albumSelected.data[0].title}</p>
<p class="artist my-0" id="badge-artist">${albumSelected.data[0].artist.name}</p>
</div>
<div class="albumcover"><img
class="w-100 rotate-180"
src=${albumSelected.data[0].album.cover}
alt=""
/></div>
<div class="loading">
<div class="load"></div>
<div class="load"></div>
<div class="load"></div>
<div class="load"></div>
</div>`;
    });
  } catch (error) {
    console.error(error);
  }

  try {
    const resp = await fetch(URL + "good morning", {
      method: "GET",
    });
    const albumSelected = await resp.json();
    console.log(albumSelected);

    const goodMorning = document.getElementById("good-morning");
    goodMorning.innerHTML = "";

    goodMorning.onclick = () => {
      const albumId = albumSelected.data[4].album.id;
      window.location.href = `./album.html?albumId=${albumId}`;
    };

    goodMorning.innerHTML = `
      <div class="col" id="good-morning">
      <div class="card bg-dark text-light d-flex flex-column align-items-center">
        <img src="assets/imgs/main/image-7.jpg" class="card-img-top custom-img-card mt-2" alt="..." />
        <div class="card-body">
          <h5 class="card-title pointer">Good Morning</h5>
          <p class="card-text font-09">Le playlist migliori per un perfetto buongiorno</p>
        </div>
      </div>
    </div>`;

    const resp2 = await fetch(URL + "imagine dragons", {
      method: "GET",
    });
    const albumSelected2 = await resp2.json();
    console.log(albumSelected2);

    const imagineDragons = document.getElementById("imagine-dragons");
    imagineDragons.innerHTML = "";

    imagineDragons.onclick = () => {
      const albumId = albumSelected2.data[6].album.id;
      window.location.href = `./album.html?albumId=${albumId}`;
    };

    imagineDragons.innerHTML = `
      <div class="card bg-dark text-light d-flex flex-column align-items-center">
      <img src="assets/imgs/main/image-11.jpg" class="card-img-top custom-img-card mt-2" alt="..." />
      <div class="card-body">
        <h5 class="card-title pointer">Imagine Dragons</h5>
        <p class="card-text font-09">Le canzoni di una delle band migliori al mondo</p>
      </div>
    </div>
  </div>`;

    const resp3 = await fetch(URL + "street culto", {
      method: "GET",
    });
    const albumSelected3 = await resp3.json();
    console.log(albumSelected);

    const streetCulto = document.getElementById("street-culto");
    streetCulto.innerHTML = "";

    streetCulto.onclick = () => {
      const albumId = albumSelected3.data[0].album.id;
      window.location.href = `./album.html?albumId=${albumId}`;
    };

    streetCulto.innerHTML = `
     <div class="card bg-dark text-light d-flex flex-column align-items-center">
     <img src="assets/imgs/main/image-19.jpg" class="card-img-top custom-img-card mt-2" alt="..." />
     <div class="card-body">
       <h5 class="card-title pointer">Street Culto</h5>
       <p class="card-text font-09">Ascolta le tracce rap più in voga al momento</p>
     </div>
   </div>`;

    const resp4 = await fetch(URL + "estate 2022", {
      method: "GET",
    });
    const albumSelected4 = await resp4.json();
    console.log(albumSelected);

    const estate2022 = document.getElementById("estate-2022");
    estate2022.innerHTML = "";

    estate2022.onclick = () => {
      const albumId = albumSelected4.data[1].id;
      window.location.href = `./album.html?albumId=${albumId}`;
    };

    estate2022.innerHTML = `
      <div class="card bg-dark text-light d-flex flex-column align-items-center">
      <img src="assets/imgs/main/image-18.jpg" class="card-img-top custom-img-card mt-2" alt="..." />
      <div class="card-body">
        <h5 class="card-title pointer text-start">Estate 2022</h5>
        <p class="card-text font-09">Le migliori hit in un solo album!</p>
      </div>
    </div>`;

    const resp5 = await fetch(URL + "mood booster", {
      method: "GET",
    });
    const albumSelected5 = await resp5.json();
    console.log(albumSelected);

    const mood = document.getElementById("mood");
    mood.innerHTML = "";

    mood.onclick = () => {
      const albumId = albumSelected5.data[1].album.id;
      window.location.href = `./album.html?albumId=${albumId}`;
    };

    mood.innerHTML = `
      <div class="card bg-dark text-light d-flex flex-column align-items-center">
      <img src="./assets/imgs/search/image-51.jpg" class="card-img-top custom-img-card mt-2" alt="..." />
      <div class="card-body">
        <h5 class="card-title pointer">Mood Booster</h5>
        <p class="card-text font-09">Le playlist migliori per un perfetto buongiorno</p>
      </div>
    </div>`;

    const resp6 = await fetch(URL + "jazz", {
      method: "GET",
    });
    const albumSelected6 = await resp6.json();
    console.log(albumSelected);

    const jazz = document.getElementById("jazz");
    jazz.innerHTML = "";

    // jazz.id = "dynamic-album";

    jazz.onclick = () => {
      const albumId = albumSelected6.data[5].album.id;
      window.location.href = `./album.html?albumId=${albumId}`;
    };

    jazz.innerHTML = `
      <div class="card bg-dark text-light d-flex flex-column align-items-center">
      <img src="./assets/imgs/search/image-20.jpg" class="card-img-top custom-img-card mt-2" alt="..." />
      <div class="card-body">
        <h5 class="card-title pointer">Jazz Appreciation</h5>
        <p class="card-text font-09">Ascolta le tracce jazz più in voga al momento</p>
      </div>
    </div>`;

    const resp7 = await fetch(URL + "peaceful guitar", {
      method: "GET",
    });
    const albumSelected7 = await resp7.json();
    console.log(albumSelected);

    const guitar = document.getElementById("guitar");
    guitar.innerHTML = "";

    guitar.onclick = () => {
      const albumId = albumSelected7.data[0].album.id;
      window.location.href = `./album.html?albumId=${albumId}`;
    };

    guitar.innerHTML = `
      <div class="card bg-dark text-light d-flex flex-column align-items-center">
                    <img src="./assets/imgs/search/image-24.jpg" class="card-img-top custom-img-card mt-2" alt="..." />
                    <div class="card-body">
                      <h5 class="card-title pointer">Peaceful Guitar</h5>
                      <p class="card-text font-09">Ascolta le tracce rap più in voga al momento</p>
                    </div>
                  </div>`;

    const resp8 = await fetch(URL + "afro hits", {
      method: "GET",
    });
    const albumSelected8 = await resp8.json();
    console.log(albumSelected);

    const afro = document.getElementById("afro");
    afro.innerHTML = "";

    afro.onclick = () => {
      const albumId = albumSelected8.data[0].album.id;
      window.location.href = `./album.html?albumId=${albumId}`;
    };

    afro.innerHTML = `
      <div class="card bg-dark text-light d-flex flex-column align-items-center">
                    <img src="./assets/imgs/search/image-28.jpg" class="card-img-top custom-img-card mt-2" alt="..." />
                    <div class="card-body">
                      <h5 class="card-title pointer">Afro Hits</h5>
                      <p class="card-text font-09">Ascolta le tracce afro più in voga al momento</p>
                    </div>
                  </div>`;
  } catch (error) {
    console.error(error);
  }

  let annunciDiv = document.getElementById("classified-ads");
  let toggleAnnunci = document.getElementById("toggle-annunci");
  let showAnnunci = document.getElementById("show-annunci");

  if (annunciDiv && toggleAnnunci && showAnnunci) {
    toggleAnnunci.addEventListener("click", function () {
      if (annunciDiv.style.display === "none") {
        annunciDiv.style.display = "block";
        toggleAnnunci.textContent = "NASCONDI ANNUNCI";
        showAnnunci.style.display = "none";
      } else {
        annunciDiv.style.display = "none";
        toggleAnnunci.textContent = "MOSTRA ANNUNCI";
        showAnnunci.style.display = "block";
      }
    });
  }
});
