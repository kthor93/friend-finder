// Dependencies
const friends = require("../data/friends");

// Routing
module.exports = function (app) {
    app.get("/api/friends", function (request, response) {
        response.json(friends);
    });

    app.post('/api/friends', function (request, response) {
        let userInput = request.body;
        let userScores = userInput.scores;
        let matchName = '';
        let totalDifference = 100;

        for (let i = 0; i < friends.length; i++) {
            let diff = 0;

            for (let j = 0; j < userScores.length; j++) {
                diff += Math.abs(friends[i].scores[j] - userScores[j]);
            }

            if (diff < totalDifference) {
                totalDifference = diff;
                matchName = friends[i].name;
            }
        }

        friends.push(userInput);

        response.json({ status: 'OK', matchName: matchName });
    });
};