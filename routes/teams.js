const express = require("express");
const router = express.Router();
const moment = require("moment");
var ObjectId = require("mongodb").ObjectID;

const Team = require("../models/Team");

function isEmptyObject(obj) {
  var name;
  for (name in obj) {
    if (obj.hasOwnProperty(name)) {
      return false;
    }
  }
  return true;
}

// @route   GET /teams/
// @desc    Retrieve most recent date's teams
// @access  Public
router.get("/", async (req, res) => {
  date = req.query.date;
  mon = req.query.pokemon;

  try {
    // No Parameters
    // Return all teams from most recent date
    if (isEmptyObject(date) && isEmptyObject(mon)) {
      const teams = await Team.find()
        .sort({ date: -1 })
        .limit(1);
      res.json(teams[0]);
    }

    // Mon Parameter, No Date Parameters
    // Return teams with mon from most recent date
    else if (isEmptyObject(date) && !isEmptyObject(mon)) {
      const teams = await Team.find()
        .sort({ date: -1 })
        .limit(1);

      var re = new RegExp(mon, "i");

      var filtered_teams = await Team.aggregate([
        { $match: { _id: ObjectId(teams[0]._id) } },
        { $unwind: "$users" },
        { $match: { "users.team": { $in: [re] } } },
        {
          $group: {
            _id: "$_id",
            date: { $last: "$date" },
            users: {
              $push: {
                team: "$users.team",
                rank: "$users.rank",
                website_rank: "$users.website_rank",
                username: "$users.username",
                replay_url: "$users.replay_url",
                rating: "$users.rating",
                upload_date: "$users.upload_date"
              }
            },
            format: { $first: "$format" },
            usage: { $first: "$usage" }
          }
        }
      ]);

      res.json(filtered_teams.length > 0 ? filtered_teams[0] : filtered_teams);
    }

    // No Mon Parameter, Date Parameter
    // Return teams from specified date
    else if (!isEmptyObject(date) && isEmptyObject(mon)) {
      // Assume date is "YYYY-MM-DD" (Ex. 2020-01-27)
      var checkDate = moment(date, "YYYY-MM-DD");

      if (checkDate.isValid() && date.length == 10) {
        lowerDateRange = date + "T00:00:00.000+00:00";
        upperDateRange = date + "T23:59:59.000+00:00";

        const teams = await Team.find({
          date: {
            $gte: new Date(lowerDateRange),
            $lt: new Date(upperDateRange)
          }
        })
          .sort({ date: -1 })
          .limit(1);
        res.json(teams.length > 0 ? teams[0] : teams);
      } else {
        res.json([]);
      }
    }

    // Mon Parameter, Date Parameter
    // Return teams with mon from specified date
    else if (!isEmptyObject(date) && !isEmptyObject(mon)) {
      // Assume date is "YYYY-MM-DD" (Ex. 2020-01-27)
      var checkDate = moment(date, "YYYY-MM-DD");
      var teams;

      if (checkDate.isValid() && date.length == 10) {
        lowerDateRange = date + "T00:00:00.000+00:00";
        upperDateRange = date + "T23:59:59.000+00:00";

        teams = await Team.find({
          date: {
            $gte: new Date(lowerDateRange),
            $lt: new Date(upperDateRange)
          }
        })
          .sort({ date: -1 })
          .limit(1);
      } else {
        teams = [];
      }

      var re = new RegExp(mon, "i");

      if (teams.length > 0) {
        var filtered_teams = await Team.aggregate([
          { $match: { _id: ObjectId(teams[0]._id) } },
          { $unwind: "$users" },
          { $match: { "users.team": { $in: [re] } } },
          {
            $group: {
              _id: "$_id",
              date: { $last: "$date" },
              users: {
                $push: {
                  team: "$users.team",
                  rank: "$users.rank",
                  website_rank: "$users.website_rank",
                  username: "$users.username",
                  replay_url: "$users.replay_url",
                  rating: "$users.rating",
                  upload_date: "$users.upload_date"
                }
              },
              format: { $first: "$format" },
              usage: { $first: "$usage" }
            }
          }
        ]);

        res.json(
          filtered_teams.length > 0 ? filtered_teams[0] : filtered_teams
        );
      } else {
        res.json(teams);
      }
    }
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

module.exports = router;
