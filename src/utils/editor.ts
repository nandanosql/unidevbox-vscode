import * as vscode from 'vscode';

/**
 * Get the selected text from the editor
 */
export function getSelectedText(editor: vscode.TextEditor): string {
    const selection = editor.selection;
    return editor.document.getText(selection);
}

/**
 * Replace the selected text in the editor
 */
export async function replaceSelection(editor: vscode.TextEditor, text: string): Promise<void> {
    const selection = editor.selection;
    await editor.edit(editBuilder => {
        editBuilder.replace(selection, text);
    });
}
