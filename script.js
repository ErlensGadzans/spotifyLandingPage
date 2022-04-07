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

// window.onload = async function () {
//   let bonJoviSongs = await loadSongs("bon_jovi");
//   let songsDiv = document.getElementById("songs");

//   bonJoviSongs.forEach(
//     (song) => (songsDiv.innerHTML += `<p>${song.title}</p>`)
//   );
// };
