import * as vscode from 'vscode';
import { css as beautifyCss } from 'js-beautify';
import { getSelectedText, replaceSelection } from '../utils/editor';

export async function formatCss() {
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
        const formatted = beautifyCss(text, {
            indent_size: 2,
            indent_char: ' '
        });
        await replaceSelection(editor, formatted);
        vscode.window.showInformationMessage('CSS formatted successfully!');
    } catch (error: any) {
        vscode.window.showErrorMessage(`Error formatting CSS: ${error.message}`);
    }
}

export async function minifyCss() {
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
        // Simple minification: remove whitespace and comments
        const minified = text
            .replace(/\/\*[\s\S]*?\*\//g, '')
            .replace(/\s+/g, ' ')
            .replace(/\s*([{}:;,])\s*/g, '$1')
            .trim();
        await replaceSelection(editor, minified);
        vscode.window.showInformationMessage('CSS minified successfully!');
    } catch (error: any) {
        vscode.window.showErrorMessage(`Error minifying CSS: ${error.message}`);
    }
}
