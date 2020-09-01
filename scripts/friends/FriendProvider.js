let friends = [
  { name: "Sally", age: 31, location: "Nashville" },
  { name: "Dominic", age: 39, location: "Knoxville" },
  { name: "Tamela", age: 29, location: "Louisville" },
  { name: "Yolanda", age: 42, location: "Asheville" },
];

export const useFriends = () => {
  return friends.slice().sort((a, b) => a.age - b.age);
};
