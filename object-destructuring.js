// Object Destructuring

// 1. Mengambil value dari property
const student = {
  id: 190082321,
  fullName: 'Jimi Hendrix',
  age: 22,
  email: 'hendrix666@mail.com',
  major: 'Chemistry',
};

const { id, fullName, age, email, major } = student;

console.log(id, fullName, age, email, major);

// 2. Mengganti nama properti saat mengambil value object
const products = {
  product_id: 223,
  product_name: 'ASUS ROG Strix G7',
  category: 'Laptop',
  price: 20000000,
  stock: 7,
};

const { product_id, product_name: product, category, price, stock } = products;

console.log(product);

// 3. Mengambil value yang hanya dibutuhkan (skipping)
const country = {
  asia: 'indonesia',
  europe: 'turkey',
  africa: 'ghana',
  oceania: 'australia',
};

const { asia, oceania } = country;

console.log(asia, oceania);

// 4. Mengatur default value
const position = {
  position_name: 'Front End',
  salary: 3000,
};

const { position_name, salary, department = 'IT' } = position;

console.log(department);

// 5. Destruktur pada parameter sebuah fungsi
const greet = {
  times: 'Morning',
  name: 'John Doe',
};

function greetCustomer({ times, name }) {
  console.log(`Hello ${name}, Good ${times}`);
}

greetCustomer(greet);
