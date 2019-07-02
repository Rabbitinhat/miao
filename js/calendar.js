function isLeapYear(year){
  if(year % 400 === 0){
    return true
  }
  if(year % 100 === 0){
    return false
  }

  if(year % 4 === 0){
    return true
  }
  return false
}

function getMonthDays(year, m){
  switch(m){
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
      return 31
    case 2:  return isLeapYear(year) ? 29 : 28
    default:
      return 30
  }
}

function addZero(num, base){
  let counter = 0
  let result = "" + num
  while(num > 0){
    counter++
    num = (num - num % 10) / 10
  }
  while(counter < base){
    result = "0" + result
    counter++
  }
  return result
}

// * 计算星期
function weekday(year, month) {
  // * days从0开始计算,
  var days = 0
  for(var y = 1; y < year; y++) {
    if (isLeapYear(y)) {
      days += 366
    } else {
      days += 365
    }
  }

  for(var m = 1; m < month; m++) {
    days += getMonthDays(year, m)
  }

  return (days + 1) % 7
}

function weekday2(year, month, i) {
  var y = year - 1
  var days = y * 365 + Math.floor(y / 4) - Math.floor(y / 100) + Math.floor(y / 400)

  for(var m = 1; m < month; m++) {
    days += getMonthDays(year, m)
  }

  return (days + i) % 7
}

function getCale_mon(year, m){
  let month = ["January", "Fabruary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
  let cale = month[m-1] + "\n" + "Su Mo Tu We Th Fr Sa\n"
  let week = ["00", "00", "00", "00", "00", "00", "00"]
  let monthDays = getMonthDays(year, m)
  for(let d=1; d<=monthDays; d++){
    let weekday = weekday2(year, m, d)
    week[weekday] = addZero(d, 2)
    if(weekday === 6){
      cale += week.join(" ") + "\n"
      week = ["00", "00", "00", "00", "00", "00", "00"]
    }
  }
  if(parseInt(week.join("")) != 0)
  cale += week.join(" ") + "\n"
  return cale
}

console.log(getCale_mon(2019, 7))

function getCale_year(year){
  for(let m = 1; m<=12; m++){
    console.log(getCale_mon(year, m))
  }
}

getCale_year(2019)