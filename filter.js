import { display, greaterThanTarget } from "./externalFunction.js";

// even numbers [1, 2, 3, 4, 5] => [2, 4]
const filterEvenNumbers = (numbers) =>
  numbers.filter((number) => number % 2 === 0);

display("01.even numbers [1, 2, 3, 4, 5]", filterEvenNumbers([1, 2, 3, 4, 5]));

// words with more than 5 letters ["apple", "banana", "kiwi", "grape"] => ["banana"]
const filterLongWords = (words) => words.filter((word) => word.length > 5);

display(
  "02.words with more than 5 letters",
  filterLongWords(["apple", "banana", "kiwi", "grape"])
);

// people older than 30 [{name: "Alice", age: 25}, {name: "Bob", age: 35}] => [{name: "Bob", age: 35}]
const filterAdults = (people, target) =>
  greaterThanTarget(people, "age", target);

display(
  "03.people older than 30",
  filterAdults(
    [
      { name: "Alice", age: 25 },
      { name: "Bob", age: 35 },
    ],
    30
  )
);

// active users [{username: "alice", active: true}, {username: "bob", active: false}] => [{username: "alice", active: true}]
const filterActiveUsers = (users) => users.filter(({ active }) => active);

display(
  "04.filterActiveUsers",
  filterActiveUsers([
    { username: "alice", active: true },
    { username: "bob", active: false },
  ])
);

// numbers greater than 10 [5, 12, 7, 18, 3] => [12, 18]
const filterNumbersGreaterThanTen = (numbers) =>
  numbers.filter((number) => number >= 10);

display(
  "05.filterNumbersGreaterThanTen",
  filterNumbersGreaterThanTen([5, 12, 7, 18, 3])
);

// books with more than 200 pages [{title: "Book 1", pages: 150}, {title: "Book 2", pages: 250}] => [{title: "Book 2", pages: 250}]
const filterLongBooks = (books) => greaterThanTarget(books, "pages", 200);

display(
  "06.books with more than 200 pages",
  filterLongBooks([
    { title: "Book 1", pages: 150 },
    { title: "Book 2", pages: 250 },
  ])
);

// users with incomplete profiles [{username: "alice", profileComplete: true}, {username: "bob", profileComplete: false}] => [{username: "bob", profileComplete: false}]
const filterIncompleteProfiles = (users) =>
  users.filter(({ profileComplete }) => !profileComplete);

display(
  "07.users with incomplete profiles",
  filterIncompleteProfiles([
    { username: "alice", profileComplete: true },
    { username: "bob", profileComplete: false },
  ])
);

// students with grades above 80 [{name: "John", grade: 75}, {name: "Jane", grade: 85}] => [{name: "Jane", grade: 85}]
const filterHighGrades = (students) => greaterThanTarget(students, "grade", 80);

display(
  "08.students with grades above 80",
  filterHighGrades([
    { name: "John", grade: 75 },
    { name: "Jane", grade: 85 },
  ])
);

// products that are in stock [{product: "apple", inStock: true}, {product: "banana", inStock: false}] => [{product: "apple", inStock: true}]
const filterInStockProducts = (products) =>
  products.filter(({ inStock }) => inStock);

display(
  "09.products that are in stock",
  filterInStockProducts([
    { product: "apple", inStock: true },
    { product: "banana", inStock: false },
  ])
);

// orders placed in the last 30 days [{orderDate: "2024-11-01"}, {orderDate: "2024-12-01"}] => [{orderDate: "2024-12-01"}]
const filterRecentOrders = (orders) =>
  orders.filter(({ orderDate }) => {
    const [year, month, day] = orderDate.split("-");

    return (+day > 22 && +month === 11) || +month === 12;
  });

display(
  "10.orders placed in the last 30 days",
  filterRecentOrders([{ orderDate: "2024-11-01" }, { orderDate: "2024-12-01" }])
);
// products with a price lower than the average [{name: "item1", price: 10}, {name: "item2", price: 20}, {name: "item3", price: 5}] => [{name: "item1", price: 10}, {name: "item3", price: 5}]
const filterBelowAveragePrice = function (products) {
  const average = products.reduce(function (total, product) {
    return total + product.price;
  }, 0);
};

// active users who posted in the last 7 days [{username: "alice", lastPostDate: "2024-12-01", active: true}, {username: "bob", lastPostDate: "2024-11-20", active: true}] => [{username: "alice", lastPostDate: "2024-12-01", active: true}]
const filterRecentActiveUsers = function (users) {
  const dates = users.filter(
    (user) =>
      user.active &&
      user.lastPostDate.slice(5, 7) === "12" &&
      +user.lastPostDate.slice(8, 10) > 18 &&
      +user.lastPostDate.slice(8, 10) < 27
  );

  return dates;
};

