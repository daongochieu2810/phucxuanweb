import React from "react";
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
export default function ContactUsPage() {
  const classes = useStyles();
  return (
    <>
      <Typography
        variant="h6"
        gutterBottom
        style={{ margin: 10, marginTop: 20 }}
        align="center"
      >
        Công ty TNHH Thương mại và dịch vụ Phúc Xuân Địa chỉ : Số 10/97, Đường
        Văn Cao, Phường Liễu Giai. Quận Ba Đình - Thành phố Hà Nội Điện thoại :
        84-4 3 247 4090 - Fax : 84-4 3 734 6193 Website : www.phucxuan.com -
        Email : sale@phucxuan.com - info@phucxuan.com
      </Typography>
    </>
  );
}
