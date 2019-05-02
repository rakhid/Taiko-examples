# Taiko-examples
This project has small scripts that help you understand how to operate Taiko



This is how you have to use each file :

# File 1:basicTaikoCommands.js

   1.) This file sends a "Working from home" notification from your GMAIL id to any email id.
   2.) To execute this file you have to input 3 parameters in the following format

   taiko basicTaikoCommands.js <senders-gmail-id>  <senders-gmail-password> <recievers-email-id> 
  
##P.s.Make sure the gmail id you use does not have 2 factor authentication.



# File 2:contactUsForm.js
  
  1.) This file uses "http://automationpractice.com/index.php" website to demonstrate uploading a file 
  2.) To execute the file you need to provide one jpeg or PDF file's path inside the file
  
   #To run in headless mode use command :
   => Taiko contactUsForm.js
   
   #To run in observe mode use command :
   => Taiko contactUsForm.js -o
   
   
# File 3:diagnosticPluginDemo.js

  1.) This file uses "http://www.youtube.com" website to demonstrate diagnostics on the landing page of youtube
  
  we need to download the taiko-diagnostic plugin globally using the following command :
  ---> npm install taiko-diagnostics -g
  Then we need to connect it to the taiko in system using the following command :
  
  ---> taiko --plugin taiko-diagnostics

  #To run file use command :
   
  taiko diagnosticPluginDemo.js
 

   
# File 4:interception.js

1.) This file uses MakeMyTrip website to demonstrate interception of calls using Taiko
     
     Do not run this file directly , only use it as a refrence to understand how interception works.
     
   
# File 5:screenCastDemo.js


  1.) This file uses "http://www.practiceselenium.com/welcome.html" website to demonstrate gif creation using taiko
  
  we need to download the taiko-screencast plugin globally using the following command :
  ---> npm install taiko-screencast -g
  Then we need to connect it to the taiko in system using the following command :
  
  ---> taiko --plugin taiko-screencast

  #To run file use command :
         update the file with the path where you want the gif to get created 
         taiko screenCastDemo.js


   
# File 6:screenShot.js


  1.) This file uses "http://www.practiceselenium.com/welcome.html" website to demonstrate gif creation using taiko
  

  #To run file use command :
  
   update the file with the path where you want the screenshot to get created
   
   taiko screenShot.js
   
   # File 7:smartSelectors.js


  1.) This file uses "http://www.makemytrip.com" website to demonstrate smart selectors in Taiko
  

  #To run file use command :
  
   taiko smartSelectors.js
