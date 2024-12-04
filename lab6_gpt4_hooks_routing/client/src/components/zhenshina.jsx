import useData from '../hooks/useData';
import futureData from '../mockData/zhenshina';

import Preloader from './Preloader';

const FutureImage = ({ src, alt }) => (
  <img src={src} alt={alt} className="futur_pic" />
);

const FutureText = ({ uptxt, hz, SHLISHKOM_MNOGO_BYKV, downtxt }) => (
  <div className="right__container">
    <div className="text-container">
      <p className="dostup">{uptxt}</p>
      <h1 className="ozhid">{hz}</h1>
      <p className="odnako">{SHLISHKOM_MNOGO_BYKV}</p>
      <a className="hz_tozhe_dostup">{downtxt}</a>
    </div>
  </div>
);

const Zhenshina = () => {
    //секция про наступившее будущее, но женщина идёт отдельным куском кода\
    //собственно, находится она через другой endpoint - zhenshina
    const { isLoading, isError, error, data } = useData({
        endpoint: "zhenshina",
        options: {
          method: "GET",
        },
      });

    if (isError){
        console.log("error");
        console.log(error);
    }

    if (isLoading) return <Preloader/>;

    //const renderedData = data || futureData;
    const {left_part, right_part} = data || futureData;

    return (
        <div className="future_here">
            <div className="future_here__left">
                <FutureImage src={left_part.src} alt={left_part.alt} />
            </div>
            <div className="future_here__right">
                <FutureText 
                uptxt={right_part.uptxt}
                hz={right_part.hz}
                SHLISHKOM_MNOGO_BYKV={right_part.SHLISHKOM_MNOGO_BYKV}
                downtxt={right_part.downtxt}
                />
            </div>
        </div>
  );
};

export default Zhenshina;