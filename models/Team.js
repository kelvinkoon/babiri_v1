const mongoose = require("mongoose");

const TeamSchema = new mongoose.Schema(
  {
    date: Date,
    users: [
      {
        rank: Number,
        website_rank: Number,
        username: String,
        team: [String],
        replay_url: String,
        rating: Number,
        upload_date: String
      }
    ],
    format: String,
    usage: [
      {
        mon: String,
        freq: Number,
        percent: Number
      }
    ]
  },
  {
    collection: "teams"
  }
);

module.exports = Team = mongoose.model("team", TeamSchema);
