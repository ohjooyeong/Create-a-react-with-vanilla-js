import { Component } from "../../core/index.js";
import { Number, Time } from "../../utils/index.js";

class TimeTemperature extends Component {
  constructor(props) {
    super(props);

    this.state = {
      date: new Date(),
      temperature: Number.rand(55, 75),
    };
    this.getTime();
  }

  getTime() {
    const updateTime = () => {
      const update = new Date();

      if (update.getMinutes() !== this.state.date.getMinutes()) {
        console.log(this.state.date.getMinutes(), update.getMinutes());
        this.setState({ date: update });
      }
      requestAnimationFrame(updateTime);
    };
    requestAnimationFrame(updateTime);
  }

  render() {
    const headerWrapper = document.createElement("div");
    headerWrapper.classList.add("app-menu-content-header");
    const element = `
    <div class="app-menu-content-header-section">
      <div class="app-menu-info info">
        <span class="time">${Time.format(this.state.date)}</span>
        <span class="weather">
          <i class="fa-solid fa-sun"></i>
          <span class="weather-temperature-value">${
            this.state.temperature
          }</span>
          <span class="weather-temperature-unit">°F</span>
        </span>
      </div>
      <div class="reminder">
          <div class="reminder-icon">
            <i class="fa-regular fa-bell"></i>
          </div>
          <span class="reminder-text">
            Extra cool people meeting
            <span class="reminder-time">10AM</span>
          </span>
      </div>
    </div>`;

    headerWrapper.innerHTML = element;

    return headerWrapper;
  }
}

export default TimeTemperature;
