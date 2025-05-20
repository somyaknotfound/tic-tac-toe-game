
let arr = Array(9).fill(null);



function checkWinner() {
    // defining all winning possibilities

    const winpatterns = [
        // horizontal rows 
        [0,1,2],
        [3,4,5],
        [6,7,8],

        // vertical columns
        [0,3,6],
        [1,4,7],
        [2,4,8],

        // diagonal possibilites

        [0,4,8],
        [2,4,6]
    ];


// checking winning patterns 
    for (const pattern of winpatterns) {
        const [a,b,c] = pattern;
        // checking if positions are null or not
        if (arr[a] && arr[a] === arr[b] && arr[a] === arr[c]) {
            return true; //we have a winner
        }
    }
    return false;
}







let curplayer = "X";
//  render logic 

function handleClick(el) {
    const id = Number(el.id);
    if (arr[id]!== null) {
        return;
    }

    arr[id] = curplayer;
    el.innerText = curplayer;

    // check if the player won or not

    if (checkWinner()) {
        document.write(curplayer + "wins");
    }  // if the array does not includes null then its a draw
    else if (!arr.includes(null)) {
        document.write("its a draw");
    }
    else {
        // switching players
        curplayer = curplayer === "X" ? "O":"X";
    }
      
}