let num = 0
let yep = 0

function mudar(){
    num++
    if (num == 1){
        document.body.style.transition = "3s"
        document.body.style.backgroundImage = "url(../images/background.png)"
    }
    if (num == 2){
        num = 0
    }
    if (num == 0){
        document.body.style.backgroundImage = ""
    }
}

function appear(){
    yep++
    if (yep == 1){
        document.getElementById("barra-config").style.display = "block"
    }
    if (yep == 2){
        yep = 0
    }
    if (yep == 0){
        document.getElementById("barra-config").style.display = "none"
    }
}

