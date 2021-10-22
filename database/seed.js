/* eslint-disable no-plusplus */
/* eslint-disable no-console */
const faker = require('faker');
const db = require('./index.js');

// 100 different lists of images

const onePic = () => {
  const image = Math.round(Math.random() * (13 - 2));
  return `https://image-carousel-images.s3.us-west-1.amazonaws.com/1/ImageCarouselPhotos/${image}.jpg`;
};

const getPictures = () => {
  const picArray = [];
  for (let i = 0; i < 12; i++) {
    picArray.push(
      {
        id: i,
        imgUrl: onePic(),
        imgName: faker.internet.userName(),
        imgDescription: faker.name.jobDescriptor(),
        HouseType: faker.lorem.word(),
        description: faker.lorem.paragraph(),
        isSuperHost: faker.random.boolean(),
        isLiked: false,
        AverageRating: (Math.random() * (5 - 0)).toFixed(2),
        NumberOfBeds: Math.round(Math.random() * (5 - 1) + 1),
        NumOfReviews: Math.round(Math.random() * (200 - 42) + 42),
        PricePerNight: Math.round(Math.random() * (350 - 120) + 120),
      },
    );
  }
  return picArray;
};

const getListData = () => {
  const numOfStays = Math.round(Math.random() * (5 - 1) + 1);
  const listArray = [];
  for (let i = 0; i < numOfStays; i++) {
    listArray.push({
      stayId: i,
      stayName: faker.random.word(),
      stayPic: onePic(),
    });
  }
  return listArray;
};

const SampleData = () => {
  for (let i = 1; i <= 100; i++) {
    const imgSet = getPictures();
    const staySet = getListData();

    const newCarousel = new db.CarouselModel({
      _id: i,
      id: i,
      ImgUrls: imgSet,
      stayList: staySet,
    });

    newCarousel.save();
  }
};

SampleData();
