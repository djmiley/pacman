import NavigatorOption from '../objects/NavigatorOption';
import Page from '../objects/Page';

const text = [''];

const navigatorOptions = [new NavigatorOption(0, 'to do')];

const page = new Page(213,
    null,
    null,
    text,
    navigatorOptions);

export default page;