class Cell{
    constructor(i, j, cellHeight,cellWidth){
        this.i = i;
        this.j = j;
        this.cellHeight = cellHeight;
        this.cellWidth = cellWidth;
        this.activation = 255;
    }

    setActivation(activation){
        this.activation = activation;
    }

    render(){
        stroke(0);
        strokeWeight(1);
        fill(this.activation)
        rect(this.i*this.cellWidth,this.j*this.cellHeight,this.cellWidth,this.cellHeight);
    }
}