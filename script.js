async function loadSongs(artist) {
  let response = await fetch(
    "https://deezerdevs-deezer.p.rapidapi.com/search?q=" + artist,
    {
      method: "GET",
      headers: {
        "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
        "X-RapidAPI-Key": "",
      },
    }
  );
  let songsResponse = await response.json();
  console.log(songsResponse.data);
  return songsResponse.data;
}

async function renderSongs(artist) {
  let songs = await loadSongs(artist);
  let songsDiv = document.getElementById("songs");

  // Creating divs with class names by JS
  // <div> Title </div>
  //<div>song inside </div>

  let artistSection = document.createElement("div"); //creating parent div
  let title = document.createElement("h2"); //creating title of the section
  title.innerText = "Songs from " + artist; // setting text for it
  artistSection.appendChild(title); //adding title to the section

  let songsContainer = document.createElement("div"); //creating container for my songs
  songsContainer.classList.add("song-list"); //adding classList for the future needs

  songs.forEach(
    (song) =>
      (songsContainer.innerHTML +=
        //forEach sing I use card, which was made previously
        `<div class="song-card">
<img
  class="song-card-image"
  alt="here supposed to be a picture"
  src ="${song.album.cover_medium}"
/>
<div class="song-card-info">
  <div class="song-card-artist">${song.artist.name}</div>
  <div class="song-card-album">${song.album.title}</div>
  <div class="song-card-title">
    ${song.title}
  </div>
</div>
<div class="song-card-play"></div>
</div>`)
  );

  artistSection.appendChild(songsContainer); //adding the songs container to the artist section

  songsDiv.appendChild(artistSection); //adding the artist section to the page
}

window.onload = async function () {
  renderSongs("metallica");
  renderSongs("bon_jovi");
};
