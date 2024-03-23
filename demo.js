var rows = 3;
var columns = 4;
blank=[];

var currTile;
var otherTile;

var turns = 0;
var arraysuccess=[];
k=1;
window.onload = function() {
    //initialize the 3x4 board
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < columns; c++) {
            //<img>
            
            let tile = document.createElement("img");
            tile.src = "./images/blankimg.jpg";
            tile.className="blankfile";
            blank.push(k);
            k++;

            //DRAG FUNCTIONALITY
            tile.addEventListener("dragstart", dragStart); //click on image to drag
            tile.addEventListener("dragover", dragOver);   //drag an image
            tile.addEventListener("dragenter", dragEnter); //dragging an image into another one
            tile.addEventListener("dragleave", dragLeave); //dragging an image away from another one
            tile.addEventListener("drop", dragDrop);       //drop an image onto another one
            tile.addEventListener("dragend", dragEnd);      //after you completed dragDrop

            document.getElementById("board").append(tile);
        }
    }

    bo=document.getElementById("board");
    //console.log(bo)
    var imga=document.getElementsByClassName("blankfile");
    console.log("before for")
    
    for(i=0;i<blank.length;i++)
    {
        imga[i].id=blank[i];
    }
    console.log(blank)
    

    //pieces
    let pieces = [];
    for (let i=1; i <= rows*columns; i++) {
        pieces.push(i.toString()); //put "1" to "15" into the array (puzzle images names)
    }
    pieces.reverse();
    for (let i =0; i < pieces.length; i++) {
        let j = Math.floor(Math.random() * pieces.length);

        //swap
        let tmp = pieces[i];
        pieces[i] = pieces[j];
        pieces[j] = tmp;
    }

    for (let i = 0; i < pieces.length; i++) {
        let tile = document.createElement("img");
        tile.src = "./images/img" + pieces[i] + ".jpg";
        tile.id=pieces[i];

        //DRAG FUNCTIONALITY
        tile.addEventListener("dragstart", dragStart); //click on image to drag
        tile.addEventListener("dragover", dragOver);   //drag an image
        tile.addEventListener("dragenter", dragEnter); //dragging an image into another one
        tile.addEventListener("dragleave", dragLeave); //dragging an image away from another one
        tile.addEventListener("drop", dragDrop);       //drop an image onto another one
        tile.addEventListener("dragend", dragEnd);      //after you completed dragDrop

        document.getElementById("pieces").append(tile);
    }
}

//DRAG TILES
function dragStart() {
    currTile = this; //this refers to image that was clicked on for dragging
}

function dragOver(e) {
    e.preventDefault();
}

function dragEnter(e) {
    e.preventDefault();
}

function dragLeave() {

}

function dragDrop() {

    otherTile = this; //this refers to image that is being dropped on
}

count=0;
function dragEnd() {
    console.log(currTile.id)

    
 


    if (currTile.src.includes("blank")) {
        return;
    }
    let currImg = currTile.src;
    let otherImg = otherTile.src;
    currTile.src = otherImg;
    otherTile.src = currImg;

    turns += 1;
    document.getElementById("turns").innerText = turns;
    
    console.log(bo)
    var r=success();
   
    if(r==1)
    {
        setTimeout(()=>
        {
            // window.location.assign("./congo.html")
            alert("success")

        },1000);
    }

    // for(let i=0;i<imga.length;i++)
    // {

        
    //     if(imga[i].src.slice(-20)!= '/images/blankimg.jpg'   )
    //     {
    //     console.log(imga[i]);
    //    // arraysuccess.push(imga[i].src)
    //     }


    // }
  //  console.log(arraysuccess);
    
}


function  success()
{
    var imga=document.getElementsByClassName("blankfile");
    //console.log("ghjhk");
    //console.log(imga[4].src.slice(-6,-4))
    
    count=0;
    
    for(i=0;i<imga.length;i++)
    {
        if(imga[i].src.slice(-6,-4).includes('g'))
        {
           var pq= imga[i].src.slice(-5,-4)
        }
        else{
            var pq=imga[i].src.slice(-5,-3)

        }

        if(imga[i].id==pq)
        {
            


            console.log("yess")
            count++;
        }

    }
    console.log(count);
    if(count==9)
    {
        return 1;
    }  
    return 0; 
}

// success();





        