var image;

function Upload() {
  var fileUpload = document.getElementById("fileUpload");
  if (
    typeof fileUpload.files != "undefined" &&
    (fileUpload.files[0].type === "image/jpeg" ||
      fileUpload.files[0].type === "image/png")
  ) {
    console.log(fileUpload.files);
    var reader = new FileReader();

    if (fileUpload.files.length != 0) {
      reader.readAsDataURL(fileUpload.files[0]);
      reader.onload = function (e) {
        image = new Image();
        image.src = e.target.result;
        image.onload = function () {
          var height = this.height;
          var width = this.width;

          if (height !== 1024 && width !== 1024) {
            alert("Height and Width should be 1024px.");
            console.log(height + " " + width);
            return false;
          } else {
            alert("Uploaded image has valid Height and Width.");
            console.log(height + " " + width);
            var canvas = document.querySelector("canvas");
            var ctx = canvas.getContext("2d");
            ctx.fillStyle = "black";
            ctx.drawImage(image, 2, 2, 500, 500);

            image.style.display = "block";
            canvas.style.display = "block";
            document.getElementById("convertedImg").style.display = "flex";
            return true;
          }
        };
      };
    } else {
      alert("Aww Snap ,No file uploaded !");
      return false;
    }
  } else {
    alert("Aww Snap , Seems its not an image ");
    return false;
  }
}

function handleClick(el, h, v) {
  var canvas = document.createElement("canvas");
  canvas.display = "none";
  canvas.width = h;
  canvas.height = v;
  var ctx = canvas.getContext("2d");
  ctx.drawImage(image, 0, 0, h, v);
  var imgAsDataURL = canvas.toDataURL("image/jpg");
  el.href = imgAsDataURL;
}

function reSet() {
  var fileUpload = document.getElementById("fileUpload");
  fileUpload.value = "";
}
