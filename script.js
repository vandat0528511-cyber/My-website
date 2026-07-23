function upDate(previewPic) {
  console.log("Sự kiện upDate đã được kích hoạt thành công!");
  console.log("Alt text:", previewPic.alt);
  console.log("Source URL:", previewPic.src);

  let displayDiv = document.getElementById("image");

  displayDiv.innerHTML = previewPic.alt;

  displayDiv.style.backgroundImage = "url('" + previewPic.src + "')";
}

function unDo() {
  let displayDiv = document.getElementById("image");

  displayDiv.style.backgroundImage = "url('')";

  displayDiv.innerHTML =
    "Di chuột qua một hình ảnh bên dưới để hiển thị ở đây.";
}
