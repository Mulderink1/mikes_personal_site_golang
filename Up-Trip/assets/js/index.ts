interface IimageData {
  src: string;
  text: string;
}

interface IthisObject {
  childNodes: Array<any>;
}

const pictureModal: Function = (thisObject: IthisObject): void => {
  if (window.innerWidth > 1155) {
    const imageData: IimageData = {
      src: thisObject.childNodes[1].src,
      text: thisObject.childNodes[3].childNodes[1].innerHTML,
    };

    const backgoundDiv: HTMLDivElement = document.createElement("div");
    const modalDiv: HTMLDivElement = document.createElement("div");
    const imageDiv: HTMLDivElement = document.createElement("div");

    const imageTag: HTMLImageElement = document.createElement("img");
    imageTag.setAttribute("src", imageData.src);

    const paragraphTag: HTMLParagraphElement = document.createElement("p");
    paragraphTag.innerHTML = imageData.text;

    imageDiv.appendChild(imageTag);
    modalDiv.appendChild(imageDiv);
    modalDiv.appendChild(paragraphTag);
    backgoundDiv.appendChild(modalDiv);
    document.getElementsByTagName("main")[0].appendChild(backgoundDiv);

    window.onclick = (event: any): void => {
      if (event.target === backgoundDiv) {
        backgoundDiv.parentNode.removeChild(backgoundDiv);
        window.onclick = undefined;
      }
    };
  }
};
