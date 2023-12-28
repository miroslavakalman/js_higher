document.getElementById('loadImageBtn').addEventListener('click', function () {
    let imageUrl = 'img/img.png';
    let image = document.createElement('img');

    image.addEventListener('load', function () {
      document.getElementById('imageContainer').appendChild(image);
    });

    image.addEventListener('error', function () {
      alert('Ошибка.');
    });

    image.src = imageUrl;
  });