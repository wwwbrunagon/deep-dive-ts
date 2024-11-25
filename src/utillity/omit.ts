type User = {
  id: number;
  name: string;
  email: string;
};

function getBasicUserInfo(user: User): UserWithoutEmail {
  const { id, name } = user;
  return { id, name };
}

type UserWithoutEmail = Omit<User, 'email'>;

const user: User = {
  id: 1,
  name: 'Alice',
  email: 'alice@example.com',
};

const basicUserInfo = getBasicUserInfo(user);
console.log(basicUserInfo);
// Output: { id: 1, name: "Alice" }
