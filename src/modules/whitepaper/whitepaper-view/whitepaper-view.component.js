import axios from "axios";
import React, { useState } from "react";
import { Button, Container, Divider, Segment, Transition } from "semantic-ui-react";
import { WHITEPAPER_LINK, WHITEPAPER_SUB_HEADING } from "../../../constants/app.constants";

import "./whitepaper-view.component.css";

const WhitePaperView = () => {
    const [downloadBtnEvents, setDownloadBtnEvents] = useState({
        click: false,
        hover: true,
    });

    const handleDownloadClick = () => {
        window.open(WHITEPAPER_LINK.PDF, "_blank");
    };

    const handleDownloadBtnMouseOver = () => {
        if (!downloadBtnEvents.click) {
            setDownloadBtnEvents({
                ...downloadBtnEvents,
                hover: !downloadBtnEvents.hover,
            });
        }
    };

    return (
        <div className="whitepaper_container">
            <Container>
                <Transition animation="pulse jiggle" duration="800" transitionOnMount={true}>
                    <div className="whitepaper_header">Whitepaper</div>
                </Transition>
                <Divider section />
                <div className="content">
                    <div className="short_intro">{WHITEPAPER_SUB_HEADING}</div>
                    <div className="download_btn">
                        <Transition animation="pulse jiggle" visible={downloadBtnEvents.hover} duration="800" transitionOnMount={true}>
                            <Button
                                inverted
                                loading={downloadBtnEvents.click}
                                color="green"
                                onClick={handleDownloadClick}
                                onMouseOver={handleDownloadBtnMouseOver}
                            >
                                View
                            </Button>
                        </Transition>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default WhitePaperView;
