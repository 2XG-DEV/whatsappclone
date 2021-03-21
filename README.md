# whatsappclone
Hello Everyone! This is a WhatsApp clone I have made using react and redux for the front-end and firebase for the back-end.
You can check it out working at https://whatsappclone-31c5c.firebaseapp.com/
If you want to use these files just use "npx create-react-app my-app --template redux" and paste them in. 
Also make sure you create your own firebase project and generate your own firebase config to paste into the /src/firebase.js file.
Make sure your firestore has a collection named "rooms" where the document has a field called "name" and a collection named "messages" where the document has three fields:
"message","name" and "timestamp".
This should have you up and running , just run "npm start"
