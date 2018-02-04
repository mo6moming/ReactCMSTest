import React from 'react';
import ReactDOM from 'react-dom';
import './LeftMain.css';

import { render } from 'react-dom';

import styled from 'styled-components';

import SideNav, { Nav, NavIcon, NavText } from 'react-sidenav';
import SvgIcon from 'react-icons-kit';
import { ic_aspect_ratio } from 'react-icons-kit/md/ic_aspect_ratio';
import { ic_business } from 'react-icons-kit/md/ic_business';
import { ic_business_center } from 'react-icons-kit/md/ic_business_center';
import { ic_format_list_bulleted } from 'react-icons-kit/md/ic_format_list_bulleted';
import { ic_people } from 'react-icons-kit/md/ic_people';
import { ic_shopping_cart } from 'react-icons-kit/md/ic_shopping_cart';

const Icon20 = props => <SvgIcon size={props.size || 20} icon={props.icon} />;

const BaseContainer = props =>
    <div
        style={{
            display: 'inline-block',
            paddingTop: 16,
            paddingBottom: 16,
            fontFamily: 'Roboto',
            width: 240,
            ...props.style
        }}
    >
        {props.children}
    </div>;

    const Title = styled.div`
        padding: 12px;
    `;

    const Separator = styled.div`
        padding-right: 12px;
    `;
    const SeparatorTitleContainer = styled.div`
        font-size: 14px;
        color: #AAA;
        margin: 10px 12px;
        padding: 4px 12px 2px;
    `;
    const SeparatorTitle = props => {
        return (
            <SeparatorTitleContainer>
                {props.children}
                <hr style={{ border: 0, borderTop: '1px solid #E5E5E5' }} />
            </SeparatorTitleContainer>
        );
    };

    const BasicSideNav = () =>
        <SideNav highlightBgColor="#00bcd4" defaultSelected="sales">
            <Title> Basic SideNav </Title>
            <Nav id="dashboard">
                <NavIcon><Icon20 icon={ic_aspect_ratio} /></NavIcon>
                <NavText> Dashboard </NavText>
            </Nav>
            <Nav id="sales">
                <NavIcon><Icon20 icon={ic_business} /></NavIcon><NavText> Sales </NavText>
            </Nav>
            <Nav id="products">
                <NavIcon><Icon20 icon={ic_business_center} /></NavIcon>
                <NavText> Products </NavText>
            </Nav>
            <Nav id="customers">
                <NavIcon><Icon20 icon={ic_people} /></NavIcon>
                <NavText> Customers </NavText>
                <Nav id="dashboard2">
                    <NavIcon><Icon20 size={16} icon={ic_aspect_ratio} /></NavIcon>
                    <NavText> Search </NavText>
                </Nav>
                <Nav id="sales2">
                    <NavIcon><Icon20 size={16} icon={ic_business} /></NavIcon>
                    <NavText> Promote </NavText>
                </Nav>
                <Nav id="products2">
                    <NavIcon><Icon20 size={16} icon={ic_business_center} /></NavIcon>
                    <NavText> Social Media </NavText>
                </Nav>
            </Nav>
            <Nav id="orders">
                <NavIcon><Icon20 icon={ic_format_list_bulleted} /></NavIcon>
                <NavText> Orders </NavText>
            </Nav>
        </SideNav>;

    const NavMain = {
        dashboard: { title: 'Dashboard', icon: ic_aspect_ratio },
        products: { title: 'Products', icon: ic_business_center },
        orders: { title: 'Orders', icon: ic_format_list_bulleted }
    };

    const BasicSideNavLite = () =>
        <SideNav
            highlightBgColor="#eee"
            defaultSelected="products"
            highlightColor="#E91E63"
        >
            <SeparatorTitle><div>Main</div></SeparatorTitle>
            {Object.keys(NavMain).map(key => {
                //dynamically created the navs
                return (
                    <Nav key={key} id={key}>
                        <NavIcon><Icon20 icon={NavMain[key].icon} /></NavIcon>
                        <NavText> {NavMain[key].title} </NavText>
                    </Nav>
                );
            })}
            <SeparatorTitle>
                <div> Customers and Sales</div>
            </SeparatorTitle>
            <Nav id="customers">
                <NavIcon><Icon20 icon={ic_people} /></NavIcon>
                <NavText> Customers </NavText>
                <Nav id="dashboard2">
                    <NavIcon><Icon20 size={16} icon={ic_aspect_ratio} /></NavIcon>
                    <NavText> Search </NavText>
                </Nav>
                <Nav id="sales2">
                    <NavIcon><Icon20 size={16} icon={ic_business} /></NavIcon>
                    <NavText> Promote </NavText>
                </Nav>
                <Nav id="products2">
                    <NavIcon><Icon20 size={16} icon={ic_business_center} /></NavIcon>
                    <NavText> Social Media </NavText>
                </Nav>
            </Nav>
            <Nav id="sales">
                <NavIcon><Icon20 icon={ic_business} /></NavIcon><NavText> Sales </NavText>
            </Nav>
        </SideNav>;

        class LeftMain extends React.Component {
            render() {
                return (

                    <div style={{ display: 'flex' }}>

                        <BaseContainer style={{ background: '#2c3e50', color: '#FFF' }}>
                            <BasicSideNav />
                        </BaseContainer>
                        <Separator />

                    </div>

                );
            }
        }

        export default LeftMain;