// console.log(
//   filterRecentActiveUsers([
//     { username: "alice", lastPostDate: "2024-12-19", active: true },
//     { username: "bob", lastPostDate: "2024-11-20", active: true },
//   ])
// );

// students who passed all subjects [{name: "John", subjects: [{name: "Math", passed: true}, {name: "Science", passed: true}]}, {name: "Jane", subjects: [{name: "Math", passed: false}, {name: "Science", passed: true}]}] => [{name: "John", subjects: [{name: "Math", passed: true}, {name: "Science", passed: true}]}]
const filterStudentsWithAllSubjectsPassed = function (students) {
  return students.filter((student) =>
    student.subjects.every((subject) => subject.passed)
  );
};

// console.table(
//   filterStudentsWithAllSubjectsPassed([
//     {
//       name: "John",
//       subjects: [
//         { name: "Math", passed: true },
//         { name: "Science", passed: true },
//       ],
//     },
//     {
//       name: "Jane",
//       subjects: [
//         { name: "Math", passed: false },
//         { name: "Science", passed: true },
//       ],
//     },
//   ])
// );

// people whose birthday is this month [{name: "Alice", birthDate: "2024-12-01"}, {name: "Bob", birthDate: "2024-11-01"}] => [{name: "Alice", birthDate: "2024-12-01"}]
const filterBirthdaysThisMonth = function (people) {
  return people.filter((person) => person.birthDate.slice(5, 7) === "12");
};

// console.log(
// filterBirthdaysThisMonth([
//   { name: "Alice", birthDate: "2024-12-01" },
//     { name: "Bob", birthDate: "2024-11-01" },
//   ])
// );

// orders that exceed the average order value [{orderId: 1, amount: 20}, {orderId: 2, amount: 50}, {orderId: 3, amount: 10}] => [{orderId: 2, amount: 50}]
const filterHighValueOrders = function (orders) {
  const totalAmount = orders.reduce((total, order) => total + order.amount, 0);
  const average = totalAmount / orders.length;

  return orders.filter((order) => order.amount > average);
};

// console.table(
//   filterHighValueOrders([
//     { orderId: 1, amount: 20 },
//     { orderId: 2, amount: 50 },
//     { orderId: 3, amount: 10 },
//   ])
// );

// books with reviews higher than the average rating [{title: "Book 1", rating: 4}, {title: "Book 2", rating: 5}, {title: "Book 3", rating: 3}] => [{title: "Book 2", rating: 5}]
const filterTopRatedBooks = function (books) {
  const totalRating = books.reduce((total, book) => total + book.rating, 0);
  const average = totalRating / books.length;

  return books.filter((book) => book.rating > average);
};

// console.table(
//   filterTopRatedBooks([
//     { title: "Book 1", rating: 4 },
//     { title: "Book 2", rating: 5 },
//     { title: "Book 3", rating: 3 },
//   ])
// );

// employees whose salary is higher than the department average [{name: "Alice", salary: 5000, department: "HR"}, {name: "Bob", salary: 7000, department: "HR"}, {name: "Charlie", salary: 4000, department: "IT"}] => [{name: "Bob", salary: 7000, department: "HR"}]
const filterHighSalaryEmployees = function (employees) {
  const totalSalary = employees.reduce(
    (total, employee) => total + employee.salary,
    0
  );
  const average = totalSalary / employees.length;

  return employees.filter((employee) => employee.salary > average);
};

// console.table(
//   filterHighSalaryEmployees([
//     { name: "Alice", salary: 5000, department: "HR" },
//     { name: "Bob", salary: 7000, department: "HR" },
//     { name: "Charlie", salary: 4000, department: "IT" },
//   ])
// );

// cities with a population higher than the median [{name: "City A", population: 2000}, {name: "City B", population: 5000}, {name: "City C", population: 3000}] => [{name: "City B", population: 5000}]
const filterCitiesAboveMedianPopulation = function (cities) {
  const totalPopulation = cities.reduce(
    (total, city) => total + city.population,
    0
  );
  const median = totalPopulation / cities.length;

  return cities.filter((city) => city.population > median);
};

// console.table(
//   filterCitiesAboveMedianPopulation([
//     { name: "City A", population: 2000 },
//     { name: "City B", population: 5000 },
//     { name: "City C", population: 3000 },
//   ])
// );

