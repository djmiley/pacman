import NavigatorOption from '../objects/NavigatorOption';
import Page from '../objects/Page';

const text = ['Pushing yourself up from the floor, you discover the source of the artificial appendages.',
	'In the corner of the room are two mannequins. One is dressed in full black tie, except that his trousers are around his ankles. The other is decorated in a eclectic selection of bric-a-brac. Tin foil, fairy lights, assorted coins, fluorescent tape, an egg tray, a smoke alarm. What could this mean?',
	'Looking further around the room, you notice a television is playing at a low volume. Picking up a remote from the low coffee table beside you, do you...'];

const navigatorOptions = [new NavigatorOption(0, 'Turn off the television'),
    new NavigatorOption(0, 'Find a seat, and start watching')];

const page = new Page(82,
    null,
    null,
    text,
    navigatorOptions);

export default page;