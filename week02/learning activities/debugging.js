const pi = 3.14;
let radius = 3;
let area = 0;
function circleArea(radius){
    area = radius * radius * pi;
    return area;
}
area = circleArea(radius);
console.log(area);

