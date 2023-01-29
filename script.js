let count = 1;
document.getElementById("radio1").checked = true;

setInterval( function(){
    proxima();
}, 2000)

function proxima(){
    count++;
    //se for maior de 4 volta para a primeira
    if(count>4){
        count=1;
    }

    document.getElementById("radio"+count).checked = true;
}