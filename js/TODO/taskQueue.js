class fQueue {
  constructor() {
    this.tasks = [];
    this.hasRunning = false;
  }
  add(f) {
    // 保存this值
    var self = this;
    if (!this.hasRunning) {
      this.hasRunning = true;
      f(function next() {
        if (self.tasks.length) {
          var nextTask = self.tasks.shift();
          nextTask(next);
        } else {
          self.hasRuning = false;
        }
      });
    } else {
      this.tasks.push(f);
    }
    return this;
  }
}

// 先输出1, 2秒后输出2, 3秒后输出3, 4秒后输出4
var que = new fQueue();
que.add(function f1(next) {
    console.log(1);
    setTimeout(() => {
      next();
    }, 1000);
  })
  .add(function f2(next) {
    console.log(2);
    setTimeout(() => {
      next();
    }, 2000);
  })
  .add(function f3(next) {
    console.log(3);
    setTimeout(() => {next()}, 3000)
  })
  .add(function f4(next) {
    console.log(4);
    next();
  });

class Queue2 {
  constructor(max){
    this.tasks = []
    this.runningCount = 0
    this.maxParallel = max
  }

  add(f){
    var next
    if(this.runningCount < this.maxParallel){
      this.runningCount++
      f(next = () => {
        if(this.tasks.length){
          var nextTask = this.tasks.shift()
          nextTask(next)
        }else{
          // 当任务队列为0
          // 取消掉runningCount的自增操作
          this.runningCount--
        }
      })
    }else{
      this.tasks.push(f)
    }
    return this
  }
}