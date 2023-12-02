
//work 1
let array_with_duplicates = [1, 2, 2, 3, 4, 4, 5, 6, 6, 7, 9, 5, 3, ];

let array_only_duplicates = array_with_duplicates.filter((value, index, self) => {
    return self.indexOf(value) !== index;
});

console.log(array_only_duplicates);

//work 2
function filterBooks(arr) {
    const booksWithU = arr.filter(book => book.toLowerCase().includes('у'));

    const booksWithoutU = arr.filter(book => !book.toLowerCase().includes('у'));

    const booksWithUText = booksWithU.map(book => `${book} - книга с буквой "у"`);

    console.log("Книги с буквой 'у':");
    booksWithUText.forEach(book => console.log(book));

    console.log("\nОстальные книги:");
    booksWithoutU.forEach(book => console.log(book));
}

let books = [
    'Война и мир',
    'Преступление и наказание',
    'Унесенные ветром',
    'Мастер и Маргарита',
    '1984',
    'Гарри Поттер и Философский камень'
];

filterBooks(books);


//work 3

const users = [
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 30 },
    { name: 'Charlie', age: 20 },
    { name: 'David', age: 35 },
    { name: 'Emma', age: 22 },
    { name: 'Frank', age: 28 },
    { name: 'Grace', age: 40 },
    { name: 'Henry', age: 18 }
];
const youngestUser = users.reduce((minAgeUser, currentUser) => (currentUser.age < minAgeUser.age ? currentUser : minAgeUser));
const oldestUser = users.reduce((maxAgeUser, currentUser) => (currentUser.age > maxAgeUser.age ? currentUser : maxAgeUser));
const ageDifference = oldestUser.age - youngestUser.age
console.log(`Пользователь ${oldestUser.name} старше ${youngestUser.name} на ${ageDifference} лет.`);