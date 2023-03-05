/** @format */

import React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

// Swiper Assets
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";

const messagesList = {
	dentalClinic: "Happy Teeth Happy Feet!",
	childrensHospital: "We're here to give presents to all children.",
};

export default class RandomMessage extends React.Component {
	render() {
		return (
			<Box
				component="section"
				sx={{
					display: "flex",
					overflow: "hidden",
					bgcolor: "white",
				}}
			>
				<Container
					sx={{ mt: 0, mb: 0, display: "flex", position: "relative" }}
				>
					<Swiper
						spaceBetween={30}
						centeredSlides={true}
						autoplay={{
							delay: 2500,
							disableOnInteraction: false,
						}}
						pagination={{
							clickable: true,
						}}
						navigation={true}
						modules={[Autoplay, Pagination, Navigation]}
						className="mySwiper"
					>
						{Object.keys(messagesList).map((key) => (
							<SwiperSlide key={key}>
								<Typography>{messagesList[key]}</Typography>
							</SwiperSlide>
						))}
					</Swiper>
				</Container>
			</Box>
		);
	}
}
