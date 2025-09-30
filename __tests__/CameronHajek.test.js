let counter = 0;

function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            response('peanut butter')
        }, 10)
    })
}

function increment() {
    counter++
    return counter
}

function reset() {
    counter = 0
}

module.exports = { increment, reset }

function checkPalindrome(str) {
    return str.split('').reverse().join('')
}

beforeEach(() => {
    increment()
    console.log(counter)
})

afterAll(() => {
    reset()
})

describe('Matcher Tests', () =>{
    it('To Be the Number Expected', () => {

        //Happy Path
        expect(1 + 1).toBe(2)
    })
    it('To be error expected', () => {
        //Unhappy Path
        expect(1 + 1).toBe(3)
    })
})

//Happy Path = I get what I expect
//Unhappy Path = I don't get what I expect
//Boundaries = What is the max and main and how does the code handle it

describe('Palindrome Test', () => {
    it('Is a Palindrome', () => {
        expect(checkPalindrome('racecar')).toBe('racecar')
        expect(checkPalindrome('bob')).toBe('bob')
        expect(checkPalindrome('hannah')).toBe('hannah')
    })
    it('Is not a Palindrome', () => {
        expect(checkPalindrome('phil')).not.toBe('phil')
    })
})

test('the data is peanut buter', async () => {
    const data = await fetchData()
    expect(data).toBe('peanut butter')
})

test('the fetch fails with an error', async () => {
    expect.assertions(1)
    try {
        await fetchData()
    } catch (error) {
        expect(error).toMatch('error')
    }
})