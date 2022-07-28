import * as React from 'react';
import DraggableListItem from '../DraggableListItem/DraggableListItem';
import {
  DragDropContext,
  Droppable,
  OnDragEndResponder
} from 'react-beautiful-dnd';

export const Item = {
  id: "",
  primary: "",
  secondary: "",
};

export const DraggableListProps = {
  items: [],
  onDragEnd: OnDragEndResponder,
};

const DraggableList = React.memo(({ items, onDragEnd }) => {
  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="droppable-list">
        {provided => (
          <div ref={provided.innerRef} {...provided.droppableProps}>
            {items.map((item, index) => (
              <DraggableListItem item={item} index={index} key={item.id} />
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
});

export default DraggableList;
