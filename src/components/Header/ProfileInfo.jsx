import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import styled from '@emotion/styled';
import { css } from '@emotion/react';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: .1rem;
  font-weight: 500;
`;

const ProfileInfo = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    isAuthenticated && (
      <Container>
        <h2>{user.name}</h2>
        <p>{user.email}</p>
      </Container>
    )
  );
};

export default ProfileInfo;