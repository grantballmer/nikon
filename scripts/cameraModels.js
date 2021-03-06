const cameras = document.querySelectorAll(".camera");
const cameraModels = document.querySelector(".cameraModels");

let cameraInfoArray = [
  {
    image:
      "https://cdn-4.nikon-cdn.com/e/Q5NM96RZZo-YRYNeYvAi9beHK4x3L-8go_p7JUL6JpQM6WyXrFyHmN6DEWbHDTIZZR0t9czKSPg=/Views/1557_D5_front.png",
    name: "D5",
    desc:
      "What determines when Nikon releases a full-frame flagship camera? When technological innovation demands it. Introducing the D5, an FX-format DSLR that makes the impossible possible."
  },
  {
    image:
      "https://imgsv.imaging.nikon.com/lineup/dslr/d850/img/product_spec.png",
    name: "D850",
    desc:
      "Nikon proudly introduces the next evolution in high resolution DSLRs, a camera that allows photographers to capture fast action in 45.7 megapixels of brilliant resolution."
  },
  {
    image:
      "https://s3-eu-west-1.amazonaws.com/uploads.aws.dotser.net/uploads/ca/camera.ie/cameras/image/a705/cfd4ed8e8d7518f2e6a5e3204d05e638f738/nikon-d500-11.png",
    name: "D500",
    desc:
      "Meet the new DX flagship, the Nikon D500. At first glance, it may seem unimposing—but contained within a streamlined camera body is a veritable powerhouse of processing power and technological advances."
  },
  {
    image:
      "https://cdn-4.nikon-cdn.com/e/Q5NM96RZZo-YRYNeYvAi9beHK4x3L-8h09FYyKWnWU6E2l1NOrWSBg==/Views/1581_D7500_front.png",
    name: "D7500",
    desc:
      "The D7500 delivers the game-changing resolution, ISO range, image processing and energy efficiency of the award-winning D500 in an enthusiast-level DSLR."
  },
  {
    image:
      "https://s3-eu-west-1.amazonaws.com/uploads.aws.dotser.net/uploads/ca/camera.ie/cameras/image/a798/88dde6ed187909b9fd7765022e099a066a3e/nikon-d5600-11.png",
    name: "D5600",
    desc:
      "Stand out from the crowd with photos and videos so impressive, they'll inspire you to keep shooting and learning. Out of the box, you can leave things up to the camera and immediately start taking great photos and videos without the learning curve."
  },
  {
    image:
      "https://doddcamera.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/f/r/front.png",
    name: "D3400",
    desc:
      "After the D3400, you'll see that you were compromising image quality. That some of the greatest photos happen when the light is low. That fast action can be frozen in perfect clarity."
  }
];

function setActiveCameraContent(index) {
  let info = cameraInfoArray[index];
  cameraModels.querySelector("img").setAttribute("src", info.image);
  cameraModels.querySelector("h1").textContent = info.name;
  cameraModels.querySelector("p").textContent = info.desc;
}

function camerasClickHandler() {
  //reset all camera box background colors
  cameras.forEach(camera => camera.classList.remove("yellowBKG"));

  let index = this.dataset.index;
  this.classList.add("yellowBKG");

  setActiveCameraContent(index);
}

cameras.forEach(camera =>
  camera.addEventListener("click", camerasClickHandler)
);
