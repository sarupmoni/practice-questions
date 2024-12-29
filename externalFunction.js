export const display = (description, func) => {
  console.log(description);
  console.log("-".repeat(description.length));
  console.log(func);
  console.log();
};

const sum = (array) => array.reduce((total, element) => total + element, 0);

const average = (array) => sum(array) / array.length;

export const greaterThanTarget = (array, property, target) =>
  array.filter((x) => x[property] >= target);

export const lessThanTarget = (array, property, target) =>
  array.filter((x) => x[property] <= target);

export const belowAverageBy = (array, property) => {
  const values = array.map((x) => x[property]);
  const avg = average(values);
  return array.filter((x) => x[property] < avg);
};

export const aboveAverageBy = (array, property) => {
  const values = array.map((x) => x[property]);
  const avg = average(values);
  return array.filter((x) => x[property] > avg);
};

// const main = () => {
//   const myPosts = [
//     { postId: 1, likes: 100, comments: 1 },
//     { postId: 2, likes: 200, comments: 2 },
//     { postId: 3, likes: 150, comments: 3 },
//   ];
//   return belowAverageBy(myPosts, "likes");
// };

// console.log(main());
