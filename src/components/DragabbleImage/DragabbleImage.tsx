import { useDraggable } from "@dnd-kit/core";
import { CSS } from "@dnd-kit/utilities";

type Props = {
  id: string;
  src: string;
  position: {
    x: number;
    y: number;
  };
  onRemove: (id: string) => void;
};

export function DraggableImage({ id, src, position, onRemove }: Props) {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id,
  });

  const style: React.CSSProperties = {
    position: "absolute",
    transform: CSS.Translate.toString({
      x: position.x + (transform?.x ?? 0),
      y: position.y + (transform?.y ?? 0),
      scaleX: 1,
      scaleY: 1,
    }),
    cursor: "grab",
    userSelect: "none",
  };

  return (
<img
  ref={setNodeRef}
  src={src}
  alt="emoji natalino"
  title="Clique duas vezes para remover o emoji"
  style={style}
  {...listeners}
  {...attributes}
  draggable={false}
  onDoubleClick={() => onRemove(id)}
/>

  );
}
