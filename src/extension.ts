import * as vscode from 'vscode';


export function activate(context: vscode.ExtensionContext) {
	

	console.log('Congratulations, your extension "commitme" is now active!');
	context.subscriptions.push( 
    vscode.commands.registerCommand('commitme.helloWorld', () => {
		vscode.window.showInformationMessage('Hello from CommitMe!');
	})
);

context.subscriptions.push(
   vscode.commands.registerCommand("commitme.commitMsg",() => {
    vscode.window.showInputBox({
      placeHolder: '<type>[optional scope]: <description>',
      title: 'Commit Message'});
  }));
}
export function deactivate() {}
