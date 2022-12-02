
//main


const container = document.querySelector('#container');

const maxsize = 600;
var gridsize = 4;


//add button
const button = document.createElement('button');
button.textContent = 'Change Grid Size';
container.appendChild(button);
button.addEventListener("click", newGrid);


createGrid(gridsize);




function newGrid(){
    let person = prompt("Enter number of squares per side ");
    console.log(person);
    gridsize = person;
    container.removeChild(gridcontainer);
    createGrid(gridsize);
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
            newDiv2.setAttribute('style', 'color: blue; background: grey;'); 
            

            newDiv2.addEventListener('mouseenter', function() {
                this.style.backgroundColor = "red";
            })
            newDiv2.addEventListener('mouseleave', function() {
                this.style.backgroundColor = "grey";
            })
            newDiv.appendChild(newDiv2);
        }

        toAdd.appendChild(newDiv);
    }

    gridcontainer.appendChild(toAdd);


}


//fix grid changer
//hover changes color, click actually colors it in
