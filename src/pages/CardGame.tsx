import Input from '../components/Input';
import useForm from '../hooks/useForm';
import { CardGameData } from '../types/CardGame';

export default function CardGame() {
  const { values, onChange } = useForm<CardGameData>({
    players: 0,
    cards: 0,
  });

  return (
    <div>
      <div className="row pb-5">
        <Input
          label="플레이어 수"
          type="number"
          name="players"
          value={values.players}
          onChange={onChange}
        />
        <Input
          label="플레이어당 카드 갯수"
          type="number"
          name="cards"
          value={values.cards}
          onChange={onChange}
        />
        <button className="col">카드 섞기</button>
      </div>
      <div className="d-flex flex-wrap gap-2">
        {Array.from({ length: values.players }, (v, i) => (
          <div key={`player${i}`} className="card" style={{ width: '24%' }}>
            <div className="card-body">
              <h5 className="card-title">Player {i + 1}</h5>
              {Array.from(
                { length: values.cards },
                (_, index) => index + 1
              ).map((num, idx) => (
                <div key={`card${idx}`} className="card">
                  {num}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
