import React, { useState } from "react";
import * as S from "../styles/Login.styled";

export const Login = () => {
  const [signIn, toggle] = useState(true);
  const [usernameReg, setUsernameReg] = useState("");
  const [passReg, setPasswordReg] = useState("");
  const [userEmailReg, setUserEmailReg] = useState("");

  const onSubmit = e => {
    e.preventDefault();

    const user = {
      username: setUsernameReg,
      email: setUserEmailReg,
      password: setPasswordReg
    };

    fetch("http://127.0.0.1:8000/api/", {
      method: 'POST',
      headers: {
        'Content-Type' : 'application/json'
      },
      body: JSON.stringify(user)
    })
      .then(res => res.json)
      .then(data => {
        if (data.key) {
          localStorage.clear();
          localStorage.setItem('token', data.key);
          window.location.replace('http://localhost:3000/login');
      } else {
        setUsernameReg('');
        setUserEmailReg('');
        setPasswordReg('');
        localStorage.clear();
        }
      });
  };

  const onChange = e => {
    setUsernameReg(e.target.value);
    setUserEmailReg(e.target.value);
    setPasswordReg(e.target.value);
  };

  return (
    <S.Wrap>
      <S.Container>
        <S.SignUpContainer signinIn={signIn}>
          <S.Form onSubmit={onSubmit}>
            <S.Title>Create Account</S.Title>
            <S.Input name="name" type="text" value={setUsernameReg} placeholder="Name" required onChange={e => setUsernameReg(e.target.value)}/>
            <S.Input
              name="email"
              type="email"
              value={setUserEmailReg}
              placeholder="Email"
              required
              onChange={e => setUserEmailReg(e.target.value)}
            />
            <S.Input
              name="password"
              type="password"
              placeholder="Password"
              value={setPasswordReg}
              required
              onChange={e => setPasswordReg(e.target.value)}
            />
            <S.Button type="submit">Sign Up</S.Button>
          </S.Form>
        </S.SignUpContainer>

        <S.SignInContainer signinIn={signIn}>
          <S.Form>
            <S.Title>Sign in</S.Title>
            <S.Input name="email" type="email" placeholder="Email" required />
            <S.Input name="password" type="password" placeholder="Password" required />
            <S.Anchor href="#">Forgot your password?</S.Anchor>
            <S.Button type="submit">Sign In</S.Button>
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
