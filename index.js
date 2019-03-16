'use strict';

const pDoWhilst = async (action, condition) => {
	const actionResult = await action();

	if (condition(actionResult)) {
		return pDoWhilst(action, condition);
	}
};

module.exports = pDoWhilst;
module.exports.default = pDoWhilst;
