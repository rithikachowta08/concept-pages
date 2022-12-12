import { Flex, LeftWrap, StyledImg } from "components/StyledElements";
import React, { useEffect, useState } from "react";

import Modal from "components/layout/Modal";
import { colors } from "utils/colors";
import { Paragraph, TextSpan } from "components/text";
import TransitionImage from "components/media/TransitionImage";
import TextAndDiagramSlide from "components/slides/TextAndDiagramSlide";
import { fontSizes } from "utils/fontStyles";

const area_triangle_modal = "assets/area-of-triangle/slide_2_modal.svg";
const area_triangle = "assets/area-of-triangle/slide_2_normal.svg";
const area_triangle_shaded = "assets/area-of-triangle/slide_2_shaded.svg";

// Definition
const Slide2 = ({ downIcon, navBar }) => {
	const modalContent = (
		<Flex direction="column">
			<Paragraph color="white" marginBottom="50px" fontSize={fontSizes.MEDIUM}>
				A triangle is a closed shape that has three sides, three angles, and
				three vertices.
			</Paragraph>
			<StyledImg src={area_triangle_modal} alignSelf="center" />
		</Flex>
	);
	const [activeIndex, setActiveIndex] = useState(0);
	const [isModalOpen, setIsModalOpen] = useState(false);

	const onClick = () => {
		setIsModalOpen(!isModalOpen);
	};
	const onDismiss = () => {
		setIsModalOpen(false);
	};

	useEffect(() => {
		console.log(activeIndex);
	}, [activeIndex]);

	return (
		<TextAndDiagramSlide
			title="Definition"
			secondaryTitle={"Area of a triangle"}
			downIcon={downIcon}
			navBar={navBar}
			diagram={
				<LeftWrap padding="40px">
					<TransitionImage
						images={[area_triangle, area_triangle_shaded]}
						activeIndex={activeIndex}
					/>
				</LeftWrap>
			}
		>
			<Modal
				isOpen={isModalOpen}
				title="What is a triangle?"
				content={modalContent}
				onDismiss={onDismiss}
			/>
			<Paragraph marginBottom="70px" fontSize={fontSizes.MEDIUM}>
				The area of a{" "}
				<TextSpan
					color={colors.BLACK}
					textDecoration={"underline"}
					fontSize={fontSizes.MEDIUM}
					cursor={"pointer"}
					fontWeight={700}
					marginBottom="16px"
					onClick={onClick}
				>
					triangle
				</TextSpan>{" "}
				is the{" "}
				<TextSpan
					color={colors.WHITE}
					fontSize={fontSizes.MEDIUM}
					fontWeight={400}
					marginBottom="16px"
					onHover={() => setActiveIndex(1)}
					onHoverOut={() => setActiveIndex(0)}
					bgColor={colors.RED}
					hoverBgColor={colors.DARK_BLUE}
				>
					region enclosed
				</TextSpan>{" "}
				within its three sides.
			</Paragraph>
		</TextAndDiagramSlide>
	);
};

export default Slide2;
