import React, { useState } from "react";
import { Container, Header, Segment } from "semantic-ui-react";

const LaunchPlanCard = ({ heading, content }) => {
    const [click, setClick] = useState(false);

    return (
        <Segment
            style={{
                background: "rgb(19, 19, 19) none repeat scroll 0% 0%",
                padding: "50px",
                color: "gray",
                transition: "transform 0.2s ease-in-out 0s",
                transform: `${click ? "scale(1)" : "scale(0.97)"}`,
                boxShadow: `${click ? "rgba(208, 208, 208, 0.37) 0px 1px 20px 0px" : ""}`,
                cursor: "pointer",
                margin: "0px",
            }}
            onClick={() => setClick(!click)}
        >
            <Container fluid>
                <Header as="h2" style={{ color: "white" }}>
                    {heading}
                </Header>
                <p style={{ whiteSpace: "pre-line" }}>{content}</p>
            </Container>
        </Segment>
    );
};

export default LaunchPlanCard;
