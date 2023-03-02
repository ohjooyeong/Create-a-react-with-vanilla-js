import { Component, createComponent } from "../../core/index.js";
import { QuickNavItem } from "./index.js";

class QuickNav extends Component {
  render() {
    const quickNavWrapper = document.createElement("div");
    quickNavWrapper.classList.add("scrollable-component");
    quickNavWrapper.classList.add("quick-nav");

    const NavItemTextArray = ["Weather", "Food", "Apps", "Movies"];

    NavItemTextArray.forEach((text) => {
      const quickNavItem = createComponent(QuickNavItem, { text });
      quickNavWrapper.append(quickNavItem);
    });

    return quickNavWrapper;
  }
}

export default QuickNav;
