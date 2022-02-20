import React, { useRef } from "react";
import { Container, Image, Transition } from "semantic-ui-react";
import { LAUNCH_PLAN_CONTENTS } from "../../../constants/app.constants";
import useIntersection from "../../../hooks/useIntersection";
import LaunchPlanCard from "../launch-plan-card/launchplanCard.component";

import "./launchPlanView.component.css";

const LaunchPlanView = () => {
    const auctionOneRef = useRef();
    const auctionTwoRef = useRef();
    const auctionThreeRef = useRef();
    const auctionOneInViewport = useIntersection(auctionOneRef);
    const auctionTwoInViewport = useIntersection(auctionTwoRef);
    const auctionThreeInViewport = useIntersection(auctionThreeRef);

    return (
        <div className="launch_plan_view">
            <div className="content">
                <div className="auction_1" ref={auctionOneRef}>
                    <Transition animation="fade" duration="900" visible={auctionOneInViewport}>
                        <Image src="" className="first_img" fluid rounded/>
                    </Transition>
                        <Container>
                            <LaunchPlanCard heading={LAUNCH_PLAN_CONTENTS.AUCTION_1.HEADING} content={LAUNCH_PLAN_CONTENTS.AUCTION_1.CONTENT} />
                        </Container>
                </div>
                <div className="auction_2" ref={auctionTwoRef}>
                        <Container>
                            <LaunchPlanCard heading={LAUNCH_PLAN_CONTENTS.AUCTION_2.HEADING} content={LAUNCH_PLAN_CONTENTS.AUCTION_2.CONTENT} />
                        </Container>
                    <Transition animation="fade" visible={auctionTwoInViewport}   duration="900">
                        <img src="" className="first_img ui fluid image" />
                    </Transition>
                </div>
                <div className="auction_3" ref={auctionThreeRef}>
                <Transition animation="fade" duration="900" visible={auctionThreeInViewport}>
                        <img src="" className="first_img ui fluid image" />
                    </Transition>
                        <Container>
                            <LaunchPlanCard heading={LAUNCH_PLAN_CONTENTS.AUCTION_3.HEADING} content={LAUNCH_PLAN_CONTENTS.AUCTION_3.CONTENT} />
                        </Container>
                </div>
            </div>
        </div>
    );
};

export default LaunchPlanView;
