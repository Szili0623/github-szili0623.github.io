let data0 = {
  photo: "/Gallery/images/tree-736885.jpg",
  title: "Fa a napnyugtában",
  description: "Óceánra néző fa a napnyugtában"
}

let data1 = {
  photo: "/Gallery/images/alpine-7703065_1920.jpg",
  title: "Alpesi hegyek",
  description: "Gyönyörű táj"
}

let data2 = {
  photo: "/Gallery/images/benches-560435_1920.jpg",
  title: "Őszi padok",
  description: "Őszi táj padokkal"
}

let data3 = {
  photo: "/Gallery/images/fox-1284512_1920.jpg",
  title: "Róka",
  description: "Havasi róka"
}

let data4 = {
  photo: "/Gallery/images/pink-324175_1920.jpg",
  title: "Barackfa virág",
  description: "Cherry blossom flower"
}

let data5 = {
  photo: "/Gallery/images/road-1072821_1920.jpg",
  title: "Őszi út",
  description: "Út egy őszi erdőben"
}

let data6 = {
  photo: "/Gallery/images/rose-165819_1920.jpg",
  title: "Rózsa",
  description: "Kék rózsa harmattal"
}

let data7 = {
  photo: "/Gallery/images/starling-7828426_1920.jpg",
  title: "Madár",
  description: "Valamilyen madár"
}
let currentPhoto = 0
let imagesData = [data0, data1, data2, data3, data4, data5, data6, data7, ]
let loadPhoto = (currentPhoto) => {
$(`.thumbnail`).toggleClass("thumbnailActive", false)
$("#photo").attr("src", imagesData[currentPhoto].photo)
$("#photoTitle").html(imagesData[currentPhoto].title)
$("#photoDescription").html(imagesData[currentPhoto].description)
$(`.activeThumbnail${currentPhoto}`).toggleClass("thumbnailActive", true)
}
loadPhoto(currentPhoto)

$("#rightButton").click(() => {
  if (currentPhoto < 7) {
    currentPhoto++
  } else {
    currentPhoto = 0
  }
  loadPhoto(currentPhoto)
})

$("#leftButton").click(() => {
  if (currentPhoto > 0) {
    currentPhoto--
  } else {
    currentPhoto = 7
  }
  loadPhoto(currentPhoto)
})

let thumbnailCount = 0
imagesData.forEach(() => {
  let thumbnailTitle = (imagesData[thumbnailCount].title)
  $(".thumbnailContainer").append(`<div class="thumbnail activeThumbnail${thumbnailCount}" data-number="${thumbnailCount}"><img id="thumbnailPhoto${thumbnailCount}" data-number="${thumbnailCount}"><div class="hiddenText">${thumbnailTitle}</div></div>`)
  $(`#thumbnailPhoto${thumbnailCount}`).attr("src", imagesData[thumbnailCount].photo)
  thumbnailCount++
})

$(".thumbnail").click((event) => {
  let currentPhoto = $(event.target).attr("data-number")
  loadPhoto(currentPhoto)
})

$("#rightButton").hover(() => {
  $("#rightButton img").toggleClass("buttonFade")
})

$("#leftButton").hover(() => {
  $("#leftButton img").toggleClass("buttonFade")
})
