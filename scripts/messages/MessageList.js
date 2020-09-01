import { useMessages } from "./MessageProvider.js";
import { Message } from "./Message.js";

const contentTarget = document.querySelector(".messages");
const friendListSection = document.querySelector(".friends");

/*
    COMPONENT FUNCTION
*/
export const MessageList = () => {
  const allMessages = useMessages();
  render(allMessages);
};

/*
    RENDERING FUNCTION
*/
const render = (messageArray) => {
  const convertedMessages = messageArray.map((messageObject) => {
    const messageHTML = Message(messageObject);
    return messageHTML;
  });
  const combinedSections = convertedMessages.join("");
  contentTarget.innerHTML = combinedSections;
};

/*
    Color the messages when one of the buttons in the ThemeButtons
    component is clicked. FIRST WAY WITH INCORRECT COUPLING
*/
// document.querySelector(".themes").addEventListener("click", (e) => {
//   const idOfClickedElement = e.target.id;

//   if (idOfClickedElement.startsWith("themeButton--")) {
//     const [prefix, color] = idOfClickedElement.split("--");
//     contentTarget.classList = [];
//     contentTarget.classList.add(color);
//   }
// });

/*
    Color the messages when one of the buttons in the ThemeButtons
    component is clicked.2nd way with better coupling
*/
const eventHub = document.querySelector(".container");

eventHub.addEventListener("colorChosen", (event) => {
  const color = event.detail.color;

  contentTarget.classList = [];
  contentTarget.classList.add(color);
});
// Listen for when a friend is selected
friendListSection.addEventListener("change", (changeEvent) => {
  if (changeEvent.target.classList.contains("friend")) {
    // Get messages for friend and render the list of messages
    const friendName = changeEvent.target.value;
    const messages = getMessagesByFriend(friendName);
    render(messages);
  }
});
eventHub.addEventListener("friendSelected", (event) => {
  const friendName = event.detail.friend;
  const messages = getMessagesByFriend(friendName);
  render(messages);
});
export const getMessagesByFriend = (friend) => {
  const friendMessages = useMessages();
  const filteredMessages = friendMessages.filter((message) => {
    /*
                Returns true or false. If true, current message
                goes into new array.
              */
    return message.friend === friend;
  });

  return filteredMessages;
};
