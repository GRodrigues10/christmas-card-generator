import { useDraggable } from "@dnd-kit/core";
import { CSS } from "@dnd-kit/utilities";

type Props = {
  src: string;
  position: { x: number; y: number };
};

export function DraggableImage({ src, position }: Props) {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: "christmas-image",
  });

  const x = position.x + (transform?.x ?? 0);
  const y = position.y + (transform?.y ?? 0);

  const style: React.CSSProperties = {
    position: "absolute",
    transform: CSS.Translate.toString({
      x,
      y,
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
      alt="Imagem arrastável"
      style={style}
      {...listeners}
      {...attributes}
    />
  );
}
