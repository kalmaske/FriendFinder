# FriendFinder

A compatibility-based "FriendFinder" application -- basically a dating app. 

This full-stack site will take in results from a users' 10 questions surveys, then compare their answers with those from other users. 

The app will then display the name and picture of the user with the best overall match.


    Used Express to handle routing. 

    Server.js file requires the basic npm packages : express, body-parser and path.

    HtmlRoutes.js file have two routes:
        A GET Route to /survey which displays the survey page.
        A default, catch-all route that leads to home.html which displays the home page.

    ApiRoutes.js file have two routes:
        A GET route with the url /api/friends. This is used to display a JSON of all possible friends.
        A POST routes /api/friends. This is used to handle incoming survey results and used to handle the compatibility logic.

    Application's data is saved inside of app/data/friends.js as an array of objects. 



Deployed: https://shielded-retreat-32916.herokuapp.com/
