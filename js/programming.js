var days = +prompt("Days: ")
var money = 0
for(let i=0; days>0; i++){
  days -= i
  if(days < 0){
    money += i * (days % i)
  }
  money += i * i
}
console.log(money)