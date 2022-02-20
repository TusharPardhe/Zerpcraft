import React, { useState } from "react";
import { Button, Container, Transition } from "semantic-ui-react";
import Typewriter from "typewriter-effect";
import { LANDING_PAGE_HEADERS, ABOUT_ZERPCRAFT } from "../../../constants/app.constants";
import "./homePageView.component.css";

export default function HomePageView() {
    const [visible, setVisible] = useState(false);
    const [pageClick, setPageClick] = useState(false);
    const [isBtnHover, setIsBtnHover] = useState(true);

    return (
        <div className="landing_page">
            <div className="landing_page_container">
                <div className="main_heading_container">
                    <div className="verticalFlip">
                        {LANDING_PAGE_HEADERS.BIG_HEADING.map((heading) => (
                            <div className="mainHeading">{heading}</div>
                        ))}
                    </div>
                    <div className="smallHeading">{LANDING_PAGE_HEADERS.SMALL_HEADING}</div>
                </div>
                {!visible && (
                    <div className="more_button_container">
                        <Transition visible={isBtnHover} animation="tada" duration="500">
                            <button className="minecraft_button" onClick={() => setVisible(!visible)} onMouseOver={() => setIsBtnHover(!isBtnHover)}>
                                Tell me more !!
                            </button>
                        </Transition>
                    </div>
                )}
                <Transition animation="fade" visible={visible} duration="500">
                    <Container style={{ padding: "70px", transform: pageClick ? "scale(1)" : "scale(0.90)" }}>
                        <div className="description_container letter" onClick={() => setPageClick(!pageClick)}>
                            <Typewriter
                                onInit={(typewriter) => {
                                    typewriter
                                        .changeDelay(40)
                                        .pauseFor(1000)
                                        .typeString("/gamemode creative")
                                        .deleteAll()
                                        .typeString(`${ABOUT_ZERPCRAFT.FIRST_NFT}\n\n`)
                                        .pauseFor(1000)
                                        .typeString(`${ABOUT_ZERPCRAFT.XLS_19}\n\n`)
                                        .pauseFor(1000)
                                        .typeString(`${ABOUT_ZERPCRAFT.AFTER_LAUNCH}`)
                                        .start();
                                }}
                                options={{
                                    autoStart: true,
                                }}
                            />
                        </div>
                    </Container>
                </Transition>
            </div>
        </div>
    );
}
