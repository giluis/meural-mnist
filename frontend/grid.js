class Grid{
    constructor(sizeX,sizeY,numCellsX,numCellsY,topLeftCoors){
        this.sizeX = sizeX;
        this.sizeY = sizeY;
        this.numCellsX = numCellsX;
        this.numCellsY = numCellsY;
        this.topLeftCoors = topLeftCoors;
        this.cells = this.initCells();
    }

    initCells(){
        let cellheight = this.sizeY/this.numCellsY;
        let cellwidth = this.sizeX/this.numCellsX;
        const numCells = this.numCellsX*this.numCellsY;
        const arr =[];
        for(let i = 0; i < numCells;i++){
            arr.push(new Cell(i%this.numCellsX,Math.floor(i/this.numCellsX),cellheight,cellwidth))
        }
        return arr;
    }

    cell(i,j){
        return this.cells[i + this.numCellsX*j];
    }

    coorsToCellIndexes(x,y){
        if(x==0 && y==0)
            return;
        let i = Math.floor(x/this.sizeX*this.numCellsX);
        let j = Math.floor(y/this.sizeY*this.numCellsY);
        
        if(i <0 || i >= this.numCellsX || j <0 || j >= this.numCellsY)
            return
        return {i,j};
    }

    activate(x,y,activation){
        push();
        translate(this.topLeftCoors.x,this.topLeftCoors.y)
        const coors = this.coorsToCellIndexes(x,y);
        if(!coors)
            return
        const {i,j}= coors;
        this.cell(i,j).setActivation(activation);
        pop();

    }
    render(){
        this.cells.forEach(c=>c.render());
    }
}