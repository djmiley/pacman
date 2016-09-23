import NavigatorOption from '../objects/NavigatorOption';
import Page from '../objects/Page';

const text = ['Removing the sign from the swollen gate, you discover the source of the adhesion. It\'s Blu-Tak!',
	'You use the gum to mop up the last vestiges of the shadowy goo still upon your hand and head back into the house and back into the living room.',
	'Looking further around the room, you notice a television is playing at a low volume. Picking up a remote from the low coffee table beside you, you embark upon the decision to...'];

const navigatorOptions = [new NavigatorOption(0, 'Turn off the television'),
    new NavigatorOption(0, 'Find a seat, and start watching')];

const page = new Page(184,
    null,
    null,
    text,
    navigatorOptions);

export default page;