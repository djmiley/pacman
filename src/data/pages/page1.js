import NavigatorOption from '../objects/NavigatorOption';
import Page from '../objects/Page';

const navigatorOptions = [new NavigatorOption(2, 'Win'),
    new NavigatorOption(3, 'Lose')];

const page = new Page(1,
    null,
    null,
    ['Win or lose?'],
    navigatorOptions);

export default page;