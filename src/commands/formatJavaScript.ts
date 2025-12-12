import * as vscode from 'vscode';
import { js as beautifyJs } from 'js-beautify';
import { getSelectedText, replaceSelection } from '../utils/editor';

export async function formatJavaScript() {
    const editor = vscode.window.activeTextEditor;
    if (!editor) {
        vscode.window.showErrorMessage('No active editor');
        return;
    }

    const text = getSelectedText(editor);
    if (!text) {
        vscode.window.showWarningMessage('No text selected');
        return;
    }

    try {
        const formatted = beautifyJs(text, {
            indent_size: 2,
            indent_char: ' ',
            max_preserve_newlines: 2,
            preserve_newlines: true
        });
        await replaceSelection(editor, formatted);
        vscode.window.showInformationMessage('JavaScript formatted successfully!');
    } catch (error: any) {
        vscode.window.showErrorMessage(`Error formatting JavaScript: ${error.message}`);
    }
}

export async function minifyJavaScript() {
    const editor = vscode.window.activeTextEditor;
    if (!editor) {
        vscode.window.showErrorMessage('No active editor');
        return;
    }

    const text = getSelectedText(editor);
    if (!text) {
        vscode.window.showWarningMessage('No text selected');
        return;
    }

    try {
        // Simple minification: remove comments and extra whitespace
        const minified = text
            .replace(/\/\*[\s\S]*?\*\//g, '')
            .replace(/\/\/.*/g, '')
            .replace(/\s+/g, ' ')
            .trim();
        await replaceSelection(editor, minified);
        vscode.window.showInformationMessage('JavaScript minified successfully!');
    } catch (error: any) {
        vscode.window.showErrorMessage(`Error minifying JavaScript: ${error.message}`);
    }
}
