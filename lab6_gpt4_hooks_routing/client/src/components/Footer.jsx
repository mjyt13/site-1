import useData from '../hooks/useData';
import footerData from "../mockData/footerData";

import Preloader from './Preloader';

export const FooterHeader = ({footerHeaderData}) => {
    const {
        header,
        button: {href, title},
    } = footerHeaderData; 
    
    return(
        <>
        <h1 className="footer_header">{header}</h1>
        <button href={href} className="header_button">
            {title}
        </button>
        </>
    );

};

export const FooterLeftInfo = ({footerLeftInfoData}) => {
    console.log("rabotaet FooterLeftInfo");
    
    console.log(footerLeftInfoData);

    let DataRead = [];
    for(let i=0;i<footerLeftInfoData.length;i++){
        DataRead.push(footerLeftInfoData[i]);
    }

    return DataRead.map((item) => (
        <li className="info_item">
            {item.title}
        </li>
    ));
};

export const FooterLeft = ({ footerLeftData }) => {
    //just little reminder: src={footerLeftData[0].image.src} alt={footerLeftData[0].image.src}
    console.log("RABOTAET FOOTERLEFT");
    console.log(footerLeftData);
    console.log(footerLeftData.image);
    console.log(footerLeftData.footerLeftInfoData);
    console.log(footerLeftData.image.alt);
    return (
        <>
        <li className="info_left_header">
            <img className="info_left_header" src={footerLeftData.image.src} alt={footerLeftData.image.src}/>
        </li>
        <FooterLeftInfo footerLeftInfoData={footerLeftData.footerLeftInfoData}/>
        </>
    );
};

export const FooterListInfo = ({listData}) => {
    console.log("rabotaet FooterListInfo");
    console.log(listData.length);

    let listDataRead = [];
    for(let i=1;i<listData.length;i++){
        listDataRead.push(listData[i]);
    }

    console.log(listDataRead);
    return listDataRead.map((item) => (
        <li className="info_item">
            <a href={item.href} class="lined_cta footer_cta">{item.title}</a>
        </li>
    ));
};

export const FooterList = ({list}) => {
    console.log("rabotaet FooterList");

    console.log(list);
    console.log(list.header);
    return (
    <>
        <li className="info_header">
            {list.header}
        </li>
        <FooterListInfo listData = {list.footerRightItemData}/>
    </> 
    );
};

export const FooterRight = ({footerRightData}) => {
    console.log("RABOTAET FOOTER RIGHT")
    return footerRightData.map((item) => (
        <ul className="info_list">
            <FooterList list = {item.footerRightItem}/>
        </ul>
    ));
};

export const FooterInfo = ({footerInfoData}) => {
    const{
        footerLeftData,
        footerRightData,
    } = footerInfoData;
    console.log("rabotaet FooterInfo");
    return (
        <>
        <ul className="info_left_list">
            <FooterLeft footerLeftData={footerLeftData}/>
        </ul>
        <div className="info_right">
            <FooterRight footerRightData={footerRightData}/>
        </div>;      
        </>
    );
};

const Footer = () => {
    const { isLoading, isError, error, data } = useData({
        endpoint: "footer",
        options: {
        method: "GET",
        },
    }); 

    if (isError){
        console.log("error");
        console.log(error);
    }

    if (isLoading) return <Preloader />;


    const {footerHeaderData, footerInfoData, footerRightsReservedData,} = data || footerData;
    console.log("RABOTAET FOOTER ");
    return (
        <>
         <div className="footer_section_header">
            <FooterHeader footerHeaderData={footerHeaderData}/>
         </div>
         <div className="footer_section_info">
            <FooterInfo footerInfoData={footerInfoData}/>
         </div>
         <p className="rights_reserved">{footerRightsReservedData}</p>
        </>
    );

};

export default Footer;