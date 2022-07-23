console.log("vista detalle")

let urlParams = new URLSearchParams(window.location.search)

let albumKey = urlParams.get("albumKey")

console.log(albumKey)

const getAlbum = albumKey => {

    let xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            let response = JSON.parse(xhttp.responseText);
            console.log(response)
            printAlbumData(response)

        }
    }


    xhttp.open("GET", `https://ajaxclass-1ca34-91895-default-rtdb.firebaseio.com/11g/jonathan/albums/${albumKey}/.json`, true);

    xhttp.send();


}

const printAlbumData = data => {
    let {name, band, gender} = data
    document.querySelector(".card-title").innerText = name
    document.querySelector(".card-text").innerText = band
    document.querySelector(".card-text2").innerText = gender
}


getAlbum(albumKey)