/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import {Link, Switch, Redirect} from "react-router-dom";
import {toAbsoluteUrl} from "../../../../_metronic/_helpers";
import {ContentRoute} from "../../../../_metronic/layout"
import Login from "./Login";
import Registration from "./Registration";
import ForgotPassword from "./ForgotPassword";
import "../../../../_metronic/_assets/sass/pages/login/classic/login-1.scss";

export function AuthPage() {
  return (
      <>
        <div className="d-flex flex-column flex-root">
          {/*begin::Login*/}
          <div
              className="login login-1 login-signin-on d-flex flex-column flex-lg-row flex-row-fluid bg-white"
              id="kt_login"
          >
            
              
            {/*begin::Content*/}
            <div className="flex-row-fluid d-flex flex-column position-relative p-7 overflow-hidden">
              {/*begin::Content header*/}
              <div className="position-absolute top-0 right-0 text-right mt-5 mb-15 mb-lg-0 flex-column-auto justify-content-center py-5 px-10">
                <span className="font-weight-bold text-dark-50">Don't have an account yet?</span>
                <Link to="/auth/registration" className="font-weight-bold ml-2" id="kt_login_signup">Sign Up!</Link>
              </div>
              {/*end::Content header*/}

              {/* begin::Content body */}
              <div className="d-flex flex-column-fluid flex-center mt-30 mt-lg-0">
                <Switch>
                <ContentRoute path="/auth/login" component={Login}/>
                <ContentRoute path="/auth/registration" component={Registration}/>
                <ContentRoute
                    path="/auth/forgot-password"
                    component={ForgotPassword}
                />
                <Redirect from="/auth" exact={true} to="/auth/login"/>
                <Redirect to="/auth/login"/>
              </Switch>
              </div>
              {/*end::Content body*/}

              {/* begin::Mobile footer */}
              <div
                  className="d-flex flex-column-auto flex-column flex-sm-row justify-content-between align-items-center mt-5 p-5">
                <div className="text-dark-50 font-weight-bold order-2 order-sm-1 my-2">
                  @2022 PlayEstates
                </div>
                <div className="d-flex order-1 order-sm-2 my-2">
                  <a href="https://assets.website-files.com/6283e0c1ca1bf2bfc6ec78ef/628663ff6223897447e96dc3_Privacy.53f1691166511f7a5330.pdf" className="text-dark-75 text-hover-primary policy" target="_blank" title="Flaticon, The largest database of free vector icons">Privacy Policy</a>
                  <a href="https://assets.website-files.com/6283e0c1ca1bf2bfc6ec78ef/62866402eaf69658bdd6cd72_Terms.0b17329edc888f77e895.pdf" className="text-dark-75 text-hover-primary" target="_blank" title="Flaticon, The largest database of free vector icons">Terms of services</a>
                </div>
              </div>
              {/* end::Mobile footer */}
            </div>
            {/*end::Content*/}
          </div>
          {/*end::Login*/}
        </div>
      </>
  );
}
