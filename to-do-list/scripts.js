let todoCount = 1
$("#todoAdd").click(() => {
  let todotask = $("#inputBox").val()
  $(".todoList").append(`<div class="listItem${todoCount} listItems"></div>`)
  $(`.listItem${todoCount}`).append(`<p class="listContent ${todoCount}">${todotask}</p>`)
  $(`.listItem${todoCount}`).append(`<div class="listItemRight${todoCount} listItemRights"></div>`)
  $(`.listItemRight${todoCount}`).append(`<i class="fa-solid fa-trash fa-2x trashIcons ${todoCount}""></i>`)
  $(`.listItemRight${todoCount}`).append(`<span class="todoCheck"><i class="fa-regular fa-circle-check fa-2x todoChecks ${todoCount}"></i></span>`)
  $("#inputBox").val("")
  todoCount = todoCount + 1
  
  $("span").click(() => {

    console.log("ball")
  })

  })