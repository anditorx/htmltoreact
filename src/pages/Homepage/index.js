import React from "react";
import {
  Button,
  Cards,
  Clients,
  Features,
  Footer,
  Header,
  Lists,
  Section,
} from "components";
import ImageHero from "../../assets/images/hero-image.png";
import ImgFeatureTile01 from "../../assets/images/feature-tile-icon-01.svg";
import ImgFeatureTile02 from "../../assets/images/feature-tile-icon-02.svg";
import ImgFeatureTile03 from "../../assets/images/feature-tile-icon-03.svg";
import Fade from "react-reveal/Fade";
const Homepage = () => {
  const dataFeatures = [
    {
      imgSource: ImgFeatureTile01,
      imgAlt: "Feature Tile 01",
      title: "Join The System",
      description:
        "A pseudo-Latin text used in web design, layout, and printing in place of things to emphasise design.",
    },
    {
      imgSource: ImgFeatureTile02,
      imgAlt: "Feature Tile 02",
      title: "Join The System",
      description:
        "A pseudo-Latin text used in web design, layout, and printing in place of things to emphasise design.",
    },
    {
      imgSource: ImgFeatureTile03,
      imgAlt: "Feature Tile 03",
      title: "Join The System",
      description:
        "A pseudo-Latin text used in web design, layout, and printing in place of things to emphasise design.",
    },
  ];

  const listPricing = [
    {
      price: 27,
      currencySymbol: "$",
      description: "Lorem ipsum is a common text",
      features: [
        {
          isChecked: true,
          content: "Excepteur sint occaecat velit",
        },
        {
          isChecked: true,
          content: "Excepteur sint occaecat velit",
        },
        {
          isChecked: true,
          content: "Excepteur sint occaecat velit",
        },
        {
          isChecked: false,
          content: "Excepteur sint occaecat velit",
        },
        {
          isChecked: false,
          content: "Excepteur sint occaecat velit",
        },
      ],
    },
    {
      price: 47,
      currencySymbol: "$",
      description: "Lorem ipsum is a common text",
      features: [
        {
          isChecked: true,
          content: "Excepteur sint occaecat velit",
        },
        {
          isChecked: true,
          content: "Excepteur sint occaecat velit",
        },
        {
          isChecked: true,
          content: "Excepteur sint occaecat velit",
        },
        {
          isChecked: true,
          content: "Excepteur sint occaecat velit",
        },
        {
          isChecked: false,
          content: "Excepteur sint occaecat velit",
        },
      ],
    },
    {
      price: 67,
      currencySymbol: "$",
      description: "Lorem ipsum is a common text",
      features: [
        {
          isChecked: true,
          content: "Excepteur sint occaecat velit",
        },
        {
          isChecked: true,
          content: "Excepteur sint occaecat velit",
        },
        {
          isChecked: true,
          content: "Excepteur sint occaecat velit",
        },
        {
          isChecked: true,
          content: "Excepteur sint occaecat velit",
        },
        {
          isChecked: true,
          content: "Excepteur sint occaecat velit",
        },
      ],
    },
  ];

  return (
    <div className="body-wrap">
      <Header />
      <main className="site-content">
        <Section className="hero illustration-section-01" isCenteredContent>
          <div className="container-sm">
            <div className="hero-inner section-inner">
              <div className="hero-content">
                <Fade bottom delay={500}>
                  <h1 className="mt-0 mb-16">Landing template for startups</h1>
                </Fade>
                <div className="container-xs">
                  <Fade bottom delay={500 * 2}>
                    <p className="mt-0 mb-32">
                      Our landing page template works on all devices, so you
                      only have to set it up once, and get beautiful results
                      forever.
                    </p>
                  </Fade>
                </div>
              </div>
              <div className="hero-figure illustration-element-01">
                <Fade bottom delay={500 * 3}>
                  <img
                    className="has-shadow"
                    src={ImageHero}
                    alt="Hero image"
                    width="896"
                    height="504"
                  />
                </Fade>
              </div>
            </div>
          </div>
        </Section>
        <Clients />
        <Section className="features-tiles">
          <div className="container">
            <div className="features-tiles-inner section-inner">
              <div className="tiles-wrap">
                {dataFeatures.map((item, index) => (
                  <Features
                    key={index}
                    delayInMs={(index + 4) * 500}
                    data={item}
                  />
                ))}
              </div>
            </div>
          </div>
        </Section>
        <Section className="pricing">
          <div className="container">
            <div className="pricing-inner section-inner has-top-divider">
              <div className="section-header center-content">
                <div className="container-xs">
                  <h2 className="mt-0 mb-16">Simple, transarent pricing</h2>
                  <p className="m-0">
                    Lorem ipsum is common placeholder text used to demonstrate
                    the graphic elements of a document or visual presentation.
                  </p>
                </div>
              </div>
              <div className="tiles-wrap">
                {listPricing.map((item, index) => (
                  <Cards hasShadow>
                    <div className="pricing-item-content">
                      <div className="pricing-item-header pb-24 mb-24">
                        <div className="pricing-item-price mb-4">
                          <span className="pricing-item-price-currency h2">
                            {item.currencySymbol}
                          </span>
                          <span
                            className="pricing-item-price-amount h1 pricing-switchable"
                            data-pricing-monthly="34"
                            data-pricing-yearly="27"
                          >
                            {item.price}
                          </span>
                        </div>
                        <div className="text-xs text-color-low">
                          {item.description}
                        </div>
                      </div>
                      <div className="pricing-item-features mb-40">
                        <div className="pricing-item-features-title h6 text-xs text-color-high mb-24">
                          What’s included
                        </div>
                        <Lists
                          data={item.features}
                          isSmall
                          className="pricing-item-features-list mb-32"
                        ></Lists>
                        <div class="pricing-item-cta mb-8">
                          <Button isPrimary isBlock>
                            Start free trial
                          </Button>
                        </div>
                      </div>
                    </div>
                  </Cards>
                ))}
              </div>
            </div>
          </div>
        </Section>
      </main>
      <Footer />
    </div>
  );
};

export default Homepage;
