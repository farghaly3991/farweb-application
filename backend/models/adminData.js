const mongoose = require('mongoose');

const adminData = new mongoose.Schema({
  siteName: {
    type: String,
    default: ''
  },
  name: {
    type: String,
    default: ''
  },
  phone: {
    type: String,
    default: ''
  },
  address: {
    type: String,
    default: ''
  },
  career: {
    type: String,
    default: ''
  },
  facebook: {
    type: String,
    default: ''
  },
  email: {
    type: String,
    default: ''
  },
  image1: {
    type: String,
    default: ''
  },
  whatsapp: {
    type: String,
    default: ''
  },
  telegram: {
    type: String,
    default: ''
  },
  cashNumber: {
    type: String,
    default: ''
  },
  color: {
    type: String,
    default: ''
  },
  domain: String,
  payMethod: {
    type: String,
  },
  showStudentsCount: {
    type: Boolean,
    default: true
  },
  watermark: {
    type: Boolean,
    default: false,
  },
});

module.exports = mongoose.model('adminData',adminData);