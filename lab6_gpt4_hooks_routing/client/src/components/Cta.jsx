import useData from '../hooks/useData';
import ctaData from '../mockData/ctaData';

import Preloader from './Preloader';

const CtaSubtext = ({ text }) => (
  <p className="cta_subtext">{text}</p>
);

const CtaText = ({ text }) => (
  <p className="cta_text">
    <strong>{text}</strong><br />
    безграничные возможности.
  </p>
);

const CtaButton = ({ text }) => (
  <div className="cta_button_container">
    <div className="cta_button">{text}</div>
  </div>
);

const CtaSection = () => {
    const { isLoading, isError, error, data } = useData({
        endpoint: "cta",
        options: {
          method: "GET",
        },
    });

    if (isError) {
        console.log("error");
        console.log(error);
    }

    if (isLoading) return <Preloader />;

    const { dostyp, text_cta, start } = data || ctaData;

    return (
        <section className="cta_section">
        <div className="cta_container">
            <div className="cta_background"></div>
            <CtaSubtext text={dostyp} />
            <CtaText text={text_cta} />
            <CtaButton text={start} />
        </div>
        </section>
    );
};

export default CtaSection;