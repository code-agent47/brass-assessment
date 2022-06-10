"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isAmountFieldValid = void 0;

var isAmountFieldValid = function isAmountFieldValid(value) {
  var errorMsg;

  if (value !== "") {
    errorMsg = false;

    if (isAmountValid(value)) {
      errorMsg = false;
    } else {
      errorMsg = "Invalid Name";
    }
  } else {
    errorMsg = "Field cannot be left blank";
  }

  return errorMsg;
};

exports.isAmountFieldValid = isAmountFieldValid;

function isAmountValid(value) {
  var nameRegEX = /^[A-Za-z]+$/;

  if (value.match(nameRegEX)) {
    return true;
  } else {
    return false;
  }
}