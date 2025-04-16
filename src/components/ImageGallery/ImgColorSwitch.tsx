import { useImageColor } from '../../hooks/useImageColor';

export default function ImgColorSwitch() {
  const { isColorImg = true, setIsColorImg } = useImageColor();
  return (
    <div className="form-check form-switch">
      <input
        className="form-check-input"
        type="checkbox"
        role="switch"
        id="switch"
        checked={isColorImg}
        onChange={() => setIsColorImg(!isColorImg)}
      />
      <label className="form-check-label" htmlFor="switch">
        {isColorImg ? 'color' : 'gray'}
      </label>
    </div>
  );
}
