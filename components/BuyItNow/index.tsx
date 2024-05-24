import { Box, Typography, styled } from "@mui/material";
import Order from "../Order";
import potatoLight from '@/assets/images/potato_light.png';
import potatoPro from '@/assets/images/potato_pro.png';
import potatoTeam from '@/assets/images/potato_team.png';

function BuyItNow() {
  const CustomSection = styled('section')(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#EDEDED',
    padding: `${theme.spacing(6)} 0`,

    [theme.breakpoints.down('sm')]: {
      padding: '25px 8px',
    },
  }));

  const Title = styled(Typography)(({ theme }) => ({
    color: '#898989',
    fontSize: '3rem',
    '& sup': {
      fontSize: '1rem',
    },

    [theme.breakpoints.down('sm')]: {
      fontSize: '1.5rem',
      '& sup': {
        fontSize: '.9rem',
      },
    },
  }));

  const OrderContainer = styled(Box)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '16px',

    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
      padding: '8px',
    },
  }));

  return (
    <CustomSection id="buy-it-now">
      <Title variant="h2">Order one (or more) today!</Title>
      <OrderContainer>
        <Order
          title="<b>Potato</b><sup>TM</sup> Lite"
          items={[
            "Small and Compact",
            "Highly Portable",
            "Unapologetically delicious",
          ]}
          price={9.99}
          imageUrl={potatoLight.src}
        />
        <Order
          title="<b>Potato</b><sup>TM</sup> Pro"
          items={[
            "Highly Portable",
            "Easily Sliceable",
            "Unapologetically delicious",
            "Very Nutritious",
          ]}
          price={19.99}
          imageUrl={potatoPro.src}
        />
        <Order
          title="<b>Potato</b><sup>TM</sup> Team"
          items={[
            "Ideal for bigger groups",
            "Easily Sliceable",
            "Unapologetically delicious",
            "Very Nutritious",
          ]}
          price={9.99}
          imageUrl={potatoTeam.src}
        />
      </OrderContainer>
    </CustomSection>
  );
}

export default BuyItNow;