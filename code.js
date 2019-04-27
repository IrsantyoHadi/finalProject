const randMe = document.getElementById('randMe');

randMe.onclick = function(){

    var varNum = Math.floor(Math.random()*5);

    var baju = './img/'+varNum+'.jpg';
    // document.getElementById('gambar').src = baju;
    if(varNum === 0){
        document.getElementById('gambar').src = baju;
        document.getElementById('head').innerHTML = "Kamu adalah Hashirama Senju";
    }
    else if(varNum === 1){
        document.getElementById('gambar').src = baju;
        document.getElementById('head').innerHTML = "Kamu adalah Uzumaki Naruto";
    }
    else if(varNum === 2){
        document.getElementById('gambar').src = baju;
        document.getElementById('head').innerHTML = "Kamu adalah Sasuke Uchiha";
    }
    else if(varNum === 3){
        document.getElementById('gambar').src = baju;
        document.getElementById('head').innerHTML = "Kamu adalah Hatake Kakashi";
    }
    else if(varNum === 4){
        document.getElementById('gambar').src = baju;
        document.getElementById('head').innerHTML = "Kamu adalah Madara Uchiha";
    }
}