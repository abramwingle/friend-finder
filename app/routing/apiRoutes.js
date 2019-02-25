var express = require('express')
var app = express()


module.exports = function (app) {
    app.get("/api/friends", function (req, res) {
        res.json(friends);
    });

    app.post("/api/friends"), function (req, res) {

        var user = req.body;

        for (i = 0; i < user.scores.length; i++) {
            user.scores[i] = parseInt(user.scores[i]);

        }
        var bestFriendIndex = 0;
        var minimumDifference = 40;

        for (i = 0; i < friends.length; i++) {
            var difference = 0;

            for (var f = 0; f < friends[i].scores.length; f++) {
                var difference = Math.abs(user.scores[j] - friends[i].scores[j]);
                totalDifference += difference;


            }

            if(totalDifference < minimumDifference) {
                bestFriendIndex = i;
                minimumDifference = totalDifference;
              }
            }
        friends.push (user)
        res.json(friends[bestFriendIndex]);

        }

    }




