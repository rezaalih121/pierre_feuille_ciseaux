// rockPaperScissors.test.js

const { determineWinner } = require('./rockPaperScissors');

describe('determineWinner', () => {
  test('should return "Égalité!" for the same choices', () => {
    expect(determineWinner('pierre', 'pierre')).toBe('Égalité!');
    expect(determineWinner('feuille', 'feuille')).toBe('Égalité!');
    expect(determineWinner('ciseaux', 'ciseaux')).toBe('Égalité!');
  });

  test('should return "Vous avez gagné!" for winning choices', () => {
    expect(determineWinner('pierre', 'ciseaux')).toBe('Vous avez gagné!');
    expect(determineWinner('feuille', 'pierre')).toBe('Vous avez gagné!');
    expect(determineWinner('ciseaux', 'feuille')).toBe('Vous avez gagné!');
  });

  test('should return "Vous avez perdu!" for losing choices', () => {
    expect(determineWinner('pierre', 'feuille')).toBe('Vous avez perdu!');
    expect(determineWinner('feuille', 'ciseaux')).toBe('Vous avez perdu!');
    expect(determineWinner('ciseaux', 'pierre')).toBe('Vous avez perdu!');
  });
});
