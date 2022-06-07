"use strict";(self.webpackChunkcommerce_php=self.webpackChunkcommerce_php||[]).push([[54820],{67787:function(e,t,a){a.r(t),a.d(t,{_frontmatter:function(){return d},default:function(){return u}});var o=a(87462),n=a(63366),s=(a(15007),a(64983)),i=a(91515),r=["components"],d={},l={_frontmatter:d},m=i.Z;function u(e){var t=e.components,a=(0,n.Z)(e,r);return(0,s.mdx)(m,(0,o.Z)({},l,a,{components:t,mdxType:"MDXLayout"}),(0,s.mdx)("h2",{id:"overview"},"Overview"),(0,s.mdx)("p",null,"The Magento_SharedCatalog modules defines the visibility of products as well as product prices in the catalog and in B2B quotes for different company accounts. "),(0,s.mdx)("p",null,"The module allows a merchant to create multiple shared catalogs, link them to one or more company accounts, and set different product prices. Shared catalogs also control the visibility of products and categories for a company in the storefront. The shared catalog type (public or custom) defines the scope of products and prices available for guest users vs logged-in users. The system can have only one public and any number of custom shared catalogs."),(0,s.mdx)("p",null,"The module relies on the CatalogPermissions module, in that the visibility of categories for a customer group is defined by category permissions for this customer group. Once a shared catalog is enabled in B2B features, the category permissions are automatically enabled. Adding a product or a category to a shared catalog enables appropriate category permissions for the customer groups linked to this shared catalog."),(0,s.mdx)("p",null,"The module provides web APIs and can be integrated with third-party solutions to manage shared catalogs in Magento."),(0,s.mdx)("h2",{id:"installation-details"},"Installation details"),(0,s.mdx)("p",null,"The module heavily depends on the Magento_Company module, which must be installed and enabled the first. Category permissions must be enabled for shared catalogs to work properly. Price configuration for a shared catalog requires the start of a message queue consumer ",(0,s.mdx)("inlineCode",{parentName:"p"},"sharedCatalogUpdatePrice"),"."),(0,s.mdx)("p",null,"The module does not create any backward incompatible changes. Can be deactivated and uninstalled at any time."),(0,s.mdx)("p",null,"When the module is uninstalled, the other ","[ProductType]","SharedCatalog modules won't work."),(0,s.mdx)("h2",{id:"structure"},"Structure"),(0,s.mdx)("p",null,(0,s.mdx)("a",{parentName:"p",href:"https://devdocs.magento.com/guides/v2.4/extension-dev-guide/build/module-file-structure.html"},"Learn about a typical file structure for a Magento 2 module"),"."),(0,s.mdx)("h2",{id:"extensibility"},"Extensibility"),(0,s.mdx)("p",null,"Shared catalogs are using message queues to save prices. For more information about queues, see ",(0,s.mdx)("a",{parentName:"p",href:"https://devdocs.magento.com/guides/v2.4/extension-dev-guide/message-queues/message-queues.html"},"Message Queues"),"."),(0,s.mdx)("p",null,"Extension developers can interact with the Magento_SharedCatalog module. For more information about the Magento extension mechanism, see ",(0,s.mdx)("a",{parentName:"p",href:"https://devdocs.magento.com/guides/v2.4/extension-dev-guide/plugins.html"},"Magento plug-ins"),"."),(0,s.mdx)("p",null,(0,s.mdx)("a",{parentName:"p",href:"https://devdocs.magento.com/guides/v2.4/extension-dev-guide/depend-inj.html"},"The Magento dependency injection mechanism")," enables you to override the functionality of the Magento_SharedCatalog module."),(0,s.mdx)("h3",{id:"layouts"},"Layouts"),(0,s.mdx)("p",null,"You can extend and override layouts in the ",(0,s.mdx)("inlineCode",{parentName:"p"},"Magento\\SharedCatalog\\view\\adminhtml\\layout")," directory."),(0,s.mdx)("p",null,"For more information about layouts, see the ",(0,s.mdx)("a",{parentName:"p",href:"https://devdocs.magento.com/guides/v2.4/frontend-dev-guide/layouts/layout-overview.html"},"Layout documentation"),"."),(0,s.mdx)("h3",{id:"ui-components"},"UI components"),(0,s.mdx)("p",null,"The ",(0,s.mdx)("inlineCode",{parentName:"p"},"Magento\\SharedCatalog\\view\\adminhtml\\ui_component")," directory contains extensible UI components."),(0,s.mdx)("ul",null,(0,s.mdx)("li",{parentName:"ul"},(0,s.mdx)("p",{parentName:"li"},"Forms: Company, catalog rule, catalog rule staging, product, sales rule, sales rule staging update, shared catalog, shared catalog tier price.")),(0,s.mdx)("li",{parentName:"ul"},(0,s.mdx)("p",{parentName:"li"},"Listings: Company, product, shared catalog company, shared catalog, shared catalog product pricing, shared catalog product listing."))),(0,s.mdx)("p",null,"For more information, see ",(0,s.mdx)("a",{parentName:"p",href:"https://devdocs.magento.com/guides/v2.4/ui_comp_guide/components/ui-listing-grid.html"},"UI Listing/Grid Component")," and ",(0,s.mdx)("a",{parentName:"p",href:"https://devdocs.magento.com/guides/v2.4/ui_comp_guide/components/ui-form.html"},"UI Form Component"),"."))}u.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-module-reference-module-shared-catalog-md-6ceed90074527be6a7ef.js.map