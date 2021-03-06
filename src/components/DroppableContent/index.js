import React from "react";
import { DropTarget } from "react-dnd";

const getListStyle = (canDrop, dropStyle) => ({
  // background: isDraggingOver ? "lightblue" : "lightgrey",
  //   padding: grid,
  minHeight: "100%",
  overflow: "auto",
  border: canDrop ? "1px dotted" : "none",
  ...dropStyle,
});
const chessSquareTarget = {
  canDrop(props, monitor) {
    return true;
  },
  hover(props, monitor, component) {},
  drop(props, monitor, component) {
    const item = monitor.getItem();
    if (!item.index && item.index !== 0 && monitor.isOver({ shallow: true })) {
      props.onDropAction &&
        props.onDropAction({ type: "global/addItem", payload: { item: item.data, index: "max" } });
    }
  },
};
function collect(connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver(),
    canDrop: monitor.canDrop(),
  };
}
const Types = {
  CHESSPIECE: "card",
};
const DroppableContent = ({ children, dropStyle = {}, connectDropTarget, canDrop }) => {
  return connectDropTarget(<div style={getListStyle(canDrop, dropStyle)}>{children}</div>);
};

export default DropTarget(Types.CHESSPIECE, chessSquareTarget, collect)(DroppableContent);
