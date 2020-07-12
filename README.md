# FP
Typed functional programming libarary 
---
title: "VSCODE"
tags: ""
---

# VSCODE

## installation

1.  install curl

        $ apt-get install curl


2.  download GPG Authentication Key

        $ sudo sh -c 'curl https://packages.microsoft.com/keys/microsoft.asc | gpg --dearmor > /etc/apt/trusted.gpg.d/microsoft.gpg'

3.  Add Micorsoft ubuntu repository

        $ sudo sh -c 'echo "deb [arch=amd64] https://packages.microsoft.com/repos/vscode stable main" > /etc/apt/sources.list.d/vscode.list'

4.  Update apt-get

        $ apt-get update

5.  install vscode
    	$ apt-get install code

## Extenstion

### ESlint

> Coding style Novice for Javascript 

-   Configuration

```js
//.eslintrc.js
module.export = {
	/* Target */
    files: [ './src/*' ],
    ignorePatterns : [ '/node_modules/' ],
    
    
	/* Javascript Specificatoin */
	// Global Variable Environment
    env: {
    	browser: true,
        node: false
    },
    globals: {
    	$: true
    },
    
    /* AST Parser */
    parser: '@typescript-eslint/parser' || 'babel eslint',
    parsetOptions: {
    	ecmaVersion: 6,
        sourceType: 'module',
        ecmaFeatures: {
        	jsx: true
        }
    },
    
	/* Code Style */
    // Third part library : Rule Provider
    plugins: [
        'react',
    	'import',
        '@typescript-eslint'
    ],
    //Linting Rule preset
    extends:[
        'eslint:recommended',
        'plugin:react/recommeded',
        'plugin:import/recommeneded',
        'plugin:@typescript-eslint/eslint-recommeded'
    ],  
    //Linting Rule
    rules: {
		'semi': 'error',		//force semicoolon
        'no-console': 'error'   //emit error on console.log ...
	},
    
    /* Override */
    overrides: {
    	filse: [ ... ],
        rules: { ... }
    }
    
}

```


``` js
Render: function () {
  Return (
    <Div className = “commentBox”>
      <H1> Comments </ h1>
      <CommentList data = {this.state.data} />
      <CommentForm onCommentSubmit = {this.handleCommentSubmit} />
    </Div>
  );
}
```
