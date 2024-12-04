const { isObjectHasProps } = require("./utils/validators");

const isCtaDataValid = (data) => {
  // проверяем объект на наличие полей и соответствие типу "объект"
  isObjectHasProps(data, ["dostyp", "text_cta", "start"]);
};

module.exports = isCtaDataValid;
