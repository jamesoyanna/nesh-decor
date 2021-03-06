import React, { Component, createRef, Fragment } from "react";
import {
  Hero,
  Title,
  TechniqueTitle,
  ClientTag,
  CaseWrapper,
  BackButton,
  BackArrow
} from "../styles/Case.styles";

import Reveal from 'react-reveal/Reveal';
import { withRouter } from "react-router";
import Footer from '../components/Footer';
import { Efectr, Efectr1, Efectr2  } from "../styles/effect.styles";

export const ScrollTop = ({ children, location }) => {
  React.useEffect(() => window.scrollTo(0, 0), [location])
  return children
}

class Case extends Component {
  constructor(props) {
    super(props);
    this.introRef = createRef();

    this.state = {
      toBack: false,
      introTop: 0,
      hasBackground: false,
      animateCase: ""
    };
  }

  componentDidUpdate() {
    if (this.state.toBack) {
      setTimeout(() => {
        this.props.setNavBackground(false);
        this.props.history.push("/news");
      }, 400);
    }
    if (this.state.animateCase) {
      setTimeout(() => {
        this.props.setNavBackground(false);

        this.props.history.push(this.state.animateCase);
        window.scrollTo(0, 0);
      }, 400);
    }
  }


  render() {
    return (
      <Fragment>
        <Efectr />
        <Efectr1 />
        <Efectr2 />
        <ScrollTop>
          <CaseWrapper>
            <Reveal effect="fadeIn">
              <Hero
                className="mainhero"
                style={{ backgroundImage: "url('./img/news/news1.png')" }}
              >
                <div className="herocaption">
                  <BackButton
                    className="backdetail"
                    onClick={() =>
                      this.setState({ toBack: true, hasBackground: false })
                    }
                    toBack={this.state.toBack}
                    hasBackground={this.state.hasBackground}
                  >
                    <BackArrow src="./img/back.png" alt="Back to news" />
                    <span>Back </span>
                  </BackButton>
                  <div className="container">
                    <div className="row">
                      <div className="col-md-12 pl-md-0">
                        <ClientTag className="date">Dec 08, 2020</ClientTag>
                        <Title>Urban design</Title>
                        <TechniqueTitle>
                          Get amazing furnitures and interior design for your
                          homes. Made just for you.
                        </TechniqueTitle>
                      </div>
                    </div>
                  </div>
                </div>
              </Hero>
            </Reveal>

            <section className="container" id="detailproject">
              <div className="row">
                <div className="col-md-12">
                  <p className="content">
                    The large wood panel of this entertainment unit is what
                    gives it the classic, warm feel. the drawers and cupboards
                    ensure that there is plenty of storage for all your
                    electronics and knick-knacks. go for this classic wood and
                    white combo or pick shades that go well with the rest of
                    your decor
                  </p>
                  <p className="content">
                    Nigeria Interior design is becoming an important
                    part of Nigeria, as more people now understand the effect of
                    design in living and business.
                  </p>
                  <div className="single-img max-height400">
                    <img
                      src="./img/news/news2.png"
                      className="img-fluid"
                      alt="Imageteam"
                    />
                  </div>
                  <h3 className="my-5">The large wood</h3>
                  <p className="content">
                    The large wood panel of this entertainment unit is what
                    gives it the classic, warm feel. the drawers and cupboards
                    ensure that there is plenty of storage for all your
                    electronics and knick-knacks. go for this classic wood and
                    white combo or pick shades that go well with the rest of
                    your decor
                  </p>
                  <p className="content">
                    Interior design is becoming an important part of Nigeria, as
                    more people now understand the effect of design in living
                    and business. Thankfully we have professional interior
                    designers here in Nigeria to meet the growing demands for
                    interior designs.
                  </p>
                </div>
                <div className="col-md-6 p-md-0">
                  <div className="single-img max-height300 pimg-5">
                    <img
                      src="./img/news/office.png"
                      className="img-fluid"
                      alt="Imageteam"
                    />
                  </div>
                  <div className="single-img max-height300 pimg-5">
                    <img
                      src="./img/news/nw1.png"
                      className="img-fluid"
                      alt="Imageteam"
                    />
                  </div>
                </div>
                <div className="col-md-6 p-md-0">
                  <div className="single-img pimg-5">
                    <img
                      src="./img/news/news3.png"
                      className="img-fluid"
                      alt="Imageteam"
                    />
                  </div>
                </div>
                <div className="col-md-12">
                  <h3 className="my-5">Entertainment unit</h3>
                  <p className="content">
                    The large wood panel of this entertainment unit is what
                    gives it the classic, warm feel. the drawers and cupboards
                    ensure that there is plenty of storage for all your
                    electronics and knick-knacks. go for this classic wood and
                    white combo or pick shades that go well with the rest of
                    your decor
                  </p>
                </div>
                <div className="col-md-12">
                  <div className="tags">
                    <span className="heading">Tags :</span>
                    <span className="content">Inspiration</span>
                    <span className="content">Decoation</span>
                    <span className="content">Interior</span>
                    <span className="content">Minimal</span>
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="share">
                    <span className="heading">Share :</span>
                    <span className="content">
                      <i className="fa fa-facebook-f"></i>
                    </span>
                    <span className="content">
                      <i className="fa fa-twitter"></i>
                    </span>
                    <span className="content">
                      <i className="fa  fa-instagram"></i>
                    </span>
                  </div>
                </div>
              </div>
            </section>
          </CaseWrapper>
        </ScrollTop>

        <Footer />
      </Fragment>
    );
  }
}

export default withRouter(Case);
