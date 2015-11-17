// create an empty var to store emails sent

//  to access the emailLog.js,
  // 1. index.html must have both the js with the info and the js using the file
          // <script src="emailLog.js"></script>
          // <script src="emailHell.js"></script>



var listOfEmails = {};

// loop through emails sent

for ( var i = 0; i < emailLog.length; i++) {
// count the emails
  if ( listOfEmails.hasOwnProperty(emailLog[i].email)) {
    listOfEmails[emailLog[i].email]  ++;
  }else {
    listOfEmails[emailLog[i].email] = 1;
  }
}
console.log(listOfEmails);
console.log(emailLog.email);


// // delete emails with one
for (var email in listOfEmails) {
  if (listOfEmails[email] === 1) {
    delete listOfEmails[email];
  }
}
//console.log(emailLog.email);





