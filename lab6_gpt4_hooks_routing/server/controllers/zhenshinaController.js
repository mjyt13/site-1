const isBrandsDataValid = require("../validators/isZhenshinaValid");

const {
  getZhenshinaModel,
  postZhenshinaModel,
} = require("../model/files/zhenshinaModel");

const getZhenshina = (req, res, next) => {
  try {
    const data = getZhenshinaModel();

    res.status(200).json(data);
  } catch (error) {
    res.status(400).json({
      error: error.message,
    });
  }
};

const postZhenshina = (req, res, next) => {
  try {
    const data = req.body;

    // валидируем данные
    // если невалидны, то бросит ошибку
    isZhenshinaValid(data);

    // если с данными все ок, тогда пишем в файл через модель файлов
    postZhenshinaModel(JSON.stringify(data));
    res.status(200).json({
      message: "Данные успешно обновлены",
    });
  } catch (error) {
    res.status(400).json({
      error: error.message,
    });
  }
};

module.exports = { getZhenshina, postZhenshina };
