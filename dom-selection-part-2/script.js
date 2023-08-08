// Metode querySelector() mengembalikan Elemen pertama dalam dokumen yang cocok dengan pemilih tertentu, atau grup pemilih. Jika tidak ada kecocokan yang ditemukan, null dikembalikan.

const p3 = document.querySelector("#a .p3");
const li3 = document.querySelector("#b ul li:nth-child(5)");
li3.style.backgroundColor = "red";

const p2 = document.querySelector("p");
p2.innerHTML = "Ini diubah";

// Metode Dokumen querySelectorAll() mengembalikan NodeList statis (bukan langsung) yang mewakili daftar elemen dokumen yang cocok dengan grup pemilih yang ditentukan.
const p = document.querySelectorAll("p");

p[2].style.fontSize = "10px";

// =========>> =========>> =========>> =========>> =========>> =========>>

// Mengubah node root

const sectionB = document.getElementById("b");
const p4 = sectionB.querySelector("p");
