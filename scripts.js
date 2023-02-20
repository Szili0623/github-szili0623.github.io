let printNumbersTill = (i) => {
  let numberCount = i
  for (let i = 0; i < numberCount; i = i + 1) {
    console.log(i + 1)
  }
}

let getGreetingTo = (nev) => {
  console.log(`Hello ${nev}!`)
}

let printValues = (array) => {
  array.forEach((numbers) => {
    console.log(numbers)
  })
}

let osszeAdas = (array) => {
  let eredmeny = 0
  for (let i = 0; i < array.length; i = i + 1) {
    eredmeny = eredmeny + array[i]
  }
  console.log(eredmeny)
}

let szorzas = (array) => {
  let eredmeny = 1
  for (let i = 0; i < array.length; i = i + 1) {
    eredmeny = eredmeny * array[i]
  }
  console.log(eredmeny)
}

let osszeAdas2 = (array) => {
  let eredmeny = 0
  array.forEach((number) => {
    eredmeny = eredmeny + number
  })
  console.log(eredmeny)
}

let szorzas2 = (array) => {
  let eredmeny = 1
  array.forEach((number) =>{
    eredmeny = eredmeny * number
  })
  console.log(eredmeny)
}