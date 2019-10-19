import './index.css';
import numeral from 'numeral';

const cc = numeral(1000).format('$0,0.00');
console.log(cc);
