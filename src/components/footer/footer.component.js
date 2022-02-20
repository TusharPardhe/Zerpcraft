import React from "react";
import { Container, Divider, Icon, Segment } from "semantic-ui-react";

import "./footer.component.css";

export default function Footer() {
    return (
        <div className="footer_container">
            <div className="divider"><Divider section/></div>
            
            <Segment
                inverted
                vertical
                style={{
                    padding: "20px 0em",
                }}
            >
                <Container style={{ display: "flex", justifyContent: "right", color:"gray" }}>
                <Icon name="copyright"/> 2022 | Built by Tushar Pardhe
                </Container>
            </Segment>
        </div>
    );
}
