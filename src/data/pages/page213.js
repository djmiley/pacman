import NavigatorOption from '../objects/NavigatorOption';
import Page from '../objects/Page';

const text = ['Puahing yourself up from the floor, you check the room for a towel. A quick scan turns up no options for removing the dark gel from your hand.',
	'Assigning a random direction to North, there is a door to the East, and a door to the West. Three options spring to mind.'];

const navigatorOptions = [new NavigatorOption(0, 'Enter the East door'),
    new NavigatorOption(0, 'Enter the West door'),
    new NavigatorOption(0, 'Wipe your hand on your shorts')];

const page = new Page(213,
    null,
    null,
    text,
    navigatorOptions);

export default page;