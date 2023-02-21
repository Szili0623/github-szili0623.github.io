$("#todoButton").click(() => {
  let todo = $("#todoInput").val()
  $("body").append(`<p>${todo}</p>`)
})
