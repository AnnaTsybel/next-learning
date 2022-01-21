
import styles from '../../../../styles/Home.module.scss';
import input from '../intefaces/components/input';
export default function Input(props:input) {
  return (
    <input type={props.type} value={props.value} placeholder={props.placeholder} disabled={props.disabled} autoFocus={props.focused}/>
  );
}