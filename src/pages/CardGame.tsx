import { useEffect, useState } from 'react';
import Input from '../components/Input';
import Modal from '../components/Modal';
import ToggleSwitch from '../components/ToggleSwitch';
import useChunkedData from '../hooks/useChunkedData';
import useForm from '../hooks/useForm';
import { CardGameData } from '../types/CardGame';

export default function CardGame() {
  const { values, onChange, resetValues } = useForm<CardGameData>({
    players: 0,
    cards: 0,
  });
  const [playerList, setPlayerList] = useState<number[]>([]);
  const [cardList, setCardList] = useState<number[]>([]);
  const [isShowCardNum, setIsShowCardNum] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [winnerInfo, setWinnerInfo] = useState({
    player: 0,
    score: 0,
    cards: '',
  });
  const chunkedCards = useChunkedData(cardList, values.cards);

  const resetAllData = () => {
    resetValues({
      players: 0,
      cards: 0,
    });
  };

  const shuffle = (arr: number[]) => {
    if (arr.length <= 0) return;
    const copiedArr = [...arr];
    for (let i = copiedArr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [copiedArr[i], copiedArr[j]] = [copiedArr[j], copiedArr[i]];
    }
    setCardList(copiedArr);
  };

  const result = () => {
    const winner = chunkedCards.reduce(
      (res, curr, i) => {
        const sumCards = curr.reduce((a, b) => a + b);
        if (res.score <= sumCards) {
          res.player = i + 1;
          res.score = sumCards;
          res.cards = curr.join(', ');
        }
        return res;
      },
      { player: 0, score: 0, cards: '' }
    );
    console.log(winner);
    setWinnerInfo(winner);
  };

  const openModal = () => {
    result(); // 결과 계산 함수
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
    resetAllData();
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
      <div className="container py-3 mb-4">
        <div className="row mb-2 gap-1">
          <Input
            type="number"
            label="플레이어 수"
            name="players"
            className="col"
            min={0}
            max={100}
            value={values.players}
            onChange={onChange}
          />
          <Input
            label="플레이어당 카드 갯수"
            type="number"
            name="cards"
            className="col"
            min={0}
            max={100}
            readOnly={!values.players}
            value={values.cards}
            onChange={onChange}
          />
          <button
            className="col-2 btn btn-warning"
            onClick={() => shuffle(cardList)}
          >
            카드 섞기
          </button>
          <button className="col-2 btn btn-primary" onClick={openModal}>
            결과 발표
          </button>
          <Modal isOpen={isModalOpen} title="게임 결과" onClose={closeModal}>
            <div>
              <div>승자 : {`Player${winnerInfo.player}`}</div>
              <div>점수 : {winnerInfo.score}</div>
              <div>보유카드 : {winnerInfo.cards}</div>
            </div>
          </Modal>
        </div>
        <ToggleSwitch
          id="image-color-toggle"
          checked={isShowCardNum}
          onChange={setIsShowCardNum}
          label={'카드 번호 공개'}
        />
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
                        {isShowCardNum ? num : '?'}
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
