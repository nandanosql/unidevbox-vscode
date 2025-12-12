import * as vscode from 'vscode';
import { formatJson, minifyJson } from './commands/formatJson';
import { formatHtml, minifyHtml } from './commands/formatHtml';
import { formatCss, minifyCss } from './commands/formatCss';
import { formatJavaScript, minifyJavaScript } from './commands/formatJavaScript';
import { base64Encode, base64Decode } from './commands/base64';
import { urlEncode, urlDecode } from './commands/urlEncode';

export function activate(context: vscode.ExtensionContext) {
    console.log('UniDevBox extension is now active!');

    // JSON commands
    context.subscriptions.push(
        vscode.commands.registerCommand('unidevbox.formatJson', formatJson)
    );
    context.subscriptions.push(
        vscode.commands.registerCommand('unidevbox.minifyJson', minifyJson)
    );

    // HTML commands
    context.subscriptions.push(
        vscode.commands.registerCommand('unidevbox.formatHtml', formatHtml)
    );
    context.subscriptions.push(
        vscode.commands.registerCommand('unidevbox.minifyHtml', minifyHtml)
    );

    // CSS commands
    context.subscriptions.push(
        vscode.commands.registerCommand('unidevbox.formatCss', formatCss)
    );
    context.subscriptions.push(
        vscode.commands.registerCommand('unidevbox.minifyCss', minifyCss)
    );

    // JavaScript commands
    context.subscriptions.push(
        vscode.commands.registerCommand('unidevbox.formatJavaScript', formatJavaScript)
    );
    context.subscriptions.push(
        vscode.commands.registerCommand('unidevbox.minifyJavaScript', minifyJavaScript)
    );

    // Base64 commands
    context.subscriptions.push(
        vscode.commands.registerCommand('unidevbox.base64Encode', base64Encode)
    );
    context.subscriptions.push(
        vscode.commands.registerCommand('unidevbox.base64Decode', base64Decode)
    );

    // URL commands
    context.subscriptions.push(
        vscode.commands.registerCommand('unidevbox.urlEncode', urlEncode)
    );
    context.subscriptions.push(
        vscode.commands.registerCommand('unidevbox.urlDecode', urlDecode)
    );
}

export function deactivate() { }
