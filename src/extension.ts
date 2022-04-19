import * as vscode from 'vscode';
import today from './implementations/commitEditionFunctions';


export function activate(context: vscode.ExtensionContext) {


	

	console.log('Congratulations, your extension "commitme" is now active!');
	context.subscriptions.push( 
    vscode.commands.registerCommand('commitme.helloWorld', () => {
		vscode.window.showInformationMessage('Hello from CommitMe!');
	})
);

context.subscriptions.push(
   vscode.commands.registerCommand("commitme.commitMsg", async () => {
     const time = today();
     const message = await vscode.window.showInputBox({
       placeHolder: `${time}`,
       title: 'Commit Message',
       prompt: 'For more info see Conventional Commits'});

      //use message as a commit

      // todo = reserch if placeholder can be passed as a value
      if(  message === '' ) {vscode.window.showInformationMessage(`${time} Send Sucessefuly`);}
      else {vscode.window.showInformationMessage(`${message} Send Sucessefuly`);};
  }));
}
export function deactivate() {}
