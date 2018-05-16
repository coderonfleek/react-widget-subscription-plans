import React from "react";

export default class StatsBar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { users, gb, repos } = this.props.statBarWidths;
    return (
      <div className="datas">
        <div className="data users">
          <div className="text">
            <span className="left">5 Users</span>
            <span className="right">200 Users</span>
          </div>
          <div className="line">
            <div
              className="fill animateFill"
              style={{ width: users }}
              id="fill1"
            />
          </div>
        </div>

        <div className="data gb">
          <div className="text">
            <span className="left">100 GB</span>
            <span className="right">1000 GB</span>
          </div>
          <div className="line">
            <div
              className="fill animateFill"
              style={{ width: gb }}
              id="fill2"
            />
          </div>
        </div>

        <div className="data repos">
          <div className="text">
            <span className="left">5 Repos</span>
            <span className="right">100 Repos</span>
          </div>
          <div className="line">
            <div
              className="fill animateFill"
              style={{ width: repos }}
              id="fill3"
            />
          </div>
        </div>
      </div>
    );
  }
}
