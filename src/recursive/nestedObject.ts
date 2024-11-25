type NestedObj = {
  [key: string]: any; // The object can have any number of properties, with any type of value
};

function printAllValues(obj: NestedObj): void {
  for (const key in obj) {
    if (typeof obj[key] === 'object' && obj[key] !== null) {
      // If the value is an object, call the function recursively
      console.log(`Reading nested object at key: ${key}`);
      printAllValues(obj[key]);
    } else {
      // If the value is not an object, just print it
      console.log(`Key: ${key}, Value: ${obj[key]}`);
    }
  }
}

// Example usage
const nestedObject = {
  name: 'Alice',
  address: {
    street: '123 Main St',
    city: 'Wonderland',
    country: {
      name: 'Dreamland',
      code: 'DL',
    },
  },
  hobbies: ['reading', 'chess'],
};

printAllValues(nestedObject);

/* output
Key: name, Value: Alice
Reading nested object at key: address
Key: street, Value: 123 Main St
Key: city, Value: Wonderland
Reading nested object at key: country
Key: name, Value: Dreamland
Key: code, Value: DL
Key: hobbies, Value: reading,chess
*/
