import { Component } from "../../core/index.js";

class YoutubeLink extends Component {
  render() {
    const youtubeLinkWrapper = document.createElement("a");
    youtubeLinkWrapper.classList.add("youtube-link");
    youtubeLinkWrapper.classList.add("clear-button");
    youtubeLinkWrapper.href = "https://www.youtube.com/@Onepunchk1ng_mk";
    youtubeLinkWrapper.target = "_blank";

    youtubeLinkWrapper.innerHTML = `
      <i class="fa-brands fa-youtube"></i>
      <span>Onepunch</span>
    `;

    return youtubeLinkWrapper;
  }
}

export default YoutubeLink;
