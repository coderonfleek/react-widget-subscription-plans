import React from "react";
import Plan from "./Plan";
import StatBars from "./StatBars";
import plans from "../data/plans.data";

export default class Plans extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      plans: plans,
      statBarWidths: {
        users: "0%",
        gb: "0%",
        repos: "0%"
      }
    };

    this.setPlanStats = this.setPlanStats.bind(this);
    this.resetPlanStats = this.resetPlanStats.bind(this);
  }

  setPlanStats(plan) {
    console.log(plan);

    this.setState(() => {
      return {
        statBarWidths: {
          users: plan.users + "%",
          gb: plan.gb + "%",
          repos: plan.repos + "%"
        }
      };
    });
  }

  resetPlanStats() {
    this.setState(() => {
      return {
        statBarWidths: {
          users: "0%",
          gb: "0%",
          repos: "0%"
        }
      };
    });
  }

  render() {
    return (
      <div className="frame">
        <div id="plans">
          {this.state.plans.map(plan => {
            return (
              <Plan
                key={plan.name}
                planDetails={plan}
                setPlanStats={this.setPlanStats}
                resetPlanStats={this.resetPlanStats}
              />
            );
          })}
        </div>

        <div className="clear" />

        <StatBars statBarWidths={this.state.statBarWidths} />
      </div>
    );
  }
}
