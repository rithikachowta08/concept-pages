import React, { useState } from "react";
import { Flex, SlideWrap, StyledImg } from "components/StyledElements";
import { Paragraph, Title } from "components/text";
import { colors } from "utils/colors";
import { fontSizes } from "utils/fontStyles";

const image_1 = "assets/area-of-triangle/slide_10_e.svg";
const image_2 = "assets/area-of-triangle/slide_10_i.svg";
const image_3 = "assets/area-of-triangle/slide_10_s.svg";

// Types of triangle
const Slide10 = () => {
	return (
		<SlideWrap bg={"DARK"} alignItems="center" padding="0">
			<Title
				marginBottom="50px"
				fontWeight={700}
				fontSize="2.5rem"
				color="white"
			>
				Area of Different Types of Triangles
			</Title>
			<Flex justifyContent="space-between" alignItems="center" width="70%">
				<Flex direction="column" height={"200px"} width={"200px"}>
					<StyledImg src={image_1} />
					<Paragraph
						color={colors.WHITE}
						fontWeight={400}
						fontSize={fontSizes.MEDIUM}
						textAlign="center"
					>
						Equilateral Triangle
					</Paragraph>
				</Flex>
				<Flex direction="column" height={"200px"} width={"200px"}>
					<StyledImg src={image_2} />
					<Paragraph
						color={colors.WHITE}
						fontWeight={400}
						fontSize={fontSizes.MEDIUM}
						textAlign="center"
					>
						Isosceles Triangle
					</Paragraph>
				</Flex>
				<Flex direction="column" height={"200px"} width={"200px"}>
					<StyledImg src={image_3} />
					<Paragraph
						color={colors.WHITE}
						fontWeight={400}
						fontSize={fontSizes.MEDIUM}
						textAlign="center"
					>
						Scalene Triangle
					</Paragraph>
				</Flex>
			</Flex>
		</SlideWrap>
	);
};

export default Slide10;
