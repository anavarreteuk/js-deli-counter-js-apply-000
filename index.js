var number = 0

function takeANumber(katzDeliLine) {
  number++
  katzDeliLine.push(number);
  return `Welcome, you are ticket number ${number}.`;
}

function nowServing(katzDeliLine) {
  if(katzDeliLine.length === 0) {
    return "There is nobody waiting to be served!";
  }
  return `Currently serving ${katzDeliLine.shift()}.`;
}

function currentLine(katzDeliLine) {
  if(katzDeliLine.length === 0) {
    return "The line is currently empty.";
  }
  var numbersAndNames = [];

  for (let i = 0; i < katzDeliLine.length; i++) {
    numbersAndNames.push(`${i + 1}. ${katzDeliLine[i]}`);
  }

  return `The line is currently: ${numbersAndNames.join(', ')}`;
}