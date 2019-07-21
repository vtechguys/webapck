# Module Loaders
The module loaders are used to do some preprocessing on our files before they are added to our bundle.js file. Like babel is used to transpile the latest ES codes to older ones.
## Adding babel
Babel turns new ES code into older codes to able to run on old browser. Where as simply webpack is to link js modules together.

**babel-loader:** *teaches babel how to interact and work with webpack.*
**babel-core:** *knows how to take in code parse it and generate some output files.*
**babel-preset-env:** *ruleset for telling babel exactly what pieces of ES@latest syntax to look for and how to turn in ES5 code.*

<!--stackedit_data:
eyJoaXN0b3J5IjpbOTQyMzE5NjUzLC0yMDg4NzQ2NjEyXX0=
-->