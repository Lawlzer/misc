// The "base" JavaScript rules I will probably use. I have not delved into these (as I use TypeScript and avoid JS), so it's very likely that these will need heavy customization.
// These should be customized more, per project.

/**
 * @param {*} commit true or false (true is harsh, should only be used on commit/push)
 */

module.exports = ({ commit }) => {
	if (commit === undefined) throw new Error('commit is undefined');
	return {
		strict: 2,

		// - - - - - - - - - - "Possible Problems" - - - - - - - - - -
		// - - - - - - - - - - "Possible Problems" - - - - - - - - - -
		// - - - - - - - - - - "Possible Problems" - - - - - - - - - -

		// https://eslint.org/docs/latest/rules/array-callback-return
		'@typescript-eslint/array-callback-return': ['error'],

		// https://eslint.org/docs/latest/rules/constructor-super
		'@typescript-eslint/constructor-super': ['error'],

		// https://eslint.org/docs/latest/rules/for-direction
		'@typescript-eslint/for-direction': ['error'],

		// https://eslint.org/docs/latest/rules/getter-return
		'@typescript-eslint/getter-return': ['error'],

		// https://eslint.org/docs/latest/rules/no-async-promise-executor
		'@typescript-eslint/no-async-promise-executor': ['error'],

		// https://eslint.org/docs/latest/rules/no-await-in-loop
		'@typescript-eslint/no-await-in-loop': ['error'],

		// https://eslint.org/docs/latest/rules/no-class-assign
		'@typescript-eslint/no-class-assign': ['error'],

		// https://eslint.org/docs/latest/rules/no-compare-neg-zero
		'@typescript-eslint/no-compare-neg-zero': ['error'],

		// https://eslint.org/docs/latest/rules/no-cond-assign
		'@typescript-eslint/no-cond-assign': ['error'],

		// https://eslint.org/docs/latest/rules/no-const-assign
		'@typescript-eslint/no-const-assign': ['error'],

		// https://eslint.org/docs/latest/rules/no-constant-binary-expression
		'@typescript-eslint/no-constant-binary-expression': ['error'],

		// https://eslint.org/docs/latest/rules/no-constant-condition
		'@typescript-eslint/no-constant-condition': ['error'],

		// https://eslint.org/docs/latest/rules/no-constructor-return
		'@typescript-eslint/no-constructor-return': ['error'],

		// https://eslint.org/docs/latest/rules/no-control-regex
		'@typescript-eslint/no-control-regex': ['error'],

		// https://eslint.org/docs/latest/rules/no-debugger
		'@typescript-eslint/no-debugger': ['error'],

		// https://eslint.org/docs/latest/rules/no-dupe-args
		'@typescript-eslint/no-dupe-args': ['error'],

		// https://eslint.org/docs/latest/rules/no-dupe-class-members
		'@typescript-eslint/no-dupe-class-members': ['error'],

		// https://eslint.org/docs/latest/rules/no-dupe-else-if
		'@typescript-eslint/no-dupe-else-if': ['error'],

		// https://eslint.org/docs/latest/rules/no-dupe-keys
		'@typescript-eslint/no-dupe-keys': ['error'],

		// https://eslint.org/docs/latest/rules/no-duplicate-case
		'@typescript-eslint/no-duplicate-case': ['error'],

		// https://eslint.org/docs/latest/rules/no-duplicate-imports
		'@typescript-eslint/no-duplicate-imports': ['error'],

		// https://eslint.org/docs/latest/rules/no-empty-character-class
		'@typescript-eslint/no-empty-character-class': ['error'],

		// https://eslint.org/docs/latest/rules/no-empty-pattern
		'@typescript-eslint/no-empty-pattern': ['error'],

		// https://eslint.org/docs/latest/rules/no-ex-assign
		'@typescript-eslint/no-ex-assign': ['error'],

		// https://eslint.org/docs/latest/rules/no-fallthrough
		'@typescript-eslint/no-fallthrough': ['error'],

		// https://eslint.org/docs/latest/rules/no-func-assign
		'@typescript-eslint/no-func-assign': ['error'],

		// https://eslint.org/docs/latest/rules/no-import-assign
		'@typescript-eslint/no-import-assign': ['error'],

		// https://eslint.org/docs/latest/rules/no-inner-declarations
		'@typescript-eslint/no-inner-declarations': ['error'],

		// https://eslint.org/docs/latest/rules/no-invalid-regexp
		'@typescript-eslint/no-invalid-regexp': ['error'],

		// https://eslint.org/docs/latest/rules/no-irregular-whitespace
		'@typescript-eslint/no-irregular-whitespace': ['error'],

		// https://eslint.org/docs/latest/rules/no-loss-of-precision
		'@typescript-eslint/no-loss-of-precision': ['error'],

		// https://eslint.org/docs/latest/rules/no-misleading-character-class
		'@typescript-eslint/no-misleading-character-class': ['error'],

		// https://eslint.org/docs/latest/rules/no-new-native-nonconstructor
		'@typescript-eslint/no-new-native-nonconstructor': ['error'],

		// https://eslint.org/docs/latest/rules/no-new-symbol
		'@typescript-eslint/no-new-symbol': ['error'],

		// https://eslint.org/docs/latest/rules/no-obj-calls
		'@typescript-eslint/no-obj-calls': ['error'],

		// https://eslint.org/docs/latest/rules/no-promise-executor-return
		'@typescript-eslint/no-promise-executor-return': ['error'],

		// https://eslint.org/docs/latest/rules/no-prototype-builtins
		'@typescript-eslint/no-prototype-builtins': ['error'],

		// https://eslint.org/docs/latest/rules/no-self-assign
		'@typescript-eslint/no-self-assign': ['error'],

		// https://eslint.org/docs/latest/rules/no-self-compare
		'@typescript-eslint/no-self-compare': ['error'],

		// https://eslint.org/docs/latest/rules/no-setter-return
		'@typescript-eslint/no-setter-return': ['error'],

		// https://eslint.org/docs/latest/rules/no-sparse-arrays
		'@typescript-eslint/no-sparse-arrays': ['error'],

		// https://eslint.org/docs/latest/rules/no-template-curly-in-string
		'@typescript-eslint/no-template-curly-in-string': ['error'],

		// https://eslint.org/docs/latest/rules/no-this-before-super
		'@typescript-eslint/no-this-before-super': ['error'],

		// https://eslint.org/docs/latest/rules/no-undef
		'@typescript-eslint/no-undef': ['error'],

		// https://eslint.org/docs/latest/rules/no-unexpected-multiline
		'@typescript-eslint/no-unexpected-multiline': ['error'],

		// https://eslint.org/docs/latest/rules/no-unmodified-loop-condition
		'@typescript-eslint/no-unmodified-loop-condition': ['error'],

		// https://eslint.org/docs/latest/rules/no-unreachable
		'@typescript-eslint/no-unreachable': ['error'],

		// https://eslint.org/docs/latest/rules/no-unreachable-loop
		'@typescript-eslint/no-unreachable-loop': ['error'],

		// https://eslint.org/docs/latest/rules/no-unsafe-finally
		'@typescript-eslint/no-unsafe-finally': ['error'],

		// https://eslint.org/docs/latest/rules/no-unsafe-negation
		'@typescript-eslint/no-unsafe-negation': ['error'],

		// https://eslint.org/docs/latest/rules/no-unsafe-optional-chaining
		'@typescript-eslint/no-unsafe-optional-chaining': ['error'],

		// https://eslint.org/docs/latest/rules/no-unused-private-class-members
		'@typescript-eslint/no-unused-private-class-members': ['error'],

		// https://eslint.org/docs/latest/rules/no-unused-vars
		'@typescript-eslint/no-unused-vars': ['error'],

		// https://eslint.org/docs/latest/rules/no-use-before-define
		'@typescript-eslint/no-use-before-define': ['error'],

		// https://eslint.org/docs/latest/rules/no-useless-backreference
		'@typescript-eslint/no-useless-backreference': ['error'],

		// https://eslint.org/docs/latest/rules/require-atomic-updates
		'@typescript-eslint/require-atomic-updates': ['error'],

		// https://eslint.org/docs/latest/rules/use-isnan
		'@typescript-eslint/use-isnan': ['error'],

		// https://eslint.org/docs/latest/rules/valid-typeof
		'@typescript-eslint/valid-typeof': ['error'],

		// - - - - - - - - - - "Suggestions" - - - - - - - - - -
		// - - - - - - - - - - "Suggestions" - - - - - - - - - -
		// - - - - - - - - - - "Suggestions" - - - - - - - - - -

		// https://eslint.org/docs/latest/rules/accessor-pairs
		'@typescript-eslint/accessor-pairs': ['error'],

		// https://eslint.org/docs/latest/rules/arrow-body-style
		'@typescript-eslint/arrow-body-style': ['error'],

		// https://eslint.org/docs/latest/rules/block-scoped-var
		'@typescript-eslint/block-scoped-var': ['error'],

		// https://eslint.org/docs/latest/rules/camelcase
		'@typescript-eslint/camelcase': ['error'],

		// https://eslint.org/docs/latest/rules/capitalized-comments
		'@typescript-eslint/capitalized-comments': ['error'],

		// https://eslint.org/docs/latest/rules/class-methods-use-this
		'@typescript-eslint/class-methods-use-this': ['error'],

		// https://eslint.org/docs/latest/rules/complexity
		'@typescript-eslint/complexity': ['error'],

		// https://eslint.org/docs/latest/rules/consistent-return
		'@typescript-eslint/consistent-return': ['error'],

		// https://eslint.org/docs/latest/rules/consistent-this
		'@typescript-eslint/consistent-this': ['error'],

		// https://eslint.org/docs/latest/rules/curly
		'@typescript-eslint/curly': ['error'],

		// https://eslint.org/docs/latest/rules/default-case
		'@typescript-eslint/default-case': ['error'],

		// https://eslint.org/docs/latest/rules/default-case-last
		'@typescript-eslint/default-case-last': ['error'],

		// https://eslint.org/docs/latest/rules/default-param-last
		'@typescript-eslint/default-param-last': ['error'],

		// https://eslint.org/docs/latest/rules/dot-notation
		'@typescript-eslint/dot-notation': ['error'],

		// https://eslint.org/docs/latest/rules/eqeqeq
		'@typescript-eslint/eqeqeq': ['error'],

		// https://eslint.org/docs/latest/rules/func-name-matching
		'@typescript-eslint/func-name-matching': ['error'],

		// https://eslint.org/docs/latest/rules/func-names
		'@typescript-eslint/func-names': ['error'],

		// https://eslint.org/docs/latest/rules/func-style
		'@typescript-eslint/func-style': ['error'],

		// https://eslint.org/docs/latest/rules/grouped-accessor-pairs
		'@typescript-eslint/grouped-accessor-pairs': ['error'],

		// https://eslint.org/docs/latest/rules/guard-for-in
		'@typescript-eslint/guard-for-in': ['error'],

		// https://eslint.org/docs/latest/rules/id-denylist
		'@typescript-eslint/id-denylist': ['error'],

		// https://eslint.org/docs/latest/rules/id-length
		'@typescript-eslint/id-length': ['error'],

		// https://eslint.org/docs/latest/rules/id-match
		'@typescript-eslint/id-match': ['error'],

		// https://eslint.org/docs/latest/rules/init-declarations
		'@typescript-eslint/init-declarations': ['error'],

		// https://eslint.org/docs/latest/rules/logical-assignment-operators
		'@typescript-eslint/logical-assignment-operators': ['error'],

		// https://eslint.org/docs/latest/rules/max-classes-per-file
		'@typescript-eslint/max-classes-per-file': ['error'],

		// https://eslint.org/docs/latest/rules/max-depth
		'@typescript-eslint/max-depth': ['error'],

		// https://eslint.org/docs/latest/rules/max-lines
		'@typescript-eslint/max-lines': ['error'],

		// https://eslint.org/docs/latest/rules/max-lines-per-function
		'@typescript-eslint/max-lines-per-function': ['error'],

		// https://eslint.org/docs/latest/rules/max-nested-callbacks
		'@typescript-eslint/max-nested-callbacks': ['error'],

		// https://eslint.org/docs/latest/rules/max-params
		'@typescript-eslint/max-params': ['error'],

		// https://eslint.org/docs/latest/rules/max-statements
		'@typescript-eslint/max-statements': ['error'],

		// https://eslint.org/docs/latest/rules/multiline-comment-style
		'@typescript-eslint/multiline-comment-style': ['error'],

		// https://eslint.org/docs/latest/rules/new-cap
		'@typescript-eslint/new-cap': ['error'],

		// https://eslint.org/docs/latest/rules/no-alert
		'@typescript-eslint/no-alert': ['error'],

		// https://eslint.org/docs/latest/rules/no-array-constructor
		'@typescript-eslint/no-array-constructor': ['error'],

		// https://eslint.org/docs/latest/rules/no-bitwise
		'@typescript-eslint/no-bitwise': ['error'],

		// https://eslint.org/docs/latest/rules/no-caller
		'@typescript-eslint/no-caller': ['error'],

		// https://eslint.org/docs/latest/rules/no-case-declarations
		'@typescript-eslint/no-case-declarations': ['error'],

		// https://eslint.org/docs/latest/rules/no-confusing-arrow
		'@typescript-eslint/no-confusing-arrow': ['error'],

		// https://eslint.org/docs/latest/rules/no-console
		'@typescript-eslint/no-console': ['error'],

		// https://eslint.org/docs/latest/rules/no-continue
		'@typescript-eslint/no-continue': ['error'],

		// https://eslint.org/docs/latest/rules/no-delete-var
		'@typescript-eslint/no-delete-var': ['error'],

		// https://eslint.org/docs/latest/rules/no-div-regex
		'@typescript-eslint/no-div-regex': ['error'],

		// https://eslint.org/docs/latest/rules/no-else-return
		'@typescript-eslint/no-else-return': ['error'],

		// https://eslint.org/docs/latest/rules/no-empty
		'@typescript-eslint/no-empty': ['error'],

		// https://eslint.org/docs/latest/rules/no-empty-function
		'@typescript-eslint/no-empty-function': ['error'],

		// https://eslint.org/docs/latest/rules/no-empty-static-block
		'@typescript-eslint/no-empty-static-block': ['error'],

		// https://eslint.org/docs/latest/rules/no-eq-null
		'@typescript-eslint/no-eq-null': ['error'],

		// https://eslint.org/docs/latest/rules/no-eval
		'@typescript-eslint/no-eval': ['error'],

		// https://eslint.org/docs/latest/rules/no-extend-native
		'@typescript-eslint/no-extend-native': ['error'],

		// https://eslint.org/docs/latest/rules/no-extra-bind
		'@typescript-eslint/no-extra-bind': ['error'],

		// https://eslint.org/docs/latest/rules/no-extra-boolean-cast
		'@typescript-eslint/no-extra-boolean-cast': ['error'],

		// https://eslint.org/docs/latest/rules/no-extra-label
		'@typescript-eslint/no-extra-label': ['error'],

		// https://eslint.org/docs/latest/rules/no-extra-semi
		'@typescript-eslint/no-extra-semi': ['error'],

		// https://eslint.org/docs/latest/rules/no-floating-decimal
		'@typescript-eslint/no-floating-decimal': ['error'],

		// https://eslint.org/docs/latest/rules/no-global-assign
		'@typescript-eslint/no-global-assign': ['error'],

		// https://eslint.org/docs/latest/rules/no-implicit-coercion
		'@typescript-eslint/no-implicit-coercion': ['error'],

		// https://eslint.org/docs/latest/rules/no-implicit-globals
		'@typescript-eslint/no-implicit-globals': ['error'],

		// https://eslint.org/docs/latest/rules/no-implied-eval
		'@typescript-eslint/no-implied-eval': ['error'],

		// https://eslint.org/docs/latest/rules/no-inline-comments
		'@typescript-eslint/no-inline-comments': ['error'],

		// https://eslint.org/docs/latest/rules/no-invalid-this
		'@typescript-eslint/no-invalid-this': ['error'],

		// https://eslint.org/docs/latest/rules/no-iterator
		'@typescript-eslint/no-iterator': ['error'],

		// https://eslint.org/docs/latest/rules/no-label-var
		'@typescript-eslint/no-label-var': ['error'],

		// https://eslint.org/docs/latest/rules/no-labels
		'@typescript-eslint/no-labels': ['error'],

		// https://eslint.org/docs/latest/rules/no-lone-blocks
		'@typescript-eslint/no-lone-blocks': ['error'],

		// https://eslint.org/docs/latest/rules/no-lonely-if
		'@typescript-eslint/no-lonely-if': ['error'],

		// https://eslint.org/docs/latest/rules/no-loop-func
		'@typescript-eslint/no-loop-func': ['error'],

		// https://eslint.org/docs/latest/rules/no-magic-numbers
		'@typescript-eslint/no-magic-numbers': ['error'],

		// https://eslint.org/docs/latest/rules/no-mixed-operators
		'@typescript-eslint/no-mixed-operators': ['error'],

		// https://eslint.org/docs/latest/rules/no-multi-assign
		'@typescript-eslint/no-multi-assign': ['error'],

		// https://eslint.org/docs/latest/rules/no-multi-str
		'@typescript-eslint/no-multi-str': ['error'],

		// https://eslint.org/docs/latest/rules/no-negated-condition
		'@typescript-eslint/no-negated-condition': ['error'],

		// https://eslint.org/docs/latest/rules/no-nested-ternary
		'@typescript-eslint/no-nested-ternary': ['error'],

		// https://eslint.org/docs/latest/rules/no-new
		'@typescript-eslint/no-new': ['error'],

		// https://eslint.org/docs/latest/rules/no-new-func
		'@typescript-eslint/no-new-func': ['error'],

		// https://eslint.org/docs/latest/rules/no-new-object
		'@typescript-eslint/no-new-object': ['error'],

		// https://eslint.org/docs/latest/rules/no-new-wrappers
		'@typescript-eslint/no-new-wrappers': ['error'],

		// https://eslint.org/docs/latest/rules/no-nonoctal-decimal-escape
		'@typescript-eslint/no-nonoctal-decimal-escape': ['error'],

		// https://eslint.org/docs/latest/rules/no-octal
		'@typescript-eslint/no-octal': ['error'],

		// https://eslint.org/docs/latest/rules/no-octal-escape
		'@typescript-eslint/no-octal-escape': ['error'],

		// https://eslint.org/docs/latest/rules/no-param-reassign
		'@typescript-eslint/no-param-reassign': ['error'],

		// https://eslint.org/docs/latest/rules/no-plusplus
		'@typescript-eslint/no-plusplus': ['error'],

		// https://eslint.org/docs/latest/rules/no-proto
		'@typescript-eslint/no-proto': ['error'],

		// https://eslint.org/docs/latest/rules/no-redeclare
		'@typescript-eslint/no-redeclare': ['error'],

		// https://eslint.org/docs/latest/rules/no-regex-spaces
		'@typescript-eslint/no-regex-spaces': ['error'],

		// https://eslint.org/docs/latest/rules/no-restricted-exports
		'@typescript-eslint/no-restricted-exports': ['error'],

		// https://eslint.org/docs/latest/rules/no-restricted-globals
		'@typescript-eslint/no-restricted-globals': ['error'],

		// https://eslint.org/docs/latest/rules/no-restricted-imports
		'@typescript-eslint/no-restricted-imports': ['error'],

		// https://eslint.org/docs/latest/rules/no-restricted-properties
		'@typescript-eslint/no-restricted-properties': ['error'],

		// https://eslint.org/docs/latest/rules/no-restricted-syntax
		'@typescript-eslint/no-restricted-syntax': ['error'],

		// https://eslint.org/docs/latest/rules/no-return-assign
		'@typescript-eslint/no-return-assign': ['error'],

		// https://eslint.org/docs/latest/rules/no-return-await
		'@typescript-eslint/no-return-await': ['error'],

		// https://eslint.org/docs/latest/rules/no-script-url
		'@typescript-eslint/no-script-url': ['error'],

		// https://eslint.org/docs/latest/rules/no-sequences
		'@typescript-eslint/no-sequences': ['error'],

		// https://eslint.org/docs/latest/rules/no-shadow
		'@typescript-eslint/no-shadow': ['error'],

		// https://eslint.org/docs/latest/rules/no-shadow-restricted-names
		'@typescript-eslint/no-shadow-restricted-names': ['error'],

		// https://eslint.org/docs/latest/rules/no-ternary
		'@typescript-eslint/no-ternary': ['error'],

		// https://eslint.org/docs/latest/rules/no-throw-literal
		'@typescript-eslint/no-throw-literal': ['error'],

		// https://eslint.org/docs/latest/rules/no-undef-init
		'@typescript-eslint/no-undef-init': ['error'],

		// https://eslint.org/docs/latest/rules/no-undefined
		'@typescript-eslint/no-undefined': ['error'],

		// https://eslint.org/docs/latest/rules/no-underscore-dangle
		'@typescript-eslint/no-underscore-dangle': ['error'],

		// https://eslint.org/docs/latest/rules/no-unneeded-ternary
		'@typescript-eslint/no-unneeded-ternary': ['error'],

		// https://eslint.org/docs/latest/rules/no-unused-expressions
		'@typescript-eslint/no-unused-expressions': ['error'],

		// https://eslint.org/docs/latest/rules/no-unused-labels
		'@typescript-eslint/no-unused-labels': ['error'],

		// https://eslint.org/docs/latest/rules/no-useless-call
		'@typescript-eslint/no-useless-call': ['error'],

		// https://eslint.org/docs/latest/rules/no-useless-catch
		'@typescript-eslint/no-useless-catch': ['error'],

		// https://eslint.org/docs/latest/rules/no-useless-computed-key
		'@typescript-eslint/no-useless-computed-key': ['error'],

		// https://eslint.org/docs/latest/rules/no-useless-concat
		'@typescript-eslint/no-useless-concat': ['error'],

		// https://eslint.org/docs/latest/rules/no-useless-constructor
		'@typescript-eslint/no-useless-constructor': ['error'],

		// https://eslint.org/docs/latest/rules/no-useless-escape
		'@typescript-eslint/no-useless-escape': ['error'],

		// https://eslint.org/docs/latest/rules/no-useless-rename
		'@typescript-eslint/no-useless-rename': ['error'],

		// https://eslint.org/docs/latest/rules/no-useless-return
		'@typescript-eslint/no-useless-return': ['error'],

		// https://eslint.org/docs/latest/rules/no-var
		'@typescript-eslint/no-var': ['error'],

		// https://eslint.org/docs/latest/rules/no-void
		'@typescript-eslint/no-void': ['error'],

		// https://eslint.org/docs/latest/rules/no-warning-comments
		'@typescript-eslint/no-warning-comments': ['error'],

		// https://eslint.org/docs/latest/rules/no-with
		'@typescript-eslint/no-with': ['error'],

		// https://eslint.org/docs/latest/rules/object-shorthand
		'@typescript-eslint/object-shorthand': ['error'],

		// https://eslint.org/docs/latest/rules/one-var
		'@typescript-eslint/one-var': ['error'],

		// https://eslint.org/docs/latest/rules/one-var-declaration-per-line
		'@typescript-eslint/one-var-declaration-per-line': ['error'],

		// https://eslint.org/docs/latest/rules/operator-assignment
		'@typescript-eslint/operator-assignment': ['error'],

		// https://eslint.org/docs/latest/rules/prefer-arrow-callback
		'@typescript-eslint/prefer-arrow-callback': ['error'],

		// https://eslint.org/docs/latest/rules/prefer-const
		'@typescript-eslint/prefer-const': ['error'],

		// https://eslint.org/docs/latest/rules/prefer-destructuring
		'@typescript-eslint/prefer-destructuring': ['error'],

		// https://eslint.org/docs/latest/rules/prefer-exponentiation-operator
		'@typescript-eslint/prefer-exponentiation-operator': ['error'],

		// https://eslint.org/docs/latest/rules/prefer-named-capture-group
		'@typescript-eslint/prefer-named-capture-group': ['error'],

		// https://eslint.org/docs/latest/rules/prefer-numeric-literals
		'@typescript-eslint/prefer-numeric-literals': ['error'],

		// https://eslint.org/docs/latest/rules/prefer-object-has-own
		'@typescript-eslint/prefer-object-has-own': ['error'],

		// https://eslint.org/docs/latest/rules/prefer-object-spread
		'@typescript-eslint/prefer-object-spread': ['error'],

		// https://eslint.org/docs/latest/rules/prefer-promise-reject-errors
		'@typescript-eslint/prefer-promise-reject-errors': ['error'],

		// https://eslint.org/docs/latest/rules/prefer-regex-literals
		'@typescript-eslint/prefer-regex-literals': ['error'],

		// https://eslint.org/docs/latest/rules/prefer-rest-params
		'@typescript-eslint/prefer-rest-params': ['error'],

		// https://eslint.org/docs/latest/rules/prefer-spread
		'@typescript-eslint/prefer-spread': ['error'],

		// https://eslint.org/docs/latest/rules/prefer-template
		'@typescript-eslint/prefer-template': ['error'],

		// https://eslint.org/docs/latest/rules/quote-props
		'@typescript-eslint/quote-props': ['error'],

		// https://eslint.org/docs/latest/rules/radix
		'@typescript-eslint/radix': ['error'],

		// https://eslint.org/docs/latest/rules/require-await
		'@typescript-eslint/require-await': ['error'],

		// https://eslint.org/docs/latest/rules/require-unicode-regexp
		'@typescript-eslint/require-unicode-regexp': ['error'],

		// https://eslint.org/docs/latest/rules/require-yield
		'@typescript-eslint/require-yield': ['error'],

		// https://eslint.org/docs/latest/rules/sort-imports
		'@typescript-eslint/sort-imports': ['error'],

		// https://eslint.org/docs/latest/rules/sort-keys
		'@typescript-eslint/sort-keys': ['error'],

		// https://eslint.org/docs/latest/rules/sort-vars
		'@typescript-eslint/sort-vars': ['error'],

		// https://eslint.org/docs/latest/rules/spaced-comment
		'@typescript-eslint/spaced-comment': ['error'],

		// https://eslint.org/docs/latest/rules/strict
		'@typescript-eslint/strict': ['error'],

		// https://eslint.org/docs/latest/rules/symbol-description
		'@typescript-eslint/symbol-description': ['error'],

		// https://eslint.org/docs/latest/rules/vars-on-top
		'@typescript-eslint/vars-on-top': ['error'],

		// https://eslint.org/docs/latest/rules/yoda
		'@typescript-eslint/yoda': ['error'],

		// - - - - - - - - - - "Layout & Formatting" - - - - - - - - - -
		// - - - - - - - - - - "Layout & Formatting" - - - - - - - - - -
		// - - - - - - - - - - "Layout & Formatting" - - - - - - - - - -

		// https://eslint.org/docs/latest/rules/array-bracket-spacing
		'@typescript-eslint/array-bracket-spacing': ['error'],

		// https://eslint.org/docs/latest/rules/array-element-newline
		'@typescript-eslint/array-element-newline': ['error'],

		// https://eslint.org/docs/latest/rules/arrow-parens
		'@typescript-eslint/arrow-parens': ['error'],

		// https://eslint.org/docs/latest/rules/arrow-spacing
		'@typescript-eslint/arrow-spacing': ['error'],

		// https://eslint.org/docs/latest/rules/block-spacing
		'@typescript-eslint/block-spacing': ['error'],

		// https://eslint.org/docs/latest/rules/brace-style
		'@typescript-eslint/brace-style': ['error'],

		// https://eslint.org/docs/latest/rules/comma-dangle
		'@typescript-eslint/comma-dangle': ['error'],

		// https://eslint.org/docs/latest/rules/comma-spacing
		'@typescript-eslint/comma-spacing': ['error'],

		// https://eslint.org/docs/latest/rules/comma-style
		'@typescript-eslint/comma-style': ['error'],

		// https://eslint.org/docs/latest/rules/computed-property-spacing
		'@typescript-eslint/computed-property-spacing': ['error'],

		// https://eslint.org/docs/latest/rules/dot-location
		'@typescript-eslint/dot-location': ['error'],

		// https://eslint.org/docs/latest/rules/eol-last
		'@typescript-eslint/eol-last': ['error'],

		// https://eslint.org/docs/latest/rules/func-call-spacing
		'@typescript-eslint/func-call-spacing': ['error'],

		// https://eslint.org/docs/latest/rules/function-call-argument-newline
		'@typescript-eslint/function-call-argument-newline': ['error'],

		// https://eslint.org/docs/latest/rules/function-paren-newline
		'@typescript-eslint/function-paren-newline': ['error'],

		// https://eslint.org/docs/latest/rules/generator-star-spacing
		'@typescript-eslint/generator-star-spacing': ['error'],

		// https://eslint.org/docs/latest/rules/implicit-arrow-linebreak
		'@typescript-eslint/implicit-arrow-linebreak': ['error'],

		// https://eslint.org/docs/latest/rules/indent
		'@typescript-eslint/indent': ['error'],

		// https://eslint.org/docs/latest/rules/jsx-quotes
		'@typescript-eslint/jsx-quotes': ['error'],

		// https://eslint.org/docs/latest/rules/key-spacing
		'@typescript-eslint/key-spacing': ['error'],

		// https://eslint.org/docs/latest/rules/keyword-spacing
		'@typescript-eslint/keyword-spacing': ['error'],

		// https://eslint.org/docs/latest/rules/line-comment-position
		'@typescript-eslint/line-comment-position': ['error'],

		// https://eslint.org/docs/latest/rules/linebreak-style
		'@typescript-eslint/linebreak-style': ['error'],

		// https://eslint.org/docs/latest/rules/lines-around-comment
		'@typescript-eslint/lines-around-comment': ['error'],

		// https://eslint.org/docs/latest/rules/lines-between-class-members
		'@typescript-eslint/lines-between-class-members': ['error'],

		// https://eslint.org/docs/latest/rules/max-len
		'@typescript-eslint/max-len': ['error'],

		// https://eslint.org/docs/latest/rules/max-statements-per-line
		'@typescript-eslint/max-statements-per-line': ['error'],

		// https://eslint.org/docs/latest/rules/multiline-ternary
		'@typescript-eslint/multiline-ternary': ['error'],

		// https://eslint.org/docs/latest/rules/new-parens
		'@typescript-eslint/new-parens': ['error'],

		// https://eslint.org/docs/latest/rules/newline-per-chained-call
		'@typescript-eslint/newline-per-chained-call': ['error'],

		// https://eslint.org/docs/latest/rules/no-extra-parens
		'@typescript-eslint/no-extra-parens': ['error'],

		// https://eslint.org/docs/latest/rules/no-mixed-spaces-and-tabs
		'@typescript-eslint/no-mixed-spaces-and-tabs': ['error'],

		// https://eslint.org/docs/latest/rules/no-multi-spaces
		'@typescript-eslint/no-multi-spaces': ['error'],

		// https://eslint.org/docs/latest/rules/no-multiple-empty-lines
		'@typescript-eslint/no-multiple-empty-lines': ['error'],

		// https://eslint.org/docs/latest/rules/no-tabs
		'@typescript-eslint/no-tabs': ['error'],

		// https://eslint.org/docs/latest/rules/no-trailing-spaces
		'@typescript-eslint/no-trailing-spaces': ['error'],

		// https://eslint.org/docs/latest/rules/no-whitespace-before-property
		'@typescript-eslint/no-whitespace-before-property': ['error'],

		// https://eslint.org/docs/latest/rules/nonblock-statement-body-position
		'@typescript-eslint/nonblock-statement-body-position': ['error'],

		// https://eslint.org/docs/latest/rules/object-curly-newline
		'@typescript-eslint/object-curly-newline': ['error'],

		// https://eslint.org/docs/latest/rules/object-curly-spacing
		'@typescript-eslint/object-curly-spacing': ['error'],

		// https://eslint.org/docs/latest/rules/object-property-newline
		'@typescript-eslint/object-property-newline': ['error'],

		// https://eslint.org/docs/latest/rules/operator-linebreak
		'@typescript-eslint/operator-linebreak': ['error'],

		// https://eslint.org/docs/latest/rules/padded-blocks
		'@typescript-eslint/padded-blocks': ['error'],

		// https://eslint.org/docs/latest/rules/padding-line-between-statements
		'@typescript-eslint/padding-line-between-statements': ['error'],

		// https://eslint.org/docs/latest/rules/quotes
		'@typescript-eslint/quotes': ['error'],

		// https://eslint.org/docs/latest/rules/rest-spread-spacing
		'@typescript-eslint/rest-spread-spacing': ['error'],

		// https://eslint.org/docs/latest/rules/semi
		'@typescript-eslint/semi': ['error'],

		// https://eslint.org/docs/latest/rules/semi-spacing
		'@typescript-eslint/semi-spacing': ['error'],

		// https://eslint.org/docs/latest/rules/semi-style
		'@typescript-eslint/semi-style': ['error'],

		// https://eslint.org/docs/latest/rules/space-before-blocks
		'@typescript-eslint/space-before-blocks': ['error'],

		// https://eslint.org/docs/latest/rules/space-before-function-paren
		'@typescript-eslint/space-before-function-paren': ['error'],

		// https://eslint.org/docs/latest/rules/space-in-parens
		'@typescript-eslint/space-in-parens': ['error'],

		// https://eslint.org/docs/latest/rules/space-infix-ops
		'@typescript-eslint/space-infix-ops': ['error'],

		// https://eslint.org/docs/latest/rules/space-unary-ops
		'@typescript-eslint/space-unary-ops': ['error'],

		// https://eslint.org/docs/latest/rules/switch-colon-spacing
		'@typescript-eslint/switch-colon-spacing': ['error'],

		// https://eslint.org/docs/latest/rules/template-curly-spacing
		'@typescript-eslint/template-curly-spacing': ['error'],

		// https://eslint.org/docs/latest/rules/template-tag-spacing
		'@typescript-eslint/template-tag-spacing': ['error'],

		// https://eslint.org/docs/latest/rules/unicode-bom
		'@typescript-eslint/unicode-bom': ['error'],

		// https://eslint.org/docs/latest/rules/wrap-iife
		'@typescript-eslint/wrap-iife': ['error'],

		// https://eslint.org/docs/latest/rules/wrap-regex
		'@typescript-eslint/wrap-regex': ['error'],

		// https://eslint.org/docs/latest/rules/yield-star-spacing
		'@typescript-eslint/yield-star-spacing': ['error'],

		// - - - - - - - - - - "Deprecated" - - - - - - - - - -
		// - - - - - - - - - - "Deprecated" - - - - - - - - - -
		// - - - - - - - - - - "Deprecated" - - - - - - - - - -

		// https://eslint.org/docs/latest/rules/callback-return
		'@typescript-eslint/callback-return': ['error'],

		// https://eslint.org/docs/latest/rules/global-require
		'@typescript-eslint/global-require': ['error'],

		// https://eslint.org/docs/latest/rules/handle-callback-err
		'@typescript-eslint/handle-callback-err': ['error'],

		// https://eslint.org/docs/latest/rules/id-blacklist
		'@typescript-eslint/id-blacklist': ['error'],

		// https://eslint.org/docs/latest/rules/indent-legacy
		'@typescript-eslint/indent-legacy': ['error'],

		// https://eslint.org/docs/latest/rules/lines-around-directive
		'@typescript-eslint/lines-around-directive': ['error'],

		// https://eslint.org/docs/latest/rules/newline-after-var
		'@typescript-eslint/newline-after-var': ['error'],

		// https://eslint.org/docs/latest/rules/newline-before-return
		'@typescript-eslint/newline-before-return': ['error'],

		// https://eslint.org/docs/latest/rules/no-buffer-constructor
		'@typescript-eslint/no-buffer-constructor': ['error'],

		// https://eslint.org/docs/latest/rules/no-catch-shadow
		'@typescript-eslint/no-catch-shadow': ['error'],

		// https://eslint.org/docs/latest/rules/no-mixed-requires
		'@typescript-eslint/no-mixed-requires': ['error'],

		// https://eslint.org/docs/latest/rules/no-native-reassign
		'@typescript-eslint/no-native-reassign': ['error'],

		// https://eslint.org/docs/latest/rules/no-negated-in-lhs
		'@typescript-eslint/no-negated-in-lhs': ['error'],

		// https://eslint.org/docs/latest/rules/no-new-require
		'@typescript-eslint/no-new-require': ['error'],

		// https://eslint.org/docs/latest/rules/no-path-concat
		'@typescript-eslint/no-path-concat': ['error'],

		// https://eslint.org/docs/latest/rules/no-process-env
		'@typescript-eslint/no-process-env': ['error'],

		// https://eslint.org/docs/latest/rules/no-process-exit
		'@typescript-eslint/no-process-exit': ['error'],

		// https://eslint.org/docs/latest/rules/no-restricted-modules
		'@typescript-eslint/no-restricted-modules': ['error'],

		// https://eslint.org/docs/latest/rules/no-spaced-func
		'@typescript-eslint/no-spaced-func': ['error'],

		// https://eslint.org/docs/latest/rules/no-sync
		'@typescript-eslint/no-sync': ['error'],

		// https://eslint.org/docs/latest/rules/prefer-reflect
		'@typescript-eslint/prefer-reflect': ['error'],

		// https://eslint.org/docs/latest/rules/require-jsdoc
		'@typescript-eslint/require-jsdoc': ['error'],

		// https://eslint.org/docs/latest/rules/valid-jsdoc
		'@typescript-eslint/valid-jsdoc': ['error'],
	};
};
