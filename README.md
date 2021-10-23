# file-up-down-load
react/spring file upload download projects

The app is divided into 3 parts, frontend using react js, backend with java-spring-boot, and mysql database. Following the micro services architecture, there two APIs in the backend, one for account management spring-boot-spring-security-jwt-authentication API and other for file management . Use this document for run the app guys (in case of needed lol).
1-	Create an schema named <file_store>

2-	The spring-boot-spring-security-jwt-authentication API, may struck on running, showing the next error on console:

The server time zone value 'Hora est�ndar de Venezuela' is unrecognized or represents more than one time zone. You must configure either the server or JDBC driver (via the serverTimezone configuration property) to use a more specifc time zone value if you want to utilize time zone support.

For fix this error, run this query on the file_store 
SET GLOBAL time_zone = '-3:00';

3-	On both spring-boot-spring-security-jwt-authentication API’s spring-boot-spring-security-jwt-authentication/src/main/resources/application.properties file
, in the first run, change this property
spring.jpa.hibernate.ddl-auto= update
to 
spring.jpa.hibernate.ddl-auto= create
after the first run, change it back.

4-	In the table file_store roles run this query
INSERT INTO `file_store`.`roles` (`id`, `name`) VALUES (1, 'ROLE_USER');


5-	Once the backend APIs are on, start the front.
VERY IMPORTANT!!!! DUE TO CORS POLICY, YOU MUST RUN THE FRON IN LOCALHOST:3000, OTHER WISE WONT BE ABLE TO USE FILE SERVICES.

6-	Now the app should be running. The first thing you see, is the login and the sign-up
(my apologies, due to time and some other things I could not use  correctly set them, so the will be showing all the time )
7-	Now you can create an user or authenticate with one previously created

8-	In the moment you log-in a logout button should appear in top left corner
_________________
|Logout <your user>|

And the main page should be shown.

9-	In the SERVICES tab the file manager do his work.

10-	You may upload/download files.

11-	The page is totally responsive

Greeting
