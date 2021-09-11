import { h, Fragment } from 'preact';
//import ReactDOM from 'react-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Countdown from 'react-countdown-now';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
// import WebFont from 'webfontloader';

// WebFont.load({
// 	google: {
// 		families: ['Alegreya Sans SC:700', 'sans-serif']
// 	}
// });

const useStyles = makeStyles(theme => ({
	circle: {
		borderRadius: '90px',
		borderColor: 'white',
		borderStyle: 'solid',
		borderWidth: '1px',
		width: '70px',
		height: '70px',
		paddingTop: '15px',
		paddingLeft: '8.5px',
		marginLeft: '5px',
		marginRight: '5px'
	},
	counter: {
		fontSize: '40px'
	},
	box: {
		display: 'inline-block',
		width: '100px',
		height: '100px',
		margin: '0 5px',
		paddingTop: '14px',
		background: 'rgba(45,45,45,.6)',
		fontSize: '16px',
		borderRadius: '80px',
		color: 'white'
	},
	twitterIcon: {
		color: 'white',
		marginRight: '8px'
		// marginLeft: "2px"
	},
	facebookIcon: {
		color: 'white',
		marginRight: '8px'
		// marginLeft: "2px"
	},
	instagramIcon: {
		color: 'white',
		marginRight: '8px'
		// marginLeft: "2px"
	},
	content: {
		padding: theme.spacing(8, 0, 6),
		// backgroundImage: "linear-gradient(red, yellow);",
		height: '100%',
		// background: "rgb(131,58,180)",
		backgroundColor: '#000000',
		backgroundImage:
			"url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 800 800'%3E%3Cg %3E%3Ccircle fill='%23000000' cx='400' cy='400' r='600'/%3E%3Ccircle fill='%23180d1c' cx='400' cy='400' r='500'/%3E%3Ccircle fill='%23261431' cx='400' cy='400' r='400'/%3E%3Ccircle fill='%23351947' cx='400' cy='400' r='300'/%3E%3Ccircle fill='%23451e5e' cx='400' cy='400' r='200'/%3E%3Ccircle fill='%23552277' cx='400' cy='400' r='100'/%3E%3C/g%3E%3C/svg%3E\")",
		backgroundAttachment: 'fixed',
		backgroundSize: 'cover',
		textAlign: 'center'
	},
	comingSoon: {
		marginTop: '30px',
		lineHeight: '1.5',
		color: 'white',
		fontFamily: 'Alegreya Sans SC',
		weight: 700
	},
	logo: {
		marginBottom: '10px'
	}
}));

