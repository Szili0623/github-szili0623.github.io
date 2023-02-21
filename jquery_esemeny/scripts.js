$(".button1").click(() => {
  console.log("Igen, most rámkattintottál")
})

$(".button2").click(() => {
  $(".button1").text("Megvátoztatott felirat")
})

let changeCount = 0
$(".button3").click(() => {
  let colorValue = $("#colorInput").val()
  $(".button3").css("background",`${colorValue}`)
  changeCount = changeCount + 1
  if (changeCount >= 3) {
  $(".button3").prop("disabled",true)
  }
})

$("#nagyGomb").click (() => {
  $("div").append("<h1>Rommá fostam a pantallóm.</h1>")
})