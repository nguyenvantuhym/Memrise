import Queue from './Queue';

const initListQueue = () => {
  let lsQueue = [];
  for (let i = 0; i < 7; i++) {
    // khởi tạo queue learning
    let queueTmp = new Queue();
    if (i === 0) {
      queueTmp.setSize(1);
    } else if (i === 1) {
      queueTmp.setSize(2);
    } else if (i === 2) {
      queueTmp.setSize(3);
    } else if (i === 3) {
      queueTmp.setSize(5);
    } else {
      queueTmp.setSize(7);
    }
    lsQueue.push(queueTmp);
  }
  return lsQueue;
};

const rebootQueue = listQueue => {
  let lsQueue = [];
  for (let i = 0; i < listQueue.length; i++) {
    // khởi tạo queue learning
    let queueTmp = new Queue();
    queueTmp.setSize(listQueue[i].size);
    queueTmp.setElements(listQueue[i].elements);
    lsQueue.push(queueTmp);
  }
  return lsQueue;
};

export { initListQueue, rebootQueue };
