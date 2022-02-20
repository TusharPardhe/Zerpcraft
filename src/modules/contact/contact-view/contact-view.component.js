import React, { useState } from "react";
import { Container, Divider, Icon, Segment, Transition } from "semantic-ui-react";
import { CONTACT_LINKS, CONTACT_US_MESSAGE } from "../../../constants/app.constants";

import "./contact-view.component.css";

const ContactView = () => {
    const [showLinkTransition, setShowLinkTransition] = useState({
        twitter: true,
        mail: true,
    });

    const handleMailRedirect = () => {
        window.location = `mailto:${CONTACT_LINKS.EMAIL}`;
    };

    const handleTwitterRedirect = () => {
        window.open(CONTACT_LINKS.TWITTER, "_blank");
    };

    const onLinkHover = (name) => {
        setShowLinkTransition({
            ...showLinkTransition,
            [name]: !showLinkTransition[name],
        });
    };

    return (
        <div className="contact_view_container">
            <Segment
                style={{
                    background: "rgb(19, 19, 19) none repeat scroll 0% 0%",
                    padding: "50px",
                    color: "white",
                }}
            >
                <Container>
                    <Transition duration="1000" animation="vertical flip" transitionOnMount={true}>
                    <div className="heading">Contact</div>
                    </Transition>
                    <Divider />
                    <div className="info">{CONTACT_US_MESSAGE}</div>
                    <div className="links">
                        <Transition visible={showLinkTransition.mail} animation="tada" duration="1000" transitionOnMount={true}>
                            <Icon name="envelope" size="large" onClick={handleMailRedirect} onMouseOver={() => onLinkHover("mail")} />
                        </Transition>
                        <Transition visible={showLinkTransition.twitter} animation="tada" duration="1000" transitionOnMount={true}>
                            <Icon name="twitter" size="large" onClick={handleTwitterRedirect} onMouseOver={() => onLinkHover("twitter")} />
                        </Transition>
                    </div>
                </Container>
            </Segment>
        </div>
    );
};

export default ContactView;
