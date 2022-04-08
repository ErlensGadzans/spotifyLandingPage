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

window.onload = async function () {
  let bonJoviSongs = await loadSongs("bon_jovi");
  let songsDiv = document.getElementById("songs");

  bonJoviSongs.forEach(
    (song) =>
      (songsDiv.innerHTML += `<div class="song-card">
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
};
