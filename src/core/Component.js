class Component {
  constructor(props) {
    this.props = props;
  }

  // state가 바뀌면 리렌더링이 일어나야함
  // new State 넣으면 기존 state 값 유지
  setState(newState) {
    this.state = newState;
    this.updater();
  }

  updater() {
    const rendered = this.render();

    this.lastRendered = rendered;
    this.lastRendered.replaceWith(rendered);
  }

  render() {}

  initialize() {
    const rendered = this.render();

    this.lastRendered = rendered;

    return rendered;
  }
}

export default Component;
