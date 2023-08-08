/* document.getElementByID => perintah untuk menyuruh javascript menemukan element berdasarkan id-nya yang ada di dalam dokumen */

const judul = document.getElementById("judul"); /* Menyeleksi element yang memiliki id judul lalu ditampung dalam sebuah variable */

/* document.getElementByID akan mengembalikan element */

judul.style.color = "salmon";

// =========>> =========>> =========>> =========>> =========>> =========>>

/* document.getElementsByTagName => perintah untuk menyuruh javascript menemukan element berdasarkan tagnya yang ada di dalam dokumen */

const p = document.getElementsByTagName("p"); /* Menyeleksi element yang memiliki tag p lalu ditampung dalam sebuah variable */

/* document.getElementsTagName akan mengembalikan HTML Collection */
for (let i = 0; i < p.length; i++) {
  p[i].style.backgroundColor = "salmon";
}

// =========>> =========>> =========>> =========>> =========>> =========>>

/* document.getElementsClassName => perintah untuk menyuruh javascript menemukan element berdasarkan nama classnya yang ada di dalam dokumen */

const p1 = document.getElementsByClassName("p1")[0]; /* Menyeleksi element yang memiliki class p1 dengan index pertama[0] lalu ditampung dalam sebuah variable */
p1.innerHTML = "Ini diubah melalui javascript";
