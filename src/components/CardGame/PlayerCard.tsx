import { PlayerList } from '../../types/CardGame';

type PlayerCardProps = {
  player: PlayerList;
  isShowScore: boolean;
  isShowCards: boolean;
};

export default function PlayerCard({
  player,
  isShowCards,
  isShowScore,
}: PlayerCardProps) {
  return (
    <div className="card" style={{ width: '24%' }}>
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
  );
}
