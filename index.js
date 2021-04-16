const address = 42

function distanceFromHqInBlocks(num){
  return Math.abs(num - address)
}

function distanceFromHqInFeet(num){
  return distanceFromHqInBlocks(num)*264
}

function distanceTravelledInFeet(start, end){
  return Math.abs(start - end)*264
}

function calculatesFarePrice(start, destination){
  const distance = distanceTravelledInFeet(start, destination)
  switch (true) {
    case distance <= 400 : return 0;
    case distance > 2500 : return 'cannot travel that far';
    case distance > 2000 : return 25;
    default : return (distance-400)*0.02
  }
}