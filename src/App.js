import "./App.css";
import MenuIcon from "@material-ui/icons/Menu";
import LayerIcon from "@material-ui/icons/Layers";
import FolderIcon from "@material-ui/icons/Folder";
import RestoreIcon from "@material-ui/icons/Restore";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import FavoriteIcon from "@material-ui/icons/Favorite";
import BackGround_img from "./foto/background.jpg";
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import {
  AppBar,
  BottomNavigation,
  BottomNavigationAction,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Grid,
  IconButton,
  Paper,
  TextField,
  Toolbar,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(1),
  },
  title: {
    flexGrow: 1,
  },
  mainFeaturesPost: {
    position: "relative",
    color: theme.palette.common.white,
    marginBottom: theme.spacing(4),
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  },
  mainFeaturesPostContent: {
    position: "relative",
    padding: theme.spacing(6),
    marginTop: theme.spacing(8),
  },
  overlay: {
    position: "absolute",
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    backgroundColor: "rgba(0,0,0,.3)",
  },
  cardMedia: {
    paddingTop: "56.25%",
  },
  cardContent: {
    flexGrow: 1,
  },
  cardGrid: {
    marginTop: theme.spacing(4),
  },
  footer_bg: {
    backgroundColor: "rgb(63, 81, 181)",
  },
}));
const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];
function App() {
  const classes = useStyles();
  const [value, setValue] = React.useState("recents");
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      {/* ---------------------------------- */}
      <AppBar position='fixed'>
        <Container fixed>
          <Toolbar>
            <IconButton
              edge='start'
              className={classes.menuButton}
              color='inherit'
              aria-label='menu'
            >
              <MenuIcon />
            </IconButton>
            <Typography variant='h6' className={classes.title}>
              Стили мебели
            </Typography>
            <Box mr={3}>
              <Button color='inherit' onClick={handleClickOpen} variant='outlined'>
                Вход
              </Button>
              <Dialog open={open} onClose={handleClose} arial-labelledby='form-dialog-title'>
                <DialogTitle id='form-dialog-titl'>Вход</DialogTitle>
                <DialogContent>
                  <DialogContentText>Авторизуйтесь, чтобы посмотреть больше </DialogContentText>
                  <TextField
                    outoFocus
                    margin='dence'
                    id='name'
                    label='Email '
                    type='email'
                    fullWidth
                  />
                  <TextField
                    outoFocus
                    margin='dence'
                    id='pass'
                    label='Password'
                    type='password'
                    fullWidth
                  />
                </DialogContent>
                <DialogActions>
                  <Button onClick={handleClose} color='primary'>
                    Отмена
                  </Button>
                  <Button onClick={handleClose} color='primary'>
                    Вход
                  </Button>
                </DialogActions>
              </Dialog>
            </Box>
            <Button color='secondary' variant='contained'>
              Выход
            </Button>
          </Toolbar>
        </Container>
      </AppBar>
      {/* ---------------------------------- */}
      <main>
        <Paper
          className={classes.mainFeaturesPost}
          style={{ backgroundImage: `url(${BackGround_img})` }}
        >
          <div className={classes.overlay} />
          <Container fixed>
            <Grid container>
              <Grid item md={6}>
                <div className={classes.mainFeaturesPostContent}>
                  <Typography component='h1' variant='h3' color='inherit' gutterBottom>
                    Мебель в современном стиле
                  </Typography>
                  <Typography variant='h5' color='inherit' paragraph>
                    Самой неотъемлемой частью интерьера любого дома является мебель. И в данной
                    статье вы сможете прочитать все о современной мебели, ее функциональности и
                    практичности.
                  </Typography>
                  <Button variant='contained' color='secondary'>
                    Больше
                  </Button>
                </div>
              </Grid>
            </Grid>
          </Container>
        </Paper>
        {/* ---------------------------------- */}
        <div className={classes.mainContent}>
          <Container maxWidth='lg'>
            <Typography variant='h3' align='center' color='textPrimary' gutterBottom>
              Особенности современного стиля мебели
            </Typography>
            <Typography variant='h5' align='center' color='textSecondary' paragraph>
              Перед тем, как выбирать мебель в комнаты, вы должны определиться со стилем, который
              вам подходит больше всего, ну а потом уже и можно приступать к меблировке.
            </Typography>
            <div className={classes.mainButtons}>
              <Grid container spacing={2} justify='center'>
                <Grid item>
                  <Button variant='contained' color='primary'>
                    Начать сейчас
                  </Button>
                </Grid>
                <Grid item>
                  {" "}
                  <Button variant='outlined' color='primary'>
                    Больше
                  </Button>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>
        {/* ---------------------------------- */}
        <Container className={classes.cardGrid} maxWidth='md'>
          <Grid container spacing={4}>
            <Grid item key={1} xs='12' sm='6' md='4'>
              <Card className={classes.card}>
                <CardMedia className={classes.cardMedia} image='./foto/1.jpg' title='Image title' />
                <CardContent className={classes.cardContent}>
                  <Typography variant='h5' gutterBottom>
                    Классика
                  </Typography>
                  <Typography>
                    Классический стиль был и будет в моде, поскольку он включает в себя разные
                    жанры, создавая уникальный и оригинальный стиль.
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size='small' color='primary'>
                    Вид
                  </Button>
                  <Button size='small' color='primary'>
                    Редактировать
                  </Button>
                  <LayerIcon />
                  <PlayCircleFilledIcon />
                </CardActions>
              </Card>
            </Grid>
            <Grid item key={2} xs='12' sm='6' md='4'>
              <Card className={classes.card}>
                <CardMedia className={classes.cardMedia} image='./foto/2.jpg' title='Image title' />
                <CardContent className={classes.cardContent}>
                  <Typography variant='h5' gutterBottom>
                    Минимализм
                  </Typography>
                  <Typography>
                    В минимализме, как и в модерне, чем меньше всего, тем лучше. Этот стиль наиболее
                    близок к современному – любит свободу.
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size='small' color='primary'>
                    Вид
                  </Button>
                  <Button size='small' color='primary'>
                    Редактировать
                  </Button>
                  <LayerIcon />
                  <PlayCircleFilledIcon />
                </CardActions>
              </Card>
            </Grid>
            <Grid item key={3} xs='12' sm='6' md='4'>
              <Card className={classes.card}>
                <CardMedia className={classes.cardMedia} image='./foto/3.jpg' title='Image title' />
                <CardContent className={classes.cardContent}>
                  <Typography variant='h5' gutterBottom>
                    Констуктивизм
                  </Typography>
                  <Typography>
                    Современная мебель в конструктивизме только функциональная, имеет простые линии,
                    минимальное количество декораций.
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size='small' color='primary'>
                    Вид
                  </Button>
                  <Button size='small' color='primary'>
                    Редактировать
                  </Button>
                  <LayerIcon />
                  <PlayCircleFilledIcon />
                </CardActions>
              </Card>
            </Grid>
          </Grid>
        </Container>
        {/* ---------------------------------- */}
      </main>
      <footer className={classes.footer_bg}>
        <Typography variant='h6' align='center' gutterBottom></Typography>
        <BottomNavigation value={value} onChange={handleChange} className={classes.root}>
          <BottomNavigationAction label='Недавние' value='recents' icon={<RestoreIcon />} />
          <BottomNavigationAction label='Избранное' value='favorites' icon={<FavoriteIcon />} />
          <BottomNavigationAction label='Рядом' value='nearby' icon={<LocationOnIcon />} />
          <BottomNavigationAction label='Папка' value='folder' icon={<FolderIcon />} />
        </BottomNavigation>
        <Typography align='center' color='textSecondary' component='p' variant='subtitle1'>
          Стили мебели on Material Ui
        </Typography>
      </footer>
    </>
  );
}

export default App;
