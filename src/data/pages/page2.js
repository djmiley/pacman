import NavigatorOption from '../objects/NavigatorOption';
import Page from '../objects/Page';

const navigatorOptions = [new NavigatorOption(0, 'Play Again?')];

const page = new Page(2,
    null,
    null,
    ['You win'],
    navigatorOptions);

export default page;