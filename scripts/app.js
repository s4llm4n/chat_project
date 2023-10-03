// dom queries
const chatList = document.querySelector('.chat-list');
const newChatForm = document.querySelector('.new-chat');

// add new chat
newChat

// class instances
const chatUI = new ChatUI(chatList);
const chatroom = new Chatroom('gaming', 'salman');

// get chat and render
chatroom.getChats(data => chatUI.render(data));
