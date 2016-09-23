import NavigatorOption from '../objects/NavigatorOption';
import Page from '../objects/Page';

const text = ['Removing the sign from the swollen gate, you discover the source of the adhesion. It\'s Blu-Tak!',
	'The goo rubs off in an indistinct dark smear on your pale linen shorts. It drys quickly, some would say suspiciously so, and carries an unsettling subtle luminescence.',
	'"What on earth is that racket!"',
	'A television plays in a previously unnoticed corner of the room. Picking up a remote from the low coffee table beside you, tell us your next option?'];

const navigatorOptions = [new NavigatorOption(0, 'Turn off the television'),
    new NavigatorOption(0, 'Find a seat, and start watching')];

const page = new Page(271,
    null,
    null,
    text,
    navigatorOptions);

export default page;