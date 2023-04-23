function Descobrir(){
    let nome = document.getElementById("nome__campo")

    let demo = document.getElementById("mostrar")
    
    demo.innerHTML = (`Olá, ${nome.value} seu nome tem ${nome.value.length} letras`)
}