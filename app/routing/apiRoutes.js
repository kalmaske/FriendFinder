var friendsData = require('../data/friends.js');


module.exports = function (app) {

    app.get('/api/friends', function (req, res) {
        res.json(friendsData);
    })


    app.post('/api/friends', function (req, res) {
        var newFriend = req.body;

        for (var i = 0; i < newFriend.answers.length; i++) {
            if (newFriend.answers[i] == "1 (Strongly Disagree)") {
                newFriend.answers[i] = 1;
            } else if (newFriend.answers[i] == "5 (Strongly Agree)") {
                newFriend.answers[i] = 5;
            } else {
                newFriend.answers[i] = parseInt(newFriend.answers[i]);
            }
        }

        var compareArray = [];

        for (var i = 0; i < friendsData.length; i++) {

            var comparedAns = friendsData[i];
            var totalDifferences = 0;

            for (var j = 0; j < comparedAns.answers.length; j++) {
                var ansDifferences = Math.abs(comparedAns.answers[j] - newFriend.answers[j]);
                totalDifferences += ansDifferences;
            }

            compareArray[i] = totalDifferences;
        }

        var bestFriendList = compareArray[0];
        var bestFriendIndex = 0;

        for (var i = 1; i < compareArray.length; i++) {
            if (compareArray[i] < bestFriendList) {
                bestFriendList = compareArray[i];
                bestFriendIndex = i;
            }
        }

        friendsData.push(newFriend);

        res.json(friendsData[bestFriendIndex]);
    })
}