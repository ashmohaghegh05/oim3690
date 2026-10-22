const songs = [
    "Blinding Lights",
    "Cruel Summer",
    "As It Was",
    "Levitating",
    "Flowers"
];

const playlist = document.querySelector("#playlist");

for (let i = 0; i < songs.length; i++) {

    const listItem = document.createElement("li");

    listItem.textContent = songs[i];

    playlist.appendChild(listItem);
}
