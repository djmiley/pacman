import NavigatorOption from '../objects/NavigatorOption';
import Page from '../objects/Page';

const text = ['The clock strikes midnight. You wake with a start to unfamiliar surroundings.',
	'Gradually, your vision unblurs, and you find yourself sprawled in some abstract contortion upon a hard wooden floor. Staring you directly in the face are two pairs of harsh grey plastic feet of currently indeterminable origin.',
	'Rolling away from this view, you inadvertently place your hand in a shallow spreading pool of black viscous jus.',
	'Resolving to do something about this state of affairs, you decide to...'];

const navigatorOptions = [new NavigatorOption(213, 'Hunt for a towel to remove the substance from your hand'),
    new NavigatorOption(82, 'Investigate the mysterious pairs of feet')];

const page = new Page(1,
    null,
    null,
    text,
    navigatorOptions);

export default page;