// posts with more than the average number of likes [{postId: 1, likes: 100}, {postId: 2, likes: 200}, {postId: 3, likes: 150}] => [{postId: 2, likes: 200}]
const average = function (posts) {
  const totalLikes = posts.reduce((total, post) => total + post.likes, 0);
  const average = totalLikes / posts.length;

  return average;
};

const filterPopularPosts = function (posts) {
  const totalLikes = posts.reduce((total, post) => total + post.likes, 0);
  const average = totalLikes / posts.length;

  return posts.filter((post) => post.likes > average);
};

// console.table(
//   filterPopularPosts([
//     { postId: 1, likes: 100 },
//     { postId: 2, likes: 200 },
//     { postId: 3, likes: 150 },
//   ])
// );

// users who have posted more than the average number of posts [{username: "Alice", postCount: 5}, {username: "Bob", postCount: 8}, {username: "Charlie", postCount: 3}] => [{username: "Bob", postCount: 8}]
const filterActiveUsersByPostCount = function (users) {
  const totalPost = users.reduce((total, user) => total + user, 0);
  const average = totalPost / users.length;

  return users.filter((user) => user.postCount > average);
};

// console.log(
//   filterActiveUsersByPostCount([
//     { username: "Alice", postCount: 5 },
//     { username: "Bob", postCount: 8 },
//     { username: "Charlie", postCount: 3 },
//   ])
// );

// filter people older than a certain age [{name: "Alice", age: 25}, {name: "Bob", age: 30}, {name: "Charlie", age: 22}] => [{name: "Bob", age: 30}]
const filterByAge = (people, targetAge) =>
  people.filter(({ age }) => age > targetAge);

// console.log(
//   filterByAge(
//     [
//       { name: "Alice", age: 25 },
//       { name: "Bob", age: 30 },
//       { name: "Charlie", age: 22 },
//     ],
//     25
//   )
// );

// filter products that are cheaper than a given price [{name: "item1", price: 20}, {name: "item2", price: 50}, {name: "item3", price: 10}] => [{name: "item1", price: 20}, {name: "item3", price: 10}]
const filterByPrice = function (products, price) {};

// filter students who scored above a certain grade in Math [{name: "John", grades: {math: 80, science: 90}}, {name: "Jane", grades: {math: 70, science: 85}}] => [{name: "John", grades: {math: 80, science: 90}}]
const filterByMathGrade = function (students, grade) {};

// filter events that occur before a certain date [{name: "Event1", date: "2024-12-01"}, {name: "Event2", date: "2024-11-15"}] => [{name: "Event2", date: "2024-11-15"}]
const filterByDate = function (events, date) {};

// filter employees who earn more than a certain salary [{name: "Alice", salary: 5000}, {name: "Bob", salary: 7000}] => [{name: "Bob", salary: 7000}]
const filterBySalary = function (employees, salary) {};

// filter orders with a quantity greater than a given number [{orderId: 1, quantity: 10}, {orderId: 2, quantity: 5}] => [{orderId: 1, quantity: 10}]
const filterByQuantity = function (orders, quantity) {};

// filter books published after a certain year [{title: "Book1", year: 2020}, {title: "Book2", year: 2022}] => [{title: "Book2", year: 2022}]
const filterByYear = function (books, year) {};

// filter students with a grade higher than a given threshold in a specific subject [{name: "Alice", grades: {math: 90, science: 80}}, {name: "Bob", grades: {math: 70, science: 85}}] => [{name: "Alice", grades: {math: 90, science: 80}}]
const filterBySubjectGrade = function (students, subject, threshold) {};

// filter photos with a minimum number of likes [{id: 1, likes: 100}, {id: 2, likes: 50}] => [{id: 1, likes: 100}]
const filterByLikes = function (photos, likes) {};

// filter users who have made a certain number of posts [{username: "Alice", posts: 10}, {username: "Bob", posts: 5}] => [{username: "Alice", posts: 10}]
const filterByPostCount = function (users, postCount) {};

// Apply a discount to each item's price, then filter for items under a certain price [{name: "item1", price: 100}, {name: "item2", price: 50}] => [{name: "item2", price: 45}]
const filterDiscountedItems = function (items, discount, maxPrice) {};

// Convert product names to uppercase, then filter for products with names longer than a certain number [{name: "apple"}, {name: "banana"}] => [{name: "APPLE"}]
const filterLongProductNames = function (products, minLength) {};

// Group users by their age, then filter for specific age groups [{name: "Alice", age: 25}, {name: "Bob", age: 35}] => [{name: "Bob", age: 35}]
const filterAgeGroups = function (users, ageGroup) {};

// Convert grades to letter grades, then filter for students who passed [{name: "Alice", grade: 90}, {name: "Bob", grade: 55}] => [{name: "Alice", grade: 90}]
const filterPassingGrades = function (students, passingGrade) {};

