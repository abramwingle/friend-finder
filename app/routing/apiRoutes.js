
var friends = require("../data/friends");


module.exports = function (app) {

    app.get("/api/friends", function (req, res) {
        console.log("entered the get api/friends")

        res.json(friends);

    });

    app.post("/api/friends", function (req, res) {
        console.log("entered post api/friends");
        var user = req.body;
        user.scores = [];



        for (var i = 0; i < req.body['scores[]'].length; i++) {

            var parsedArray = parseInt(req.body["scores[]"][i]);
            user.scores.push(parsedArray);
        }
        var bestFriendIndex;
        var minimumDifference = 20;

        for (friendIterator = 0; friendIterator < friends.length; friendIterator++) {

            var totalDifference = 0;
            for (var friendScoreIterator = 0; friendScoreIterator < friends[friendIterator].scores.length; friendScoreIterator++) {

                var difference = Math.abs(user.scores[friendScoreIterator] - friends[friendIterator].scores[friendScoreIterator]);
                totalDifference += difference;
            }

            if (totalDifference < minimumDifference) {
                bestFriendIndex = friendIterator;
                minimumDifference = totalDifference;
                console.log(bestFriendIndex);
                //console.log(friends[bestFriendIndex]);
            }
        }

        friends.push(user)
        res.json(friends[bestFriendIndex]);
        console.log("finished post api/friends");
    });

}




