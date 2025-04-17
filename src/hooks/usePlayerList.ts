import { useEffect, useState } from 'react';
import { PlayerList } from '../types/CardGame';

const usePlayerList = (playerCount: number, cardCount: number) => {
  const [playerList, setPlayerList] = useState<PlayerList[]>([]);

  const resetPlayers = () => {
    setPlayerList([]);
  };
  const createCards = (leng: number) => {
    return Array.from({ length: leng }, () => Math.floor(Math.random() * 99));
  };

  const createPlayers = (count: number, cardCount: number): PlayerList[] =>
    Array.from({ length: count }, (_, i) => {
      const cards = createCards(cardCount);
      const score = cards.reduce((a, b) => a + b, 0);
      return { name: `player${playerList.length + i + 1}`, score, cards };
    });

  // 플레이어 수 변경 시 목록 조정
  useEffect(() => {
    if (playerCount === 0) {
      setPlayerList([]);
    } else {
      setPlayerList(prev => {
        const currPlayer = [...prev];
        const diff = playerCount - currPlayer.length;

        if (diff > 0) {
          return [...currPlayer, ...createPlayers(diff, cardCount)];
        } else if (diff < 0) {
          return currPlayer.slice(0, playerCount);
        }
        return currPlayer;
      });
    }
  }, [playerCount]);

  // 카드 수 변경 시 카드 목록 조정
  useEffect(() => {
    if (cardCount === undefined || cardCount === null) return;

    const updated = playerList.map(player => {
      let cards = [...player.cards];

      if (cards.length < cardCount) {
        cards = [...cards, ...createCards(cardCount - cards.length)];
      } else if (cards.length > cardCount) {
        cards = cards.slice(0, cardCount);
      }

      return {
        ...player,
        cards,
        score: cards.reduce((a, b) => a + b, 0),
      };
    });

    setPlayerList(updated);
  }, [cardCount]);

  return { playerList, resetPlayers };
};

export default usePlayerList;
