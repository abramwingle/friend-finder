
var friends = require("../data/friends");


module.exports = function (app) {

    app.get("/api/friends", function (req, res) {
        console.log("entered the get api/friends")

        res.json(friends);

    });

    app.post("/api/friends", function (req, res) {
        console.log("entered post api/friends");
        console.log(req.body['scores[]']);
        var user = req.body;

        user.scores = [];



        for (friendIterator = 0; friendIterator < req.body["scores[]"].length; friendIterator++) {
            user.scores.push(parseInt(req.body["scores[]"][friendIterator]));

        }
        var bestFriendIndex = 0;
        var minimumDifference = 40;

        for (friendIterator = 0; friendIterator < friends.length; friendIterator++) {
            var difference = 0;
            var totalDifference;
            for (var friendScoreIterator = 0; friendScoreIterator < friends[friendIterator].scores.length; friendScoreIterator++) {
                var difference = Math.abs(user.scores[friendScoreIterator] - friends[friendScoreIterator]);
                totalDifference += difference;
            }

            if (totalDifference < minimumDifference) {
                bestFriendIndex = friendIterator;
                minimumDifference = totalDifference;
            }
        }
        friends.push(user)
        res.json(friends[bestFriendIndex]);
        console.log("finished post api/friends");
    });

}




