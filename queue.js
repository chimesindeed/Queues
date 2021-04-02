// Queue
function see(toConsole){return console.log(toConsole)}

function queue(){
  const queue = []
  
  return {

    enqueue(item) {queue.unshift(item)},
    
    dequeue() {return queue.pop()},
    
    peek(){
      const nextInQueue = queue[queue.length-1]

      return nextInQueue
    },
    
    get length() {return queue.length},
    
    isEmpty() {return q.length===0}
  }
}

const q = queue();
see(q.length)  // getter functions are called as attributes not functions

// see("Should be true: ----> " + q.isEmpty())
// q.enqueue('first item')
// q.enqueue('second item')
// q.enqueue('third item')
// see("should be 3: ----> " + q.length)
// see("should be first item: ----> " + q.peek())


