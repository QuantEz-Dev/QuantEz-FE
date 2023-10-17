import React, { useState } from "react";
import * as S from "../styles/Login.styled";
import Axios from "axios";

export const Login = () => {
  const [signIn, toggle] = useState(true);

  const [name, setUserName] = useState('');
  const [password1, setPassword1] = useState('');
  const [password2, setPassword2] = useState('');
  const [email, setUserEmail] = useState('');

  const onChangeName = (e) => {
    setUserName(e.target.value);
  };
  const onChangePw1 = (e) => {
    setPassword1(e.target.value);
  };
  const onChangePw2 = (e) => {
    setPassword2(e.target.value);
  };
  const onChangeEmail = (e) => {
    setUserEmail(e.target.value);
  };
  const onSubmit = (e) => {
    e.preventDefault();

    const user = {
      email: email,
      password1: password1,
      password2: password2,
      username: name
    }

    if(password1 !== password2) {
      alert('비밀번호가 다릅니다')
      return false;
    }

    Axios.post('http://localhost:8000/common/signup/', user)
      .then(res => {
        if(res.data.key) {
          localStorage.clear();
          localStorage.setItem('token', res.data.key);
          window.location.replace('/');
        } else {
          setUserName('');
          setPassword1('');
          setPassword2('');
          setUserEmail('');
          localStorage.clear();
        }
      })
      .catch(err => {
        console.clear();
        alert('아이디 혹은 비밀번호가 일치하지 않습니다');
      })

    Axios.post('http://localhost:8000/common/login', user)
      .then(res => {
        if(res.data.key) {
          localStorage.clear();
          localStorage.setItem('token'. res.data.key)
          window.location.replace('https://localhost:3000')
        } else {
          setUserName('');
          setPassword1('');
          localStorage.clear();
        }
      })
      .catch(err => {
        console.clear();
        alert('아이디 또는 비밀번호가 일치하지 않습니다.');
        setUserName('');
        setPassword1('');
      })
  };

  return (
    <S.Wrap>
      <S.Container>
        <S.SignUpContainer signinIn={signIn}>
          <S.Form onSubmit={onSubmit}>
            <S.Title>Create Account</S.Title>
            <S.Input
              name="email" 
              type="email"
              placeholder="Email"
              value = {email}
              onChange={onChangeEmail}
              required
            />
            <S.Input
              name="password1"
              type="password"
              placeholder="Password"
              value={password1}
              onChange={onChangePw1}
              required
            />
            <S.Input
              name="password2"
              type="password"
              placeholder="Confirm Password"
              value={password2}
              onChange={onChangePw2}
              required
            />
            <S.Input
              name="username"
              type="text"
              placeholder="Name"
              value={name}
              onChange={onChangeName}
              required
            />
            <S.Button type="submit">Sign Up</S.Button>
          </S.Form>
        </S.SignUpContainer>

        <S.SignInContainer signinIn={signIn}>
          <S.Form>
            <S.Title>Sign in</S.Title>
            <S.Input 
              name="name"
              placeholder="Name"
              type="text"
              value={name}
              required
              onChange={e=>setUserName(e.target.value)}
            />
            <S.Input
              name="password1"
              placeholder="Password"
              type="password"
              value={password1}
              required
              onChange={e => setPassword1(e.target.value)}
            />
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