const URL = "https://striveschool-api.herokuapp.com/api/deezer/album/";
const albumId = new URLSearchParams(window.location.search).get("albumId");

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

function reverseDate(dateString) {
  const dateComponents = dateString.split("-");
  const reversedDate = dateComponents.reverse().join("/");

  return reversedDate;
}

document.addEventListener("DOMContentLoaded", async () => {
  try {
    const resp = await fetch(URL + albumId, {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "446acbbc21mshddea86ae7700867p1e29b9jsnd56234c5f0d5",
        "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
      },
    });

    const album = await resp.json();
    console.log(album);

    const totalSeconds = album.duration;

    const formattedDuration = formatDuration(totalSeconds);

    const originalDate = album.release_date;
    const reversedDate = reverseDate(originalDate);

    const infoAlbum = document.getElementById("albumList");

    infoAlbum.innerHTML = `
    <div id="albumList" class="d-flex flex-column align-items-center flex-lg-row mt-4">
            <img src="${album.cover_medium}" class="big-album-image pointer" alt="" />
            <div class="d-flex flex-column ms-4 w-100">
              <h6 class="mb-3 d-none d-lg-flex">ALBUM</h6>
              <h1 id="songTitle" class="fw-bold mb-3 pointer mt-3 mt-lg-0">${album.title}</h1>
              <div class="d-flex align-items-center">
                <p class="m-0 fw-bold">${album.artist.name}</p>
                <span class="d-none d-lg-flex">&nbsp;-&nbsp;</span>
                <p class="m-0 d-none d-lg-flex">${reversedDate}</p>
                <span class="d-none d-lg-flex">&nbsp;-&nbsp;</span>
                <p class="m-0 fw-bold d-none d-lg-flex">${album.nb_tracks}</p>
                <span class="d-none d-lg-flex">,&nbsp;</span>
                <p class="m-0 d-none d-lg-flex">${formattedDuration}.</p>
              </div>
            </div>
          </div> `;

    const tracksList = document.getElementById("tracks-list");

    for (let i = 0; i < album.tracks.data.length; i++) {
      let tracksData = album.tracks.data[i];

      let trackDuration = tracksData.duration;

      let trackDurationReader = formatDuration(trackDuration);

      const trackContainer = document.createElement("div");
      trackContainer.onclick = () => {
        addSongPlayer(tracksData);
      };

      trackContainer.innerHTML = `
      <div id="tracks-list" class="d-flex flex-column">
      <div class="row w-100 mx-0 mb-2 mt-1">
         <div class="col-7 p-0 px-2">
           <div class="d-flex align-items-center">
             <p class="m-0 text-secondary fs-5">${i + 1}</p>
             <div class="d-flex flex-column ms-3">
               <h6 id="play" style="cursor: pointer" class="m-0" onclick="">${tracksData.title}</h6>
               <p class="m-0 text-secondary" style="cursor: pointer" id="name-artist">${tracksData.artist.name}</p>
             </div>
           </div>
         </div>
         <div class="col-3 px-2 text-secondary d-flex flex-column align-items-end">
           <p class="m-0 text-secondary d-none d-lg-flex">${tracksData.rank}</p>
         </div>
         <div class="col-2 p-0 px-2 d-flex flex-column align-items-end">
           <i class="bi bi-three-dots-vertical d-lg-none text-white-50 me-2"></i>
           <p class="m-0 text-secondary d-none d-lg-flex">${trackDurationReader}</p>
         </div>
       </div>`;

      tracksList.appendChild(trackContainer);

      const dynamicPlayer = document.getElementById("dynamic-player");
      const songOne = document.getElementById("song-1");

      const addSongPlayer = (songData) => {
        dynamicPlayer.innerHTML = "";

        console.log(songData);
        //PLAYER - CANZONE IN ASCOLTO
        dynamicPlayer.innerHTML = `<div class="d-flex align-items-center">
        <div class="d-flex align-items-center">
          <img class="img-player" src="${album.cover_small}" alt="img" />
          <div class="d-flex flex-column justify-content-center mx-3">
            <h4  class="fs-6 m-0" id="footer-title">${songData.title_short}</h4>
            <span class="fs-6 m-0" id="footer-artist">${songData.artist.name}</span>
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
          <div class="total-duration">${trackDurationReader}</div>
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
    <p class="name my-0  id="badge-song">${songData.title}</p>
    <p class="artist my-0" id="badge-artist">${songData.artist.name}</p>
    </div>
    <div class="albumcover"><img
    class="w-100 rotate-180"
    src=${songData.album.cover}
    alt=""
    /></div>
    <div class="loading">
    <div class="load"></div>
    <div class="load"></div>
    <div class="load"></div>
    <div class="load"></div>
    </div>`;
      };
    }
  } catch (error) {
    console.error(error);
  }

  try {
    const resp = await fetch(URL + albumId, {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "446acbbc21mshddea86ae7700867p1e29b9jsnd56234c5f0d5",
        "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
      },
    });

    const singleArtist = await resp.json();
    console.log(singleArtist);

    const nameArtistElements = document.querySelectorAll("#tracks-list p");

    nameArtistElements.forEach((nameArtist) => {
      nameArtist.addEventListener("click", () => {
        const artistId = singleArtist.artist.id;
        window.location.href = `./artist.html?artistId=${artistId}&albumId=${albumId}`;
      });
    });
  } catch (error) {
    console.error(error);
  }
});

const findSong = function () {};
