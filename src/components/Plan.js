import React from "react";

export default class Plan extends React.Component {
  constructor(props) {
    super(props);

    this.handleHover = this.handleHover.bind(this);
    this.handleMouseOut = this.handleMouseOut.bind(this);
  }

  handleHover() {
    this.props.setPlanStats(this.props.planDetails);
  }

  handleMouseOut() {
    this.props.resetPlanStats();
  }
  render() {
    const { name, price } = this.props.planDetails;
    return (
      <div
        className="plan animate"
        id="plan1"
        onMouseOver={this.handleHover}
        onMouseOut={this.handleMouseOut}
      >
        <div className="title">{name}</div>
        <div className="price">
          ${price}
          <br />
          <span>per month</span>
        </div>
      </div>
    );
  }
}
