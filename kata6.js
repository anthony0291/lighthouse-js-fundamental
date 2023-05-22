//Smart Parking
//return coordinates of available spot or false if there is no spot
//function (array of arrays = parking spots, 'type of vehicle')
// regular('R') cars can only part in 'R' spots
// small ('S') cars can park in 'R' or 'S' spots
// motorcycles ('M') can park in 'R', 'S', or 'M' spots
//uppercase means spot is available


const whereCanIPark = function(park, vehicle) {
  for (let y = 0; y < park.length; y++) {
    for (let x = 0; x < park[y].length; x++) {
      if(vehicle === 'regular') {
        if (park[y][x] === 'R') {
          return [x,y];
        }
      } else if (vehicle === 'small') {
        if (park[y][x] === 'S' || park[y][x] === 'R') {
          return [x,y];
        }
      } else if (vehicle === 'motorcycle') {
        if (park[y][x] === 'M' || park[y][x] === 'S' || park[y][x]==='R') {
          return [x,y];
        }
      } 
      }
    }
    return false;
  }



console.log(whereCanIPark(
  [
    // COLUMNS ARE X
    // 0    1    2    3    4    5
    ['s', 's', 's', 'S', 'R', 'M'], // 0 ROWS ARE Y
    ['s', 'M', 's', 'S', 'r', 'M'], // 1
    ['s', 'M', 's', 'S', 'r', 'm'], // 2
    ['S', 'r', 's', 'm', 'r', 'M'], // 3
    ['S', 'r', 's', 'm', 'r', 'M'], // 4
    ['S', 'r', 'S', 'M', 'M', 'S']  // 5
  ],
  'regular'
));

console.log(whereCanIPark(
  [
    ['M', 'M', 'M', 'M'],
    ['M', 's', 'M', 'M'],
    ['M', 'M', 'M', 'M'],
    ['M', 'M', 'r', 'M']
  ],
  'small'
));

console.log(whereCanIPark(
  [
    ['s', 's', 's', 's', 's', 's'],
    ['s', 'm', 's', 'S', 'r', 's'],
    ['s', 'm', 's', 'S', 'r', 's'],
    ['S', 'r', 's', 'm', 'r', 's'],
    ['S', 'r', 's', 'm', 'R', 's'],
    ['S', 'r', 'S', 'M', 'm', 'S']
  ],
  'motorcycle'
))




/** */
 