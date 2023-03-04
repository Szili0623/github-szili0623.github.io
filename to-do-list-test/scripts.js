$("#todoButton").click(() => {
  let todo = $("#todoInput").val()
  $("body").append(`<p>${todo}</p>`)
})

let buttonCounter = 1
$("#moreButton").click(() => {
  $("html").append(`<div class="container${buttonCounter}"></div>`)
  $(`.container${buttonCounter}`).append(`<button id="buttonNumber${buttonCounter}">${buttonCounter}</button>`)
  buttonCounter = buttonCounter + 1
  })

let gomb = ($("html").click(() => {
  $("").html(event.target.id)
  console.log(event.target.id)
}))

$("button").click(() => {
  $("#gomb").css("background", "yellow")
})