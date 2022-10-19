import { Title } from "components/text";
import { PropTypes } from "prop-types";
import { Flex, Icon } from "components/StyledElements";
import styled from "styled-components/macro";
import crossIcon from "assets/cross_icon.svg";
import Button from "components/Button";

const Overlay = styled.div`
  background: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  visibility: ${(props) => (props.isOpen ? "visible" : "hidden")};
  transition: all 0.5s;
  z-index: 1;
`;

const ModalBody = styled.div`
  width: 40%;
  height: 100%;
  background: #3c3281;
  color: white;
  transform: translateX(${(props) => (props.isOpen ? "0px" : "-999px")});
  border-radius: 0px 20px 20px 0px;
  padding: 65px 40px;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  transition: all 0.5s;
`;

const Modal = ({ onDismiss, content, title, isOpen }) => {
  const onClick = (e) => {
    if (e.target.id === "overlay") {
      onDismiss();
    }
  };
  return (
    <Overlay
      isOpen={isOpen}
      id="overlay"
      onClick={onClick}>
      <ModalBody isOpen={isOpen}>
        <Flex
          justifyContent="space-between"
          alignItems="center"
          marginBottom="20px">
          {title ? (
            <Title
              fontWeight={700}
              fontSize="1.8rem"
              color="white"
              small>
              {title}
            </Title>
          ) : null}
          {title ? null : <div>{content}</div>}
          <Icon
            alignSelf={title ? "center" : "start"}
            src={crossIcon}
            onClick={onDismiss}></Icon>
        </Flex>
        {title ? <div>{content}</div> : null}
        <Button
          position="fixed"
          bottom="40px"
          width="130px"
          onClick={onDismiss}>
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
  content: PropTypes.node.isRequired
};

export default Modal;
