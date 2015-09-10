// create an empty var to store emails sent

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