// Calculate VAT-inclusive prices, then filter for those over a certain threshold [{name: "item1", price: 100}, {name: "item2", price: 50}] => [{name: "item1", price: 120}]
const filterHighPriceWithVAT = function (products, vatRate, threshold) {};

// Calculate the length of each name, then filter for names longer than a given number [{name: "Alice"}, {name: "Bob"}] => [{name: "Alice"}]
const filterLongNames = function (people, minLength) {};

// Normalize scores to a standard range, then filter for students who passed [{name: "John", score: 50}, {name: "Jane", score: 80}] => [{name: "Jane", score: 80}]
const filterNormalizedScores = function (students, minScore) {};

// Convert book publication dates, then filter for books published after a given year [{title: "Book1", year: 2020}, {title: "Book2", year: 2022}] => [{title: "Book2", year: 2022}]
const filterRecentBooks = function (books, yearThreshold) {};

// Count the number of posts for each user, then filter for users with more than a specific number of posts [{username: "Alice", posts: 100}, {username: "Bob", posts: 50}] => [{username: "Alice", posts: 100}]
const filterActivePosters = function (users, postThreshold) {};

// Convert students' grades to letter grades, then filter for students who received a specific grade [{name: "Alice", grade: 90}, {name: "Bob", grade: 85}] => [{name: "Alice", grade: 90}]
const filterSpecificGrade = function (students, grade) {};

// Filter products based on category and price threshold [{category: {type: "electronics"}, name: "Laptop", price: 800}, {category: {type: "furniture"}, name: "Chair", price: 150}] => [{category: {type: "electronics"}, name: "Laptop", price: 800}]
const filterByCategoryAndPrice = function (products, category, maxPrice) {};

// Filter users based on their activity level and registration date [{profile: {username: "Alice", status: "active"}, registration: {date: "2020-05-01"}}] => [{profile: {username: "Alice", status: "active"}, registration: {date: "2020-05-01"}}]
const filterActiveUsersByDate = function (users, status, dateThreshold) {};

// Filter orders where the customer's balance is above a certain threshold and the order total is under a certain amount [{customer: {name: "Alice", balance: 1000}, order: {total: 200}}] => [{customer: {name: "Alice", balance: 1000}, order: {total: 200}}]
const filterOrdersByBalanceAndTotal = function (
  orders,
  balanceThreshold,
  totalThreshold
) {};

// Filter articles based on author name and publish date [{author: {name: "Alice"}, content: "Article 1", publishDate: "2021-01-01"}] => [{author: {name: "Alice"}, content: "Article 1", publishDate: "2021-01-01"}]
const filterArticlesByAuthorAndDate = function (
  articles,
  authorName,
  dateThreshold
) {};

// Filter courses by instructor name and course rating [{instructor: {name: "John"}, course: {rating: 4.5}}] => [{instructor: {name: "John"}, course: {rating: 4.5}}]
const filterCoursesByInstructorAndRating = function (
  courses,
  instructorName,
  ratingThreshold
) {};

// Filter projects by team size and completion status [{team: {members: ["Alice", "Bob"], size: 2}, project: {completed: false}}] => [{team: {members: ["Alice", "Bob"], size: 2}, project: {completed: false}}]
const filterProjectsByTeamSizeAndStatus = function (
  projects,
  teamSizeThreshold,
  status
) {};

// Filter job candidates based on years of experience and their skills [{skills: {languages: ["JavaScript", "Python"]}, experience: {years: 5}}] => [{skills: {languages: ["JavaScript", "Python"]}, experience: {years: 5}}]
const filterCandidatesByExperienceAndSkills = function (
  candidates,
  experienceThreshold,
  requiredSkills
) {};

// Filter events based on location and date [{location: {city: "New York"}, date: {eventDate: "2022-07-01"}}] => [{location: {city: "New York"}, date: {eventDate: "2022-07-01"}}]
const filterEventsByLocationAndDate = function (events, city, dateThreshold) {};

// Filter customers based on region and membership status [{region: {country: "USA", state: "California"}, membership: {status: "gold"}}] => [{region: {country: "USA", state: "California"}, membership: {status: "gold"}}]
const filterCustomersByRegionAndStatus = function (
  customers,
  region,
  status
) {};

// Filter tasks based on assignee's role and priority level [{assignee: {role: "developer"}, task: {priority: "high"}}] => [{assignee: {role: "developer"}, task: {priority: "high"}}]
const filterTasksByRoleAndPriority = function (tasks, role, priorityLevel) {};
