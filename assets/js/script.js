const imageInput = document.getElementById("image-input");
const saveButton = document.getElementById("save-button");
const imageGallery = document.getElementById("image-gallery");

let imageList = [];

function saveImages() {
  const images = imageInput.files;
  const imageData = [];

  for (let i = 0; i < images.length; i++) {
    const image = images[i];
    const reader = new FileReader();

    reader.onload = (event) => {
      const imgElement = document.createElement("img");
      imgElement.src = event.target.result;
      imageGallery.appendChild(imgElement);

      imageData.push({
        data: event.target.result,
        filename: image.name,
        caption: `Image ${i + 1}`,
      });

      if (i === images.length - 1) {
        saveToLocalStorage(imageData);
      }
    };

    reader.readAsDataURL(image);
  }
}

function saveToLocalStorage(imageData) {
  localStorage.setItem("image-list", JSON.stringify(imageData));
  imageList = JSON.parse(localStorage.getItem("image-list"));
  loadImages();
}

function loadImages() {
  imageGallery.innerHTML = "";

  for (const image of imageList) {
    const imgElement = document.createElement("img");
    imgElement.src = image.data;
    imgElement.dataset.filename = image.filename;
    imgElement.dataset.caption = image.caption;

    imgElement.addEventListener("dblclick", (event) => {
      const shouldDelete = confirm("Do you want to delete the image?");
      if (shouldDelete) {
        const index = imageList.findIndex(
          (obj) => obj.filename === event.target.dataset.filename
        );
        imageList.splice(index, 1);
        saveToLocalStorage(imageList);
        event.target.remove();
      }
    });

    imageGallery.appendChild(imgElement);
  }
}

function handleFileSelect(event) {
  const input = event.target;
  const files = input.files;
  if (files.length > 0) {
    saveImages();
  }
}

imageInput.addEventListener("change", handleFileSelect);
loadImages();
saveButton.addEventListener("click", saveImages);
