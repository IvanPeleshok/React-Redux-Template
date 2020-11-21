import { apiURL } from "../api/api";
import avatarPlacehodler from "../assets/img/add-photo.png";

export const apiFileSrc = (fileSrc) => {
  let imgSrc = "";

  if (!!fileSrc) {
    if (typeof fileSrc === "string") {
      if (fileSrc.includes("http")) imgSrc = fileSrc;
      else imgSrc = apiURL + fileSrc;
    } else {
      imgSrc = fileSrc;
    }
  } else {
    imgSrc = avatarPlacehodler;
  }

  return imgSrc;
};

export const loadImage = (file, fieldName, holderId, setFiledValue) => {
  let fileReader = new FileReader();

  let maxFileSize = 2;
  // Max image size 2MB
  if (holderId.includes("video")) maxFileSize = 10;
  if (file) {
    if (file.size / 1024 / 1024 < maxFileSize) {
      fileReader.onload = function (event) {
        document
          .getElementById(holderId)
          .setAttribute("src", event.target.result);
      };
      fileReader.readAsDataURL(file);
      setFiledValue(file);
    } else {
    }
  }
};
export const convertToFormData = (sendObj) => {
  const formData = new FormData();
  for (let key in sendObj) {
    formData.append(key, sendObj[key]);
  }
  return formData;
};
