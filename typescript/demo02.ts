debugger
interface Person{
    firstName: string;
    lastName: string;
}

function greeter(person: Person) {
    return `Hello, ${person.firstName} ${person.lastName}`
}

let users = {firstName: "Jane", lastName: "User"};

console.log(users);
