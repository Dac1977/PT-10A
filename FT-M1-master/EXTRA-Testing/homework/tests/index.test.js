const { checkSeatStatus, getSeat, book, getRowNumber } = require('../homework');    

describe('checkSeatStatus', () =>{
it('solo se puede ingresar hasta la fila E', () => {
    expect( () => checkSeatStatus('F', 2)).toThrow(new TypeError('You exceed the number of rows'));
});
it('solo se puede ingresar hasta la columna 3', () => {
  expect( () => checkSeatStatus('A', 4)).toThrow(new TypeError('You exceed the number of columns'));
});

it('solo se puede ingresar una letra', () => {
    expect( () => checkSeatStatus('Alto', '2')).toThrow(new TypeError('First parameter is not a character'));
});
it('checkSeatStatus is a function', () => {
    expect(typeof checkSeatStatus).toBe('function');
});

it('should throw a TypeError if second parameter is not a number', () => {
    expect(() => checkSeatStatus('A', '2')).toThrow(new TypeError('Second parameter is not a number'));
});

it('debera retornar true si el asiento esta reservado', () => {
  expect(checkSeatStatus('A',1)).toBe(true);
});

it('debera retornar false si el asiento no esta reservado', () => {
expect(checkSeatStatus('E',3)).toBe(false);
});
});

describe('getRowNumber', () => {
it('should return 1 if the letter given is an A', () => {
    expect(getRowNumber('A')).toBe(0);
  });
  
it('should return 3 if the letter given is a C', () => {
    expect(getRowNumber('C')).toBe(2);
  });
});

describe('book', () => {
  
  it('should return "Seat in XX is already booked" if the given seat is already booked', () => {
    expect(book('A',1)).toBe('Seat in A1 is already booked');
  });

  it('should return "Seat in XX successfully booked" if the given seat is not booked', () => {
    expect(checkSeatStatus('E',3)).toBe(false);
    expect(book('E',3)).toBe('Seat in E3 successfully booked');
    expect(checkSeatStatus('E',3)).toBe(true);
  });
});



