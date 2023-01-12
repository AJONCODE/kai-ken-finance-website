import Apply from "../components/Home/Apply";
import Features from "../components/Home/Features";
import WhyAptos from "../components/Home/WhyAptos";
import W3kTax from "../components/Home/GameIncubator";
import HowToParticipate from "../components/Home/HowToParticipate";
import Jumbotron from "../components/Home/Jumbotron";
import DecentralizedVC from "../components/Home/DecentralizedVC";
import Roadmap from "../components/Home/Roadmap";
import TokenInfo from "../components/Home/tokeninfo";
import Team from "../components/Home/Team";
import Advisors from "../components/Home/Advisors";
import Partners from "../components/Home/Partners";

const Home = () => {
  return (
    <div>
      <Jumbotron />
      {/* <Features /> */}
      <WhyAptos />
      <HowToParticipate />
      <TokenInfo />
      <W3kTax />
      <DecentralizedVC />
      <Roadmap />
      {/* <Team/> */}
      {/* <Advisors/> */}
      <Partners />
      <Apply />
    </div>
  );
};

export default Home;
