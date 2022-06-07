"use strict";(self.webpackChunkcommerce_php=self.webpackChunkcommerce_php||[]).push([[49219],{7007:function(e,a,t){t.r(a),t.d(a,{_frontmatter:function(){return m},default:function(){return u}});var n,o=t(87462),i=t(63366),l=(t(15007),t(64983)),r=t(91515),s=["components"],m={},d=(n="InlineAlert",function(e){return console.warn("Component "+n+" was not imported, exported, or provided by MDXProvider as global scope"),(0,l.mdx)("div",e)}),p={_frontmatter:m},c=r.Z;function u(e){var a=e.components,t=(0,i.Z)(e,s);return(0,l.mdx)(c,(0,o.Z)({},p,t,{components:a,mdxType:"MDXLayout"}),(0,l.mdx)("h1",{id:"migrate-installupgrade-scripts-to-declarative-schema"},"Migrate install/upgrade scripts to declarative schema"),(0,l.mdx)("p",null,"Adobe Commerce and Magento Open Source provide several commands to help convert your installation and upgrade scripts to declarative schema. These commands also help you test your changes, roll back your changes if anything goes wrong, and help your module maintain backward compatibility."),(0,l.mdx)(d,{variant:"info",slots:"text",mdxType:"InlineAlert"}),(0,l.mdx)("p",null,"Once you start with data patches, you cannot continue to use upgrade scripts."),(0,l.mdx)("h2",{id:"convert-installupgrade-schema-scripts-to-db_schemaxml-files"},"Convert install/upgrade schema scripts to db_schema.xml files"),(0,l.mdx)("p",null,"The ",(0,l.mdx)("strong",{parentName:"p"},"Schema Listener Tool")," converts pre-Adobe Commerce and Magento Open Source 2.3 migration scripts into declarative schema. To use this tool, you specify an argument when you run the ",(0,l.mdx)("inlineCode",{parentName:"p"},"setup:install")," or ",(0,l.mdx)("inlineCode",{parentName:"p"},"setup:upgrade")," CLI command. As the application is installed or upgraded, the system logs all schema changes per module, then persists the changes in a series of ",(0,l.mdx)("inlineCode",{parentName:"p"},"db_schema.xml")," files (one per affected module)."),(0,l.mdx)(d,{variant:"info",slots:"text",mdxType:"InlineAlert"}),(0,l.mdx)("p",null,"The Schema Listener tool listens for schema changes and attempts to change application code, so it should not be run in production mode. It is disabled by default."),(0,l.mdx)("p",null,"To convert your install or upgrade script, run one of the following commands:"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-bash"},"bin/magento setup:install --convert-old-scripts=1\n")),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-bash"},"bin/magento setup:upgrade --convert-old-scripts=1\n")),(0,l.mdx)(d,{variant:"info",slots:"text",mdxType:"InlineAlert"}),(0,l.mdx)("p",null,"In Adobe Commerce and Magento Open Source 2.3 Alpha, the ",(0,l.mdx)("inlineCode",{parentName:"p"},"--convert-old-scripts")," parameter was named ",(0,l.mdx)("inlineCode",{parentName:"p"},"--convert_old_scripts"),"."),(0,l.mdx)("h3",{id:"troubleshooting"},"Troubleshooting"),(0,l.mdx)("p",null,"The Schema Listener Tool cannot convert everything that can appear in a pre-Adobe Commerce and Magento Open Source 2.3 migration script."),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},"The tool supports only DDL operations represented in ",(0,l.mdx)("inlineCode",{parentName:"li"},"\\Magento\\Framework\\DB\\Adapter\\Pdo\\Mysql"),". As a result, the tool ignores all custom DDL operations."),(0,l.mdx)("li",{parentName:"ul"},"The tool ignores all raw SQL in your ",(0,l.mdx)("inlineCode",{parentName:"li"},"InstallSchema")," or ",(0,l.mdx)("inlineCode",{parentName:"li"},"UpgradeSchema")," scripts."),(0,l.mdx)("li",{parentName:"ul"},"Any DDL statements in a ",(0,l.mdx)("inlineCode",{parentName:"li"},"Recurring")," file will not be transferred to the new schema, because this file should be designed to run during each installation or upgrade."),(0,l.mdx)("li",{parentName:"ul"},"See ",(0,l.mdx)("a",{parentName:"li",href:"configuration.md"},"Configure declarative schema")," if you need to make manual modifications to your schema.")),(0,l.mdx)("h2",{id:"convert-installupgrade-data-scripts-to-the-data-patch-format"},"Convert install/upgrade data scripts to the data patch format"),(0,l.mdx)("p",null,"Old data scripts cannot be converted automatically. The following steps help make the conversion go as smoothly as possible."),(0,l.mdx)("ol",null,(0,l.mdx)("li",{parentName:"ol"},(0,l.mdx)("p",{parentName:"li"},"Generate a patch stub."),(0,l.mdx)("pre",{parentName:"li"},(0,l.mdx)("code",{parentName:"pre",className:"language-bash"},"bin/magento setup:db-declaration:generate-patch [options] <module-name> <patch-name>\n")),(0,l.mdx)("p",{parentName:"li"},"where ",(0,l.mdx)("inlineCode",{parentName:"p"},"[options]")," can be any of the following:"),(0,l.mdx)("p",{parentName:"li"},(0,l.mdx)("inlineCode",{parentName:"p"},"--revertable[=true | false]")," - Determines whether the patch is revertable. The default value is ",(0,l.mdx)("inlineCode",{parentName:"p"},"false"),"."),(0,l.mdx)("p",{parentName:"li"},(0,l.mdx)("inlineCode",{parentName:"p"},"--type[=<type>]")," - Specifies what type of patch to generate. The default is ",(0,l.mdx)("inlineCode",{parentName:"p"},"data"),".")),(0,l.mdx)("li",{parentName:"ol"},(0,l.mdx)("p",{parentName:"li"},"All released modules that previously used upgrade scripts must support backward compatibility by implementing ",(0,l.mdx)("inlineCode",{parentName:"p"},"\\Magento\\Framework\\Setup\\Patch\\PatchVersionInterface")," and the ",(0,l.mdx)("inlineCode",{parentName:"p"},"getVersion")," method. This method allows you to skip changes that were applied in previous versions and were done by old scripts. The returned value of the ",(0,l.mdx)("inlineCode",{parentName:"p"},"getVersion")," method in this case should be equal to the value of a version in ",(0,l.mdx)("inlineCode",{parentName:"p"},"version_compare")," function in old scripts. When the ",(0,l.mdx)("inlineCode",{parentName:"p"},"InstallData.php")," script does not have any versions to compare, you can specify the first version of your module. See ",(0,l.mdx)("a",{parentName:"p",href:"patches.md"},"Develop declarative data and schema patches")," for more information."))),(0,l.mdx)("h2",{id:"dry-run-mode"},"Dry run mode"),(0,l.mdx)("p",null,"It is important that declarative installation/upgrade does not break anything. A useful way to ensure this is use dry run mode to examine all the DDL SQL statements that are generated during the declarative installation process. In dry run mode, the database state does not change. The schemas and data will be the same before and after installation."),(0,l.mdx)("p",null,"To enable dry run mode, run one of the following commands:"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-bash"},"bin/magento setup:install --dry-run=1\n")),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-bash"},"bin/magento setup:upgrade --dry-run=1\n")),(0,l.mdx)("p",null,"As a result of specifying the ",(0,l.mdx)("inlineCode",{parentName:"p"},"--dry-run=1")," flag, the application writes a log file at ",(0,l.mdx)("inlineCode",{parentName:"p"},"<Application_Root>/var/log/dry-run-installation.log"),". This file contains all the DDL SQL statements that are generated during installation. You can use these SQL statements for debugging and optimizing performance processes."),(0,l.mdx)("h2",{id:"safe-installation-and-rollback"},"Safe installation and rollback"),(0,l.mdx)("p",null,"The advantage and the main problem of declarative schema is that it can blindly modify the database schema. For example, a developer can make a mistake and potentially remove a structural element from the database, causing data loss."),(0,l.mdx)("p",null,"To help prevent data loss, you can specify command line options that dump all the data that could be lost as a result of an installation. The dumped data can then be restored manually or automatically. These arguments are optional--you do not have to create a manual dump during a system upgrade. ",(0,l.mdx)("em",{parentName:"p"},"(Note that this works only with schema.)")),(0,l.mdx)("p",null,"Adobe Commerce and Magento Open Source provide options to the ",(0,l.mdx)("inlineCode",{parentName:"p"},"setup:install")," and ",(0,l.mdx)("inlineCode",{parentName:"p"},"setup:upgrade")," commands that enable safe installations and rollbacks:"),(0,l.mdx)("p",null,(0,l.mdx)("inlineCode",{parentName:"p"},"--safe-mode=1")," - Creates a data dump during the installation or upgrade process."),(0,l.mdx)("p",null,(0,l.mdx)("inlineCode",{parentName:"p"},"--data-restore=1")," - (Used with the ",(0,l.mdx)("inlineCode",{parentName:"p"},"setup:upgrade")," command only.) Performs a rollback. Before you rollback, you must first check out code to the previous version of Magento. Then run ",(0,l.mdx)("inlineCode",{parentName:"p"},"setup:upgrade  --data-restore=1"),"."),(0,l.mdx)("p",null,"Several types of operations have an effect on data dumps and rollbacks."),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("p",{parentName:"li"},(0,l.mdx)("em",{parentName:"p"},"Destructive operations (DO)")," - SQL DDL operations that cause data deletion or data corruption. The following operations are destructive:"),(0,l.mdx)("ul",{parentName:"li"},(0,l.mdx)("li",{parentName:"ul"},"Deleting a table"),(0,l.mdx)("li",{parentName:"ul"},"Deleting a column"),(0,l.mdx)("li",{parentName:"ul"},"Reducing column length"),(0,l.mdx)("li",{parentName:"ul"},"Changing column precision"),(0,l.mdx)("li",{parentName:"ul"},"Changing the column type"))),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("p",{parentName:"li"},(0,l.mdx)("em",{parentName:"p"},"Opposite to destructive operations (ODO)")," - In the case of a failed installation, SQL DDL operations that are the opposite of destructive operations can be used for rollback. For example, changing the column type from CHAR to INT is a destructive operation. The rollback operation changes the type from INT to CHAR."))),(0,l.mdx)("p",null,"When safe mode is enabled, Adobe Commerce and Magento Open Source create a CSV file each time a destructive operation for a table or column occurs. You can find these files at the following locations:"),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("inlineCode",{parentName:"li"},"Magento_root/var/declarative_dumps_csv/{column_name_column_type_other_dimensions}.csv")),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("inlineCode",{parentName:"li"},"Magento_root/var/declarative_dumps_csv/{table_name}.csv"))),(0,l.mdx)("p",null,"Each CSV file contains a row that defines the column (or other database entity) names as well as rows of values, as shown in the following image:"),(0,l.mdx)("p",null,(0,l.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1280px"}},"\n      ",(0,l.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"36.25%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,l.mdx)("picture",{parentName:"span"},"\n          ",(0,l.mdx)("source",{parentName:"picture",srcSet:["/commerce-php/static/f991ec2a50535fa9ffa8e56a4871bfb8/cb523/dump_example.webp 320w","/commerce-php/static/f991ec2a50535fa9ffa8e56a4871bfb8/797b9/dump_example.webp 640w","/commerce-php/static/f991ec2a50535fa9ffa8e56a4871bfb8/4b075/dump_example.webp 1280w","/commerce-php/static/f991ec2a50535fa9ffa8e56a4871bfb8/e5624/dump_example.webp 1442w"],sizes:"(max-width: 1280px) 100vw, 1280px",type:"image/webp"}),"\n          ",(0,l.mdx)("source",{parentName:"picture",srcSet:["/commerce-php/static/f991ec2a50535fa9ffa8e56a4871bfb8/72799/dump_example.png 320w","/commerce-php/static/f991ec2a50535fa9ffa8e56a4871bfb8/6af66/dump_example.png 640w","/commerce-php/static/f991ec2a50535fa9ffa8e56a4871bfb8/21b4d/dump_example.png 1280w","/commerce-php/static/f991ec2a50535fa9ffa8e56a4871bfb8/bd9eb/dump_example.png 1442w"],sizes:"(max-width: 1280px) 100vw, 1280px",type:"image/png"}),"\n          ",(0,l.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/commerce-php/static/f991ec2a50535fa9ffa8e56a4871bfb8/21b4d/dump_example.png",alt:"Dump Example",title:"Dump Example",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    ")),(0,l.mdx)("h2",{id:"create-a-schema-whitelist"},"Create a schema whitelist"),(0,l.mdx)("p",null,"Backward compatibility must be maintained. Therefore, declarative schema does not automatically delete database tables, columns or keys that are not defined in a ",(0,l.mdx)("inlineCode",{parentName:"p"},"db_schema.xml")," file. Declarative schema cannot delete these elements because these items can be declared somewhere else, such as in an ",(0,l.mdx)("inlineCode",{parentName:"p"},"Setup/UpgradeSchema.php")," file."),(0,l.mdx)(d,{variant:"warning",slots:"text",mdxType:"InlineAlert"}),(0,l.mdx)("p",null,"Whitelists cannot be generated on application instances that use a database prefix. The presence of a prefix impacts the names of some DB entities, such as the names of keys, and these names cannot be used in generated whitelists. The whitelist should be generated by the extension developer on a development environment with no prefixes."),(0,l.mdx)("p",null,"The ",(0,l.mdx)("inlineCode",{parentName:"p"},"<module_vendor>/<module_name>/etc/db_schema_whitelist.json")," file provides a history of all tables, columns, and keys added with declarative schema. It is required to allow drop operations. It can be generated manually or created automatically with the following command:"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-bash"},"bin/magento setup:db-declaration:generate-whitelist [options]\n")),(0,l.mdx)("p",null,(0,l.mdx)("inlineCode",{parentName:"p"},"[options]")," can be:"),(0,l.mdx)("p",null,(0,l.mdx)("inlineCode",{parentName:"p"},"--module-name[=MODULE-NAME]")," specifies which module to generate a whitelist for. If no module name is specified, then the default behavior is to generate a whitelist for all modules. You can also explicitly set ",(0,l.mdx)("inlineCode",{parentName:"p"},"--module-name=all"),"."),(0,l.mdx)(d,{variant:"info",slots:"text",mdxType:"InlineAlert"}),(0,l.mdx)("p",null,"In Adobe Commerce and Magento Open Source 2.3 Alpha, the ",(0,l.mdx)("inlineCode",{parentName:"p"},"setup:db-declaration:generate-whitelist")," command was named ",(0,l.mdx)("inlineCode",{parentName:"p"},"declaration:generate:whitelist"),"."),(0,l.mdx)("p",null,"As a best practice, you should generate a new whitelist file for each release. You must generate the whitelist  in any release that contains changes in the ",(0,l.mdx)("inlineCode",{parentName:"p"},"db_schema.xml")," file."),(0,l.mdx)("p",null,"The following code sample shows a sample ",(0,l.mdx)("inlineCode",{parentName:"p"},"db_schema_whitelist.json")," file:"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-json"},'{\n    "adminnotification_inbox": {\n        "column": {\n            "notification_id": true,\n            "severity": true,\n            "date_added": true,\n            "title": true,\n            "description": true,\n            "url": true,\n            "is_read": true,\n            "is_remove": true\n        },\n        "index": {\n            "ADMINNOTIFICATION_INBOX_SEVERITY": true,\n            "ADMINNOTIFICATION_INBOX_IS_READ": true,\n            "ADMINNOTIFICATION_INBOX_IS_REMOVE": true\n        },\n        "constraint": {\n            "PRIMARY": true\n        }\n    },\n    "admin_system_messages": {\n        "column": {\n            "identity": true,\n            "severity": true,\n            "created_at": true\n        },\n        "constraint": {\n            "PRIMARY": true\n        }\n    }\n}\n')),(0,l.mdx)(d,{variant:"info",slots:"text",mdxType:"InlineAlert"}),(0,l.mdx)("p",null,"This file is a temporary solution. It will be removed in the future, when upgrade scripts are no longer supported."),(0,l.mdx)("h2",{id:"resolve-reference-ids"},"Resolve reference IDs"),(0,l.mdx)("p",null,"The sample ",(0,l.mdx)("inlineCode",{parentName:"p"},"db_schema_whitelist.json")," file above contains system-generated constraint and index names. ",(0,l.mdx)("a",{parentName:"p",href:"configuration.md"},"Configure your ",(0,l.mdx)("inlineCode",{parentName:"a"},"db_schema.xml")," file")," so that the ",(0,l.mdx)("inlineCode",{parentName:"p"},"referenceId")," attributes match these values."),(0,l.mdx)(d,{variant:"info",slots:"text",mdxType:"InlineAlert"}),(0,l.mdx)("p",null,"In Adobe Commerce and Magento Open Source 2.3.0, the identifying attribute for constraints and index definitions is ",(0,l.mdx)("inlineCode",{parentName:"p"},"referenceId"),". In pre-release versions, the attribute was ",(0,l.mdx)("inlineCode",{parentName:"p"},"name"),"."))}u.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-development-components-declarative-schema-migration-scripts-md-73452fcdc0a8df00758b.js.map