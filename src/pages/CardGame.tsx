import { useEffect, useState } from 'react';
import Input from '../components/Input';
import Modal from '../components/Modal';
import ToggleSwitch from '../components/ToggleSwitch';
import useForm from '../hooks/useForm';
import { CardGameData, PlayerList } from '../types/CardGame';

export default function CardGame() {
  const { values, onChange, resetValues } = useForm<CardGameData>({
    players: 0,
    cards: 0,
  });
  const [playerList, setPlayerList] = useState<PlayerList[]>([]);
  const [winnerInfo, setWinnerInfo] = useState<PlayerList>({
    name: '',
    score: 0,
    cards: [],
  });

  const [isShowScore, setIsShowScore] = useState(false);
  const [isShowCards, setIsShowCards] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const createCards = (leng: number) => {
    return Array.from({ length: leng }, () => Math.floor(Math.random() * 99));
  };

  const createPlayers = (count: number, cardCount: number): PlayerList[] =>
    Array.from({ length: count }, () => {
      const cards = createCards(cardCount);
      const score = cards.reduce((a, b) => a + b, 0);
      return { name: `player${playerList.length + 1}`, score, cards };
    });

  const result = () => {
    const winner = playerList.reduce<PlayerList>(
      (res, curr) => (res.score <= curr.score ? curr : res),
      { name: '', score: 0, cards: [] }
    );
    console.log(winner);
    setWinnerInfo(winner);
  };

  const openModal = () => {
    result();
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
    resetValues({
      players: 0,
      cards: 0,
    });
    setPlayerList([]);
  };

  // 플레이어 수 변경 시 목록 조정
  useEffect(() => {
    setPlayerList(prev => {
      const current = [...prev];
      const diff = values.players - current.length;

      if (diff > 0) {
        return [...current, ...createPlayers(diff, values.cards)];
      } else if (diff < 0) {
        return current.slice(0, values.players);
      }
      return current;
    });
  }, [values.players]);

  useEffect(() => {
    console.log(playerList);
  }, [playerList]);

  useEffect(() => {
    if (values.cards === undefined || values.cards === null) return;

    const updated = playerList.map(player => {
      let cards = [...player.cards];

      if (cards.length < values.cards) {
        cards = [...cards, ...createCards(values.cards - cards.length)];
      } else if (cards.length > values.cards) {
        cards = cards.slice(0, values.cards);
      }

      return {
        ...player,
        cards,
        score: cards.reduce((a, b) => a + b, 0),
      };
    });

    setPlayerList(updated);
  }, [values.cards]);

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
            className="col-2 btn btn-primary"
            onClick={openModal}
            disabled={values.cards < 1 || values.players < 1}
          >
            결과 발표
          </button>
          <Modal isOpen={isModalOpen} title="게임 결과" onClose={closeModal}>
            <div>
              <div>승자 : {winnerInfo.name}</div>
              <div>점수 : {winnerInfo.score}</div>
              <div>보유카드 : {winnerInfo.cards.join(', ')}</div>
            </div>
          </Modal>
        </div>
        <div className="row gap-1 px-3">
          <ToggleSwitch
            id="image-color-toggle"
            className="col-2"
            checked={isShowScore}
            onChange={setIsShowScore}
            label={'score 공개'}
          />
          <ToggleSwitch
            id="image-color-toggle"
            className="col-2"
            checked={isShowCards}
            onChange={setIsShowCards}
            label={'카드 점수 공개'}
          />
        </div>
      </div>
      <div className="d-flex flex-wrap gap-2">
        {playerList.map(player => (
          <div key={player.name} className="card" style={{ width: '24%' }}>
            <div className="card-body">
              <h5 className="card-title">{player.name}</h5>
              <div>점수: {isShowScore ? player.score : '?'}</div>
              <div className="d-flex flex-wrap gap-2">
                {player.cards.map((num, idx) => (
                  <div
                    key={`card${idx}`}
                    className="card text-center"
                    style={{ width: '15%' }}
                  >
                    {isShowCards ? num : '?'}
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
