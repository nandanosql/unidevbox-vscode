import * as vscode from 'vscode';
import { getSelectedText, replaceSelection } from '../utils/editor';

export async function formatJson() {
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
        const parsed = JSON.parse(text);
        const formatted = JSON.stringify(parsed, null, 2);
        await replaceSelection(editor, formatted);
        vscode.window.showInformationMessage('JSON formatted successfully!');
    } catch (error: any) {
        vscode.window.showErrorMessage(`Invalid JSON: ${error.message}`);
    }
}

export async function minifyJson() {
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
        const parsed = JSON.parse(text);
        const minified = JSON.stringify(parsed);
        await replaceSelection(editor, minified);
        vscode.window.showInformationMessage('JSON minified successfully!');
    } catch (error: any) {
        vscode.window.showErrorMessage(`Invalid JSON: ${error.message}`);
    }
}
