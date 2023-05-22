function judgeVegetable(vegetables, metric) {
  let winner = "";
  let best = 0;

  for (let i = 0; i < vegetables.length; i++) {
    if (vegetables[i][metric] > best) {
      winner = vegetables[i]['submitter'];
      best = vegetables[i][metric];
    }
  } 
  console.log(winner);
  return winner;
}
  
const vegetables = [
  {
    submitter: 'Old Man Franklin',
    redness: 10,
    plumpness: 5
  },
  {
    submitter: 'Sally Tomato-Grower',
    redness: 2,
    plumpness: 8
  },
  {
    submitter: 'Hamid Hamidson',
    redness: 4,
    plumpness: 3
  }
];

const metric = 'plumpness';

judgeVegetable(vegetables, metric);
