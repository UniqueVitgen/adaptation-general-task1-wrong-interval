function main() {
  const ms = 1000;
  let startTime = 10 * ms;
  let nowInMs = (new Date()).getTime();
  let durationInMs = 0;
  let interval$ = setInterval(() => {
    durationInMs += 1000;
    let futureInMs = (new Date()).getTime();
    const currentTime = startTime - durationInMs;
    const delay = futureInMs - nowInMs - durationInMs;
    if( currentTime > 0) {
      for (let i = 0; i < 1000000; i ++);
      console.log(`current Time: ${currentTime}`);
      console.log(`delay: ${(delay)}`)
    }
    else {
      clearInterval(interval$);
    }
  }, 1000);
}

main();
