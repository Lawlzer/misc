// The "base" JavaScript rules I will probably use. I have not delved into these (as I use TypeScript and avoid JS), so it's very likely that these will need heavy customization.
// These should be customized more, per project.

/**
 * @param {*} commit true or false (true is harsh, should only be used on commit/push)
 */

// TEMPORARILY DISABLED, because these are running on TypeScript files as well?
module.exports = ({ commit }) => {
	if (commit === undefined) throw new Error('commit is undefined');
	return {
		strict: 2,

		// // - - - - - - - - - - "Possible Problems" - - - - - - - - - -
		// // - - - - - - - - - - "Possible Problems" - - - - - - - - - -
		// // - - - - - - - - - - "Possible Problems" - - - - - - - - - -

		// // https://eslint.org/docs/latest/rules/array-callback-return
		// 'array-callback-return': ['error'],

		// // https://eslint.org/docs/latest/rules/constructor-super
		// 'constructor-super': ['error'],

		// // https://eslint.org/docs/latest/rules/for-direction
		// 'for-direction': ['error'],

		// // https://eslint.org/docs/latest/rules/getter-return
		// 'getter-return': ['error'],

		// // https://eslint.org/docs/latest/rules/no-async-promise-executor
		// 'no-async-promise-executor': ['error'],

		// // https://eslint.org/docs/latest/rules/no-await-in-loop
		// 'no-await-in-loop': ['error'],

		// // https://eslint.org/docs/latest/rules/no-class-assign
		// 'no-class-assign': ['error'],

		// // https://eslint.org/docs/latest/rules/no-compare-neg-zero
		// 'no-compare-neg-zero': ['error'],

		// // https://eslint.org/docs/latest/rules/no-cond-assign
		// 'no-cond-assign': ['error'],

		// // https://eslint.org/docs/latest/rules/no-const-assign
		// 'no-const-assign': ['error'],

		// // https://eslint.org/docs/latest/rules/no-constant-binary-expression
		// 'no-constant-binary-expression': ['error'],

		// // https://eslint.org/docs/latest/rules/no-constant-condition
		// 'no-constant-condition': ['error'],

		// // https://eslint.org/docs/latest/rules/no-constructor-return
		// 'no-constructor-return': ['error'],

		// // https://eslint.org/docs/latest/rules/no-control-regex
		// 'no-control-regex': ['error'],

		// // https://eslint.org/docs/latest/rules/no-debugger
		// 'no-debugger': ['error'],

		// // https://eslint.org/docs/latest/rules/no-dupe-args
		// 'no-dupe-args': ['error'],

		// // https://eslint.org/docs/latest/rules/no-dupe-class-members
		// 'no-dupe-class-members': ['error'],

		// // https://eslint.org/docs/latest/rules/no-dupe-else-if
		// 'no-dupe-else-if': ['error'],

		// // https://eslint.org/docs/latest/rules/no-dupe-keys
		// 'no-dupe-keys': ['error'],

		// // https://eslint.org/docs/latest/rules/no-duplicate-case
		// 'no-duplicate-case': ['error'],

		// // https://eslint.org/docs/latest/rules/no-duplicate-imports
		// 'no-duplicate-imports': ['error'],

		// // https://eslint.org/docs/latest/rules/no-empty-character-class
		// 'no-empty-character-class': ['error'],

		// // https://eslint.org/docs/latest/rules/no-empty-pattern
		// 'no-empty-pattern': ['error'],

		// // https://eslint.org/docs/latest/rules/no-ex-assign
		// 'no-ex-assign': ['error'],

		// // https://eslint.org/docs/latest/rules/no-fallthrough
		// 'no-fallthrough': ['error'],

		// // https://eslint.org/docs/latest/rules/no-func-assign
		// 'no-func-assign': ['error'],

		// // https://eslint.org/docs/latest/rules/no-import-assign
		// 'no-import-assign': ['error'],

		// // https://eslint.org/docs/latest/rules/no-inner-declarations
		// 'no-inner-declarations': ['error'],

		// // https://eslint.org/docs/latest/rules/no-invalid-regexp
		// 'no-invalid-regexp': ['error'],

		// // https://eslint.org/docs/latest/rules/no-irregular-whitespace
		// 'no-irregular-whitespace': ['error'],

		// // https://eslint.org/docs/latest/rules/no-loss-of-precision
		// 'no-loss-of-precision': ['error'],

		// // https://eslint.org/docs/latest/rules/no-misleading-character-class
		// 'no-misleading-character-class': ['error'],

		// // https://eslint.org/docs/latest/rules/no-new-native-nonconstructor
		// 'no-new-native-nonconstructor': ['error'],

		// // https://eslint.org/docs/latest/rules/no-new-symbol
		// 'no-new-symbol': ['error'],

		// // https://eslint.org/docs/latest/rules/no-obj-calls
		// 'no-obj-calls': ['error'],

		// // https://eslint.org/docs/latest/rules/no-promise-executor-return
		// 'no-promise-executor-return': ['error'],

		// // https://eslint.org/docs/latest/rules/no-prototype-builtins
		// 'no-prototype-builtins': ['error'],

		// // https://eslint.org/docs/latest/rules/no-self-assign
		// 'no-self-assign': ['error'],

		// // https://eslint.org/docs/latest/rules/no-self-compare
		// 'no-self-compare': ['error'],

		// // https://eslint.org/docs/latest/rules/no-setter-return
		// 'no-setter-return': ['error'],

		// // https://eslint.org/docs/latest/rules/no-sparse-arrays
		// 'no-sparse-arrays': ['error'],

		// // https://eslint.org/docs/latest/rules/no-template-curly-in-string
		// 'no-template-curly-in-string': ['error'],

		// // https://eslint.org/docs/latest/rules/no-this-before-super
		// 'no-this-before-super': ['error'],

		// // https://eslint.org/docs/latest/rules/no-undef
		// 'no-undef': ['error'],

		// // https://eslint.org/docs/latest/rules/no-unexpected-multiline
		// 'no-unexpected-multiline': ['error'],

		// // https://eslint.org/docs/latest/rules/no-unmodified-loop-condition
		// 'no-unmodified-loop-condition': ['error'],

		// // https://eslint.org/docs/latest/rules/no-unreachable
		// 'no-unreachable': ['error'],

		// // https://eslint.org/docs/latest/rules/no-unreachable-loop
		// 'no-unreachable-loop': ['error'],

		// // https://eslint.org/docs/latest/rules/no-unsafe-finally
		// 'no-unsafe-finally': ['error'],

		// // https://eslint.org/docs/latest/rules/no-unsafe-negation
		// 'no-unsafe-negation': ['error'],

		// // https://eslint.org/docs/latest/rules/no-unsafe-optional-chaining
		// 'no-unsafe-optional-chaining': ['error'],

		// // https://eslint.org/docs/latest/rules/no-unused-private-class-members
		// 'no-unused-private-class-members': ['error'],

		// // https://eslint.org/docs/latest/rules/no-unused-vars
		// 'no-unused-vars': ['error'],

		// // https://eslint.org/docs/latest/rules/no-use-before-define
		// 'no-use-before-define': ['error'],

		// // https://eslint.org/docs/latest/rules/no-useless-backreference
		// 'no-useless-backreference': ['error'],

		// // https://eslint.org/docs/latest/rules/require-atomic-updates
		// 'require-atomic-updates': ['error'],

		// // https://eslint.org/docs/latest/rules/use-isnan
		// 'use-isnan': ['error'],

		// // https://eslint.org/docs/latest/rules/valid-typeof
		// 'valid-typeof': ['error'],

		// // - - - - - - - - - - "Suggestions" - - - - - - - - - -
		// // - - - - - - - - - - "Suggestions" - - - - - - - - - -
		// // - - - - - - - - - - "Suggestions" - - - - - - - - - -

		// // https://eslint.org/docs/latest/rules/accessor-pairs
		// 'accessor-pairs': ['error'],

		// // https://eslint.org/docs/latest/rules/arrow-body-style
		// 'arrow-body-style': ['error'],

		// // https://eslint.org/docs/latest/rules/block-scoped-var
		// 'block-scoped-var': ['error'],

		// // https://eslint.org/docs/latest/rules/camelcase
		// camelcase: ['error'],

		// // https://eslint.org/docs/latest/rules/capitalized-comments
		// 'capitalized-comments': ['error'],

		// // https://eslint.org/docs/latest/rules/class-methods-use-this
		// 'class-methods-use-this': ['error'],

		// // https://eslint.org/docs/latest/rules/complexity
		// complexity: ['error'],

		// // https://eslint.org/docs/latest/rules/consistent-return
		// 'consistent-return': ['error'],

		// // https://eslint.org/docs/latest/rules/consistent-this
		// 'consistent-this': ['error'],

		// // https://eslint.org/docs/latest/rules/curly
		// curly: ['error'],

		// // https://eslint.org/docs/latest/rules/default-case
		// 'default-case': ['error'],

		// // https://eslint.org/docs/latest/rules/default-case-last
		// 'default-case-last': ['error'],

		// // https://eslint.org/docs/latest/rules/default-param-last
		// 'default-param-last': ['error'],

		// // https://eslint.org/docs/latest/rules/dot-notation
		// 'dot-notation': ['error'],

		// // https://eslint.org/docs/latest/rules/eqeqeq
		// eqeqeq: ['error'],

		// // https://eslint.org/docs/latest/rules/func-name-matching
		// 'func-name-matching': ['error'],

		// // https://eslint.org/docs/latest/rules/func-names
		// 'func-names': ['error'],

		// // https://eslint.org/docs/latest/rules/func-style
		// 'func-style': ['error'],

		// // https://eslint.org/docs/latest/rules/grouped-accessor-pairs
		// 'grouped-accessor-pairs': ['error'],

		// // https://eslint.org/docs/latest/rules/guard-for-in
		// 'guard-for-in': ['error'],

		// // https://eslint.org/docs/latest/rules/id-denylist
		// 'id-denylist': ['error'],

		// // https://eslint.org/docs/latest/rules/id-length
		// 'id-length': ['error'],

		// // https://eslint.org/docs/latest/rules/id-match
		// 'id-match': ['error'],

		// // https://eslint.org/docs/latest/rules/init-declarations
		// 'init-declarations': ['error'],

		// // https://eslint.org/docs/latest/rules/logical-assignment-operators
		// 'logical-assignment-operators': ['error'],

		// // https://eslint.org/docs/latest/rules/max-classes-per-file
		// 'max-classes-per-file': ['error'],

		// // https://eslint.org/docs/latest/rules/max-depth
		// 'max-depth': ['error'],

		// // https://eslint.org/docs/latest/rules/max-lines
		// 'max-lines': ['error'],

		// // https://eslint.org/docs/latest/rules/max-lines-per-function
		// 'max-lines-per-function': ['error'],

		// // https://eslint.org/docs/latest/rules/max-nested-callbacks
		// 'max-nested-callbacks': ['error'],

		// // https://eslint.org/docs/latest/rules/max-params
		// 'max-params': ['error'],

		// // https://eslint.org/docs/latest/rules/max-statements
		// 'max-statements': ['error'],

		// // https://eslint.org/docs/latest/rules/multiline-comment-style
		// 'multiline-comment-style': ['error'],

		// // https://eslint.org/docs/latest/rules/new-cap
		// 'new-cap': ['error'],

		// // https://eslint.org/docs/latest/rules/no-alert
		// 'no-alert': ['error'],

		// // https://eslint.org/docs/latest/rules/no-array-constructor
		// 'no-array-constructor': ['error'],

		// // https://eslint.org/docs/latest/rules/no-bitwise
		// 'no-bitwise': ['error'],

		// // https://eslint.org/docs/latest/rules/no-caller
		// 'no-caller': ['error'],

		// // https://eslint.org/docs/latest/rules/no-case-declarations
		// 'no-case-declarations': ['error'],

		// // https://eslint.org/docs/latest/rules/no-confusing-arrow
		// 'no-confusing-arrow': ['error'],

		// // https://eslint.org/docs/latest/rules/no-console
		// 'no-console': ['error'],

		// // https://eslint.org/docs/latest/rules/no-continue
		// 'no-continue': ['error'],

		// // https://eslint.org/docs/latest/rules/no-delete-var
		// 'no-delete-var': ['error'],

		// // https://eslint.org/docs/latest/rules/no-div-regex
		// 'no-div-regex': ['error'],

		// // https://eslint.org/docs/latest/rules/no-else-return
		// 'no-else-return': ['error'],

		// // https://eslint.org/docs/latest/rules/no-empty
		// 'no-empty': ['error'],

		// // https://eslint.org/docs/latest/rules/no-empty-function
		// 'no-empty-function': ['error'],

		// // https://eslint.org/docs/latest/rules/no-empty-static-block
		// 'no-empty-static-block': ['error'],

		// // https://eslint.org/docs/latest/rules/no-eq-null
		// 'no-eq-null': ['error'],

		// // https://eslint.org/docs/latest/rules/no-eval
		// 'no-eval': ['error'],

		// // https://eslint.org/docs/latest/rules/no-extend-native
		// 'no-extend-native': ['error'],

		// // https://eslint.org/docs/latest/rules/no-extra-bind
		// 'no-extra-bind': ['error'],

		// // https://eslint.org/docs/latest/rules/no-extra-boolean-cast
		// 'no-extra-boolean-cast': ['error'],

		// // https://eslint.org/docs/latest/rules/no-extra-label
		// 'no-extra-label': ['error'],

		// // https://eslint.org/docs/latest/rules/no-extra-semi
		// 'no-extra-semi': ['error'],

		// // https://eslint.org/docs/latest/rules/no-floating-decimal
		// 'no-floating-decimal': ['error'],

		// // https://eslint.org/docs/latest/rules/no-global-assign
		// 'no-global-assign': ['error'],

		// // https://eslint.org/docs/latest/rules/no-implicit-coercion
		// 'no-implicit-coercion': ['error'],

		// // https://eslint.org/docs/latest/rules/no-implicit-globals
		// 'no-implicit-globals': ['error'],

		// // https://eslint.org/docs/latest/rules/no-implied-eval
		// 'no-implied-eval': ['error'],

		// // https://eslint.org/docs/latest/rules/no-inline-comments
		// 'no-inline-comments': ['error'],

		// // https://eslint.org/docs/latest/rules/no-invalid-this
		// 'no-invalid-this': ['error'],

		// // https://eslint.org/docs/latest/rules/no-iterator
		// 'no-iterator': ['error'],

		// // https://eslint.org/docs/latest/rules/no-label-var
		// 'no-label-var': ['error'],

		// // https://eslint.org/docs/latest/rules/no-labels
		// 'no-labels': ['error'],

		// // https://eslint.org/docs/latest/rules/no-lone-blocks
		// 'no-lone-blocks': ['error'],

		// // https://eslint.org/docs/latest/rules/no-lonely-if
		// 'no-lonely-if': ['error'],

		// // https://eslint.org/docs/latest/rules/no-loop-func
		// 'no-loop-func': ['error'],

		// // https://eslint.org/docs/latest/rules/no-magic-numbers
		// 'no-magic-numbers': ['error'],

		// // https://eslint.org/docs/latest/rules/no-mixed-operators
		// 'no-mixed-operators': ['error'],

		// // https://eslint.org/docs/latest/rules/no-multi-assign
		// 'no-multi-assign': ['error'],

		// // https://eslint.org/docs/latest/rules/no-multi-str
		// 'no-multi-str': ['error'],

		// // https://eslint.org/docs/latest/rules/no-negated-condition
		// 'no-negated-condition': ['error'],

		// // https://eslint.org/docs/latest/rules/no-nested-ternary
		// 'no-nested-ternary': ['error'],

		// // https://eslint.org/docs/latest/rules/no-new
		// 'no-new': ['error'],

		// // https://eslint.org/docs/latest/rules/no-new-func
		// 'no-new-func': ['error'],

		// // https://eslint.org/docs/latest/rules/no-new-object
		// 'no-new-object': ['error'],

		// // https://eslint.org/docs/latest/rules/no-new-wrappers
		// 'no-new-wrappers': ['error'],

		// // https://eslint.org/docs/latest/rules/no-nonoctal-decimal-escape
		// 'no-nonoctal-decimal-escape': ['error'],

		// // https://eslint.org/docs/latest/rules/no-octal
		// 'no-octal': ['error'],

		// // https://eslint.org/docs/latest/rules/no-octal-escape
		// 'no-octal-escape': ['error'],

		// // https://eslint.org/docs/latest/rules/no-param-reassign
		// 'no-param-reassign': ['error'],

		// // https://eslint.org/docs/latest/rules/no-plusplus
		// 'no-plusplus': ['error'],

		// // https://eslint.org/docs/latest/rules/no-proto
		// 'no-proto': ['error'],

		// // https://eslint.org/docs/latest/rules/no-redeclare
		// 'no-redeclare': ['error'],

		// // https://eslint.org/docs/latest/rules/no-regex-spaces
		// 'no-regex-spaces': ['error'],

		// // https://eslint.org/docs/latest/rules/no-restricted-exports
		// 'no-restricted-exports': ['error'],

		// // https://eslint.org/docs/latest/rules/no-restricted-globals
		// 'no-restricted-globals': ['error'],

		// // https://eslint.org/docs/latest/rules/no-restricted-imports
		// 'no-restricted-imports': ['error'],

		// // https://eslint.org/docs/latest/rules/no-restricted-properties
		// 'no-restricted-properties': ['error'],

		// // https://eslint.org/docs/latest/rules/no-restricted-syntax
		// 'no-restricted-syntax': ['error'],

		// // https://eslint.org/docs/latest/rules/no-return-assign
		// 'no-return-assign': ['error'],

		// // https://eslint.org/docs/latest/rules/no-return-await
		// 'no-return-await': ['error'],

		// // https://eslint.org/docs/latest/rules/no-script-url
		// 'no-script-url': ['error'],

		// // https://eslint.org/docs/latest/rules/no-sequences
		// 'no-sequences': ['error'],

		// // https://eslint.org/docs/latest/rules/no-shadow
		// 'no-shadow': ['error'],

		// // https://eslint.org/docs/latest/rules/no-shadow-restricted-names
		// 'no-shadow-restricted-names': ['error'],

		// // https://eslint.org/docs/latest/rules/no-ternary
		// 'no-ternary': ['error'],

		// // https://eslint.org/docs/latest/rules/no-throw-literal
		// 'no-throw-literal': ['error'],

		// // https://eslint.org/docs/latest/rules/no-undef-init
		// 'no-undef-init': ['error'],

		// // https://eslint.org/docs/latest/rules/no-undefined
		// 'no-undefined': ['error'],

		// // https://eslint.org/docs/latest/rules/no-underscore-dangle
		// 'no-underscore-dangle': ['error'],

		// // https://eslint.org/docs/latest/rules/no-unneeded-ternary
		// 'no-unneeded-ternary': ['error'],

		// // https://eslint.org/docs/latest/rules/no-unused-expressions
		// 'no-unused-expressions': ['error'],

		// // https://eslint.org/docs/latest/rules/no-unused-labels
		// 'no-unused-labels': ['error'],

		// // https://eslint.org/docs/latest/rules/no-useless-call
		// 'no-useless-call': ['error'],

		// // https://eslint.org/docs/latest/rules/no-useless-catch
		// 'no-useless-catch': ['error'],

		// // https://eslint.org/docs/latest/rules/no-useless-computed-key
		// 'no-useless-computed-key': ['error'],

		// // https://eslint.org/docs/latest/rules/no-useless-concat
		// 'no-useless-concat': ['error'],

		// // https://eslint.org/docs/latest/rules/no-useless-constructor
		// 'no-useless-constructor': ['error'],

		// // https://eslint.org/docs/latest/rules/no-useless-escape
		// 'no-useless-escape': ['error'],

		// // https://eslint.org/docs/latest/rules/no-useless-rename
		// 'no-useless-rename': ['error'],

		// // https://eslint.org/docs/latest/rules/no-useless-return
		// 'no-useless-return': ['error'],

		// // https://eslint.org/docs/latest/rules/no-var
		// 'no-var': ['error'],

		// // https://eslint.org/docs/latest/rules/no-void
		// 'no-void': ['error'],

		// // https://eslint.org/docs/latest/rules/no-warning-comments
		// 'no-warning-comments': ['error'],

		// // https://eslint.org/docs/latest/rules/no-with
		// 'no-with': ['error'],

		// // https://eslint.org/docs/latest/rules/object-shorthand
		// 'object-shorthand': ['error'],

		// // https://eslint.org/docs/latest/rules/one-var
		// 'one-var': ['error'],

		// // https://eslint.org/docs/latest/rules/one-var-declaration-per-line
		// 'one-var-declaration-per-line': ['error'],

		// // https://eslint.org/docs/latest/rules/operator-assignment
		// 'operator-assignment': ['error'],

		// // https://eslint.org/docs/latest/rules/prefer-arrow-callback
		// 'prefer-arrow-callback': ['error'],

		// // https://eslint.org/docs/latest/rules/prefer-const
		// 'prefer-const': ['error'],

		// // https://eslint.org/docs/latest/rules/prefer-destructuring
		// 'prefer-destructuring': ['error'],

		// // https://eslint.org/docs/latest/rules/prefer-exponentiation-operator
		// 'prefer-exponentiation-operator': ['error'],

		// // https://eslint.org/docs/latest/rules/prefer-named-capture-group
		// 'prefer-named-capture-group': ['error'],

		// // https://eslint.org/docs/latest/rules/prefer-numeric-literals
		// 'prefer-numeric-literals': ['error'],

		// // https://eslint.org/docs/latest/rules/prefer-object-has-own
		// 'prefer-object-has-own': ['error'],

		// // https://eslint.org/docs/latest/rules/prefer-object-spread
		// 'prefer-object-spread': ['error'],

		// // https://eslint.org/docs/latest/rules/prefer-promise-reject-errors
		// 'prefer-promise-reject-errors': ['error'],

		// // https://eslint.org/docs/latest/rules/prefer-regex-literals
		// 'prefer-regex-literals': ['error'],

		// // https://eslint.org/docs/latest/rules/prefer-rest-params
		// 'prefer-rest-params': ['error'],

		// // https://eslint.org/docs/latest/rules/prefer-spread
		// 'prefer-spread': ['error'],

		// // https://eslint.org/docs/latest/rules/prefer-template
		// 'prefer-template': ['error'],

		// // https://eslint.org/docs/latest/rules/quote-props
		// 'quote-props': ['error'],

		// // https://eslint.org/docs/latest/rules/radix
		// radix: ['error'],

		// // https://eslint.org/docs/latest/rules/require-await
		// 'require-await': ['error'],

		// // https://eslint.org/docs/latest/rules/require-unicode-regexp
		// 'require-unicode-regexp': ['error'],

		// // https://eslint.org/docs/latest/rules/require-yield
		// 'require-yield': ['error'],

		// // https://eslint.org/docs/latest/rules/sort-imports
		// 'sort-imports': ['error'],

		// // // https://eslint.org/docs/latest/rules/sort-keys
		// // 'sort-keys': ['off'], // Does not have auto-fix

		// // https://eslint.org/docs/latest/rules/sort-vars
		// 'sort-vars': ['error'],

		// // https://eslint.org/docs/latest/rules/spaced-comment
		// 'spaced-comment': ['error'],

		// // https://eslint.org/docs/latest/rules/strict
		// strict: ['error'],

		// // https://eslint.org/docs/latest/rules/symbol-description
		// 'symbol-description': ['error'],

		// // https://eslint.org/docs/latest/rules/vars-on-top
		// 'vars-on-top': ['error'],

		// // https://eslint.org/docs/latest/rules/yoda
		// yoda: ['error'],

		// // - - - - - - - - - - "Layout & Formatting" - - - - - - - - - -
		// // - - - - - - - - - - "Layout & Formatting" - - - - - - - - - -
		// // - - - - - - - - - - "Layout & Formatting" - - - - - - - - - -

		// // https://eslint.org/docs/latest/rules/array-bracket-spacing
		// 'array-bracket-spacing': ['error'],

		// // https://eslint.org/docs/latest/rules/array-element-newline
		// 'array-element-newline': ['error'],

		// // https://eslint.org/docs/latest/rules/arrow-parens
		// 'arrow-parens': ['error'],

		// // https://eslint.org/docs/latest/rules/arrow-spacing
		// 'arrow-spacing': ['error'],

		// // https://eslint.org/docs/latest/rules/block-spacing
		// 'block-spacing': ['error'],

		// // https://eslint.org/docs/latest/rules/brace-style
		// 'brace-style': ['error'],

		// // https://eslint.org/docs/latest/rules/comma-dangle
		// 'comma-dangle': ['error'],

		// // https://eslint.org/docs/latest/rules/comma-spacing
		// 'comma-spacing': ['error'],

		// // https://eslint.org/docs/latest/rules/comma-style
		// 'comma-style': ['error'],

		// // https://eslint.org/docs/latest/rules/computed-property-spacing
		// 'computed-property-spacing': ['error'],

		// // https://eslint.org/docs/latest/rules/dot-location
		// 'dot-location': ['error'],

		// // https://eslint.org/docs/latest/rules/eol-last
		// 'eol-last': ['error'],

		// // https://eslint.org/docs/latest/rules/func-call-spacing
		// 'func-call-spacing': ['error'],

		// // https://eslint.org/docs/latest/rules/function-call-argument-newline
		// 'function-call-argument-newline': ['error'],

		// // https://eslint.org/docs/latest/rules/function-paren-newline
		// 'function-paren-newline': ['error'],

		// // https://eslint.org/docs/latest/rules/generator-star-spacing
		// 'generator-star-spacing': ['error'],

		// // https://eslint.org/docs/latest/rules/implicit-arrow-linebreak
		// 'implicit-arrow-linebreak': ['error'],

		// // https://eslint.org/docs/latest/rules/indent
		// indent: ['error'],

		// // https://eslint.org/docs/latest/rules/jsx-quotes
		// 'jsx-quotes': ['error'],

		// // https://eslint.org/docs/latest/rules/key-spacing
		// 'key-spacing': ['error'],

		// // https://eslint.org/docs/latest/rules/keyword-spacing
		// 'keyword-spacing': ['error'],

		// // https://eslint.org/docs/latest/rules/line-comment-position
		// 'line-comment-position': ['error'],

		// // https://eslint.org/docs/latest/rules/linebreak-style
		// 'linebreak-style': ['error'],

		// // https://eslint.org/docs/latest/rules/lines-around-comment
		// 'lines-around-comment': ['error'],

		// // https://eslint.org/docs/latest/rules/lines-between-class-members
		// 'lines-between-class-members': ['error'],

		// // https://eslint.org/docs/latest/rules/max-len
		// 'max-len': ['off'],

		// // https://eslint.org/docs/latest/rules/max-statements-per-line
		// 'max-statements-per-line': ['error'],

		// // https://eslint.org/docs/latest/rules/multiline-ternary
		// 'multiline-ternary': ['error'],

		// // https://eslint.org/docs/latest/rules/new-parens
		// 'new-parens': ['error'],

		// // https://eslint.org/docs/latest/rules/newline-per-chained-call
		// 'newline-per-chained-call': ['error'],

		// // https://eslint.org/docs/latest/rules/no-extra-parens
		// 'no-extra-parens': ['error'],

		// // https://eslint.org/docs/latest/rules/no-mixed-spaces-and-tabs
		// 'no-mixed-spaces-and-tabs': ['error'],

		// // https://eslint.org/docs/latest/rules/no-multi-spaces
		// 'no-multi-spaces': ['error'],

		// // https://eslint.org/docs/latest/rules/no-multiple-empty-lines
		// 'no-multiple-empty-lines': ['error'],

		// // https://eslint.org/docs/latest/rules/no-tabs
		// 'no-tabs': ['error'],

		// // https://eslint.org/docs/latest/rules/no-trailing-spaces
		// 'no-trailing-spaces': ['error'],

		// // https://eslint.org/docs/latest/rules/no-whitespace-before-property
		// 'no-whitespace-before-property': ['error'],

		// // https://eslint.org/docs/latest/rules/nonblock-statement-body-position
		// 'nonblock-statement-body-position': ['error'],

		// // https://eslint.org/docs/latest/rules/object-curly-newline
		// 'object-curly-newline': ['error'],

		// // https://eslint.org/docs/latest/rules/object-curly-spacing
		// 'object-curly-spacing': ['error'],

		// // https://eslint.org/docs/latest/rules/object-property-newline
		// 'object-property-newline': ['error'],

		// // https://eslint.org/docs/latest/rules/operator-linebreak
		// 'operator-linebreak': ['error'],

		// // https://eslint.org/docs/latest/rules/padded-blocks
		// 'padded-blocks': ['error'],

		// // https://eslint.org/docs/latest/rules/padding-line-between-statements
		// 'padding-line-between-statements': ['error'],

		// // https://eslint.org/docs/latest/rules/quotes
		// quotes: ['error'],

		// // https://eslint.org/docs/latest/rules/rest-spread-spacing
		// 'rest-spread-spacing': ['error'],

		// // https://eslint.org/docs/latest/rules/semi
		// semi: ['error'],

		// // https://eslint.org/docs/latest/rules/semi-spacing
		// 'semi-spacing': ['error'],

		// // https://eslint.org/docs/latest/rules/semi-style
		// 'semi-style': ['error'],

		// // https://eslint.org/docs/latest/rules/space-before-blocks
		// 'space-before-blocks': ['error'],

		// // https://eslint.org/docs/latest/rules/space-before-function-paren
		// 'space-before-function-paren': ['error'],

		// // https://eslint.org/docs/latest/rules/space-in-parens
		// 'space-in-parens': ['error'],

		// // https://eslint.org/docs/latest/rules/space-infix-ops
		// 'space-infix-ops': ['error'],

		// // https://eslint.org/docs/latest/rules/space-unary-ops
		// 'space-unary-ops': ['error'],

		// // https://eslint.org/docs/latest/rules/switch-colon-spacing
		// 'switch-colon-spacing': ['error'],

		// // https://eslint.org/docs/latest/rules/template-curly-spacing
		// 'template-curly-spacing': ['error'],

		// // https://eslint.org/docs/latest/rules/template-tag-spacing
		// 'template-tag-spacing': ['error'],

		// // https://eslint.org/docs/latest/rules/unicode-bom
		// 'unicode-bom': ['error'],

		// // https://eslint.org/docs/latest/rules/wrap-iife
		// 'wrap-iife': ['error'],

		// // https://eslint.org/docs/latest/rules/wrap-regex
		// 'wrap-regex': ['error'],

		// // https://eslint.org/docs/latest/rules/yield-star-spacing
		// 'yield-star-spacing': ['error'],

		// // - - - - - - - - - - "Deprecated" - - - - - - - - - -
		// // - - - - - - - - - - "Deprecated" - - - - - - - - - -
		// // - - - - - - - - - - "Deprecated" - - - - - - - - - -

		// // https://eslint.org/docs/latest/rules/callback-return
		// 'callback-return': ['error'],

		// // https://eslint.org/docs/latest/rules/global-require
		// 'global-require': ['error'],

		// // https://eslint.org/docs/latest/rules/handle-callback-err
		// 'handle-callback-err': ['error'],

		// // https://eslint.org/docs/latest/rules/id-blacklist
		// 'id-blacklist': ['error'],

		// // https://eslint.org/docs/latest/rules/indent-legacy
		// 'indent-legacy': ['error'],

		// // https://eslint.org/docs/latest/rules/lines-around-directive
		// 'lines-around-directive': ['error'],

		// // https://eslint.org/docs/latest/rules/newline-after-var
		// 'newline-after-var': ['error'],

		// // https://eslint.org/docs/latest/rules/newline-before-return
		// 'newline-before-return': ['error'],

		// // https://eslint.org/docs/latest/rules/no-buffer-constructor
		// 'no-buffer-constructor': ['error'],

		// // https://eslint.org/docs/latest/rules/no-catch-shadow
		// 'no-catch-shadow': ['error'],

		// // https://eslint.org/docs/latest/rules/no-mixed-requires
		// 'no-mixed-requires': ['error'],

		// // https://eslint.org/docs/latest/rules/no-native-reassign
		// 'no-native-reassign': ['error'],

		// // https://eslint.org/docs/latest/rules/no-negated-in-lhs
		// 'no-negated-in-lhs': ['error'],

		// // https://eslint.org/docs/latest/rules/no-new-require
		// 'no-new-require': ['error'],

		// // https://eslint.org/docs/latest/rules/no-path-concat
		// 'no-path-concat': ['error'],

		// // https://eslint.org/docs/latest/rules/no-process-env
		// 'no-process-env': ['error'],

		// // https://eslint.org/docs/latest/rules/no-process-exit
		// 'no-process-exit': ['error'],

		// // https://eslint.org/docs/latest/rules/no-restricted-modules
		// 'no-restricted-modules': ['error'],

		// // https://eslint.org/docs/latest/rules/no-spaced-func
		// 'no-spaced-func': ['error'],

		// // https://eslint.org/docs/latest/rules/no-sync
		// 'no-sync': ['error'],

		// // https://eslint.org/docs/latest/rules/prefer-reflect
		// 'prefer-reflect': ['error'],

		// // https://eslint.org/docs/latest/rules/require-jsdoc
		// 'require-jsdoc': ['error'],

		// // https://eslint.org/docs/latest/rules/valid-jsdoc
		// 'valid-jsdoc': ['error'],
	};
};
