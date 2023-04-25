import styled from "styled-components";
import PropTypes from "prop-types";

const ContextMenuOverlay = styled.div`
   position: fixed;
   top: 0;
   left: 0;
   width: 100vw;
   height: 100vh;
   z-index: 9;
`;

const Wrapper = styled.div`
   display: flex;
   flex-direction: column;
   align-items: start;
   gap: 4px;
   position: fixed;
   background-color: white;
   top: ${(props) => props.y}px;
   left: ${(props) => props.x}px;
   z-index: 10;
   box-shadow: 0 0 8px #bbb;
   border-radius: 4px;
   padding: 4px;
`;

const ListItem = styled.button`
   background-color: white;
   color: black;
   border-radius: 4px;
   border: 0;
   padding: 2px 6px;
   cursor: pointer;
   height: 30px;
   width: 100%;
   text-align: start;
   font-family: inherit;

   &:hover {
      background-color: #a753b520;
   }

   &:disabled {
      background-color: #33333310;
      cursor: not-allowed;
      color: #33333380;
   }
`;

const CustomContextMenu = ({ xPos, yPos, onClose, options }) => {
   return (
      <>
         <ContextMenuOverlay
            onClick={onClose}
            onContextMenu={(e) => e.preventDefault()}
         />
         <Wrapper x={xPos} y={yPos}>
            {options.map((option) => (
               <ListItem
                  key={option.type}
                  disabled={window.getSelection().toString().length === 0}
                  onClick={option.onClick}
                  title={
                     window.getSelection().toString().length === 0
                        ? "Select text to add image"
                        : null
                  }
               >
                  {option.text}
               </ListItem>
            ))}
         </Wrapper>
      </>
   );
};

CustomContextMenu.propTypes = {
   xPos: PropTypes.number,
   yPos: PropTypes.number,
   onClose: PropTypes.func,
   options: PropTypes.arrayOf(
      PropTypes.shape({
         type: PropTypes.string,
         text: PropTypes.string,
         onClick: PropTypes.func,
      })
   ),
};

export default CustomContextMenu;
