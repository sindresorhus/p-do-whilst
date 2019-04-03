'use strict';

const pDoWhilst = async (action, condition) => {
	const actionResult = await action();

	if (condition(actionResult)) {
		return pDoWhilst(action, condition);
	}
};

module.exports = pDoWhilst;
// TODO: Remove this for the next major release
module.exports.default = pDoWhilst;
