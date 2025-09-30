

// Palindrome Test

function isPalindrome(str) {
    var cleaned = str.toLowerCase().replace(/[^a-zA-Z0-9]/g, '');
    var reversed = cleaned.split('').reverse().join('');
    return reversed === cleaned;
}


describe('Palindromes', () => {
    test('is a palindrome', () => {
        expect(isPalindrome('racecar')).toBe(true);
    })

    test('is not a palindrome', () => {
        expect(isPalindrome('hello')).toBe(false);
    })

})



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


function brewCoffee(shouldBrew = true) {
  return new Promise((resolve, reject) => {
    if (shouldBrew) {
      resolve("coffee is brewed");
    } else {
      reject(new Error("418 I am a teapot"));
    }
  });
}

module.exports = { brewCoffee };


describe("brewCoffee with async/await", () => {
  test("resolves with coffee is brewed", async () => {
    const result = await brewCoffee(true);
    expect(result).toBe("coffee is brewed");
  });

  test("rejects with teapot error", async () => {
    expect.assertions(2); 
    try {
      await brewCoffee(false);
    } catch (err) {
      console.log("Caught error:", err.message);
      expect(err).toBeInstanceOf(Error);
      expect(err.message).toBe("418 I am a teapot");
    }
  });
});