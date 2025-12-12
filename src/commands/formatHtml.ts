import * as vscode from 'vscode';
import { html as beautifyHtml } from 'js-beautify';
import { getSelectedText, replaceSelection } from '../utils/editor';

export async function formatHtml() {
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
        const formatted = beautifyHtml(text, {
            indent_size: 2,
            indent_char: ' ',
            max_preserve_newlines: 2,
            preserve_newlines: true,
            wrap_line_length: 80
        });
        await replaceSelection(editor, formatted);
        vscode.window.showInformationMessage('HTML formatted successfully!');
    } catch (error: any) {
        vscode.window.showErrorMessage(`Error formatting HTML: ${error.message}`);
    }
}

export async function minifyHtml() {
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
        // Simple minification: remove extra whitespace
        const minified = text
            .replace(/\s+/g, ' ')
            .replace(/>\s+</g, '><')
            .trim();
        await replaceSelection(editor, minified);
        vscode.window.showInformationMessage('HTML minified successfully!');
    } catch (error: any) {
        vscode.window.showErrorMessage(`Error minifying HTML: ${error.message}`);
    }
}
