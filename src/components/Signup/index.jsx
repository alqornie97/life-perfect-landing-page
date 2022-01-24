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
    Text,
    Signin
} from './SignupElements';
import mainLogo from '../../images/main_logo.png';

const Signup = () => {
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
                            <FormH1>Sign up to a new account</FormH1>
                            <FormLabel htmlFor='for'>First Name</FormLabel>
                            <FormInput type='text' required/>
                            <FormLabel htmlFor='for'>Last Name</FormLabel>
                            <FormInput type='text' required/>
                            <FormLabel htmlFor='for'>Email</FormLabel>
                            <FormInput type='email' required/>
                            <FormLabel htmlFor='for'>Password</FormLabel>
                            <FormInput type='password' required/>
                            <FormButton type='submit'>Sign Up</FormButton>
                            <Text>Already a member? <Signin to='/signin'>Sign In</Signin></Text>
                        </Form>
                    </FormContent>
                </FormWrap>
            </Container>
        </ThemeProvider>
    )
}

export default Signup
