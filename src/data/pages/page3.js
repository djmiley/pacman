import NavigatorOption from '../objects/NavigatorOption';
import Page from '../objects/Page';

const navigatorOptions = [new NavigatorOption(0, 'Play Again?')];

const page = new Page(3, 'You lose', navigatorOptions);

export default page;