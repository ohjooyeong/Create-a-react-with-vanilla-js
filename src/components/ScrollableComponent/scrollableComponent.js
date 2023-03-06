import { Component } from "../../core/index.js";

class ScrollableComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      grabbing: false,
      position: {
        x: 0,
        left: 0,
      },
    };
    this.target = null;
    this.setEvent();
  }

  handleOnMouseDown(e, element) {
    this.setState({
      ...this.state,
      grabbing: true,
      position: {
        x: e.clientX,
        left: element.scrollLeft,
      },
    });
  }

  handleOnMouseMove(e, element) {
    if (this.state.grabbing) {
      const left = Math.max(
        0,
        this.state.position.left + (this.state.position.x - e.clientX)
      );

      element.scrollLeft = left;
    }
  }

  handleOnMouseUp() {
    if (this.state.grabbing) {
      this.setState({ ...this.state, grabbing: false });
    }
  }

  setEvent() {
    this.target = document.querySelector(".scrollable-component");
  }

  render() {
    const container = document.createElement("div");
    container.setAttribute("class", "scrollable-component");

    container.addEventListener("mousedown", (e) => {
      this.handleOnMouseDown(e, container);
    });

    container.addEventListener("mousemove", (e) => {
      this.handleOnMouseMove(e, container);
    });

    container.addEventListener("mouseup", () => {
      this.handleOnMouseUp();
    });

    container.addEventListener("mouseleave", () => {
      this.handleOnMouseUp();
    });

    return container;
  }
}

export default ScrollableComponent;
