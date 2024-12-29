// Filter teams where at least one member is from a specific department [{team: {name: "Dev Team", members: [{name: "Alice", department: "Engineering"}, {name: "Bob", department: "Marketing"}]}}] => [{team: {name: "Dev Team", members: [{name: "Alice", department: "Engineering"}, {name: "Bob", department: "Marketing"}]}}]
const filterTeamsByDepartment = function (teams, department) {};

// Filter products where one of the reviews has a rating above a threshold [{name: "Laptop", reviews: [{rating: 4.5}, {rating: 3.2}]}] => [{name: "Laptop", reviews: [{rating: 4.5}, {rating: 3.2}]}]
const filterProductsByReviewRating = function (products, minRating) {};

// Filter orders where one of the items is below a certain price [{order: {items: [{product: "Shirt", price: 25}, {product: "Shoes", price: 50}]}}] => [{order: {items: [{product: "Shirt", price: 25}, {product: "Shoes", price: 50}]}}]
const filterOrdersByItemPrice = function (orders, maxPrice) {};

// Filter events where at least one speaker is a particular person [{event: {name: "Tech Talk", speakers: [{name: "John"}, {name: "Alice"}]}}] => [{event: {name: "Tech Talk", speakers: [{name: "John"}, {name: "Alice"}]}}]
const filterEventsBySpeaker = function (events, speakerName) {};

// Filter students where at least one class has a passing grade [{student: {name: "Tom", classes: [{name: "Math", grade: "B"}, {name: "History", grade: "C"}]}}] => [{student: {name: "Tom", classes: [{name: "Math", grade: "B"}, {name: "History", grade: "C"}]}}]
const filterStudentsByClassGrade = function (students, passingGrade) {};

// Filter employees where at least one project has been completed [{employee: {name: "Alice", projects: [{name: "Project X", completed: true}, {name: "Project Y", completed: false}]}}] => [{employee: {name: "Alice", projects: [{name: "Project X", completed: true}, {name: "Project Y", completed: false}]}}]
const filterEmployeesByCompletedProject = function (employees) {};

// Filter courses where at least one module has been completed [{course: {title: "JavaScript 101", modules: [{name: "Intro", completed: true}, {name: "Advanced", completed: false}]}}] => [{course: {title: "JavaScript 101", modules: [{name: "Intro", completed: true}, {name: "Advanced", completed: false}]}}]
const filterCoursesByCompletedModule = function (courses) {};

// Filter organizations where one of the branches has a high rating [{organization: {name: "Tech Co", branches: [{name: "NYC", rating: 4.5}, {name: "LA", rating: 3.8}]}}] => [{organization: {name: "Tech Co", branches: [{name: "NYC", rating: 4.5}, {name: "LA", rating: 3.8}]}}]
const filterOrganizationsByBranchRating = function (
  organizations,
  minRating
) {};

// Filter candidates where at least one job experience is in a specific industry [{candidate: {name: "Alice", experiences: [{company: "Tech Inc", industry: "Software"}, {company: "Retail Corp", industry: "Retail"}]}}] => [{candidate: {name: "Alice", experiences: [{company: "Tech Inc", industry: "Software"}, {company: "Retail Corp", industry: "Retail"}]}}]
const filterCandidatesByIndustryExperience = function (candidates, industry) {};

// Filter cars where at least one feature is electric [{car: {model: "Tesla", features: [{type: "electric", name: "autopilot"}, {type: "gas", name: "V6 engine"}]}}] => [{car: {model: "Tesla", features: [{type: "electric", name: "autopilot"}, {type: "gas", name: "V6 engine"}]}}]
const filterCarsByFeatureType = function (cars, featureType) {};

// Filter teams where at least one member has a specific skill [{team: {name: "Dev Team", members: [{name: "Alice", skills: ["JavaScript", "React"]}, {name: "Bob", skills: ["Python", "Django"]}]}}] => [{team: {name: "Dev Team", members: [{name: "Alice", skills: ["JavaScript", "React"]}, {name: "Bob", skills: ["Python", "Django"]}]}}]
const filterTeamsBySkill = function (teams, skill) {};

