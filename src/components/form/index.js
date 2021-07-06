import { useState } from 'react';
import { Container, Input, Spacer, Card, ClaimButton, FreeTrial, TermsAndServices, Link } from './SignUpFormElements';

export default function SignUpForm() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  firstName, setFirstName, lastName, setLastName, email, setEmail, password, setPassword;

  return (
    <Container>
      <FreeTrial>
        <b>Try it free 7 days</b> then $20/mo. thereafter
      </FreeTrial>
      <Card>
        <Spacer />
        <Input placeholder='First Name' required />
        <Spacer />
        <Input placeholder='Last Name' required />
        <Spacer />
        <Input placeholder='Email Adress' required />
        <Spacer />
        <Input placeholder='Password' required />
        <Spacer />
        <ClaimButton onClick={() => alert('~ not implemented ~')}>claim your free trial</ClaimButton>
        <Spacer />
        <TermsAndServices>
          By clicking the button, you are agreeing to our <Link>Terms and Services</Link>
        </TermsAndServices>
        <Spacer />
      </Card>
    </Container>
  );
}
