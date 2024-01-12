import { styled } from "styled-components";
import tags from "./tags.json";

const TagsContainer = styled.section`
  display: flex;
  align-items: center;
  gap: 64px;
  margin-top: 56px;
`;

const TagTitulo = styled.h3`
  color: #d9d9d9;
  font-size: 24px;
  margin: 0;
`;

const Tag = styled.button`
  background: rgba(217, 217, 217, 0.3);
  border-radius: 10px;
  width: fit-content;
  color: white;
  cursor: pointer;
  font-size: 1.5rem;
  line-height: 29px;
  text-align: center;
  padding: 0.8rem;
  outline: none;
  box-sizing: border-box;
  transition: transform 0.3s ease-in-out;
  border: 2px solid transparent;
  &:hover {
    border-color: #c98cf1;
    transform: scale(1.1);
  }
`;

const Div = styled.div`
  display: flex;
  gap: 24px;
  justify-content: end;
`;

const Tags = () => {
  return (
    <TagsContainer>
      <TagTitulo>Busque por tags:</TagTitulo>
      <Div>
        {tags.map((tag) => (
          <Tag key={tag.id}>{tag.titulo}</Tag>
        ))}
      </Div>
    </TagsContainer>
  );
};

export default Tags;
