let boxes = document.querySelectorAll(".box");
let reset = document.querySelector("#reset");
let gamebtn = document.querySelector("#newbtn");
let msgcontainer = document.querySelector(".msgcontainer");
let msg = document.querySelector("#msg");

let turnO = true; //playerx , playero
let count =0;

const winpatterns =[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],

];

const resetgame =() =>{
    turnO = true;
    enableboxes();
    msgcontainer.classList.add("hide");
};

const gamedraw =() =>{
    msg.innerText =`Game was Draw.`;
    msgcontainer.classList.remove("hide");
    disableboxes();
}


boxes.forEach((box) => {
    box.addEventListener("click", () =>{
      //  console.log("box was clicked");
        if(turnO){
            box.innerText ="O";
            turnO = false;
                }
                else{
                    box.innerText ="X";
                    turnO = true;
                }
                box.disabled = true;
                count++;

                let iswinner = checkwinner();

                if(count ==9 && !iswinner){
                    gamedraw();
                }
    });
});

const enableboxes =() =>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
}

const disableboxes =() =>{
    for(let box of boxes){
        box.disabled = true;
    }
};

const showwinner =(winner) =>{
    msg.innerText = `Congratulations , Winner is ${winner}`;
    msgcontainer.classList.remove("hide");
    disableboxes();
}
const checkwinner =() =>{
   for (let pattern of winpatterns){
   // console.log(pattern[0], pattern[1], pattern[2]);
  //  console.log(boxes[pattern[0]].innerText,boxes[pattern[1]].innerText, boxes[pattern[2]].innerText);
 let pos1val = boxes[pattern[0]].innerText;
 let pos2val = boxes[pattern[1]].innerText;
 let pos3val = boxes[pattern[2]].innerText;

 if(pos1val != "" && pos2val != "" && pos3val != ""){
    if(pos1val === pos2val && pos2val === pos3val){
       // console.log("winner");
        showwinner(pos1val);
    }
 }


}
};

gamebtn.addEventListener("click",resetgame);
reset.addEventListener("click",resetgame);