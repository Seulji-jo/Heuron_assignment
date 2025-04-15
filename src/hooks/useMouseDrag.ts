export default function useMouseDrag(
  onDragChange: (x: number, y: number) => void
) {
  return {
    onMouseDown: (click: MouseEvent) => {
      click.stopPropagation();

      const mouseMoveHandler = (move: MouseEvent) => {
        const x = move.screenX - click.screenX;
        const y = move.screenY - click.screenY;
        onDragChange(x, y);
      };

      const mouseUpHandler = () => {
        document.removeEventListener('mousemove', mouseMoveHandler);
      };

      document.addEventListener('mousemove', mouseMoveHandler);
      document.addEventListener('mouseup', mouseUpHandler, { once: true });
    },
  };
}
