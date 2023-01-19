var letters = ['a','e','i','o','u'];
var keys = ['ai','enter','imes','ober','ufat'];
var exc = ['á','é','í','ó','ú','à','è','ì','ò','ù','ä','ë','ï','ö','ü','ÿ','â','ê','î','ô','û','ã','õ','å'];


function validation(text){

        var textFinal = text.replaceAll(' ','').toLowerCase().split('');
        
        for(var i = 0; i < text.length; i++){

                if(textFinal.includes(exc[i])){
                    return false;
                }
        }
    return true;
 
}


function encrypt (text){


        if(validation(text)){

            var textAct = text.split('');

        var textofinal = '';

        for(var i = 0; i < textAct.length; i++){

            
            for(var j = 0; j < letters.length; j++){

                if(textAct[i] == letters[j]){

                    
                    textAct[i] = keys[j]           

                }

            }
        }

        for(var k = 0; k < textAct.length; k++){

            textofinal += textAct[k];

        }
           
    return textofinal;

        }

        else{

            return false;

        }

        
        
}

function decrypt(text){
        
        var textoFinal = text; 

        for(var i = 0; i <= keys.length; i++){

            textoFinal = textoFinal.replaceAll(keys[i],letters[i]);
        }

    return textoFinal;
    
}

function ocultarMensaje(){

    document.querySelector('.mensajesBusq').style.display = "none";
    document.querySelector('.mensaje').style.background = "white";
    document.querySelector('.btn-copiar').style.visibility = "visible";

}

function onclickEncriptar(){

    
    ocultarMensaje();
    var texto = document.querySelector("#textoEncriptar").value;
    var textoencript = encrypt(texto);

    if(textoencript != false){

        document.querySelector('#resultado').innerHTML = textoencript;

    }else{


        alert("Carácter inválido, no se permiten los acentos.")


    }
    

    


}

function onclickDesencriptar(){

    ocultarMensaje();
    var texto = document.querySelector("#textoEncriptar").value;
    var textoencript = decrypt(texto);
    

    document.querySelector('#resultado').innerHTML = textoencript;



}

function onclickCopiar(){

    copyToClipboard(document.querySelector("#resultado").value);

}



//Código de clipboard extraido de stackoverflow

function copyToClipboard(text) {
    const type = 'text/plain';
    const blob = new Blob([text], {type});
    var data = [new ClipboardItem({[type]: blob})];
  
    navigator.clipboard.write(data).then(function() {
      console.log('Copiado!')
    }, function() {
      console.log('Ups! No se copio');
    });
  }
  











