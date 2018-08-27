import React from 'react';
import { Row, Col,Icon } from 'antd';
const Footer = (props) => {
    console.log(props);
    console.log(props.isMobile);
    return (
        <div className="footer">
            <Col span={props.isMobile? 24 : 6 } >
                <img className="logoFooter" src="images/logoFooter.png" width="180" />
            </Col>
            <Col span={props.isMobile? 12 : 4 } >
                <p className="footerText">
                    TALENT
                </p>
                <ul>
                    <li>How it works </li>
                    <li>Why we're free </li>
                    <li>Agencies </li>
                </ul>
            </Col>
            <Col span={props.isMobile? 12 : 4 } >
                <p className="footerText">
                    HUBSTAFF
                </p>
                <ul>
                    <li>About </li>
                    <li>Time Tracking </li>
                    <li>Developer </li>
                    <li>Resources </li>
                </ul>

            </Col>
            <Col span={props.isMobile? 12 : 4 } >
                <p className="footerText">
                    SUPPORT
                </p>
                <ul>
                    <li>Help Center </li>
                    <li>Blog </li>
                    <li>FAQ </li>
                    <li>Email us </li>
                    <li>Terms </li>
                    <li>Privacy </li>
                </ul>
            </Col>
            <Col span={props.isMobile? 12 : 6 } >
                <p className="footerText">
                    SOCIAL
                </p>
                <Row className="socialRow">
                    <Col span={4} >
                        <Icon type="twitter" className="social"/>
                    </Col>
                    <Col span={4} >
                        <Icon type="facebook" className="social"/>
                    </Col>
                    <Col span={4} >
                        <Icon type="instagram" className="social"/>
                    </Col>
                </Row>
            </Col>

        </div>
    )
}

export default Footer;