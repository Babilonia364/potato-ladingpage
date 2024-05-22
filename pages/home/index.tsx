import Header from "@/components/Header";
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
        <p>main</p>
      </main>

      <footer>
        <p>footer</p>
      </footer>
    </CustomDivContainer>
  );
}
