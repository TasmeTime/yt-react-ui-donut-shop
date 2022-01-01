import styled from "styled-components";
import { GiCookie, GiDonut, GiIcePop } from "react-icons/gi";
import ExtraItem2Dots from "../ExtraItem2Dots";
import AnimatedPill from "../styled/AnimatedPill.styled";
import Slider from "../styled/Slider.styled";
import TopMenu from "../TopMenu";
import { BiCoffeeTogo } from "react-icons/bi";
import ExtraItmViewAll from "../ExtraItemViewAll";
import MostSaleItem from "../styled/MostSaleItem.styled";
import donutImage from "../../images/donut.png";
import donutImage2 from "../../images/donut2.png";
import NavMenu from "../NavMenu";
import Content from "../styled/Content.styled";

const pillItems = [
  {
    id: 1,
    content: (
      <AnimatedPill key={1} icon={<GiCookie />} title="Cookie" subTitle="+20" />
    ),
  },

  {
    id: 2,
    content: (
      <AnimatedPill key={2} icon={<GiDonut />} title="Donut" subTitle="+20" />
    ),
  },
  {
    id: 3,
    content: (
      <AnimatedPill
        key={3}
        icon={<BiCoffeeTogo />}
        title="Coffe"
        subTitle="+20"
      />
    ),
  },
  {
    id: 4,
    content: (
      <AnimatedPill key={4} icon={<GiIcePop />} title="IcePop" subTitle="+20" />
    ),
  },
];

const donuts = [
  {
    id: 1,
    content: (
      <MostSaleItem
        id={1}
        key={1}
        image={donutImage}
        title="Oneil Donut"
        price={5.59}
      />
    ),
  },
  {
    id: 2,
    content: (
      <MostSaleItem
        id={2}
        key={2}
        image={donutImage2}
        title="Candy Donut"
        price={9.99}
      />
    ),
  },
  {
    id: 3,
    content: (
      <MostSaleItem
        id={3}
        key={3}
        image={donutImage}
        title="Oneil Donut"
        price={6.99}
      />
    ),
  },
];

const ContentEl = styled(Content)`
  max-height: 90vh;
`;

export default function HomePage() {
  return (
    <>
      <ContentEl>
        <TopMenu />
        <Slider
          height="250px"
          items={pillItems}
          title="Categories"
          extraItem={<ExtraItem2Dots />}
        />
        <Slider
          items={donuts}
          title="Most Sales"
          extraItem={<ExtraItmViewAll>View all</ExtraItmViewAll>}
        />
      </ContentEl>
      <NavMenu />
    </>
  );
}
