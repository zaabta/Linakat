import Grid from "@mui/material/Grid";
import { display } from "@mui/system";

const PageNotFound = () => {
  return (
    <Grid sx={{
        height: "100vh"
    }}container>
      <Grid item sx={{display:"flex", justifyContent: "center", m:"auto"}}>
        <img
          alt="404 - page not found"
          width="50%"
          src="https://freesvg.org/img/1646582431404-error-404.png"
        />
      </Grid>
    </Grid>
  );
};

export default PageNotFound;