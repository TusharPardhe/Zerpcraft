import React from "react";
import { useNavigate } from "react-router-dom";
import { Menu, Segment } from "semantic-ui-react";
import { NAVBAR_ITEMS } from "../../constants/app.constants";

export default function Header() {
    const navigate = useNavigate();

    const onHeaderNavigationClick = (route) => {
        if (route != window.location.pathname) navigate(route);
    };

    return (
        <Segment heading textAlign="center" style={{ border: "none", padding: "0px" }} vertical>
            <Menu
                style={{
                    fontFamily: "Minecraftia",
                    background: "rgba(0, 0, 0, 0) linear-gradient(rgba(4, 4, 4, 0.52) 20%, rgba(0, 0, 0, 0) 99%) repeat scroll 0% 0%",
                }}
                secondary
            >
                <Menu.Menu position="right">
                    {NAVBAR_ITEMS.map(({ displayName, route }, index) => (
                        <Menu.Item
                            name={displayName}
                            key={`${index}_${displayName}`}
                            style={{
                                color: "white",
                                borderBottom: `${route === window.location.pathname ? "1px solid white" : ""}`,
                                borderRadius: "0px",
                            }}
                            onClick={() => onHeaderNavigationClick(route)}
                        >
                            {displayName}
                        </Menu.Item>
                    ))}
                </Menu.Menu>
            </Menu>
        </Segment>
    );
}