// Filter students where at least one grade is above a certain threshold [{student: {name: "Tom", grades: [{subject: "Math", grade: 85}, {subject: "English", grade: 72}]}}] => [{student: {name: "Tom", grades: [{subject: "Math", grade: 85}, {subject: "English", grade: 72}]}}]
const filterStudentsByGrade = function (students, minGrade) {};

// Filter books where at least one author has won a specific award [{book: {title: "Book 1", authors: [{name: "Author A", awards: ["Pulitzer"]}, {name: "Author B", awards: ["Nobel"]}]}}] => [{book: {title: "Book 1", authors: [{name: "Author A", awards: ["Pulitzer"]}, {name: "Author B", awards: ["Nobel"]}]}}]
const filterBooksByAward = function (books, award) {};

// Filter users where at least one post has more than a specific number of likes [{user: {name: "John", posts: [{title: "Post 1", likes: 150}, {title: "Post 2", likes: 20}]}}] => [{user: {name: "John", posts: [{title: "Post 1", likes: 150}, {title: "Post 2", likes: 20}]}}]
const filterUsersByPostLikes = function (users, minLikes) {};

// Filter cities where at least one attraction is in a specific category [{city: {name: "Paris", attractions: [{name: "Eiffel Tower", category: "landmark"}, {name: "Louvre", category: "museum"}]}}] => [{city: {name: "Paris", attractions: [{name: "Eiffel Tower", category: "landmark"}, {name: "Louvre", category: "museum"}]}}]
const filterCitiesByAttractionCategory = function (cities, category) {};

// Filter courses where at least one student is enrolled in more than one course [{course: {name: "JavaScript", students: [{name: "Tom", enrolledCourses: ["Math", "JavaScript"]}, {name: "Alice", enrolledCourses: ["JavaScript"]}]}}] => [{course: {name: "JavaScript", students: [{name: "Tom", enrolledCourses: ["Math", "JavaScript"]}, {name: "Alice", enrolledCourses: ["JavaScript"]}]}}]
const filterCoursesByMultipleEnrollments = function (courses) {};

// Filter restaurants where at least one menu item is vegetarian [{restaurant: {name: "Vegan Bistro", menu: [{item: "Tofu Stir Fry", type: "vegetarian"}, {item: "Chicken Salad", type: "non-vegetarian"}]}}] => [{restaurant: {name: "Vegan Bistro", menu: [{item: "Tofu Stir Fry", type: "vegetarian"}, {item: "Chicken Salad", type: "non-vegetarian"}]}}]
const filterRestaurantsByVegetarianMenuItem = function (restaurants) {};

// Filter employees where at least one project is high priority [{employee: {name: "Jane", projects: [{name: "Project A", priority: "high"}, {name: "Project B", priority: "low"}]}}] => [{employee: {name: "Jane", projects: [{name: "Project A", priority: "high"}, {name: "Project B", priority: "low"}]}}]
const filterEmployeesByHighPriorityProject = function (employees) {};

// Filter orders where at least one item is from a specific category [{order: {items: [{name: "Laptop", category: "Electronics"}, {name: "Shoes", category: "Apparel"}]}}] => [{order: {items: [{name: "Laptop", category: "Electronics"}, {name: "Shoes", category: "Apparel"}]}}]
const filterOrdersByCategory = function (orders, category) {};

// Filter events where at least one speaker has a specific expertise [{event: {name: "Tech Talk", speakers: [{name: "Alice", expertise: "AI"}, {name: "Bob", expertise: "Web Development"}]}}] => [{event: {name: "Tech Talk", speakers: [{name: "Alice", expertise: "AI"}, {name: "Bob", expertise: "Web Development"}]}}]
const filterEventsBySpeakerExpertise = function (events, expertise) {};

// Filter users who have at least one post with more than a certain number of comments [{user: {name: "John", posts: [{title: "Post 1", comments: 100}, {title: "Post 2", comments: 5}]}}] => [{user: {name: "John", posts: [{title: "Post 1", comments: 100}, {title: "Post 2", comments: 5}]}}]
const filterUsersByPostComments = function (users, minComments) {};

// Filter users who have at least one post in a specific category [{user: {name: "Anna", posts: [{title: "Post 1", category: "Food"}, {title: "Post 2", category: "Travel"}]}}] => [{user: {name: "Anna", posts: [{title: "Post 1", category: "Food"}, {title: "Post 2", category: "Travel"}]}}]
const filterUsersByPostCategory = function (users, category) {};

