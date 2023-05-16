//Create an object called 'facebookProfile'. 
//Object should have 3 properties:
//name
//friends
//array of messages you've posted (as strings)
//The object should also have 4 methods:

//postMessage(message) - adds a new message string to the array
//deleteMessage(index) - removes the message corresponding to the index provided
//addFriend() - increases the friend count by 1
//removeFriend() - decreases the friend count by 1

 // TIP - 
// In an array, 
// - addition at the end is done using push() method
// - addition at a specific index is done using splice() method
// - deletion from the beginning is done using pop() method
// - deletion from a specific index is done using splice() method*/

//Create an object called 'facebookProfile'.
//Object should have 3 properties:
//name
//friends
//array of messages you've posted (as strings)
//The object should also have 4 methods:


let facebookProfile = {
  name: "Anthony",
  friends: 0,
  messages: ["hi","hiya"],
  postMessage: function(mess) {
    facebookProfile.messages.push(mess);
  },
  deleteMessage: function(index) {
    facebookProfile.messages.splice(index,1);
  },
  addFriend: function() {
    facebookProfile.friends++;
  },
  removeFriend: function() {
    facebookProfile.friends--;
  }
}; 
console.log(facebookProfile);

//postMessage(message) - adds a new message string to the array
//deleteMessage(index) - removes the message corresponding to the index provided
//addFriend() - increases the friend count by 1
//removeFriend() - decreases the friend count by 1