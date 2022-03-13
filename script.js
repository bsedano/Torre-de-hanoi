const body = document.getElementById("body")
const box = document.getElementById("container")
const options = document.querySelectorAll("option")
const selections = document.querySelector("select")



const criarTorres = (quantidade) => {

    let i = 0

    while (i < quantidade) {
        const tower = document.createElement("div")
        tower.classList.add("tower")
        body.appendChild(tower)
        i++
    }
}

criarTorres(3)

const torres = document.querySelectorAll("body .tower")

let width = 350

const criarDiscos = (quantidade) => {

    torres.forEach(torre => torre.innerHTML = "")

    let i = 0

    while (i < quantidade) {

        const disco = document.createElement("div")

        disco.style.width = width + "px"

        width -= 50

        disco.style.height = 50 + "px"

        disco.classList.add("disk")

        torres[0].appendChild(disco)

        i++
    }

    width = 350
}

criarDiscos(3)


const discos = document.querySelectorAll("body .disk")

const contador = document.getElementById("contador")

let count = 0

const diskToTower = (event) => {

    let filhosBox = box.childElementCount
    let filhosEvent = event.currentTarget.childElementCount


    if (filhosBox == 1) {

        if (filhosEvent == 0 || box.lastChild.clientWidth < event.currentTarget.lastChild.clientWidth) {

            event.currentTarget.appendChild(box.lastChild)

        } else { console.log("movimento inválido") }


    } else {

        box.appendChild(event.currentTarget.lastChild)
        contadorMov()

    }
}

torres.forEach((torre) =>

    torre.addEventListener("click", diskToTower))

body.addEventListener("mouseover", winCondition)

const reload = () => {

    torres.forEach(torre => torre.innerHTML = "")

    box.innerHTML = ""

    criarDiscos(3)

    selections.value = "easy"

    h1.innerText = "Torre de Hanoi"

    count = 0

    contador.innerHTML = "Movimentos" + ": " + 0

}

const restartBtn = document.getElementById("restart")

restartBtn.addEventListener("click", reload)

const h1 = document.getElementById("h1")


function winCondition() {

    if (torres[torres.length - 1].childElementCount == discos.length) {
        if (count <= 15) {
            h1.innerText = "Parabéns, vitória perfeita!"
        } else {
            h1.innerText = "Parabéns, você venceu!"
        }

    }
}

function contadorMov() {

    count++
    contador.innerHTML = "Movimentos" + ": " + count

}


function escolherDificuldade(event) {

    torres.forEach(torre => torre.innerHTML = "")

    let dificuldade = event.currentTarget.value

    return dificuldade === "easy" ? criarDiscos(3) : dificuldade === "medium" ? criarDiscos(4) : criarDiscos(5)

}


options.forEach((opcao) => {
    opcao.addEventListener("click", escolherDificuldade)
})