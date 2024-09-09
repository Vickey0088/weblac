const searchSong = () => {
    let songName = document.getElementById('search-field').value;
    fetch(`https://api.lyrics.ovh/suggest/${songName}`)
        .then(res => res.json())
        .then(data => displaySong(data.data));
}

const fetchSongs = () => {
    fetch('https://api.lyrics.ovh/suggest/top')
        .then(res => res.json())
        .then(data => displaySong(data.data));
};
 
const fetchArtistSongs = artistName => {
    fetch(`https://api.lyrics.ovh/suggest/${artistName}`)
        .then(res => res.json())
        .then(data => displaySong(data.data.slice(0, 30)));
};

const resetPage = () => {
    const songContainer = document.getElementById("song-container");
    songContainer.innerHTML = '';
};

const displaySong = songs => {
    const songContainer = document.getElementById("song-container");
    songContainer.innerHTML = '';
    songs.forEach(song => {
        const songDiv = document.createElement("div");
        songDiv.className = "div1";
        songDiv.innerHTML = `
            <img class="image" src="${song.album.cover_medium}" width="200px" height="200px"/>
            <br>
            <p>${song.title}</p>
            <p>By: ${song.artist.name}</p>
            <audio controls>
                <source src="${song.preview}" type="audio/mpeg">
            </audio>
        `;
        songContainer.appendChild(songDiv);
    });
}
