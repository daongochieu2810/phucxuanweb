import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Partner from "../Home/Partner";
import { brands } from "../Home/Homepage";

const useStyles = makeStyles((theme) => ({
  mainGrid: {
    marginTop: theme.spacing(5),
    justifyContent: "space-between",
  },
}));
export default function BrandsPage() {
  const classes = useStyles();
  return (
    <>
      <Grid container spacing={5} className={classes.mainGrid}>
        {brands.map((brand) => (
          <Partner brand={brand} />
        ))}
      </Grid>
    </>
  );
}
