// function getRandomColor() {
//     var letters = '0123456789ABCDEF';
//     var color = '#';
//     for (var i = 0; i < 6; i++) {
//       color += letters[Math.floor(Math.random() * 16)];
//       console.log('+++++++++++');
//       console.log(i,'.color',color);

//     }
//     return color;
//   }
//   function setRandomColor() {
//     $("#colorpad").css("background-color", getRandomColor());
//   }
// <div id="colorpad" style="width:300px;height:300px;background-color:#000">

// </div>
// <button onclick="setRandomColor()">Random Color</button>
//getRandomColor();
box = document.getElementById('box');

let itemInput = document.querySelector('input[type="text"]');
let form = document.querySelector('form');

itemInput.addEventListener('keydown', keyEvent);

let button = document.getElementById('button').addEventListener('click', buttonClick);
box.addEventListener('mousemove', runEvent);

    let lastColor =100 * Math.random();
    lastColor = parseInt(lastColor);
    console.log('lastColor::',lastColor);





function keyEvent(){
    document.querySelector('#main').style.backgroundColor = "rgb("+(lastColor%17)+","+(lastColor%12)+","+(lastColor%23)+")";
}//keyEv

function runEvent(e){
    box.style.backgroundColor = "rgb("+e.offsetX+","+e.offsetY+","+lastColor+")";
}//runEv

function buttonClick(e){
    document.getElementById('header-title').textContent = 'Changed';
    document.querySelector('#main').style.backgroundColor = '#f4f4f4';
    console.log('EVENT::', e);
    console.log('E.Target::', e.target);
    console.log('e.target.class',e.target.className);

    console.log('e.target.id',e.target.id);
    console.log('this::',this);



}//buttonClick
