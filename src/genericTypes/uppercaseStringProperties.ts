/**
 * Type utility that converts all string properties of an object to uppercase.
 * @template T - The type of the input object.
 */
type UppercaseStringProperties<T> = {
  [K in keyof T]: T[K] extends string ? Uppercase<T[K]> : T[K];
};

/**
 * Transforms all string properties of objects in an array to uppercase.
 *
 * @template T - The type of the objects in the input array.
 * @param {T[]} data - The input array of objects to transform.
 * @returns {UppercaseStringProperties<T>[]}
 *
 */
function transformStringsToUppercase<T>(
  data: T[],
): UppercaseStringProperties<T>[] {
  return data.map((item) => {
    const transformedItem = {} as UppercaseStringProperties<T>;
    for (const key in item) {
      if (typeof item[key] === 'string') {
        // Convert string properties to uppercase
        transformedItem[key] = (
          item[key] as string
        ).toUpperCase() as UppercaseStringProperties<T>[typeof key];
      } else {
        // Preserve non-string properties
        transformedItem[key] = item[
          key
        ] as UppercaseStringProperties<T>[typeof key];
      }
    }
    return transformedItem;
  });
}

// Example usage:
interface SampleData {
  id: number;
  name: string;
  description: string;
}

const sampleArray: SampleData[] = [
  { id: 1, name: 'alpha', description: 'first entry' },
  { id: 2, name: 'beta', description: 'second entry' },
];

const transformedArray = transformStringsToUppercase(sampleArray);
console.log(transformedArray);
