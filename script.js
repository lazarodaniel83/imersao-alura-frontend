const serchInput = document.getElementById('search-input');
const resultArtist = document.getElementById('result-artist');
const resultPlaylist = document.getElementById('result-playlist');

function requestApi(searchTerm){
    
}

document.addEventListener('input', () => {
    const searchTerm = searchInput.value.toLowerCase();
    if (searchTerm === ''){
        resultPlaylist.classList.add('hidden');
        resultArtits.classList.remove('hidden');
        return;
    }      
})