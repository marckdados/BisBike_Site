function fazGet(url){
    let request = new XMLHttpRequest()
    request.open("GET",url,false)
    request.send()   
    var data = JSON.parse(request.responseText)
    return data
}

function buscarTrajetosAll(){
    _retorno = fazGet("https://bisbike-backend.herokuapp.com/trajetos/todos");

 return  _retorno;
}