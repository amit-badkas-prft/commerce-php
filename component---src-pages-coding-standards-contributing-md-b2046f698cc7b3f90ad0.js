"use strict";(self.webpackChunkcommerce_php=self.webpackChunkcommerce_php||[]).push([[81697],{93264:function(e,t,n){n.r(t),n.d(t,{_frontmatter:function(){return l},default:function(){return c}});var i,a=n(87462),o=n(63366),r=(n(15007),n(64983)),s=n(91515),d=["components"],l={},m=(i="InlineAlert",function(e){return console.warn("Component "+i+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.mdx)("div",e)}),u={_frontmatter:l},p=s.Z;function c(e){var t=e.components,n=(0,o.Z)(e,d);return(0,r.mdx)(p,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.mdx)("h1",{id:"contributing"},"Contributing"),(0,r.mdx)("p",null,"Like many large projects, Adobe Commerce and Magento Open Source have coding standards."),(0,r.mdx)("p",null,"Use the ",(0,r.mdx)("a",{parentName:"p",href:"index.md"},"coding standards")," when you contribute to the Adobe Commerce and Magento Open Source codebase or create an extension. It is possible that a rule that you consider important is not covered yet."),(0,r.mdx)("p",null,"You can add your own custom rules, using either PHPCS or ESLint, and contribute those to the ",(0,r.mdx)("a",{parentName:"p",href:"https://github.com/magento/magento-coding-standard"},"magento-coding-standard")," repository so everyone can use those custome rules."),(0,r.mdx)("p",null,"To start your contribution:"),(0,r.mdx)("ol",null,(0,r.mdx)("li",{parentName:"ol"},"Fork the code and clone this fork into your local environment."),(0,r.mdx)("li",{parentName:"ol"},"Create a new branch and add changes."),(0,r.mdx)("li",{parentName:"ol"},"Merge changes into the magento-coding-standard repository.")),(0,r.mdx)("h2",{id:"creating-a-new-phpcs-sniff"},"Creating a new PHPCS sniff"),(0,r.mdx)("p",null,"PHPCS rules are called sniffs. A sniff is just a static code analyzer that will process our custom logic every time it finds an occurrence or any tokens we choose. This custom logic is in charge of identifying if there's a violation of a certain rule in an specific code, and will return an ",(0,r.mdx)("strong",{parentName:"p"},"error")," or ",(0,r.mdx)("strong",{parentName:"p"},"warning")," depending on the severity of that issue."),(0,r.mdx)("p",null,"Follow the ",(0,r.mdx)("a",{parentName:"p",href:"https://github.com/squizlabs/PHP_CodeSniffer/wiki/Coding-Standard-Tutorial"},"official PHPCS guide")," steps to write a sniff."),(0,r.mdx)(m,{variant:"info",slots:"text",mdxType:"InlineAlert"}),(0,r.mdx)("p",null,"The ",(0,r.mdx)("a",{parentName:"p",href:"https://github.com/magento/magento-coding-standard"},"magento-coding-standard")," repository has examples at the ",(0,r.mdx)("inlineCode",{parentName:"p"},"Magento2/Sniffs")," directory."),(0,r.mdx)("p",null,"Sniffs must be also covered by a unit test to ensure its behaviour is correct. This unit test defines a set of line numbers, each of them with a number of expected errors or warnings, which will be compared with the results obtained from executing the sniff against one or several fixtures containing real code."),(0,r.mdx)("p",null,"The unit test must extend the ",(0,r.mdx)("inlineCode",{parentName:"p"},"AbstractSniffUnitTest")," class and its file name must be equal to the sniff's file name, excluding the ",(0,r.mdx)("inlineCode",{parentName:"p"},"sniff")," suffix. Fixture files must follow the same rule, changing its extension to ",(0,r.mdx)("inlineCode",{parentName:"p"},".inc")," in the case of PHP fixtures."),(0,r.mdx)("blockquote",null,(0,r.mdx)("p",{parentName:"blockquote"},"Example of Sniff")),(0,r.mdx)("p",null,"The sniff called ",(0,r.mdx)("inlineCode",{parentName:"p"},"Sniffs/Legacy/MageEntitySniff.php")," has its unit test at ",(0,r.mdx)("inlineCode",{parentName:"p"},"Tests/Legacy/MageEntityUnitTest.php"),", which in turn will use the fixture at ",(0,r.mdx)("inlineCode",{parentName:"p"},"Tests/Legacy/MageEntityUnitTest.inc"),"."),(0,r.mdx)("p",null,"Add your new sniff to the ",(0,r.mdx)("inlineCode",{parentName:"p"},"Magento2/ruleset.xml")," file, so it is executed alongside the other existing coding standards."),(0,r.mdx)("p",null,"Depending on the type of issue returned, the rule will have assigned a type of ",(0,r.mdx)("em",{parentName:"p"},"warning")," or ",(0,r.mdx)("em",{parentName:"p"},"error"),", as well as a severity level from 10 to 1, being 10 the most severe. This number is assigned based on your own judgment, but make sure to review the current sniffs and their assigned levels beforehand to get an idea of in which severity your new issue fits better."),(0,r.mdx)(m,{variant:"warning",slots:"text",mdxType:"InlineAlert"}),(0,r.mdx)("p",null,"Rules are sorted by severity."),(0,r.mdx)("h2",{id:"creating-a-new-eslint-rule"},"Creating a new ESLint rule"),(0,r.mdx)("p",null,"ESLint rules are similar in purpose to PHPCS sniffs, but this time targeted against Javascript files. Again, the best way to learn how to write your custom rules is by following the ",(0,r.mdx)("a",{parentName:"p",href:"https://eslint.org/docs/developer-guide/working-with-rules"},"official guide"),"."),(0,r.mdx)("p",null,"Rules must be added to the ",(0,r.mdx)("inlineCode",{parentName:"p"},"eslint/rules")," directory, and also registered in one of the ",(0,r.mdx)("inlineCode",{parentName:"p"},".eslintrc-*")," files, depending on which area the\nrule focuses on."),(0,r.mdx)("p",null,"As with PHPCS sniffs, ESLint rules need to be covered by a unit test in order to be considered for merging into the mainline. In this case, unit tests itself are written in PHP instead of Javascript, and follow a similar structure than their PHP counterparts. Test classes extend from ",(0,r.mdx)("inlineCode",{parentName:"p"},"AbstractEslintTestCase")," and must implement the ",(0,r.mdx)("inlineCode",{parentName:"p"},"testExecute()")," method, which basically asserts that checking the passed JS file will return the expected error message. You can check examples at ",(0,r.mdx)("inlineCode",{parentName:"p"},"Tests/Eslint"),"."),(0,r.mdx)("h2",{id:"contributing-1"},"Contributing"),(0,r.mdx)("ol",null,(0,r.mdx)("li",{parentName:"ol"},"When your code is ready, open a pull request against the magento-coding-standard from your branch into the upstream ",(0,r.mdx)("inlineCode",{parentName:"li"},"develop"),"."),(0,r.mdx)("li",{parentName:"ol"},"PR will be reviewed by the repository's maintainers and merged.")),(0,r.mdx)(m,{variant:"info",slots:"text",mdxType:"InlineAlert"}),(0,r.mdx)("p",null,"Review general ",(0,r.mdx)("a",{parentName:"p",href:"https://developer.adobe.com/commerce/contributor/guides/code-contributions/"},"documentation for contributors"),"."))}c.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-coding-standards-contributing-md-b2046f698cc7b3f90ad0.js.map