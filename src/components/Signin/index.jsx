import React, {useContext} from 'react';
import { ThemeProvider } from 'styled-components';
import {ThemeContext} from '../../Context/ThemeContext';
import { 
    Container, 
    FormWrap,
    Icon,
    ImgLogo,
    FormContent,
    Form,
    FormH1,
    FormInput,
    FormLabel,
    FormButton,
    Text
} from './SigninElements';
import mainLogo from '../../images/main_logo.png';

const Signin = () => {
    const theme = useContext(ThemeContext);
    return (
        <ThemeProvider theme={theme}>
            <Container>
                <FormWrap>
                    <Icon to='/'>
                        <ImgLogo src={mainLogo}/>Life Perfect
                    </Icon>
                    <FormContent>
                        <Form action='#'>
                            <FormH1>Sign in to your account</FormH1>
                            <FormLabel htmlFor='for'>Email</FormLabel>
                            <FormInput type='email' required/>
                            <FormLabel htmlFor='for'>Password</FormLabel>
                            <FormInput type='password' required/>
                            <FormButton type='submit'>Continue</FormButton>
                            <Text>Forgot password</Text>
                        </Form>
                    </FormContent>
                </FormWrap>
            </Container>
        </ThemeProvider>
    )
}

export default Signin
