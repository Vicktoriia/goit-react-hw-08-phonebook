import Section from '../Section/Section';
import { useDispatch } from 'react-redux';
import { logIn } from '../../redux/auth/authOperations';
import * as s from './Form.styled';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;

    const logInData = {
      email: form.elements.email.value,
      password: form.elements.password.value,
    };

    if (!logInData.email || !logInData.password) {
      alert(`Field should not be empty`);
      return;
    }

    dispatch(logIn(logInData));

    form.reset();
  };

  return (
    <s.ContainerMain>
      <Section title="LogIn">
        <s.Form onSubmit={handleSubmit} autoComplete="off">
          <s.LabelForm>
            <s.TextLabel>Email</s.TextLabel>
            <s.InputForm type="email" name="email" />
          </s.LabelForm>
          <s.LabelForm>
            <s.TextLabel>
              Password <s.InfoSpan>(min 7 signs)</s.InfoSpan>
            </s.TextLabel>
            <s.InputForm type="password" name="password" />
          </s.LabelForm>
          <s.ButtonSubmit type="submit">Log In</s.ButtonSubmit>
        </s.Form>
      </Section>
    </s.ContainerMain>
  );
};