// Filter users who have a certain number of followers and have posted in the last 30 days [{user: {name: "Tom", followers: 1000, lastPostDate: "2024-11-10"}}] => [{user: {name: "Tom", followers: 1000, lastPostDate: "2024-11-10"}}]
const filterRecentlyActiveUsers = function (users, minFollowers, daysAgo) {};

// Filter posts that have at least one hashtag from a list of trending hashtags [{post: {title: "Post 1", hashtags: ["#food", "#vegan"]}}] => [{post: {title: "Post 1", hashtags: ["#food", "#vegan"]}}]
const filterPostsByHashtags = function (posts, trendingHashtags) {};

// Filter users who have shared at least one post that received a specific number of likes [{user: {name: "Lucy", posts: [{title: "Post 1", likes: 500}, {title: "Post 2", likes: 100}]}}] => [{user: {name: "Lucy", posts: [{title: "Post 1", likes: 500}, {title: "Post 2", likes: 100}]}}]
const filterUsersByMinPostLikes = function (users, minLikes) {};

// Filter posts that have a certain number of comments and are from a specific location [{post: {title: "Post 1", comments: 150, location: "Paris"}}] => [{post: {title: "Post 1", comments: 150, location: "Paris"}}]
const filterPostsByCommentsAndLocation = function (
  posts,
  minComments,
  location
) {};

// Filter users who have at least one post where the caption contains a specific word [{user: {name: "Sara", posts: [{title: "Post 1", caption: "Amazing sunset!"}, {title: "Post 2", caption: "Another day, another adventure!"}]}}] => [{user: {name: "Sara", posts: [{title: "Post 1", caption: "Amazing sunset!"}, {title: "Post 2", caption: "Another day, another adventure!"}]}}]
const filterUsersByPostCaption = function (users, word) {};

// Filter users who follow a certain number of accounts and have at least one post in the last week [{user: {name: "Jake", following: 200, lastPostDate: "2024-12-10"}}] => [{user: {name: "Jake", following: 200, lastPostDate: "2024-12-10"}}]
const filterUsersByFollowingAndRecentPosts = function (
  users,
  minFollowing,
  daysAgo
) {};

// Filter posts from users who have more than a certain number of followers and at least one post with over a set number of comments [{post: {user: {name: "Chris", followers: 1200}, comments: 350}}] => [{post: {user: {name: "Chris", followers: 1200}, comments: 350}}]
const filterPostsByUserFollowersAndComments = function (
  posts,
  minFollowers,
  minComments
) {};

// Filter users who have shared a post that has a specific hashtag and has been liked more than a set number [{user: {name: "Mia", posts: [{title: "Post 1", hashtags: ["#beach", "#sunset"], likes: 300}]}}] => [{user: {name: "Mia", posts: [{title: "Post 1", hashtags: ["#beach", "#sunset"], likes: 300}]}}]
const filterUsersByHashtagAndLikes = function (users, hashtag, minLikes) {};

// Filter numbers from the first array that are present in the second array
// Input: [1, 2, 3, 4, 5], [2, 4, 6]
// Output: [2, 4]
const filterByMembership = function (numbers, criteria) {};

// Filter strings from the first array that appear in the second array
// Input: ["apple", "banana", "cherry"], ["banana", "cherry", "date"]
// Output: ["banana", "cherry"]
const filterStringsByMembership = function (strings, criteria) {};

// Filter objects from the first array where the 'id' property is present in the second array
// Input: [{id: 1, name: "apple"}, {id: 2, name: "banana"}], [1, 3]
// Output: [{id: 1, name: "apple"}]
const filterObjectsById = function (objects, ids) {};

// Filter numbers from the first array that are found in the second array, and greater than a specific threshold
// Input: [1, 2, 3, 4, 5], [2, 4, 6], threshold: 3
// Output: [4]
const filterGreaterThanThresholdByMembership = function (
  numbers,
  criteria,
  threshold
) {};

// Filter strings from the first array that have a length greater than a specified value and are present in the second array
// Input: ["apple", "banana", "cherry"], ["banana", "date"], length: 5
// Output: ["banana"]
const filterStringsByLengthAndMembership = function (
  strings,
  criteria,
  length
) {};

