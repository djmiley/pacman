import NavigatorOption from '../objects/NavigatorOption';
import Page from '../objects/Page';

const navigatorOptions = [new NavigatorOption(1, 'Ready?')];

const page = new Page(0,
    'To start, click the button below',
    '0.jpg',
    null,
    navigatorOptions);

export default page;