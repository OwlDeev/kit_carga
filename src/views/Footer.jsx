import "../css/footer.css";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";
import logoFooter from '../imgs/logo-sonda-footer.png';

function Footer() {
  return (
    <footer>
      <Grid container spacing={2}>
        <Grid item xs={24} className="gridItemFooter">
          <img src={logoFooter} alt={'imagen de footer'} className={'logoFooter'}/>
          <Typography variant="h6" gutterBottom>
            Desarrollado por equipo de ventas. Sonda
          </Typography>
        </Grid>
      </Grid>
    </footer>
  );
}

export default Footer;
