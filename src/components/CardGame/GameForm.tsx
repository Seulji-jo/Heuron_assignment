import Input from '../Input';
import ToggleSwitch from '../ToggleSwitch';

type GameFormProps = {
  players: number;
  cards: number;
  onInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  isShowScore: boolean;
  isShowCards: boolean;
  setIsShowScore: (e: React.SetStateAction<boolean>) => void;
  setIsShowCards: (e: React.SetStateAction<boolean>) => void;
  showResult: () => void;
};

export default function GameForm({
  players,
  cards,
  onInputChange,
  isShowScore,
  isShowCards,
  setIsShowScore,
  setIsShowCards,
  showResult,
}: GameFormProps) {
  return (
    <div className="container py-3 mb-4">
      <div className="row mb-2 gap-1">
        <Input
          type="number"
          label="플레이어 수"
          name="players"
          className="col"
          min={0}
          max={100}
          value={players}
          onChange={onInputChange}
        />
        <Input
          label="플레이어당 카드 갯수"
          type="number"
          name="cards"
          className="col"
          min={0}
          max={100}
          value={cards}
          onChange={onInputChange}
        />
        <button
          className="col-2 btn btn-primary"
          onClick={showResult}
          disabled={cards < 1 || players < 1}
        >
          결과 발표
        </button>
      </div>
      <div className="row gap-1 px-3">
        <ToggleSwitch
          name="isShowScore"
          className="col-2"
          checked={isShowScore}
          onChange={setIsShowScore}
          label={'score 공개'}
        />
        <ToggleSwitch
          name="isShowCards"
          className="col-2"
          checked={isShowCards}
          onChange={setIsShowCards}
          label={'카드 점수 공개'}
        />
      </div>
    </div>
  );
}
