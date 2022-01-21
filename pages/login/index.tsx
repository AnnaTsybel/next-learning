import Button from '../../src/components/Button/Button';
import Input from '../../src/components/Input/Input';

export default function Login(){
    return(
        <>
       <Input type='text' placeholder='login'/>
       <Input type='password' placeholder='password'/>
       <Button text='ho'/>
       </>
    )
}