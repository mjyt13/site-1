const { isArrayHasLength, isObjectHasProps } = require("./utils/validators");

const isBlogDataValid = (data) => {
  // проверяем объект на наличие полей и соответствие типу "объект"
  isObjectHasProps(data, ["blogImg", "blogTexsts"]);

  const { blogImg, blogTexsts } = data;

  // проверяем внутренний массив на наличие полей и соответствие типу "массив"
  isArrayHasLength(blogImg);

  // проверяем внутренние объекты на наличие полей и соответствие типу "объект"
  blogImg.forEach((item) => isObjectHasProps(item, ["src", "alt"]));

  // проверяем внутренний объект на наличие полей и соответствие типу "объект"
  isObjectHasProps(blogTexsts, ["public", "title", "data", "omg"]);
};

module.exports = isBlogDataValid;
