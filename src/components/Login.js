import React, { useState } from "react";
import * as S from "../styles/Login.styled";

export const Login = () => {
  const [signIn, toggle] = useState(true);

  return (
    <S.Wrap>
      <S.Container>
        <S.SignUpContainer signinIn={signIn}>
          <S.Form>
            <S.Title>Create Account</S.Title>
            <S.Input name="name" type="text" placeholder="Name" required="" />
            <S.Input
              name="email"
              type="email"
              placeholder="Email"
              required=""
            />
            <S.Input
              name="password"
              type="password"
              placeholder="Password"
              required=""
            />
            <S.SignUpButton type="submit">Sign Up</S.SignUpButton>
          </S.Form>
        </S.SignUpContainer>

        <S.SignInContainer signinIn={signIn}>
          <S.Form>
            <S.Title>Sign in</S.Title>
            <S.Input name="email" type="email" placeholder="Email" />
            <S.Input name="password" type="password" placeholder="Password" />
            <S.Anchor href="#">Forgot your password?</S.Anchor>
            <S.SignInButton type="submit">Sign In</S.SignInButton>
          </S.Form>
        </S.SignInContainer>

        <S.OverlayContainer signinIn={signIn}>
          <S.Overlay signinIn={signIn}>
            <S.LeftOverlayPanel signinIn={signIn}>
              <S.Title>Welcome Back!</S.Title>
              <S.Paragraph>
                로그인하고 퀀티지가 제공하는<br></br>다양한 서비스를 경험하세요!
              </S.Paragraph>
              <S.GhostButton onClick={() => toggle(true)}>
                Sign In
              </S.GhostButton>
            </S.LeftOverlayPanel>

            <S.RightOverlayPanel signinIn={signIn}>
              <S.Title>Hello, QuantEZ</S.Title>
              <S.Paragraph>세상에서 가장 쉬운 투자, QuantEZ</S.Paragraph>
              <S.GhostButton onClick={() => toggle(false)}>
                Sign Up
              </S.GhostButton>
            </S.RightOverlayPanel>
          </S.Overlay>
        </S.OverlayContainer>
      </S.Container>
    </S.Wrap>
  );
};
