import * as vscode from 'vscode';


export function activate(context: vscode.ExtensionContext) {
	

	console.log('Congratulations, your extension "commitme" is now active!');
	let disposable = vscode.commands.registerCommand('commitme.helloWorld', () => {
		vscode.window.showInformationMessage('Hello  from CommitMe!');
	});

	context.subscriptions.push(disposable);
}
export function deactivate() {}
