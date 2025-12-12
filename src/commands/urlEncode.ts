import * as vscode from 'vscode';
import { getSelectedText, replaceSelection } from '../utils/editor';

export async function urlEncode() {
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
        const encoded = encodeURIComponent(text);
        await replaceSelection(editor, encoded);
        vscode.window.showInformationMessage('URL encoded successfully!');
    } catch (error: any) {
        vscode.window.showErrorMessage(`Error encoding URL: ${error.message}`);
    }
}

export async function urlDecode() {
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
        const decoded = decodeURIComponent(text);
        await replaceSelection(editor, decoded);
        vscode.window.showInformationMessage('URL decoded successfully!');
    } catch (error: any) {
        vscode.window.showErrorMessage(`Error decoding URL: ${error.message}`);
    }
}
