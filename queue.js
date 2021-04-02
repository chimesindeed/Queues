// Queue
function see(toConsole){return console.log(toConsole)}

function queue(){
  const queue = []
  
  return {

    enqueue(item){queue.unshift(item)},
    dequeue(){return queue.pop()},
    peek(){
      const nextInQueue = queue[queue.length-1]

      return nextInQueue
    },
    //length(){},
    //isEmpty(){}

  }
}

const q = queue();