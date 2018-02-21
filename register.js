/* eslint camelcase: 0 */
import { Reaction } from "/server/api";

Reaction.registerPackage({
  label: "Static Pages",
  name: "reaction-static-pages",
  icon: "fa fa-pencil-square-o",
  autoEnable: true,
  settings: {},
  registry: [
    {
      route: "aboutus",
      name: "aboutus",
      label: "About Us",
      template: "aboutus",
      workflow: "coreWorkflow"
    }, {
      route: "returns",
      name: "returns",
      label: "Returns & Exchange",
      template: "returns",
      workflow: "coreWorkflow"
    }, {
      route: "shipping",
      name: "shipping",
      label: "Shipping Policy",
      template: "shipping",
      workflow: "coreWorkflow"
    }, {
      route: "privacy",
      name: "privacy",
      label: "Privacy Policy",
      template: "privacy",
      workflow: "coreWorkflow"
    }
  ],
  layout: [{
    layout: "coreLayout",
    workflow: "coreWorkflow",
    theme: "default",
    enabled: true,
    structure: {
      layoutHeader: "NavBar",
      layoutFooter: "Footer",
      notFound: "notFound"
    }
  }]
});
