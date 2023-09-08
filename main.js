setInterval(work,100);

function work(){
    var range = document.getElementById('range').value;
    var maini2 = document.getElementById('maini');
    maini2.src = 'img/'+range+'.jpg';
}


// document.getElementById('right').addEventListener('click', rightf, false)
// document.getElementById('left').addEventListener('click', leftf, false)
// var i = 0;

// function rightf(){
//     if(i<8){
//         i++;
//     }
//     else if(i = 8){
//         i = 1;
//     }
//     document.getElementById("maini").src = 'img/'+i+'.jpg';
// }

// function leftf(){
//     if(i>1){
//         --i;
//     }
//     else if(i=1){
//         i=8;
//     }
// document.getElementById('maini').src = 'img/'+i+'.jpg';    
// }
// console.log(imgmain);
