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
    setInterval(() => {
      const update = new Date();

      if (update.getMinutes() !== this.state.date.getMinutes()) {
        console.log(this.state.date.getMinutes(), update.getMinutes());
        this.setState({ date: update });
      }
    }, 100);
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
    </div>`;

    headerWrapper.innerHTML = element;

    return headerWrapper;
  }
}

export default TimeTemperature;