// Filter numbers from the first array that are not present in the second array
// Input: [1, 2, 3, 4, 5], [2, 4, 6]
// Output: [1, 3, 5]
const filterByExclusion = function (numbers, criteria) {};

// Filter objects from the first array that contain properties in the second array
// Input: [{name: "apple", color: "red"}, {name: "banana", color: "yellow"}], ["color"]
// Output: [{name: "apple", color: "red"}, {name: "banana", color: "yellow"}]
const filterObjectsByProperties = function (objects, properties) {};

// Filter strings from the first array where the substring exists in the second array
// Input: ["hello", "world", "hell", "how"], ["hell", "hello"]
// Output: ["hello", "hell"]
const filterStringsBySubstringMembership = function (strings, criteria) {};

// Filter numbers from the first array that fall within a range specified by a pair in the second array
// Input: [1, 2, 3, 4, 5], [[2, 4]]
// Output: [2, 3, 4]
const filterByRange = function (numbers, ranges) {};

// Filter numbers from the first array that are present in the second array and are even
// Input: [1, 2, 3, 4, 5], [2, 4, 6]
// Output: [2, 4]
const filterEvenNumbersByMembership = function (numbers, criteria) {};

// Find countries that exist based on a lookup object with country names as keys and existence status as values.
// Input: ["India", "USA", "Iran"], { "India": "exists", "USA": "does not exist", "Iran": "exists" }
// Output: ["India", "Iran"]
const findCountriesThatExist = function (countries, lookup) {};

// Find numbers that are marked as 'valid' in the lookup object.
// Input: [10, 20, 30, 40], {10: "valid", 20: "invalid", 30: "valid", 40: "valid"}
// Output: [10, 30, 40]
const findValidNumbers = function (numbers, lookup) {};

// Find users whose account status is 'active' from the lookup object.
// Input: ["Alice", "Bob", "Charlie"], { "Alice": { status: "active" }, "Bob": { status: "inactive" }, "Charlie": { status: "active" } }
// Output: ["Alice", "Charlie"]
const findActiveUsers = function (users, lookup) {};

// Find strings where the length of the string is greater than the corresponding numeric threshold in the lookup object.
// Input: ["apple", "banana", "kiwi"], { "apple": 4, "banana": 5, "kiwi": 6 }
// Output: ["banana"]
const findStringsAboveThreshold = function (strings, lookup) {};

// Find the products whose price is less than a given threshold from the lookup object.
// Input: ["Laptop", "Phone", "Tablet"], { "Laptop": { price: 1000 }, "Phone": { price: 500 }, "Tablet": { price: 300 } }
// Output: ["Phone", "Tablet"]
const findAffordableProducts = function (products, lookup) {};

// Find students who have scored more than a given score in their exam from the lookup object.
// Input: ["John", "Alice", "Bob"], { "John": 85, "Alice": 92, "Bob": 70 }
// Output: ["John", "Alice"]
const findHighScoringStudents = function (students, lookup) {};

// Find employees who have been at the company for more than 5 years based on the lookup object.
// Input: ["John", "Alice", "Bob"], { "John": { yearsAtCompany: 6 }, "Alice": { yearsAtCompany: 4 }, "Bob": { yearsAtCompany: 7 } }
// Output: ["John", "Bob"]
const findLongTermEmployees = function (employees, lookup) {};

// Find cities with a population greater than a threshold provided in the lookup object.
// Input: ["London", "Paris", "Tokyo"], { "London": { population: 9000000 }, "Paris": { population: 2200000 }, "Tokyo": { population: 14000000 } }
// Output: ["London", "Tokyo"]
const findLargeCities = function (cities, lookup) {};

// Find items in an inventory whose quantity is greater than 10 based on the lookup object.
// Input: ["item1", "item2", "item3"], { "item1": { quantity: 15 }, "item2": { quantity: 5 }, "item3": { quantity: 20 } }
// Output: ["item1", "item3"]
const findInStockItems = function (items, lookup) {};

// Find animals whose habitat matches the required type from the lookup object.
// Input: ["Lion", "Elephant", "Shark"], { "Lion": { habitat: "Jungle" }, "Elephant": { habitat: "Jungle" }, "Shark": { habitat: "Ocean" } } , "Jungle"
// Output: ["Lion", "Elephant"]
const findAnimalsByHabitat = function (animals, lookup) {};
