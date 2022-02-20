import React from "react";
import { Route, Routes as RoutesBundle, useLocation, Navigate } from "react-router-dom";
import { CSSTransition, SwitchTransition } from "react-transition-group";
import HomePageView from "./modules/home/home-view/homePageView.component";
import LaunchPlanView from "./modules/launch-plan/launch-plan-view/launchPlanView.component";
import WhitePaperView from "./modules/whitepaper/whitepaper-view/whitepaper-view.component";
import { ROUTES } from "./constants/app.constants";
import ContactView from "./modules/contact/contact-view/contact-view.component";

export default function Routes() {
    const location = useLocation();
    return (
        <SwitchTransition mode="out-in">
            <CSSTransition key={location.key} timeout={500} classNames="fade">
                <RoutesBundle location={location}>
                    <Route
                        path="/"
                        element={<Navigate to={ROUTES.HOME} />}
                    />
                    <Route path={ROUTES.HOME} element={<HomePageView />} />
                    <Route path={ROUTES.LAUNCH_PLAN} element={<LaunchPlanView />} exact />
                    <Route path={ROUTES.WHITEPAPER} exact element={<WhitePaperView />} />
                    <Route path={ROUTES.CONTACT} element={<ContactView />} exact />
                </RoutesBundle>
            </CSSTransition>
        </SwitchTransition>
    );
}
