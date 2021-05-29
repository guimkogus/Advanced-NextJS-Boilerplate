import * as S from './styles';

export default function Main({ title = 'Title' }) {
  return (
    <S.Container>
      <S.Title>{title}</S.Title>
    </S.Container>
  );
}
