import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Grid from "@material-ui/core/Grid";
import img from "../../img/iphone-12-pro-max-gold-hero.png"

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(2),
  },
  card: {
    background: "#f3f3f1",
    height: "300px"
  },
  media: {
    height: 140,
    marginLeft: "150px",
    width: "90px"
  },
  cardContent: {
    textAlign: "center"
  }

}))

interface Props {
  productList: any
}
export default function GenericCard(props: Props) {
  const classes = useStyles();


  return (
    <div className={classes.root}>
      <Grid
        container
        spacing={2}
      >
        {props.productList?.map((data: any, index: any) => (
          <Grid item md={4} key={index}>
            <Card className={classes.card}>

              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image={img}
                  title="Contemplative Reptile"
                />
                <CardContent className={classes.cardContent}>
                  <Typography gutterBottom variant="h5" component="h2">
                    {data.device_name}
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                    {data.brand}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>

  );
}