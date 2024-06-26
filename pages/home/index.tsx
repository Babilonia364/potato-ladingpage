import About from "@/components/About";
import BuyItNow from "@/components/BuyItNow";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Headline from "@/components/Headline";
import Nutrition from "@/components/Nutrition";
import Testimonials from "@/components/Testimonials";
import { styled } from "@mui/material";

const CustomDivContainer = styled('div')({
  background: 'linear-gradient(to bottom, #A28973, #CDB295, #A28973)',
  boxShadow: 'none',
});

export default function Home() {
  return (
    <CustomDivContainer>
      <header>
        <Header />
      </header>

      <main>
        <Headline />
        <About />
        <Nutrition />
        <Features />
        <Testimonials />
        <BuyItNow />
      </main>

      <footer>
        <Footer />
      </footer>
    </CustomDivContainer>
  );
}
