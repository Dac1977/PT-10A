const layout = [
    [{type: 'VIP', booked: false}, {type: 'VIP', booked: true}, {type: 'VIP', booked: true}, {type: 'VIP', booked: false}],
    [{type: 'NORMAL', booked: false}, {type: 'VIP', booked: true}, {type: 'VIP', booked: false}, {type: 'NORMAL', booked: false}],
    [{type: 'NORMAL', booked: false}, {type: 'NORMAL', booked: true}, {type: 'NORMAL', booked: true}, {type: 'NORMAL', booked: false}],
    [{type: 'ECONOMIC', booked: true}, {type: 'NORMAL', booked: true}, {type: 'NORMAL', booked: true}, {type: 'ECONOMIC', booked: false}],
    [{type: 'ECONOMIC', booked: false}, {type: 'ECONOMIC', booked: true}, {type: 'ECONOMIC', booked: false}, {type: 'ECONOMIC', booked: false}]
  ];
  function getSeat(letter, number) {
    const numberRow = getRowNumber(letter);
    if(numberRow > 4) throw new TypeError('You exceed the number of rows');
    const layoutRows = layout[numberRow];
    if(number > 3) throw new TypeError('You exceed the number of columns');
    const seat = layoutRows[number];
    return seat;
  } 
  
  function getRowNumber(letter) {
    return letter.charCodeAt(0) - 65;
}
function checkSeatStatus(row, number) {
  
  if(typeof row !== 'string') throw new TypeError('First parameter is not a string');
  console.log(row.length);

  if(row.length > 1)throw new TypeError('First parameter is not a character');
  if(typeof number !== 'number') throw new TypeError('Second parameter is not a number');

  const seat = getSeat(row, number);
  return seat.booked;
}

function book(row, number) {
  if(checkSeatStatus(row,number)) return `Seat in ${row}${number} is already booked`;
  const numberRow = getRowNumber(row);
  const layoutRows = layout[numberRow];
  const seat = layoutRows[number];
  seat.booked = true;
  return `Seat in ${row}${number} successfully booked`
}

function resumen(){
  let reser = 0;
  let economic = 0;
  let normal = 0;
  let vip = 0;
  let totalAsientos = 0;
  let recaudacion = 0;
  for (let i = 0; i < layout.length; i++) {
    const element1 = layout[i];
    for (let j = 0; j < element1.length; j++) {
      const element2 = element1[j];
      totalAsientos++;
      console.log(element2);
      if(element2.booked === true){
        reser++;
        if(element2.type === "ECONOMIC") economic++;
        if(element2.type === "NORMAL") normal++;
        if(element2.type === "VIP") vip++;
        }
      }
    }
    
  
  recaudacion = (vip * 600) + (normal * 450) + (economic * 300);
  console.log("Total de asiento: "+totalAsientos);
  let libres = totalAsientos - reser;
  console.log("Asientos libres: "+libres);
  console.log("asientos reservados: "+ reser);
  console.log("la recaudación es: "+ recaudacion);
}
module.exports = {
    checkSeatStatus,
    getSeat,
    getRowNumber,
    book
}