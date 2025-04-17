import { useState } from 'react';
import GameForm from '../components/CardGame/GameForm';
import GameResultModal from '../components/CardGame/GameResultModal';
import PlayerCard from '../components/CardGame/PlayerCard';
import useInput from '../hooks/useInput';
import usePlayerList from '../hooks/usePlayerList';
import { CardGameData, PlayerList } from '../types/CardGame';

export default function CardGame() {
  const { values, onChange, resetValues } = useInput<CardGameData>({
    players: 0,
    cards: 0,
  });
  const { playerList, resetPlayers } = usePlayerList(
    values.players,
    values.cards
  );
  const [winnerInfo, setWinnerInfo] = useState<PlayerList>({
    name: '',
    score: 0,
    cards: [],
  });
  const [isShowScore, setIsShowScore] = useState(false);
  const [isShowCards, setIsShowCards] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);

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
    resetPlayers();
  };

  return (
    <div>
      <GameForm
        players={values.players}
        cards={values.cards}
        onInputChange={onChange}
        showResult={openModal}
        isShowScore={isShowScore}
        isShowCards={isShowCards}
        setIsShowScore={setIsShowScore}
        setIsShowCards={setIsShowCards}
      />
      <GameResultModal
        isOpen={isModalOpen}
        onClose={closeModal}
        winnerInfo={winnerInfo}
      />
      <div className="d-flex flex-wrap gap-2">
        {playerList.map(player => (
          <PlayerCard
            key={player.name}
            player={player}
            isShowScore={isShowScore}
            isShowCards={isShowCards}
          />
        ))}
      </div>
    </div>
  );
}
