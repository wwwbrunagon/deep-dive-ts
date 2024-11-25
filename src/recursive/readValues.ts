function readValues(obj: { [key: string]: any }): void {
  for (const key in obj) {
    if (typeof obj[key] === 'object' && obj[key] !== null) {
      // If value is an object, call the function again (recursion)
      readValues(obj[key]);
    } else {
      // Otherwise, print the value
      console.log(`${key}: ${obj[key]}`);
    }
  }
}

// Example usage
const simpleObject = {
  name: 'Bob',
  details: {
    age: 30,
    city: 'Springfield',
  },
};

readValues(simpleObject);

//name: Bob
//age: 30
//city: Springfield
