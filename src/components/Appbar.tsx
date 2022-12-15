import * as React from 'react';
import { styled } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import MoreIcon from '@mui/icons-material/MoreVert';
import Logo from '../img/logo_itmx.png';
import Container from '@mui/material/Container';
import PersonIcon from '@mui/icons-material/Person';
import '../css/style.css'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

export default function Appbar() {
    return (
        <header id="header" className="header header-02 ">
            <div className="site-topbar hidden-sm-down">
                <div className="container">
                    <div className="row row-xs-center">
                        <div className="col-xs-12 col-md-7">
                            <ul className="header-topbar-list header-topbar-list-contact">
                                <li>
                                    <a>
                                        <i className="header-topbar-list-icon "></i>
                                        <span>Welcome to National ITMX</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="/home/member-login">
                                        <i className="header-topbar-list-icon fa fa-user"></i>
                                        <PersonIcon/><span>บริการสมาชิก</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-xs-12 col-md-4 end-md ">
                            <ul className="header-topbar-list header-topbar-list-extra">
                                <li className="lang-item lang-item-62 lang-item-th lang-item-first current-lang"><a lang="th"  href="https://www.itmx.co.th/home/"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAALCAIAAAD5gJpuAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAFWSURBVHjaYvzPgAD/UNlYEUAAisQgBwAQhGGi/pzP8EBvG+BImqbL7pzuUlda9SJ7DMs85NYEBgX5Ir4AYvz/H2QHhIQz/mMDjIyMnz59AgggRkfXjTmZOu/e/fz7D2jH/7///v398+8PkPEHCEHsv3///fn978+/f8JCnGWlWwACiGX/7jOmhiKPHn3+8wck8fvPv9+//wLRr1//wORfOCkvz8fAsAUggIB++AdxJ8iRQNf++f/rF8TZ/4B6fgEZQPIXRAEoLAACCKjhx9+/f/78+f0LaC/YbIjxyGaDSaCFvxgYvgAEEAs3r5qKqhAPLzs4GP4CnQR2G9CMf2A2iPEH7BNJSe5Tp8wAAojx58+fzMzM//79wxU4EACUBYbS27dvAQKI5R87O1NJCQPEjX//MvwGkn8Yf/8GRggCAY0DSgFt2bsXIIAYv6JGJJ44hgCAAAMA8pZimQIezaoAAAAASUVORK5CYII=" title="ไทย" alt="ไทย" width="16" height="11"/></a></li>
                                <li className="lang-item lang-item-85 lang-item-en"><a lang="en-US"  href="https://www.itmx.co.th/home/en/home/"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAALCAIAAAD5gJpuAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAHzSURBVHjaYkxOP8IAB//+Mfz7w8Dwi4HhP5CcJb/n/7evb16/APL/gRFQDiAAw3JuAgAIBEDQ/iswEERjGzBQLEru97ll0g0+3HvqMn1SpqlqGsZMsZsIe0SICA5gt5a/AGIEarCPtFh+6N/ffwxA9OvP/7//QYwff/6fZahmePeB4dNHhi+fGb59Y4zyvHHmCEAAAW3YDzQYaJJ93a+vX79aVf58//69fvEPlpIfnz59+vDhw7t37968efP3b/SXL59OnjwIEEAsDP+YgY53b2b89++/awvLn98MDi2cVxl+/vl6mituCtBghi9f/v/48e/XL86krj9XzwEEEENy8g6gu22rfn78+NGs5Ofr16+ZC58+fvyYwX8rxOxXr169fPny+fPn1//93bJlBUAAsQADZMEBxj9/GBxb2P/9+S/R8u3vzxuyaX8ZHv3j8/YGms3w8ycQARmi2eE37t4ACCDGR4/uSkrKAS35B3TT////wADOgLOBIaXIyjBlwxKAAGKRXjCB0SOEaeu+/y9fMnz4AHQxCP348R/o+l+//sMZQBNLEvif3AcIIMZbty7Ly6t9ZmXl+fXj/38GoHH/UcGfP79//BBiYHjy9+8/oUkNAAHEwt1V/vI/KBY/QSISFqM/GBg+MzB8A6PfYC5EFiDAABqgW776MP0rAAAAAElFTkSuQmCC" title="English" alt="English" width="16" height="11"/></a></li>
                            </ul>
                        </div>
                        <div className="col-md-1 end-md hidden-sm-down">
                            <div id="header-search" className="search-type-1">
                                <span id="js-search-overlay" className="fa fa-search"></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row row-xs-center hidden-sm-down">
                    <div id="logo" className="col-xs-6 col-md-2 start-xs">
                        <h1>
                            <a href="https://www.itmx.co.th/home/" title="ยินดีต้อนรับเข้าสู่เว็บไซต์ ITMX Co., Ltd. - บ. เนชั่นแนล ไอทีเอ็มเอ๊กซ์ จำกัด" rel="home">
                                <img src="https://www.itmx.co.th/home/wp-content/uploads/2018/07/ITMX-LOGO-1024x419-TP.png" alt="ยินดีต้อนรับเข้าสู่เว็บไซต์ ITMX Co., Ltd."/>
                            </a>
                        </h1>
                    </div>
                    <div className="col-md-10">
                        <ul className="header-contact-details-list">
                            <li>
                                <div className="header-contact-detail">
                                    <i className="header-contact-detail-icon pe-7s-clock"></i>
                                    <div className="header-contact-detail-info">
                                        <div className="header-contact-detail-title">Opening Hours</div>
                                        <a className="header-contact-detail-extra-info">
                                            Mon - Fri: 8:30 - 17:30                                    </a>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="row row-xs-center hidden-md-up mobile-header">
                    <div className="col-xs-2 start-xs mobile-right">
                        <i id="mobile-menu-toggle" className="fa fa-navicon hidden-lg-up"></i>
                    </div>
                    <div id="mobile-logo" className="col-xs-8 center-xs">

                        <h1>
                            <a href="https://www.itmx.co.th/home/" title="ยินดีต้อนรับเข้าสู่เว็บไซต์ ITMX Co., Ltd. - บ. เนชั่นแนล ไอทีเอ็มเอ๊กซ์ จำกัด" rel="home">
                                <img src="https://www.itmx.co.th/home/wp-content/uploads/2018/07/ITMX-LOGO-1024x419-TP.png" alt="ยินดีต้อนรับเข้าสู่เว็บไซต์ ITMX Co., Ltd."/>
                            </a>
                        </h1>
                    </div>
                    <div className="col-xs-2 end-xs">
                        <div className="mobile-search">
                            <span className="fa fa-search"></span>
                        </div>
                    </div>
                </div>
                <div id="search-mobile-toggle">
                    <form action="https://www.itmx.co.th/home/" role="search" method="get" className="searchform">
                        <label>
                            <span className="screen-reader-text">Search for:</span>
                            <input type="search" className="search-field" placeholder="Search ..." value="" name="s"/>
                        </label>
                        <input type="submit" className="search-submit" value="Search"/>
                    </form>
                    <i className="fa fa-times mobile-search mobile-search-close"></i>
                </div>
            </div>
            <div className="header-navigation-container hidden-md-down header-menu-container affix-disabled" data-spy="affix" data-offset-top="200">
                <div className="container">
                    <div className="row row-xs-center">
                        <div className="col-xs-12 col-md-9">
                            <div className="menu-container">
                                <div className="menu-inner">
                                    <div className="menu-primary-menu-container"><ul id="primary-menu" className="menu menu-horizontal"><li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-home current-menu-item page_item page-item-479 current_page_item menu-item-493 narrow"><a href="https://www.itmx.co.th/home/"><span className="menu-item-text">หน้าหลัก  &nbsp;</span></a></li>
                                        <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-501 narrow"><a href="/home/services"><span className="menu-item-text">ผลิตภัณฑ์และบริการ<KeyboardArrowDownIcon/></span></a>
                                            <ul className="sub-menu " >
                                                <li className="menu-item menu-item-type-post_type menu-item-object-service menu-item-884"><a href="https://www.itmx.co.th/home/service/single-payment-system/"><span className="menu-item-text"><span style={{margin: "1%"}}>Single Payment System</span></span></a></li>
                                                <li className="menu-item menu-item-type-post_type menu-item-object-service menu-item-881"><a href="https://www.itmx.co.th/home/service/bulk-payment-system/"><span className="menu-item-text"><span style={{margin: "1%"}}>Bulk Payment System</span></span></a></li>
                                                <li className="menu-item menu-item-type-post_type menu-item-object-service menu-item-879"><a href="https://www.itmx.co.th/home/service/local-switching-system/"><span className="menu-item-text"><span style={{margin: "1%"}}>Local Switching System</span></span></a></li>
                                                <li className="menu-item menu-item-type-post_type menu-item-object-service menu-item-1036"><a href="https://www.itmx.co.th/home/service/nsw-bank-gateway/"><span className="menu-item-text"><span style={{margin: "1%"}}>NSW Bank Gateway</span></span></a></li>
                                                <li className="menu-item menu-item-type-post_type menu-item-object-service menu-item-1044"><a href="https://www.itmx.co.th/home/service/egp-bank-gateway/"><span className="menu-item-text"><span style={{margin: "1%"}}>e-GP Bank Gateway</span></span></a></li>
                                                <li className="menu-item menu-item-type-post_type menu-item-object-service menu-item-1048"><a href="https://www.itmx.co.th/home/service/promptpay/"><span className="menu-item-text"><span style={{margin: "1%"}}>PromptPay</span></span></a></li>
                                                <li className="menu-item menu-item-type-post_type menu-item-object-service menu-item-876"><a href="https://www.itmx.co.th/home/service/prompt-card/"><span className="menu-item-text"><span style={{margin: "1%"}}>Prompt Card</span></span></a></li>
                                                <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1859"><a href="https://www.itmx.co.th/home/cross-border-services/"><span className="menu-item-text"><span style={{margin: "1%"}}>Cross Border Services</span></span></a></li>
                                                <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1878"><a href="https://www.itmx.co.th/home/api-hub/"><span className="menu-item-text"><span style={{margin: "1%"}}>API Hub</span></span></a></li>
                                                <li className="menu-item menu-item-type-post_type menu-item-object-service menu-item-2040"><a href="https://www.itmx.co.th/home/service/imaged-cheque-clearing-system/"><span className="menu-item-text"><span style={{margin: "1%"}}>ICS System<KeyboardArrowDownIcon/></span></span></a>
                                                    <ul className="sub-menu " >
                                                        <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-2084"><a href="https://www.itmx.co.th/home/ics-system-stat/"><span className="menu-item-text">สถิติการเรียกเก็บเงินตามเช็คบริการระบบ ICS</span></a></li>
                                                        <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-2130"><a href="https://www.itmx.co.th/home/ics-member/"><span className="menu-item-text">ธนาคารสมาชิกในระบบการหักบัญชีเช็คด้วยภาพเช็ค (ICS)</span></a></li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-498 narrow"><a href="https://www.itmx.co.th/home/our-history/"><span className="menu-item-text">เกี่ยวกับเรา<KeyboardArrowDownIcon/></span></a>
                                            <ul className="sub-menu " >
                                                <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-838"><a href="https://www.itmx.co.th/home/our-history/"><span className="menu-item-text">ประวัติการก่อตั้งบริษัท</span></a></li>
                                                <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-859"><a href="https://www.itmx.co.th/home/charter-policy/"><span className="menu-item-text">นโยบายบริหาร</span></a></li>
                                                <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-824"><a href="https://www.itmx.co.th/home/boarddirector/"><span className="menu-item-text">คณะกรรมการ</span></a>
                                                    <ul className="sub-menu " >
                                                        <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1759"><a href="https://www.itmx.co.th/home/boarddirector-main/"><span className="menu-item-text">คณะกรรมการบริษัท</span></a></li>
                                                        <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1738"><a href="https://www.itmx.co.th/home/executive-committee/"><span className="menu-item-text">คณะกรรมการบริหาร</span></a></li>
                                                        <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1744"><a href="https://www.itmx.co.th/home/audit-committee/"><span className="menu-item-text">คณะกรรมการตรวจสอบ</span></a></li>
                                                        <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1746"><a href="https://www.itmx.co.th/home/risk-management-committee/"><span className="menu-item-text">คณะกรรมการบริหารความเสี่ยง</span></a></li>
                                                    </ul>
                                                </li>
                                                <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1068"><a href="https://www.itmx.co.th/home/message-director/"><span className="menu-item-text">สารจากกรรมการผู้จัดการ</span></a></li>
                                                <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1672"><a href="https://www.itmx.co.th/home/personal-information-protection-policy/"><span className="menu-item-text">นโยบายคุ้มครองข้อมูลส่วนบุคคล</span></a></li>
                                                <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1225"><a href="https://www.itmx.co.th/home/vision-mission/"><span className="menu-item-text">วิสัยทัศน์ และ พันธกิจ</span></a></li>
                                                <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1239"><a href="https://www.itmx.co.th/home/code-of-conduct/"><span className="menu-item-text">จรรยาบรรณธุรกิจ</span></a></li>
                                                <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1189"><a href="https://www.itmx.co.th/home/privacy-policy-th/"><span className="menu-item-text">นโยบายความเป็นส่วนตัว</span></a></li>
                                            </ul>
                                        </li>
                                        <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-495 narrow"><a href="https://www.itmx.co.th/home/news/"><span className="menu-item-text">ข่าวและกิจกรรม</span></a></li>
                                        <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-512 narrow"><a href="https://www.itmx.co.th/home/careers/"><span className="menu-item-text">ร่วมงานกับเรา</span></a></li>
                                        <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-496 narrow"><a href="https://www.itmx.co.th/home/contact/"><span className="menu-item-text">ติดต่อเรา</span></a></li>
                                    </ul></div>                        </div>
                            </div>
                        </div>
                        <div className="col-xs-12 col-md-3">
                            <ul className="header-social-icon-list">
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </header>

    );
}