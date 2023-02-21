let count = 0

$("#novekvo").click(() => {
  count = count + 1
  $("#szamlalo").html(`${count}`)
})

$("#csokkeno").click(() => {
  count = count - 1 
  $("#szamlalo").html(`${count}`)
})