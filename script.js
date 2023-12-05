document.addEventListener('click', function() {
    var audio = document.getElementById('meuAudio');
    audio.play();
  });

const element = document.getElementById('pagina')

element.addEventListener('mousemove', (event) => {
    let x = event.clientX;
    let y = event.clientY;
    let mira = document.getElementById('aim')
    mira.style.top = `${y-90}px`
    mira.style.left = `${x-90}px`
})

let vida = 3
let abates = 0

const atirar = document.getElementById('pagina')
atirar.onclick = async function(e){
    e.preventDefault()
    
    var disparo = document.getElementById('disparo')
    disparo.style.display = 'block'
    setTimeout(function(){
        disparo.style.display = 'none'
    }, 250)
}


const zumbi1 = document.getElementById("zumbi1")
zumbi1.onclick = function(e){
    e.preventDefault()
    zumbi1.style.display="none"
    abates = abates + 1
    kills.innerHTML = `Abates: ${abates}`
    setTimeout(function(){
        zumbi1.style.display = 'block'
    }, 4550)
}

const zumbi2 = document.getElementById("zumbi2")
zumbi2.onclick = function(e){
    e.preventDefault()
    zumbi2.style.display="none"
    abates = abates + 1
    kills.innerHTML = `Abates: ${abates}`
    setTimeout(function(){
        zumbi2.style.display = 'block'
    }, 4550)
}

const zumbi3 = document.getElementById("zumbi3")
zumbi3.onclick = function(e){
    e.preventDefault()
    zumbi3.style.display="none"
    abates = abates + 1
    kills.innerHTML = `Abates: ${abates}`
    setTimeout(function(){
        zumbi3.style.display = 'block'
    }, 4550)
}

const zumbi4 = document.getElementById("zumbi4")
zumbi4.onclick = function(e){
    e.preventDefault()
    zumbi4.style.display="none"
    abates = abates + 1
    kills.innerHTML = `Abates: ${abates}`
    setTimeout(function(){
        zumbi4.style.display = 'block'
    }, 4550)
}

