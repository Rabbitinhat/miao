let input = document.getElementById('input_area')
let all = document.getElementById('selectAll')
let show = document.getElementById('showInfo')

let list = Array.from(document.getElementsByName('list'))
let option = document.getElementById('option')

let checkStatus = localStorage.getItem('status')

let num = document.getElementById('act_num')

var notes = JSON.parse(localStorage.getItem('notes'))
// 从localStorage中获取数据
function getStore(){ 
  if(notes !== null){
    for(let name in notes){
      if(notes.hasOwnProperty(name))
        for(let status of notes[name]){
          addNew(name, status)
        }
    }
  }
  for(let child of list){
    if(checkStatus !== null && child.value === checkStatus){
        child.click()
    }else if(checkStatus === null && child.value === 'all'){
      child.click()
    }
  }
  showList()
  setActNum()
}

// 将数据存储到localStorage
function saveToStorage(){
  localStorage.setItem('notes', JSON.stringify(notes))
}

// 移除已存在条目
function removeStorage(value, status){
  if(notes[value].length <= 1) delete notes[value]
  else{
  let index = notes[value].indexOf(status)
  if(index > -1) notes[value].splice(index, 1)
  }
  showList()
  setActNum()
  saveToStorage()
}

// 存储新条目的值
function storeNote(value, status){
  if(notes !== null && !notes.hasOwnProperty(value)){
    notes[value] = [status]  
  }else if(notes === null){
    notes = {}
    notes[value] = [status]
  }else{
    notes[value].push(status)
  }
  addNew(value, status)
  showList()
  setActNum()
  saveToStorage()
}

// * 修改已存在节点值, 并保存
function changeNote(value, status){
  let oldSta = status === 'active' ? 'finished' : 'active'
  let index = notes[value].indexOf(oldSta)
  
  notes[value].splice(index, 1, status)
  showList()
  setActNum()
  saveToStorage()
}

// 显示active数量
function setActNum(){
  let count = 0
  if(notes !== null){
    for(let value in notes){
      if(notes.hasOwnProperty(value)){
        notes[value].forEach((item) =>{
         if(item === 'active') count++ 
        })
      }
    }
  }
  num.textContent = count
}

// * 根据传入值和状态创建新条目
function addNew(value, status) {
  let item = document.createElement('li')
  let content = document.createElement('span')
  
//   content内容选择为localstorage
  content.textContent = value
  item.className = status
  
//   设置是否选择li
  let choose = document.createElement('label')
  choose.textContent = '?'
  let cho = document.createElement('input')
//   需要绑定label设定样式, 隐藏checkbox
  cho.classList.add('select')
  cho.type = 'checkbox'
  if(status === 'finished') cho.checked = true
  cho.addEventListener('change', function(e){
    let parentNode = e.target.parentNode.parentNode
    let node = parentNode.getElementsByTagName('span')[0]
    let value = node.textContent
    parentNode.className = cho.checked ? 'finished' : 'active'
    changeNote(value, parentNode.className) 
    }
  )
  // cho.style.display = 'none'
  choose.appendChild(cho)
//   用于关闭li的按钮
  let close = document.createElement('button')
  close.textContent = 'x'
  close.classList.add('close')
  close.addEventListener('click', function(e){
    let parentNode = e.target.parentNode
    let node = parentNode.getElementsByTagName('span')[0]
    let value = node.textContent
    let status = parentNode.className
    removeStorage(value, status)
    e.target.parentNode.remove()  
  })
  item.appendChild(choose)
  item.appendChild(content)
  item.appendChild(close)

  show.appendChild(item)
  return item
}

function showList(){
  let result = null
  for(let ele of list){
    if(ele.checked) result = ele.value
  }
  Array.from(show.children).forEach((child) => {
    if(result === 'all') child.style.display = 'block'
    else if(child.className.indexOf(result) > -1) child.style.display = 'block'
    else child.style.display = 'none'
  })
  checkStatus = result
  createClearAll()
}

function createClearAll(){
  let hasClearAll = document.getElementById('clearAll')
  let hasfinish = 0
  for(let value in notes){
    if(notes.hasOwnProperty(value)){
      if(notes[value].indexOf('finished') > -1) hasfinish++
    }
  }
  if(hasfinish && !hasClearAll) {
  // * 也可以访问localStorage查看
  let clearAll = document.createElement('a')
  clearAll.id = 'clearAll'
  clearAll.textContent = 'Clear completeted'
  clearAll.addEventListener('click', (e) => {
    e.preventDefault()
    for(let i = 0; i < show.children.length; i++){
      if(show.children[i].className === 'finished'){
        show.children[i].getElementsByClassName('close')[0].click()
      }
    }
  })
    option.appendChild(clearAll)
  }else if(!hasfinish && hasClearAll){
    hasClearAll.remove()
  }
  
}



// 点击回车创建新选项
input.addEventListener('keydown', (e) => {
  if(e.key === 'Enter' && e.target.value.length > 0){
    storeNote(e.target.value, 'active')
    showList()
    e.target.value = ''
  }
})

// 全选/全部取消
all.addEventListener('change', (e) => {
    for(let item of Array.from(show.children)){
      let select = item.getElementsByClassName('select')[0]
      if(all.checked && !select.checked){
        select.click()
      }else if(!all.checked && select.checked){
        select.click()
      }
  }
  showList()
})


for(let ele of list){
  ele.addEventListener('change', showList)
}


window.onload = getStore()
window.addEventListener('beforeunload', function (){
  localStorage.setItem('status', checkStatus)
})