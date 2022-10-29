# `@monokit/editorconfig`

Contains .editorconfig configuration file.

The .editorconfig file defines basic code style settings for code editors.

## Usage

Install EditorConfig plugin for your favorite code editor.

Copy the .editorconfig file to the root directory of your npm packages.

> When opening a file, EditorConfig plugins look for a file named .editorconfig in the directory of the opened file and in every parent directory. A search for .editorconfig files will stop if the root filepath is reached or an EditorConfig file with root=true is found.

## VSCode plugin

Plugin: https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig

## WebStorm plugin

Plugin: https://plugins.jetbrains.com/plugin/7294-editorconfig

## Resources

EditorConfig: https://editorconfig.org

EditorConfig Properties: https://github.com/editorconfig/editorconfig/wiki/EditorConfig-Properties


## Notes

EditorConfig does not currently support the `extends` directive: https://github.com/editorconfig/editorconfig/issues/236

It is not possible to extend basic .editorconfig config and override some properties in subpackages.
