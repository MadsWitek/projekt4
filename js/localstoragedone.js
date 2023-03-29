const titel = document.querySelector("#titel")
const beskrivelse = document.querySelector("#beskrivelse")
const kategori = document.querySelector("#kategori")
const underkategori = document.querySelector("#underkategori")
const varighed = document.querySelector("#varighed")
const semester = document.querySelector("#semester")

const titelValue = localStorage.getItem("titel")
const beskrivelseValue = localStorage.getItem("beskrivelse")
const kategoriValue = localStorage.getItem("kategori")
const underkategoriValue = localStorage.getItem("underkategori")
const varighedValue = localStorage.getItem("varighed")
const semesterValue = localStorage.getItem("semester")

titel.innerHTML = titelValue;
beskrivelse.innerHTML = beskrivelseValue;
kategori.innerHTML = kategoriValue
underkategori.innerHTML = underkategoriValue
varighed.innerHTML = varighedValue
semester.innerHTML = semesterValue
