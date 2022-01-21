
import styles from '../../../../styles/Home.module.scss';
import button from '../intefaces/components/button';
export default function Button(props:button) {
  return (
    <button type={props.type} >{props.text}</button>
  );
}