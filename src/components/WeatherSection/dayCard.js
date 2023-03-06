import { Component } from "../../core/index.js";

class DayCard extends Component {
  render() {
    const container = document.createElement("div");
    container.classList.add("day-card");

    container.innerHTML = `
      <div class="day-card-content">
        <span class="day-weather-temperature">
          ${this.props.temperature}
          <span class="day-weather-temperature-unit">°F</span>
        </span>
        <i class="day-weather-icon fa-solid fa-sun sunny"></i>
        <span class="day-name">${this.props.day}</span>
      </div>

    `;

    return container;
  }
}

export default DayCard;
