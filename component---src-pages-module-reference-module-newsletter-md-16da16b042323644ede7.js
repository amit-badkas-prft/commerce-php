"use strict";(self.webpackChunkcommerce_php=self.webpackChunkcommerce_php||[]).push([[13032],{24907:function(e,n,t){t.r(n),t.d(n,{_frontmatter:function(){return o},default:function(){return p}});var l=t(87462),i=t(63366),a=(t(15007),t(64983)),m=t(91515),d=["components"],o={},r={_frontmatter:o},u=m.Z;function p(e){var n=e.components,t=(0,i.Z)(e,d);return(0,a.mdx)(u,(0,l.Z)({},r,t,{components:n,mdxType:"MDXLayout"}),(0,a.mdx)("h1",{id:"magento_newsletter-module"},"Magento_Newsletter module"),(0,a.mdx)("p",null,"This module allows clients to subscribe for information about new promotions and discounts and allows store administrators to send newsletters to clients subscribed for them."),(0,a.mdx)("h2",{id:"installation"},"Installation"),(0,a.mdx)("p",null,"Before installing this module, note that the Magento_Newsletter is dependent on the following modules:"),(0,a.mdx)("ul",null,(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("inlineCode",{parentName:"li"},"Magento_Store")),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("inlineCode",{parentName:"li"},"Magento_Customer")),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("inlineCode",{parentName:"li"},"Magento_Eav")),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("inlineCode",{parentName:"li"},"Magento_Widget"))),(0,a.mdx)("p",null,"Before disabling or uninstalling this module, note that the following modules depends on this module:"),(0,a.mdx)("ul",null,(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("inlineCode",{parentName:"li"},"Magento_NewsletterGraphQl"))),(0,a.mdx)("p",null,"This module creates the following tables in the database:"),(0,a.mdx)("ul",null,(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("inlineCode",{parentName:"li"},"newsletter_subscriber")),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("inlineCode",{parentName:"li"},"newsletter_template")),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("inlineCode",{parentName:"li"},"newsletter_queue")),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("inlineCode",{parentName:"li"},"newsletter_queue_link")),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("inlineCode",{parentName:"li"},"newsletter_queue_store_link")),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("inlineCode",{parentName:"li"},"newsletter_problem"))),(0,a.mdx)("p",null,"For information about a module installation in Magento 2, see ",(0,a.mdx)("a",{parentName:"p",href:"https://devdocs.magento.com/guides/v2.4/install-gde/install/cli/install-cli-subcommands-enable.html"},"Enable or disable modules"),"."),(0,a.mdx)("h2",{id:"extensibility"},"Extensibility"),(0,a.mdx)("p",null,"Extension developers can interact with the Magento_Newsletter module. For more information about the Magento extension mechanism, see ",(0,a.mdx)("a",{parentName:"p",href:"https://devdocs.magento.com/guides/v2.4/extension-dev-guide/plugins.html"},"Magento plug-ins"),"."),(0,a.mdx)("p",null,(0,a.mdx)("a",{parentName:"p",href:"https://devdocs.magento.com/guides/v2.4/extension-dev-guide/depend-inj.html"},"The Magento dependency injection mechanism")," enables you to override the functionality of the Magento_Newsletter module."),(0,a.mdx)("p",null,"A lot of functionality in the module is on JavaScript, use ",(0,a.mdx)("a",{parentName:"p",href:"https://devdocs.magento.com/guides/v2.4/javascript-dev-guide/javascript/js_mixins.html"},"mixins")," to extend it."),(0,a.mdx)("h3",{id:"layouts"},"Layouts"),(0,a.mdx)("p",null,"This module introduces the following layouts in the ",(0,a.mdx)("inlineCode",{parentName:"p"},"view/frontend/layout")," and ",(0,a.mdx)("inlineCode",{parentName:"p"},"view/adminhtml/layout")," directories:"),(0,a.mdx)("ul",null,(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("inlineCode",{parentName:"li"},"view/adminhtml/layout"),":",(0,a.mdx)("ul",{parentName:"li"},(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("inlineCode",{parentName:"li"},"newsletter_problem_block")),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("inlineCode",{parentName:"li"},"newsletter_problem_grid")),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("inlineCode",{parentName:"li"},"newsletter_problem_index")),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("inlineCode",{parentName:"li"},"newsletter_queue_edit")),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("inlineCode",{parentName:"li"},"newsletter_queue_grid")),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("inlineCode",{parentName:"li"},"newsletter_queue_grid_block")),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("inlineCode",{parentName:"li"},"newsletter_queue_index")),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("inlineCode",{parentName:"li"},"newsletter_queue_preview")),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("inlineCode",{parentName:"li"},"newsletter_queue_preview_popup")),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("inlineCode",{parentName:"li"},"newsletter_subscriber_block")),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("inlineCode",{parentName:"li"},"newsletter_subscriber_exportcsv")),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("inlineCode",{parentName:"li"},"newsletter_subscriber_exportxml")),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("inlineCode",{parentName:"li"},"newsletter_subscriber_grid")),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("inlineCode",{parentName:"li"},"newsletter_subscriber_index")),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("inlineCode",{parentName:"li"},"newsletter_template_edit")),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("inlineCode",{parentName:"li"},"newsletter_template_preview")),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("inlineCode",{parentName:"li"},"newsletter_template_preview_popup")),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("inlineCode",{parentName:"li"},"preview")))),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("inlineCode",{parentName:"li"},"view/frontend/layout"),":",(0,a.mdx)("ul",{parentName:"li"},(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("inlineCode",{parentName:"li"},"customer_account")),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("inlineCode",{parentName:"li"},"customer_account_create")),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("inlineCode",{parentName:"li"},"newsletter_manage_index")),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("inlineCode",{parentName:"li"},"default"))))),(0,a.mdx)("p",null,"For more information about a layout in Magento 2, see the ",(0,a.mdx)("a",{parentName:"p",href:"https://devdocs.magento.com/guides/v2.4/frontend-dev-guide/layouts/layout-overview.html"},"Layout documentation"),"."),(0,a.mdx)("h3",{id:"ui-components"},"UI components"),(0,a.mdx)("p",null,"This module extends customer form ui component the configuration file located in the ",(0,a.mdx)("inlineCode",{parentName:"p"},"view/base/ui_component")," directory:"),(0,a.mdx)("ul",null,(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("inlineCode",{parentName:"li"},"customer_form"))),(0,a.mdx)("p",null,"For information about a UI component in Magento 2, see ",(0,a.mdx)("a",{parentName:"p",href:"http://devdocs.magento.com/guides/v2.4/ui_comp_guide/bk-ui_comps.html"},"Overview of UI components"),"."),(0,a.mdx)("h2",{id:"additional-information"},"Additional information"),(0,a.mdx)("p",null,(0,a.mdx)("a",{parentName:"p",href:"https://docs.magento.com/user-guide/marketing/newsletters.html"},"Learn more about newsletter"),"."),(0,a.mdx)("h3",{id:"cron-options"},"Cron options"),(0,a.mdx)("p",null,"Cron group configuration can be set at ",(0,a.mdx)("inlineCode",{parentName:"p"},"etc/crontab.xml"),":"),(0,a.mdx)("ul",null,(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("inlineCode",{parentName:"li"},"newsletter_send_all")," - schedules newsletter sending")),(0,a.mdx)("p",null,(0,a.mdx)("a",{parentName:"p",href:"http://devdocs.magento.com/guides/v2.4/config-guide/cli/config-cli-subcommands-cron.html"},"Learn how to configure and run cron in Magento."),"."))}p.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-module-reference-module-newsletter-md-16da16b042323644ede7.js.map