import { TimeWithWeather } from "../components/InfoHeader/index.js";
import { Component, createComponent } from "../core/index.js";

class HomePage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const mainContainer = document.createElement("main");
    mainContainer.classList.add("app");
    mainContainer.classList.add("logged-in");

    const appMenu = document.createElement("div");
    appMenu.classList.add("app-menu");

    const appBackground = document.createElement("div");
    appBackground.classList.add("app-background");

    const backgroundImage = document.createElement("div");
    backgroundImage.classList.add("app-background-image");
    backgroundImage.classList.add("background-image");

    appBackground.append(backgroundImage);

    const appMenuContentWrapper = document.createElement("div");
    appMenuContentWrapper.classList.add("app-menu-content-wrapper");

    const appMenuContent = document.createElement("div");
    appMenuContent.classList.add("app-menu-content");

    const appMenuHeader = createComponent(TimeWithWeather);

    appMenuContent.append(appMenuHeader);

    appMenuContentWrapper.append(appMenuContent);
    appMenu.append(appMenuContentWrapper);
    mainContainer.append(appMenu, appBackground);

    return mainContainer;
  }
}

export default HomePage;

// append vs appendChild
// 공통점
/*
  Node 객체를 Element의 마지막 자식으로 삽입한다.
*/

// 차이점
/*
  append
  text를 바로 삽입할 수 있다.
  2개 이상의 객체를 삽입할 수 있다.
  반환 데이터가 없다.

  appendChild
  1개의 노드 객체만 삽입할 수 있다.
  text 삽입 x
  반환 데이터가 있다.
*/
