const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/photo_carousel', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true,
});

const { Schema } = mongoose;

const CarouselSchema = new Schema({
  id: Number,
  AverageRating: Number,
  ImgUrls: Array,
  HouseType: String,
  NumberOfBeds: Number,
  PricePerNight: String,
  description: String,
  isSuperHost: Boolean,
  isLiked: Boolean,
  staysList: Array,
});

const StayEntry = new Schema({
  stayId: Number,
  stayName: String,
  stayPic: String,
});

const CarouselModel = mongoose.model('CarouselModel', CarouselSchema);
const StayModel = mongoose.model('StayModel', StayEntry);

module.exports = {
  CarouselModel,
  StayModel,
};
