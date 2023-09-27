radius=[1,2,3,4];
Array.prototype.calculate= function(logic){
    square = [];
    for(let i=0;i<this.length;i++){
        square.push(logic(this[i]));
    }
    return square;
}

const Diameter = function(input){
    return input*2
}

const Area = function(input){
    return input*input*Math.PI
}

console.log(radius.calculate(Area))