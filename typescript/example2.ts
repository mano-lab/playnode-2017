export interface User {
  firstName: string
  lastName: string
}

const user: User = {
  firstName: 'Junyoung',
  lastName: 'Choi'
}

function getFirstName(user: User) {
  return user.firstName
}
