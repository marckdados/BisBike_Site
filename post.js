function fazPost(url,body){
    body = JSON.stringify(body)
    console.log("BODY: ", body)
    let request = new XMLHttpRequest();
    request.open("POST",url,true);
    request.setRequestHeader("Content-type","application/json");
    request.send(body)

    request.onLoad = function(){
        console.log(this.responseText)
    }

    return request.responseText
}
function validarLogin(){
    event.preventDefault()
    let url = "https://bisbike-backend.herokuapp.com/usuario/login"
    let userName = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    let body = {
        "usuario": userName,
        "senha": password 
     };
    fazPost(url,body)
}