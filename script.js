function Converter(){
    let cm = Number(document.getElementById("input").value);
    let inches = cm/2.54;
    let result = document.getElementById("result");
    result.innerHTML = inches.toFixed(3) + "inches";
    
}