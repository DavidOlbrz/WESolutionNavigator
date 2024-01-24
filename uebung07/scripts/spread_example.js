function spreadArray() {
    const a = ['a', 'b', 'c'];
    const b = ['d', 'e', 'f'];
    const combined = [...a, ...b];
    console.log(combined);
}

function spreadObject() {
    const name = {
        firstName: 'David',
        lastName: 'Olbertz'
    };

    const person = {
        ...name,
        age: 20,
        university: 'University of Applied Sciences Bonn'
    };

    console.log(person);
}