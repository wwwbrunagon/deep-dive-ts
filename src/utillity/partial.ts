type PartialUser = {
  id?: number;
  name?: string;
  email?: string;
};

const user1: PartialUser = {}; // This is valid, all properties are optional.

const user2: PartialUser = { id: 1 }; // This is also valid, only `id` is provided.

const user3: PartialUser = { name: 'Alice', email: 'alice@example.com' }; // Only `name` and `email` are provided.

const user4: PartialUser = { id: 2, name: 'Bob', email: 'bob@example.com' }; // All properties provided.

console.log(user1, user2, user3, user4);

function updateUser(
  user: PartialUser,
  updates: Partial<PartialUser>,
): PartialUser {
  return { ...user, ...updates };
}

const existingUser: PartialUser = {
  id: 1,
  name: 'Alice',
  email: 'alice@example.com',
};
const updates: Partial<PartialUser> = { name: 'Alicia' }; // Only updating the `name` field

const updatedUser = updateUser(existingUser, updates);
console.log(updatedUser);
// Output: { id: 1, name: "Alicia", email: "alice@example.com" }
