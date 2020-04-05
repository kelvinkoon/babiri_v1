import React from "react";

const UsageItem = ({ usage, rank }) => {
  var name = usage.mon.substring(0, 1).toUpperCase() + usage.mon.substring(1);
  var cap_name = name.replace(/(^|[\s-])\S/g, function(match) {
    return match.toUpperCase();
  });

  return (
    <div
      className="text-center"
      style={{ display: "inline-block", width: "16.5em" }}
    >
      <div className="card rounded mt-4 text-center">
        <div className="card-header">
          <h6
            style={{
              textAlign: "left",
              float: "left"
            }}
          >
            #{rank + 1}.{" "}
            <a
              href={`https://www.babiri.net/#/teams?pokemon=${cap_name}`}
              target="_blank"
              rel="noopener noreferrer"
              className="card-link"
            >
              {cap_name}
            </a>
          </h6>

          <h6
            className="card-subtitle text-muted mt-1"
            style={{
              textAlign: "right",
              float: "right"
            }}
          >
            <i>Usage: {usage.percent}%</i>
          </h6>
        </div>
        <div
          className="card-body"
          style={{ display: "inline-block", height: "7.7em" }}
        >
          <img
            src={require(`../img/sprites/${usage.mon}.png`)}
            alt={usage.mon}
            key={usage.mon}
            style={{
              textAlign: "left",
              float: "left"
            }}
          />
          <p
            className="card-subtitle mt-2 mr-2"
            style={{
              textAlign: "right",
              float: "right"
            }}
          >
            <a
              href={`https://pikalytics.com/pokedex/ss/${usage.mon.toLowerCase()}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={require(`../img/pikalytics.png`)}
                alt={usage.mon}
                key={usage.mon}
                style={{
                  textAlign: "left",
                  float: "left",
                  height: "1.3em"
                }}
                className="mr-1"
              />
              <i>Pikalytics</i>
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default UsageItem;
