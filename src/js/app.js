// TODO: write your code here
import clearPhone from './clearphone';

const phones = ['8 (927) 000-00-00', '+7 960 000 00 00', '+86 000 000 0000', '1 000000 0000', '506 000 000 0000'];
phones.forEach((phone) => {
  console.log(clearPhone(phone));
});
