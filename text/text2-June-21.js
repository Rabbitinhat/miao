function isLeapYear(year) {
  if((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0 && year % 3200 !== 0)){
    console.log("YES")
  } else {
  console.log("No")
  }
}