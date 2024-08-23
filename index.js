export default async function pDoWhilst(action, condition, initialValue) {
	const actionResult = await action(initialValue);

	if (await condition(actionResult)) {
		return pDoWhilst(action, condition, actionResult);
	}

	return actionResult;
}
