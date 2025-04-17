import Modal from '../Modal';

type GameModalProps = {
  isOpen: boolean;
  onClose: () => void;
  winnerInfo: { name: string; score: number; cards: number[] };
};

export default function GameResultModal({
  isOpen,
  onClose,
  winnerInfo,
}: GameModalProps) {
  return (
    <Modal isOpen={isOpen} title="게임 결과" onClose={onClose}>
      <div>
        <div>승자 : {winnerInfo.name}</div>
        <div>점수 : {winnerInfo.score}</div>
        <div>보유카드 : {winnerInfo.cards.join(', ')}</div>
      </div>
    </Modal>
  );
}
