export default async function pDoWhilst(action, condition) {
	const actionResult = await action();

	if (condition(actionResult)) {
		return pDoWhilst(action, condition);
	}
}
