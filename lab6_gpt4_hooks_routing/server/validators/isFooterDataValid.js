const { isArrayHasLength, isObjectHasProps } = require("./utils/validators");

const isFooterDataValid = (data) => {
  // проверяем объект на наличие полей и соответствие типу "объект"
  isObjectHasProps(data, ["footerHeaderData", "footerLeftData", "footerRightData", "footerRightsReservedData"]);

  const { footerHeaderData, footerLeftData, footerRightData } = data;

  // проверяем внутренний объект на наличие полей и соответствие типу "объект"
  isObjectHasProps(footerHeaderData, ["header", "button"]);
 
  const { button } = footerHeaderData;

  // проверяем внутренний объект на наличие полей и соответствие типу "объект"
  isObjectHasProps(button, ["href", "title"]);

  // проверяем внутренний объект на наличие полей и соответствие типу "объект"
  isObjectHasProps(footerLeftData, ["image", "footerLeftInfoData"]);

  const { image, footerLeftInfoData } = footerLeftData;

  // проверяем внутренний массив на наличие полей и соответствие типу "массив"
  isArrayHasLength(footerLeftInfoData);

  // проверяем внутренние объекты на наличие полей и соответствие типу "объект"
  footerLeftInfoData.forEach((item) => isObjectHasProps(item, ["title"]));

  // проверяем внутренний объект на наличие полей и соответствие типу "объект"
  isObjectHasProps(image, ["src", "alt"]);

  // проверяем внутренний объект на наличие полей и соответствие типу "объект"
  isObjectHasProps(footerRightData, ["footerFirstData", "footerSecData", "footerThirdData"]);

  const { footerFirstData, footerSecData, footerThirdData } = footerRightData;

  // проверяем внутренний объект на наличие полей и соответствие типу "объект"
  isObjectHasProps(footerFirstData, ["header", "footerFirstInfoData"]);

  const { footerFirstInfoData } = footerFirstData;

  // проверяем внутренний массив на наличие полей и соответствие типу "массив"
  isArrayHasLength(footerFirstInfoData);

  // проверяем внутренние объекты на наличие полей и соответствие типу "объект"
  footerFirstInfoData.forEach((item) => isObjectHasProps(item, ["title", "href"]));

  // проверяем внутренний объект на наличие полей и соответствие типу "объект"
  isObjectHasProps(footerSecData, ["header", "footerSecInfoData"]);

  const { footerSecInfoData } = footerSecData;

  // проверяем внутренний массив на наличие полей и соответствие типу "массив"
  isArrayHasLength(footerSecInfoData);

  // проверяем внутренние объекты на наличие полей и соответствие типу "объект"
  footerSecInfoData.forEach((item) => isObjectHasProps(item, ["title", "href"]));

  // проверяем внутренний объект на наличие полей и соответствие типу "объект"
  isObjectHasProps(footerThirdData, ["header", "footerThirdInfoData"]);
  
  const { footerThirdInfoData } = footerThirdData;

  // проверяем внутренний массив на наличие полей и соответствие типу "массив"
  isArrayHasLength(footerThirdInfoData);

  // проверяем внутренние объекты на наличие полей и соответствие типу "объект"
  footerThirdInfoData.forEach((item) => isObjectHasProps(item, ["title"]));
};

module.exports = isFooterDataValid;
