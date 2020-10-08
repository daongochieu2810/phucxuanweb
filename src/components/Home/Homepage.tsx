import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import MainFeaturedBrand from "../MainFeaturedBrand";
import FeaturedBrand from "../FeaturedBrand";
import Typography from "@material-ui/core/Typography";
import Partner from "./Partner";

const useStyles = makeStyles((theme) => ({
  mainGrid: {
    marginTop: theme.spacing(3),
    justifyContent: "space-between",
  },
}));


const mainFeaturedBrand = {
  title: "Phuc Xuan LTD",
  description:
    "Multiple lines of text that form the lede, informing new readers quickly and efficiently about what's most interesting in this post's contents.",
  image: process.env.PUBLIC_URL + "/largeDisplay1.png",
  imgText: "main featured image",
};

const featuredBrands = [
  {
    title: "Hoya Limited",
    date: "Nov 12",
    description: "This is a good brand",
    image: process.env.PUBLIC_URL + "/hoya-logo.png",
    link: "https://hoyasurgicaloptics.com/html/page.php?page_id=2",
  },
  {
    title: "Human Optics",
    date: "Nov 11",
    description: "This is a nice brand.",
    image: process.env.PUBLIC_URL + "/human-optics-logo.png",
    link:
      "https://www.humanoptics.com/en/surgeons/products/intraocular-lenses.html",
  },
];

export const brands: any[] = [
  {
    logo: process.env.PUBLIC_URL + "/hospital-logo.png",
    name: "EyeVision",
    description: "A brand",
    link:
      "https://visionsolutionslk.com/?fbclid=IwAR26KFw0tVph5hSC1mylJz3lYDf1WzwZhBWmCcNiyEPbLrR4pJmBpcQ8kCQ",
  },
  {
    logo: process.env.PUBLIC_URL + "/oertli-logo.png",
    name: "Oertli",
    description: "A brand",
    link: "http://www.oertli-instruments.com/en.html",
  },
  {
    logo: process.env.PUBLIC_URL + "/rumex-logo.png",
    name: "Rumex",
    description: "A brand",
    link: "http://www.rumex.com/en/information/consumables_content",
  },
  {
    logo: process.env.PUBLIC_URL + "/CIMA-logo.png",
    name: "CIMA",
    description: "A brand",
    link: "https://cimatechinc.com/products/iols/pmma/",
  },
];
export default function Homepage() {
  const classes = useStyles();

  return (
    <>
      <MainFeaturedBrand post={mainFeaturedBrand} />
      <Typography
        variant="h3"
        gutterBottom
        style={{ margin: 10, marginTop: 50 }}
        align="center"
      >
        Featured brands
      </Typography>
      <Grid container spacing={4}>
        {featuredBrands.map((brand) => (
          <FeaturedBrand key={brand.title} post={brand} />
        ))}
      </Grid>
      <Typography
        variant="h3"
        gutterBottom
        style={{ margin: 10, marginTop: 50 }}
        align="center"
      >
        Our partners
      </Typography>
      <Grid container spacing={5} className={classes.mainGrid}>
        {brands.map((brand) => (
          <Partner brand={brand} />
        ))}
      </Grid>
    </>
  );
}
