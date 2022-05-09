import styled, { css } from "styled-components";

export interface MySearchBarProps {
  debounceQuery: string;
  onDebounceQuery: (tempQuery: string) => void;
  isScroll: boolean;
}

export default function MySearchBar(props: MySearchBarProps) {
  const { debounceQuery, onDebounceQuery, isScroll } = props;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const text = e.currentTarget.value;

    onDebounceQuery(text);
  };

  const handleCancel = () => {
    onDebounceQuery("");
  };

  return (
    <StWrapper isscroll={isScroll}>
      <MySearchBarWrapper isqueryempty={debounceQuery}>
        <StIcSearch isqueryempty={debounceQuery} />

        <LabelHidden htmlFor="addBookSearch">검색</LabelHidden>
        <InputSearch
          onChange={handleChange}
          type="text"
          value={debounceQuery}
          id="addBookSearch"
          placeholder="책 제목 또는 지은이를 입력해주세요."
        />
        <StIcCancel onClick={handleCancel} isqueryempty={debounceQuery} />
      </MySearchBarWrapper>
    </StWrapper>
  );
}

const StWrapper = styled.section<{ isscroll: boolean }>`
  position: sticky;
  top: 0;

  padding-top: 3.1rem;
  padding-bottom: 3.5rem;

  background-color: white;

  ${({ isscroll }) =>
    isscroll
      ? css`
          box-shadow: 0rem 0.6rem 1rem rgba(0, 0, 0, 0.17);
        `
      : css`
          box-shadow: 0;
        `}
`;

const MySearchBarWrapper = styled.div<{ isqueryempty: string }>`
  position: relative;

  display: flex;
  justify-content: space-between;
  align-items: center;

  border: 0.2rem solid #f7f7f7;
  margin: 0 4rem;
  border-radius: 1rem;
  background-color: #f7f7f7;

  height: 5.6rem;

  ${({ isqueryempty }) =>
    isqueryempty === ""
      ? css`
          border: 0.2rem solid #f7f7f7;
        `
      : css`
          border: 0.2rem solid #242424;
        `}
`;

const StIcSearch = styled.div<{ isqueryempty: string }>`
  position: absolute;
  top: 1.2rem;
  left: 1.2rem;

  width: 3.2rem;
  height: 3.2rem;

  ${({ isqueryempty }) =>
    isqueryempty === ""
      ? css`
          fill: #c1c1c1;
        `
      : css`
          fill: #555555;
        `}
`;

const LabelHidden = styled.label`
  // visually hidden
  position: absolute;
  clip: rect(0 0 0 0);
  width: 1px;
  height: 1px;
  margin: -1px;
  overflow: hidden;
`;

const InputSearch = styled.input`
  width: 100%;

  padding-left: 6.4rem;

  background-color: #f7f7f7;

  font-weight: 500;
  font-size: 1.4rem;
  line-height: 1.3;
  letter-spacing: -0.1rem;

  color: #242424;

  &::placeholder {
    color: #6f6f6f;
  }
`;

const StIcCancel = styled.div<{ isqueryempty: string }>`
  margin-right: 1.5rem;

  ${({ isqueryempty }) => (isqueryempty === "" ? "display: none;" : "")}

  &:hover {
    cursor: pointer;
  }
`;
