function converte(){
    var temperaturaInicial = Number(document.getElementById("campo").value)
    var resultado = 0
    if(document.getElementById("cf").checked){
        resultado = (temperaturaInicial * 9/5) +32
    }
    else if(document.getElementById("fc").checked){
        resultado = (temperaturaInicial -32) * 5/9
    }
    //Fazer os demais else if com suas respectivas fórmulas

    document.getElementById("r").innerHTML = resultado
}
