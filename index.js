
//
//  1. COUNTDOWN TIMER
//
function countdownTimer(seconds) {
  let current = seconds;

  const interval = setInterval(() => {
    console.log(current);

    current--;

    if (current < 0) {
      clearInterval(interval);
      console.log("Done!");
    }
  }, 1000);

  return interval; // return so tests can stop it
}

//
//  2. DELAYED REMINDER
//
function delayedReminder(message, delay) {
  const timeout = setTimeout(() => {
    console.log(message);
  }, delay);

  return timeout;
}

//
//  3. RECURRING TIMER
//
function recurringTimer(message, intervalTime) {
  const interval = setInterval(() => {
    console.log(message);
  }, intervalTime);

  return interval;
}

//
//  STOP FUNCTION (often needed in tests)
//
function stopTimer(timerId) {
  clearInterval(timerId);
}

//
// EXPORTS
//
module.exports = {
  countdownTimer,
  delayedReminder,
  recurringTimer,
  stopTimer
};