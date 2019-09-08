export class UserService {
  users = [
    {firstname: 'Ivan', lastname: 'Petrov', email: 'ivan@gmail.com'},
    {firstname: 'John', lastname: 'Doe', email: 'john@gmail.com'},
    {firstname: 'Test', lastname: 'Server', email: 'test@gmail.com'}
  ];

  addUser(user) {
    this.users.push(user);
  }

  removeUser(item) {
    this.users.splice(this.users.indexOf(item), 1);
  }
}
