import About from "@/components/About";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Headline from "@/components/Headline";
import Nutrition from "@/components/Nutrition";
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
      </main>

      <footer>
        <Footer />
      </footer>
    </CustomDivContainer>
  );
}
