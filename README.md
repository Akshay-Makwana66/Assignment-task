# Assignment-task

Program:
1. Login page –1
• Should have 2 inputs (user email and password), and 1 button (login button).
• Login button should send request to backend.
• Should have a JSON file from which user will read the file and validate if user credentials
are valid or not.
 Sample JSON file data
[{"email_id":"sample@gmail.com","password":"1234"},{“email_id":"sample1@gmail.co
m","password":"9876"}]
• After which user will redirect to page –2.
• User can access page –2 only if user logged in successfully else user should redirect to
page-1.
2. Home Page –2
• Should have 2 input tags, 4 buttons.
• Button 1 should be used to submit data typed in first input tag.
• Data should be stored in COOKIE and should retrieve even if user logs in again to the
account.
• Button 2 is to search data (from cookie) typed in second input tag and list the searched
data in UI if string matches with stored COOKIE.
• Button 3 is to clear all COOKIE.
• Button 4 is to logout from the account and redirect to login page -1.
• COOKIE data should not get clear unless and until user clicks on button 3.
NOTE: Do not give focus on UI.
