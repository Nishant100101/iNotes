import Card from "./Cards/Card";
import DragLayer from "./DragLayer";
import NoNotes from "./Loading/NoNotes";
import { notesProvider } from "../main";
import { DndProvider } from "react-dnd";
import update from "immutability-helper";
import { TouchBackend } from "react-dnd-touch-backend";
import { useContext, useCallback, useState } from "react";

const Notes = () => {
  const { isNotes, setIsNotes, searchInput, filteredResults } =
    useContext(notesProvider);

  const moveCard = useCallback(
    (draggedId, targetId) => {
      const sourceIndex = isNotes.findIndex((src) => src._id === draggedId);
      const destinationIndex = isNotes.findIndex((dst) => dst._id === targetId);
      if (sourceIndex === -1 || destinationIndex === -1) return;

      setIsNotes(
        update(isNotes, {
          $splice: [
            [sourceIndex, 1],
            [destinationIndex, 0, isNotes[sourceIndex]],
          ],
        })
      );

      // const sourceNote = isNotes[sourceIndex];
      // const destinationNote = isNotes[destinationIndex];
      // const sourceData = {
      //   bg: sourceNote.bg,
      //   checkbox: sourceNote.checkbox,
      //   content: sourceNote.content,
      //   date: sourceNote.date,
      //   list: sourceNote.list,
      //   style: sourceNote.style,
      //   title: sourceNote.title,
      // };
      // const destinationData = {
      //   bg: destinationNote.bg,
      //   checkbox: destinationNote.checkbox,
      //   content: destinationNote.content,
      //   date: destinationNote.date,
      //   list: destinationNote.list,
      //   style: destinationNote.style,
      //   title: destinationNote.title,
      // };
      // try {
      //   handleEdit(targetId, sourceData);
      //   handleEdit(draggedId, destinationData);
      // } catch (error) {
      //   console.log(error.message);
      // }
    },
    [isNotes, setIsNotes]
  );

  const [isOpen, setIsOpen] = useState(null);

  return (
    <DndProvider
      backend={TouchBackend}
      options={{
        enableTouchEvents: true,
        enableMouseEvents: true,
      }}
    >
      <div className="relative flex flex-wrap justify-center">
        {searchInput.length > 1 ? (
          filteredResults.length > 0 ? (
            filteredResults.map((item, index) => (
              <Card
                bg={item.bg}
                id={item._id}
                index={index}
                key={item._id}
                isOpen={isOpen}
                date={item.date}
                list={item.list}
                title={item.title}
                style={item.style}
                moveCard={moveCard}
                setIsOpen={setIsOpen}
                content={item.content}
                checkbox={item.checkbox}
              />
            ))
          ) : (
            <NoNotes isNotPresent={true} />
          )
        ) : (
          isNotes.map((item, index) => (
            <Card
              bg={item.bg}
              id={item._id}
              index={index}
              key={item._id}
              isOpen={isOpen}
              date={item.date}
              list={item.list}
              title={item.title}
              style={item.style}
              moveCard={moveCard}
              setIsOpen={setIsOpen}
              content={item.content}
              checkbox={item.checkbox}
            />
          ))
        )}
        <DragLayer />
      </div>
    </DndProvider>
  );
};
export default Notes;

//Correct the drag & drop operation.
//Error during rapid drag & drop.