function SvgComponent(props) {
	return (
		<svg viewBox="0 0 512.001 512.001" width={128} height={128} {...props}>
			<path
				d="M268.662 243.351a10 10 0 00-14.15 0c-3.9 3.9-3.9 10.23 0 14.14 3.91 3.9 10.24 3.9 14.15 0 3.9-3.91 3.9-10.24 0-14.14zM395.933 116.07c-19.54-19.539-51.172-19.54-70.713 0-19.489 19.489-19.49 51.209.003 70.714 19.496 19.484 51.216 19.492 70.71-.002 19.538-19.538 19.542-51.171 0-70.712zm-14.142 56.569c-11.693 11.694-30.727 11.694-42.426.002-11.695-11.702-11.696-30.736-.002-42.429 11.723-11.723 30.703-11.725 42.428 0 11.723 11.722 11.725 30.703 0 42.427z"
				data-original="#000000"
				className="prefix__active-path"
				data-old_color="#000000"
				fill="#FFF"
			/>
			<path
				d="M509.07 2.929a9.965 9.965 0 00-7.43-2.922c-2.261.081-56.096 2.245-120.091 24.864-51.28 18.106-94.023 44.029-127.042 77.049a380.537 380.537 0 00-21.488 23.396c-32.648-19.218-58.81-13.192-75.349-4.341-38.081 20.38-61.652 75.716-61.652 115.296a10.007 10.007 0 0010.001 10 10 10 0 007.073-2.929c20.083-20.083 44.854-18.827 52.946-17.763l3.502 3.502c-6.892 16.4-12.444 32.708-16.516 48.569-1.47 5.74-.974 11.814 1.211 17.37-9.628 4.437-18.917 10.952-27.005 19.04-25.741 25.742-30.968 88.476-31.178 91.134a10 10 0 0010.755 10.756c2.658-.209 65.394-5.436 91.135-31.177 8.085-8.085 14.599-17.373 19.036-26.999 5.882 2.313 11.936 2.598 17.38 1.203 15.854-4.071 32.16-9.621 48.562-16.514l3.502 3.502c1.063 8.093 2.319 32.864-17.763 52.945a10 10 0 007.071 17.07c39.58 0 94.915-23.571 115.295-61.652 8.851-16.537 14.877-42.699-4.341-75.348a380.674 380.674 0 0023.396-21.488c33.02-33.02 58.942-75.763 77.048-127.039 22.62-63.998 24.783-117.834 24.864-120.094.1-2.775-.959-5.466-2.922-7.43zM118.376 214.762c6.212-30.063 24.255-63.052 48.735-76.154 16.359-8.754 34.24-7.896 53.252 2.511a404.33 404.33 0 00-42.015 68.487c-.149-.092-1.949-2.355-5.293-3.109-1.375-.311-27.834-6.002-54.679 8.265zM183.8 370.63c-13.75 13.75-46.005 21.002-66.392 23.963 2.962-20.388 10.215-52.642 23.964-66.391 7.7-7.7 16.628-13.538 25.602-16.826l33.652 33.652c-3.288 8.974-9.125 17.902-16.826 25.602zm45.59-31.027c-2.894.741-6.246-.347-8.738-2.835l-19.586-19.585-25.826-25.827c-2.494-2.499-3.582-5.85-2.843-8.739 3.203-12.474 7.392-25.272 12.486-38.193l82.695 82.695c-12.923 5.095-25.719 9.283-38.188 12.484zm144.004 5.288c-13.102 24.479-46.09 42.523-76.152 48.734 9.585-18.037 11.698-40.998 8.196-54.921-.813-3.234-2.923-4.86-3.041-5.051a404.48 404.48 0 0068.486-42.015c10.407 19.014 11.264 36.897 2.511 53.253zM395.94 243.35a362.965 362.965 0 01-28.84 25.872c-24.342 19.6-51.134 36.202-79.718 49.418l-94.02-94.018c13.216-28.586 29.818-55.378 49.416-79.717 8.164-10.133 16.868-19.837 25.875-28.843 29.625-29.626 67.859-53.204 113.671-70.176l83.792 83.792c-16.97 45.811-40.548 84.045-70.176 113.672zm77.371-134.763l-69.896-69.896c38.081-11.828 71.21-16.257 87.746-17.849-1.593 16.539-6.023 49.668-17.85 87.745z"
				data-original="#000000"
				className="prefix__active-path"
				data-old_color="#000000"
				fill="#FFF"
			/>
			<path
				d="M240.371 413.049c-3.907-3.905-10.239-3.903-14.143.002l-28.28 28.29c-3.904 3.906-3.903 10.238.002 14.142 3.907 3.904 10.239 3.904 14.143-.002l28.28-28.29c3.904-3.906 3.903-10.238-.002-14.142zM98.954 271.631c-3.904-3.906-10.235-3.906-14.142-.002l-28.29 28.28c-3.906 3.904-3.907 10.236-.003 14.142 3.903 3.904 10.234 3.908 14.142.002l28.29-28.28c3.906-3.904 3.907-10.236.003-14.142zM169.663 427.2c-3.903-3.905-10.236-3.905-14.142-.001l-67.74 67.73c-3.906 3.905-3.906 10.237-.001 14.142 3.903 3.905 10.236 3.907 14.142.001l67.74-67.73c3.906-3.905 3.906-10.237.001-14.142zM89.663 427.2c-3.904-3.905-10.237-3.905-14.142-.001l-67.74 67.73c-3.906 3.905-3.906 10.237-.001 14.142 3.903 3.905 10.236 3.907 14.142.001l67.74-67.73c3.906-3.905 3.906-10.237.001-14.142zM84.802 342.338c-3.904-3.904-10.237-3.904-14.142.001l-67.73 67.74c-3.905 3.906-3.905 10.237.001 14.143 3.905 3.905 10.237 3.905 14.142-.001l67.73-67.74c3.905-3.906 3.905-10.237-.001-14.143zM311.083 200.919c-3.906-3.905-10.236-3.905-14.143 0l-14.14 14.14c-3.905 3.905-3.905 10.237 0 14.143 3.906 3.905 10.237 3.905 14.143 0l14.14-14.14c3.905-3.905 3.905-10.237 0-14.143z"
				data-original="#000000"
				className="prefix__active-path"
				data-old_color="#000000"
				fill="#FFF"
			/>
		</svg>
	);
}

export default function Home() {
	const classes = useStyles();

	const renderer = ({ days, hours, minutes, seconds }) => (
		<strong>
			<div className={classes.box}>
				<span className={classes.counter}>{days}</span>
				<br />
				days
			</div>
			<div className={classes.box}>
				<span className={classes.counter}>{hours}</span>
				<br />
				hours
			</div>
			<div className={classes.box}>
				<span className={classes.counter}>{minutes}</span>
				<br />
				minutes
			</div>
			<div className={classes.box}>
				<span className={classes.counter}>{seconds}</span>
				<br />
				seconds
			</div>
		</strong>
	);

	return (
		// change the round shape of counter becakground to hexagon shapes
		// make the border of social media icons wider

		<Fragment>
			<CssBaseline />
			<div className={classes.content}>
				<Container maxWidth="sm">
					<SvgComponent className={classes.logo} />
					<Typography component="h1" variant="h2" align="center" color="#22b0c6" className={classes.comingSoon} gutterBottom>
						Duniakripto
					</Typography>
					<Typography component="h1" variant="h2" align="center" color="textPrimary" className={classes.comingSoon} gutterBottom>
						COMING SOON
						<br />
						{/* <Countdown date={"2020-02-01T01:02:03"} /> */}
						{/* Use above example for specific date */}
						<Countdown date={Date.now() + 3000000000} renderer={renderer} />
					</Typography>
					<Grid container spacing={0} alignItems="center" justify="center">
						<div className={classes.circle}>
							<Link href="#">
								<InstagramIcon fontSize="large" className={classes.instagramIcon} />
							</Link>
						</div>
						<div className={classes.circle}>
							<Link href="https://www.facebook.com/" target="_blank">
								<FacebookIcon fontSize="large" className={classes.facebookIcon} />
							</Link>
						</div>
						<div className={classes.circle}>
							<Link href="https://twitter.com/" target="_blank">
								<TwitterIcon fontSize="large" className={classes.twitterIcon} />
							</Link>
						</div>
					</Grid>
				</Container>
			</div>
		</Fragment>
	);
}
