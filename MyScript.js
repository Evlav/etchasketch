
//main


const container = document.querySelector('#container');
const buttoncontainer = document.querySelector('#buttoncontainer');
var ismousedown = false;
var currentcolor = 'blue';
const maxsize = 600;
var gridsize = 4;


//add button
const button = document.createElement('button');
button.textContent = 'Change Grid Size';
buttoncontainer.appendChild(button);
button.addEventListener("click", newGrid);

//add button
const changecolorbutton = document.createElement('button');
changecolorbutton.textContent = 'Change Color';
buttoncontainer.appendChild(changecolorbutton);
changecolorbutton.addEventListener("click", changeColor);

createGrid(gridsize);




function newGrid(){
    let person = prompt("Enter number of squares per side ");
    
    if (person > 100) {
        person = 100;
    }
    console.log(person);
    gridsize = person;
    container.removeChild(gridcontainer);
    createGrid(gridsize);
}

function changeColor(){
    let promptus = prompt("Enter color name or hexcode ");
    currentcolor = promptus;
}

function createGrid (gridsize){
    
    //add grid
    gridcontainer = document.createElement('div');
    gridcontainer.id = "gridcontainer";
    gridcontainer.className = "flex-container";
    gridcontainer.style.height = '600px';
    gridcontainer.style.width = '600px';

    container.appendChild(gridcontainer);

    var height = maxsize / gridsize;
    console.log(height);
    

    
    
    var toAdd = document.createDocumentFragment();
    for(var i=0; i < gridsize; i++){
    var newDiv = document.createElement('div');
    newDiv.id = 'row'+i;
    
    newDiv.className = 'flex-container';
    newDiv.classList.add('row');
    
    
        for(var j=0; j < gridsize; j++){
            
            var newDiv2 = document.createElement('div');
            newDiv2.id = 'box'+j;
        
            
            newDiv2.className = 'box';
            newDiv2.setAttribute('style', 'background: grey;'); 
            
            //hover function
            newDiv2.addEventListener('mouseenter', hoverEnter, true);
            newDiv2.addEventListener('mouseleave', hoverExit, true);

            //click function
            newDiv2.addEventListener('mousedown', function() {
                console.log(ismousedown);
                ismousedown = true;
                this.style.backgroundColor = currentcolor;
                this.classList.add('colored');
                console.log('mousedown');
            });

            //unclick
            newDiv2.addEventListener('mouseup', function() {
                ismousedown = false;
                console.log('mouseup');
            });

           

            newDiv.appendChild(newDiv2);
        }

        toAdd.appendChild(newDiv);
    }

    gridcontainer.appendChild(toAdd);


}

function hoverEnter (event){
    this.classList.add('mousedOver');
    this.style.backgroundColor = "red";

    if (ismousedown == true) {
        this.style.backgroundColor = currentcolor;
        this.classList.add('colored');
    }
 
}

function hoverExit (event) {
    this.classList.remove('mousedOver');
    if (this.classList.contains('colored') == true) {
        this.style.backgroundColor = currentcolor;
    }
    else{
        this.style.backgroundColor = "grey";
    };
    
}

//fix grid changer
//hover changes color, click actually colors it in
