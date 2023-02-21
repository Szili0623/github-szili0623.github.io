let nevek = ["<strong>Szilárd</strong>", "Bence", "Robi", "Gergő"]

nevek.forEach((nev) => {
  $("ul").append(`<li> ${nev} </li>`)
})

let additionalBlock = {
  title: "Beillesztve JavaScripttel",
  text: "Ez a blokk a JavaScript jQuery könyvtárával lett beillesztve. Király!"
};

$("body").append(`<h1>${additionalBlock.title}</h1>`)
$("body").append(`<p>${additionalBlock.text}</p>`)