import NavigatorOption from '../objects/NavigatorOption';
import Page from '../objects/Page';

const text = ['You enter the door to the West and arrive into a darkened room. Dirty dishes and empty Pepsi Max bottles are strewn across the work surfaces, a tap drips slowly and metronomically into a sink full of rusting cutlery.',
	'On the floor lies a violently stained tea towel, its original dye now indeterminable. Turning to your side, behind a small mound of bulging bin liners, a hard wooden door is ajar. Through the crack, a small garden is visible.'];

const navigatorOptions = [new NavigatorOption(0, 'Wipe your hand on the towel'),
	new NavigatorOption(137, 'Explore the garden')];

const page = new Page(19,
    null,
    null,
    text,
    navigatorOptions);

export default page;