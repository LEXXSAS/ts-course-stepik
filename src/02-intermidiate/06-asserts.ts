type UserAsserts = {
  name: string,
  displayName: string | null
}

function assertDisplayName(user: UserAsserts): asserts user is UserAsserts & {displayName: string} {
  if (!user.displayName) throw new Error('User has no displayName field');
}

function logUserByDisplayName(user: UserAsserts) {
  assertDisplayName(user)

  console.log(user.displayName.toLocaleLowerCase())
}
