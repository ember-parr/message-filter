let messages = [
  { friend: "Sally", text: "I saw a dolphin eat a bird." },
  { friend: "Sally", text: "Where is Kazakhstan?" },
  {
    friend: "Sally",
    text: "I am going to Vegas this weekend for a professional conference.",
  },
  { friend: "Dominic", text: "The twins will not stop crying." },
  { friend: "Dominic", text: "I got a flat tire this morning. I'll be late." },
  { friend: "Dominic", text: "I think Florida beaches are the best." },
  { friend: "Tamela", text: "I like margeritas!" },
  { friend: "Tamela", text: "Since when does Johnathan like hamburgers?" },
  { friend: "Tamela", text: "I nailed the presentation at work today!" },
  { friend: "Yolanda", text: "I didn't get any sleep last night." },
  {
    friend: "Yolanda",
    text: "Would you like to come over for coffee this morning?",
  },
  {
    friend: "Yolanda",
    text:
      "April saw Mike walking in the park yesterday instead of being at work.",
  },
];

export const useMessages = () => {
  return messages.slice();
};
