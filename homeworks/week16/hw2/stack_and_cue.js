// hw2：實作出 Stack 與 Queue
// 請你實作出Stack跟Queue兩個 Function（或是 Class），讓以下程式碼可以順利執行： （禁止使用內建函式push與pop）

// const stack = new Stack();
// stack.push(10);
// stack.push(5);
// console.log(stack.pop()); // 5
// console.log(stack.pop()); // 10

// var queue = new Queue()
// queue.push(1)
// queue.push(2)
// console.log(queue.pop()) // 1
// console.log(queue.pop()) // 2

function Queue() {
  const queueArr = [];
  this.push = (s) => {
    const i = queueArr.length;
    queueArr[i] = s;
  };
  this.showArr = () => queueArr;
  this.pop = () => {
    const result = queueArr[0];
    queueArr.splice(0, 1);
    return result;
  };
}


function Stack() {
  const stackArr = [];
  this.push = (s) => {
    const i = stackArr.length;
    stackArr[i] = s;
  };
  this.showArr = () => stackArr;
  this.pop = () => {
    const i = stackArr.length - 1;
    const result = stackArr[i];
    stackArr.splice(i, 1);
    return result;
  };
}

const stack = new Stack();
stack.push(10);
stack.push(5);
console.log(stack.pop());
console.log(stack.pop());

const queue = new Queue();
queue.push(10);
queue.push(5);
console.log(queue.pop());
console.log(queue.pop());
