function creatediv(){
    var gamediv = document.createElement('div');
    var h1 = document.createElement('h1');
    h1.innerHTML = 'Tic Tac Toe';
    var p1 = document.createElement('p');
    p1.innerHTML = 'Player_1 -- X';
    var p2 = document.createElement('p');
    p2.innerHTML = 'Player_2 -- O';
    gamediv.appendChild(h1);
    gamediv.appendChild(p1);
    gamediv.appendChild(p2);
    document.body.appendChild(gamediv);
    
    var maindiv = document.createElement('div');
    maindiv.className = 'container';
    
    var id = 1;
    for(let i=1;i<=3;i++){
        var div_row = document.createElement('div');
        div_row.className = 'row';
        div_row.id = 'row'+i;
        for(let j=1;j<=3;j++){
            var div_cell = document.createElement('div');
            div_cell.className = 'cell';
            div_cell.id = id;
            div_cell.setAttribute('onclick','gamevalue('+div_cell.id+')');
            div_row.appendChild(div_cell);
            id += 1;
        }
        maindiv.appendChild(div_row);
    }
    document.body.appendChild(maindiv);
}


function winner(){
    if(myArray[1] == 'X' && myArray[2] == 'X' && myArray[3] == 'X'){
        alert('Player-1 Winner');
        return 1;
    }else if(myArray[1] == 'O' && myArray[2] == 'O' && myArray[3] == 'O'){
        alert('Player-2 Winner');
        return 1;
    }else if(myArray[4] == 'X' && myArray[5] == 'X' && myArray[6] == 'X'){
        alert('Player-1 Winner');
        return 1;
    }else if(myArray[4] == 'O' && myArray[5] == 'O' && myArray[6] == 'O'){
        alert('Player-2 Winner');
        return 1;
    }else if(myArray[7] == 'X' && myArray[8] == 'X' &&  myArray[9] == 'X'){
        alert('Player-1 Winner');
        return 1;
    }else if(myArray[7] == 'O' && myArray[8] == 'O' &&  myArray[9] == 'O'){
        alert('Player-2 Winner');
        return 1;
    }else if(myArray[1] == 'X' && myArray[4] == 'X' &&  myArray[7] == 'X'){
        alert('Player-1 Winner');
        return 1;
    }else if(myArray[1] == 'O' && myArray[4] == 'O' &&  myArray[7] == 'O'){
        alert('Player-2 Winner');
        return 1;
    }else if(myArray[2] == 'X' && myArray[5] == 'X' &&  myArray[8] == 'X'){
        alert('Player-1 Winner');
        return 1;
    }else if(myArray[2] == 'O' && myArray[5] == 'O' &&  myArray[8] == 'O'){
        alert('Player-2 Winner');
        return 1;
    }else if(myArray[3] == 'X' && myArray[6] == 'X' &&  myArray[9] == 'X'){
        alert('Player-1 Winner');
        return 1;
    }else if(myArray[3] == 'O' && myArray[6] == 'O' &&  myArray[9] == 'O'){
        alert('Player-2 Winner');
        return 1;
    }else if(myArray[1] == 'X' && myArray[5] == 'X' &&  myArray[9] == 'X'){
        alert('Player-1 Winner');
        return 1;
    }else if(myArray[1] == 'O' && myArray[5] == 'O' &&  myArray[9] == 'O'){
        alert('Player-2 Winner');
        return 1;
    }else if(myArray[3] == 'X' && myArray[5] == 'X' &&  myArray[7] == 'X'){
        alert('Player-1 Winner');
        return 1;
    }else if(myArray[3] == 'O' && myArray[5] == 'O' &&  myArray[7] == 'O'){
        alert('Player-2 Winner');
        return 1;
    }else{
        return 0;
    }
}


var myArray =[];
var turn = 1;
function gamevalue(x){
    console.log(turn);
    console.log(typeof turn)
    if(turn%2 == 0){
        document.getElementById(x).innerHTML = 'O';
        myArray[x]='O';
        document.getElementById(x).setAttribute('onclick',false);
    }else{
        document.getElementById(x).innerHTML = 'X';
        myArray[x]='X';
        document.getElementById(x).setAttribute('onclick',false);
    }
    // if(turn == 9){
    // var submitbtn = document.createElement('button');
    // submitbtn.id = 'btn';
    // submitbtn.setAttribute('onclick','winner()');
    // submitbtn.innerHTML = 'Click to see result'
    // document.body.appendChild(submitbtn);
    // }
    
    var result = winner();

    if(result == 0){
        if(turn < 9){
            turn += 1;
        }
        else{
            alert('Game Over Match draw');
            window.location.reload();
        }
    }
    else{
            window.location.reload();
    }
}



