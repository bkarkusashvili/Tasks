const values = [250, 500, 1000, 2000, 1000, 500, 250];

const totalTime = values.reduce((prev, time) => {
  const interval = prev + time;

  setTimeout(() => console.log(time), interval)

  return interval;
}, 0);

setTimeout(() => console.log('done'), totalTime);