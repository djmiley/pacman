import NavigatorOption from '../objects/NavigatorOption';
import Page from '../objects/Page';

const text = ['Opening the door, you enter the small yard. A silver microwave lies discarded on the gravel floor, its power lead strewn across tufts of stale weeds.',
	'Making your way down the steps towards the rotting gate at the end of the enclosure, you notice a sodden paper sign attached. Scrawled in childish crayon, it reads "DO NOT ENTER". The form of adhesion is unknown to you at present. Do you?'];

const navigatorOptions = [new NavigatorOption(65, 'Ignore the warning, and exit the yard'),
    new NavigatorOption(184, 'Remove the sign from the gate, and return to the house')];

const page = new Page(137,
    null,
    null,
    text,
    navigatorOptions);

export default page;