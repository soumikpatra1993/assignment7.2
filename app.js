function findsum(){
var i;
var sum=0;
for ( i = 0; i < arguments.length; i++) {
	sum=sum+arguments[i];

}
return sum;
};

var result = findsum(1,2,3);
console.log(result);
result=findsum(1,2,3,4,5,6,7,8,9,10);
console.log(result);