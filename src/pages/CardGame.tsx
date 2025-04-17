import { useEffect, useState } from 'react';
import Input from '../components/Input';
import useChunkedData from '../hooks/useChunkedData';
import useForm from '../hooks/useForm';
import { CardGameData } from '../types/CardGame';

export default function CardGame() {
  const { values, onChange } = useForm<CardGameData>({
    players: 0,
    cards: 0,
  });
  const [playerList, setPlayerList] = useState<number[]>([]);
  const [cardList, setCardList] = useState<number[]>([]);
  const chunkedCards = useChunkedData(cardList, values.cards);
  console.log(chunkedCards);

  const shuffle = (arr: number[]) => {
    if (arr.length <= 0) return;
    const copiedArr = [...arr];
    for (let i = copiedArr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [copiedArr[i], copiedArr[j]] = [copiedArr[j], copiedArr[i]];
    }
    setCardList(copiedArr);
  };

  useEffect(() => {
    const playerList = Array.from({ length: values.players }, (_, i) => i + 1);

    setPlayerList(playerList);
  }, [values.players]);

  useEffect(() => {
    const totalCards = values.cards * values.players;
    const cardList = Array.from({ length: totalCards }, (_, i) => i + 1);

    shuffle(cardList);
  }, [values.cards, values.players]);
  return (
    <div>
      <div className="row pb-5">
        <Input
          label="플레이어 수"
          type="number"
          name="players"
          min={0}
          max={100}
          value={values.players}
          onChange={onChange}
        />
        <Input
          label="플레이어당 카드 갯수"
          type="number"
          name="cards"
          min={0}
          max={100}
          value={values.cards}
          onChange={onChange}
        />
        <button className="col" onClick={() => shuffle(cardList)}>
          카드 섞기
        </button>
        <button className="col">결과 발표</button>
      </div>
      <div className="d-flex flex-wrap gap-2">
        {playerList.map((playerNum, i) => (
          <div
            key={`player${playerNum}`}
            className="card"
            style={{ width: '24%' }}
          >
            <div className="card-body">
              <h5 className="card-title">Player {playerNum}</h5>
              <div className="d-flex flex-wrap gap-2">
                {chunkedCards.length
                  ? chunkedCards[i]?.map((num, idx) => (
                      <div
                        key={`card${idx}`}
                        className="card text-center"
                        style={{ width: '15%' }}
                      >
                        {num}
                      </div>
                    ))
                  : null}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
