/** @format */

import React from "react";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { Paper } from "@mui/material";

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
			<Paper elevation={11}>
				<Swiper
					spaceBetween={30}
					centeredSlides={true}
					autoplay={{
						delay: 10000,
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
							<Typography align="center">
								{messagesList[key]}
							</Typography>
						</SwiperSlide>
					))}
				</Swiper>
			</Paper>
		);
	}
}
