import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    width: 400,
    marginBottom: 50,
  },
  media: {
    objectFit: "contain",
    padding: 10,
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
  },
});
export interface Brand {
  logo: string;
  name: string;
  description: string;
  link: string;
}
export interface PartnerProps {
  brand: Brand;
}
export default function Partner(props: PartnerProps) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea component="a" href={props.brand.link} target="_blank">
        <img src={props.brand.logo} className={classes.media} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {props.brand.name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {props.brand.description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
