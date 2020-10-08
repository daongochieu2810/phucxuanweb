import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
const useStyles = makeStyles((theme) => ({
  cardImg: {
    objectFit: "contain",
    padding: 10,
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
  },
}));
const _data = require("./aboutUs.txt");
export default function AboutUsePage() {
  const [data, setData] = useState<string>("");
  function readTextFile(file: string) {
    let rawFile = new XMLHttpRequest();
    rawFile.open("GET", file, false);
    rawFile.onreadystatechange = function () {
      if (rawFile.readyState === 4) {
        if (rawFile.status === 200 || rawFile.status == 0) {
          let allText = rawFile.responseText;
          setData(() => allText);
        }
      }
    };
    rawFile.send(null);
  }
  useEffect(() => {
    readTextFile(_data);
  }, [_data]);

  const classes = useStyles();
  return (
    <>
      <Typography
        variant="h3"
        gutterBottom
        style={{ margin: 10, marginTop: 20 }}
        align="center"
      >
        Phuc Xuan LTD
      </Typography>
      <img
        src={process.env.PUBLIC_URL + "/logobanner.png"}
        className={classes.cardImg}
      />
      <Typography
        variant="h6"
        gutterBottom
        style={{ margin: 10, marginTop: 20 }}
        align="center"
      >
        {data}
      </Typography>
    </>
  );
}
