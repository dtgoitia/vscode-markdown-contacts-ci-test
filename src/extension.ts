import * as vscode from 'vscode';
import { DocumentSelector } from 'vscode';


type Person = string;  // "PabloPicasso"

class PersonCompletionProvider implements vscode.CompletionItemProvider {
	constructor(
		private readonly person: Person,
	) { }

	public provideCompletionItems(
		document: vscode.TextDocument,
		position: vscode.Position,
		_token: vscode.CancellationToken,
	): vscode.ProviderResult<vscode.CompletionItem[]> {
		const kind = vscode.CompletionItemKind.Text;
		const label = this.person;  // label shown in the completion pop up
		const itemA = new vscode.CompletionItem(label, kind);
		itemA.filterText = `@${this.person}`;  // user input is matched against this
		itemA.insertText = this.person; // string inserted after the triggerCharacters
		return [itemA];
	}
}

function getPersonCompletionProvider(person: Person): PersonCompletionProvider {
	const provider = new PersonCompletionProvider(person);
	return provider
}

function buildCompletionsForPeople(people: Person[], language: DocumentSelector, triggerCharacters: string[]): vscode.Disposable[] {
	const autocompletionPerPerson = people
		.map(getPersonCompletionProvider)
		.map((provider: PersonCompletionProvider) => {
			const personCompletion = vscode
				.languages
				.registerCompletionItemProvider(language, provider, ...triggerCharacters);
			return personCompletion
		});

	return autocompletionPerPerson;
}

class Configuration {
	constructor(readonly names: Person[]) { }
}

function getConfiguration(): Configuration {
	const config = vscode.workspace.getConfiguration('markdown-contacts');
	const names = config.get<Person[]>('names', []);
	const configuration = new Configuration(names)
	return configuration;
}

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
	const language: DocumentSelector = { language: 'markdown' };
	const triggerCharacters = ['@'];

	const config = getConfiguration();
	const people = config.names;

	const completions = buildCompletionsForPeople(people, language, triggerCharacters);

	context.subscriptions.push(...completions);
}

// this method is called when your extension is deactivated
export function deactivate() {}
