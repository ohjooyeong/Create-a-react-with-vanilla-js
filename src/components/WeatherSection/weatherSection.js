import { Component, createComponent } from "../../core/index.js";
import { Number } from "../../utils/index.js";
import { ScrollableComponent } from "../ScrollableComponent/index.js";
import { DayCard } from "./index.js";

class WeatherSection extends Component {
  constructor(props) {
    super(props);

    this.state = {
      week: [
        { temperature: Number.rand(55, 75), day: "MON" },
        { temperature: Number.rand(55, 75), day: "TUES" },
        { temperature: Number.rand(55, 75), day: "WED" },
        { temperature: Number.rand(55, 75), day: "THURS" },
        { temperature: Number.rand(55, 75), day: "FRI" },
        { temperature: Number.rand(55, 75), day: "SAT" },
        { temperature: Number.rand(55, 75), day: "SUN" },
      ],
    };
    // this.getWeek();
  }

  getWeek() {}

  render() {
    const { week } = this.state;
    const weatherWrapper = document.createElement("div");
    weatherWrapper.classList.add("weather-section");
    weatherWrapper.classList.add("menu-section");

    const content = createComponent(ScrollableComponent);
    content.classList.add("menu-section-content");

    const title = document.createElement("div");
    title.classList.add("menu-section-title");

    title.innerHTML = `<i class="fa-solid fa-sun"></i>
    <span class="menu-section-title-text">How's it look out there?</span>`;

    weatherWrapper.append(title);

    week.forEach((day) => {
      const dayCardItem = createComponent(DayCard, day);
      content.append(dayCardItem);
    });

    weatherWrapper.append(content);

    return weatherWrapper;
  }
}

export default WeatherSection;
