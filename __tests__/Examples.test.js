describe('Matchers', () => {
    it('toBe', () => {
        expect(1 + 1).toBe(2);
    });

    it('toEqual', () => {
        const obj1 = { a: 1, b: 2 };
        const obj2 = { a: 1, b: 2 };
        expect(obj1).toEqual(obj2);
    });

    it('toBeNull', () => {
        const n = null;
        expect(n).toBeNull();
        expect(n).toBeDefined();
        expect(n).not.toBeUndefined();
       
    });

    it('toBeUndefined', () => {
        const u = undefined;
        expect(u).toBeUndefined();
        expect(u).not.toBeDefined();
        
    });

  it('Misc. Number tests', () => {
        var answerToTheUniverse = 42;

        expect(answerToTheUniverse).toBe(42);
        expect(answerToTheUniverse).not.toBe(43);
        expect(answerToTheUniverse).toBeGreaterThan(41);
        expect(answerToTheUniverse).toBeGreaterThanOrEqual(42);
        expect(answerToTheUniverse).toBeLessThan(43);
        expect(answerToTheUniverse).toBeLessThanOrEqual(42);

    });

    it("There is no I in Team.", () => {
        expect("team").not.toMatch(/I/);
    })
    
    it("There is a STOP in Kristopher", () => {
        expect("Kristopher Kolokousis").toMatch(/stop/);
  
  })

});






let counter = 0;

function increment() {
  counter++;
  return counter;
}

function reset() {
  counter = 0;
}

module.exports = { increment, reset };


beforeEach(() => {
  increment();
});

afterAll(() => {
  console.log('Test Count:', counter);
  reset();
});