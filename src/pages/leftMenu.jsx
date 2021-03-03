import React, {memo} from 'react';
import SideNav, { NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';

const LeftMenu = memo(({onSelectToggle, onToggleLeftMenu, menuList}) => {

    return (
        <SideNav 
        onSelect={(selected) => {
            onSelectToggle(selected);
        }}
        onToggle={(expanded) => {
            onToggleLeftMenu(expanded);
        }}
        >
            <SideNav.Toggle />
            <SideNav.Nav defaultSelected="">
                {
                menuList.map((v, i) => {
                    return (
                        <NavItem eventKey={v.code}>
                            <NavIcon>
                                <i className="fa fa-fw fa-home" style={{ fontSize: '1.75em' }} />
                            </NavIcon>
                            <NavText>
                                {v.name}
                            </NavText>
                        </NavItem>
                    );
                })
                }
                {/* <NavItem eventKey="devices">
                    <NavIcon>
                        <i className="fa fa-fw fa-device" style={{ fontSize: '1.75em' }} />
                    </NavIcon>
                    <NavText>
                        Devices
                    </NavText>
                </NavItem> */}
            </SideNav.Nav>
        </SideNav>
    )
});
export default LeftMenu;