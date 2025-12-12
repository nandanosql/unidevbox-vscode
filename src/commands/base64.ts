import * as vscode from 'vscode';
import { getSelectedText, replaceSelection } from '../utils/editor';

export async function base64Encode() {
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
        const encoded = Buffer.from(text, 'utf-8').toString('base64');
        await replaceSelection(editor, encoded);
        vscode.window.showInformationMessage('Text encoded to Base64 successfully!');
    } catch (error: any) {
        vscode.window.showErrorMessage(`Error encoding to Base64: ${error.message}`);
    }
}

export async function base64Decode() {
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
        const decoded = Buffer.from(text, 'base64').toString('utf-8');
        await replaceSelection(editor, decoded);
        vscode.window.showInformationMessage('Base64 decoded successfully!');
    } catch (error: any) {
        vscode.window.showErrorMessage(`Error decoding Base64: ${error.message}`);
    }
}
