import styled from "styled-components";

const PageIsntFoundContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #d7e9ea;
  width: 100%;
  min-height: 100vh;
`;
export const PageNotFound = () => {
  return (
    <PageIsntFoundContainer>
      <h2>404 Page not found</h2>
    </PageIsntFoundContainer>
  );
};
