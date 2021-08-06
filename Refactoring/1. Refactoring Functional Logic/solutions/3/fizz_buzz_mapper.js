'use strict';

async function fizzBuzzMapper (s, e) {
    if (typeof s !== 'number' || typeof e !== 'number') {
        throw new Error('start and end indexes must both be numbers');
    }

    if (s >= e) {
        throw new Error('start index must be less than end index');
    }

    const results = Array.from({ length: e - s }, (v, k) => k + s).map((i) => {
        if (i === 0) {
            return 0;
        } else if (i % 3 === 0) {
            return 'Fizz';
        } else if (i % 5 === 0) {
            return 'Buzz';
        } else {
            return i;
        }
    });

    return results;
}

module.exports = fizzBuzzMapper;
