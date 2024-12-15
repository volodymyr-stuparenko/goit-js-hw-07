const images = [
  {
    width: 360,
    height: 300,
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    width: 360,
    height: 300,
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    width: 360,
    height: 300,
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
  {
    width: 360,
    height: 300,
    url: "https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg",
    alt: "Alpine Spring Meadows",
  },
  {
    width: 360,
    height: 300,
    url: "https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg",
    alt: "Nature Landscape",
  },
  {
    width: 360,
    height: 300,
    url: "https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg",
    alt: "Lighthouse Coast Sea",
  }
];

const createGalleryCard = imageInfo => {
  return `
  <li class="gallery-item">
      <a href="#">
        <img src="${imageInfo.url}" alt="${imageInfo.alt}" width="${imageInfo.width}" height="${imageInfo.height}">
      </a>
    </li >
      `;
}

const galleryCardsTemplate = images.map(image => createGalleryCard(image)).join('');

const galleryListEl = document.querySelector('.js-gallery');

galleryListEl.insertAdjacentHTML('beforeend', galleryCardsTemplate);

