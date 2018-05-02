// une seule petite fonction sur événement onClick=
function showBox(n) { // montre le div n° n
    // cacher chacun des quatre div
    for (var i=1; i<5; i++) {
      document.getElementById('d' + i).style.display='none';
    }
    // montrer le div concerné (n° n)      
    document.getElementById('d' + n).style.display='block';

}
function afficherTout(){
    document.getElementById('d1').style.display='block'; 
    document.getElementById('d2').style.display='block';
    document.getElementById('d3').style.display='block';
    document.getElementById('d4').style.display='block';  
}