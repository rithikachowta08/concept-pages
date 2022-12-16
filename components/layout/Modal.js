import { Title } from "../text";
import { PropTypes } from "prop-types";
import { Flex, Icon } from "components/StyledElements";
import { fontSizes, fontWeights } from "utils/fontStyles";
import styled from "styled-components";
const crossIcon = "assets/cross_icon.svg";
import Button from "components/Button";
import { colors } from "utils/colors";

const Overlay = styled.div`
   background: rgba(0, 0, 0, 0.5);
   width: 100%;
   height: 100%;
   position: absolute;
   top: 0;
   left: 0;
   visibility: ${(props) => (props.isOpen ? "visible" : "hidden")};
   transition: all 0.5s;
   z-index: 7;
`;

// background: #3c3281;

const bgMapping = {
   LIGHT: "#ffffee",
   DARK: "#3c3281",
};

const ModalBody = styled.div`
   width: 35vw;
   height: 100%;
   position: absolute;
   bottom: 0;
   background: ${(props) => bgMapping[props.bg] || bgMapping.DARK};
   color: ${(props) => props.color || colors.WHITE};
   transform: ${(props) =>
      props.isOpen ? "translateX(0px)" : "translateX(-999px)"};
   border-radius: 0px 20px 20px 0px;
   padding: 50px 25px;
   display: flex;
   flex-direction: column;
   box-sizing: border-box;
   transition: transform 0.5s;

   @media only screen and (min-width: 200px) and (max-width: 767px) {
      border-radius: 20px 20px 0px 0px;
      padding: 40px 20px;
      width: 100%;
      height: 80%;
      transform: ${(props) =>
         props.isOpen ? "translateY(0px)" : "translateY(999px)"};
   }

   @media only screen and (min-width: 767px) and (max-width: 1284px) {
      width: 50vw;
   }
`;

const Modal = ({ onDismiss, content, title, isOpen, bg, color }) => {
   const onClick = (e) => {
      if (e.target.id === "overlay") {
         onDismiss();
      }
   };
   return (
      <Overlay isOpen={isOpen} id="overlay" onClick={onClick}>
         <ModalBody isOpen={isOpen} bg={bg} color={color}>
            <Flex
               justifyContent="space-between"
               alignItems="center"
               marginBottom="10px"
            >
               {title ? (
                  <Title
                     fontWeight={fontWeights.BOLD}
                     fontSize={fontSizes.LARGE}
                     color={color || "white"}
                     small
                  >
                     {title}
                  </Title>
               ) : null}
               {title ? null : <div>{content}</div>}
               <Icon
                  alignSelf={title ? "center" : "start"}
                  src={crossIcon}
                  onClick={onDismiss}
               ></Icon>
            </Flex>
            {title ? <div>{content}</div> : null}
            <Button
               color={color}
               position="fixed"
               bottom="40px"
               width="130px"
               onClick={onDismiss}
            >
               Got it!
            </Button>
         </ModalBody>
      </Overlay>
   );
};

Modal.propTypes = {
   onDismiss: PropTypes.func.isRequired,
   title: PropTypes.string,
   isOpen: PropTypes.bool.isRequired,
   content: PropTypes.node.isRequired,
};

export default Modal;
