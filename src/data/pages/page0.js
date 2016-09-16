import NavigatorOption from '../objects/NavigatorOption';
import Page from '../objects/Page';

const text = ['The following scenarios may contain moderate references to Alcohol, Drugs, Humour, and Microwaves. This is your parental guidance moment.',
    ' In the unlikely event that you wish to leave before a standard juncture, simply refresh the page or, alternatively, close your web browser.',
    ' Enjoy this trip...'];

const navigatorOptions = [new NavigatorOption(1, 'Let me explore the travails of this mindscape!'),
    new NavigatorOption(0, 'I do not wish to partake in this ridiculous expression of feeble artistry')];

const page = new Page(0,
    'A Day In The Life',
    null,
    text,
    navigatorOptions);

export default page;