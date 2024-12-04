const {isObjectHasProps } = require("./utils/validators");

const isZhenshinaDataValid = (data) => {
  // проверяем объект на наличие полей и соответствие типу "объект"
  isObjectHasProps(data, [
    "left_part",
    "right_part",
  ]);

  const { left_part, right_part } = data;

  // проверяем внутренний объект на наличие полей и соответствие типу "объект"
  isObjectHasProps(left_part, ["alt", "src"]);

  // проверяем внутренний объект на наличие полей и соответствие типу "объект"
  isObjectHasProps(right_part, ["uptxt", "hz", "SHLISHKOM_MNOGO_BYKV", "downtxt"])
};

module.exports = isZhenshinaDataValid;
