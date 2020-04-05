import React from "react";

const UserItem = ({ user }) => {
  const renderedTeamList = user.team.map((mon, index) => {
    return (
      <img
        src={require(`../img/sprites/${mon}.png`)}
        alt={mon}
        key={user.username + mon + index}
      />
    );
  });

  return (
    <div className="card rounded mb-4">
      <div className="card-header">
        <h5
          style={{
            textAlign: "left",
            float: "left"
          }}
        >
          #{user.website_rank}.
        </h5>
        <h6
          className="card-subtitle text-muted mt-1"
          style={{
            textAlign: "right",
            float: "right"
          }}
        >
          <i>Rating: {user.rating}</i>
        </h6>
      </div>
      <div className="card-body">
        {renderedTeamList}
        <div className="mt-2">
          {user.replay_url ? (
            <div>
              <a
                href={user.replay_url}
                target="_blank"
                rel="noopener noreferrer"
                className="card-link"
              >
                Latest Replay
              </a>
              <p>
                <i>Uploaded: {user.upload_date}</i>
                <br />
                <i>Global Rank: #{user.rank}</i>
              </p>
            </div>
          ) : (
            "No Replay Found"
          )}
        </div>
      </div>
    </div>
  );
};

export default UserItem;
