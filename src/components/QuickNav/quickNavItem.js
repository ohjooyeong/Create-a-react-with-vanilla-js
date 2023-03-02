import { Component } from "../../core/index.js";

class QuickNavItem extends Component {
  render() {
    const quickNavItem = document.createElement("div");
    quickNavItem.classList.add("clear-button");
    quickNavItem.classList.add("quick-nav-item");

    const label = document.createElement("span");
    label.classList.add("quick-nav-item-label");
    label.innerText = `${this.props.text}`;

    quickNavItem.append(label);

    return quickNavItem;
  }
}

export default QuickNavItem;
