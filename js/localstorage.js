const form = document.querySelector("#form");
const titel = document.querySelector("#titel")
const beskrivelse = document.querySelector("#beskrivelse")
const kategori = document.querySelector("#kategori")
const underkategori = document.querySelector("#underkategori")
const varighed = document.querySelector("#varighed")
const semester = document.querySelector("#semester")

form.addEventListener("submit", function (e) {
    e.preventDefault();

    localStorage.setItem("titel", titel.value)
    localStorage.setItem("beskrivelse", beskrivelse.value)
    localStorage.setItem("kategori", kategori.value)
    localStorage.setItem("underkategori", underkategori.value)
    localStorage.setItem("varighed", varighed.value)
    localStorage.setItem("semester", semester.value)

    window.location.href = "/opretdone.html"
})