console.log("Start");
var x=1000;
var y=900;
function t1(){
    console.log(x);
    var x="Engineer";
    console.log(y);
    function t2(){
        console.log(x);
        console.log(this.x);
        x="software";
        console.log(x);
        console.log(y);
    }
    t2();
}
t1();
console.log("end")