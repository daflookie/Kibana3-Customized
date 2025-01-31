/** @scratch /configuration/config.js/1
 *
 * == Configuration
 * config.js is where you will find the core Kibana configuration. This file contains parameter that
 * must be set before kibana is run for the first time.
 */
define(['settings'],
function (Settings) {
  "use strict";

  /** @scratch /configuration/config.js/2
   *
   * === Parameters
   */
  return new Settings({

    /** @scratch /configuration/config.js/5
     *
     * ==== elasticsearch
     *
     * The URL to your elasticsearch server. You almost certainly don't
     * want +http://localhost:9200+ here. Even if Kibana and Elasticsearch are on
     * the same host. By default this will attempt to reach ES at the same host you have
     * kibana installed on. You probably want to set it to the FQDN of your
     * elasticsearch host
     */
    elasticsearch: "http://"+window.location.hostname+":9200",

    /** @scratch /configuration/config.js/5
     *
     * ==== api_version
     *
     * The elasticsearch api version you want to use. This must match the version of your elasticsearch server.
     *
     * Valid version: 0.9, 1.0, 1.1, 1.2
     */
    api_version: "1.0",

    /** @scratch /configuration/config.js/5
     *
     * ==== sniff
     *
     * Whether to sniff elasticsearch nodes on kibana start. kibana would send queries to nodes by round-robin. You may want to set to false if you had a proxy before elasticsearch cluster.
     *
     * Valid value: true, false
     */
    sniff: true,

    /** @scratch /configuration/config.js/5
     *
     * ==== request_timeout
     *
     * The timeout in milliseconds for requests to Elasticsearch
     */
    request_timeout: 30000,

    /** @scratch /configuration/config.js/5
     *
     * ==== default_route
     *
     * This is the default landing page when you don't specify a dashboard to load. You can specify
     * files, scripts or saved dashboards here. For example, if you had saved a dashboard called
     * `WebLogs' to elasticsearch you might use:
     *
     * default_route: '/dashboard/elasticsearch/WebLogs',
     */
    default_route     : '/dashboard/file/default.json',

    /** @scratch /configuration/config.js/5
     *
     * ==== kibana-int
     *
     * The default ES index to use for storing Kibana specific object
     * such as stored dashboards
     */
    kibana_index: "kibana3-int",


    /*
     * display notice on top of the page. you could config it as below
      notice: {
      'title':'kibana3 update',
      'text': 'Now updated to support Elasticsearch version 5.x!',
     },*/
     
     notice: null,

     /*
     * choose which catetory the dashboard belong to when save dashboard
     */
     dashboard_class: null,
    /** @scratch /configuration/config.js/5
     *
     * ==== panel_name
     *
     * An array of panel modules available. Panels will only be loaded when they are defined in the
     * dashboard, but this list is used in the "add panel" interface.
     */
    panel_names: [
      'histogram',
      'map',
      'goal',
      'table',
      'filtering',
      'timepicker',
      'text',
      'hits',
      'column',
      'trends',
      'bettermap',
      'query',
      'terms',
      'stats',
      'sparklines',
      'ranges',
      'percentiles'
    ],

    /** @scratch /configuration/config.js/5
     *
     * ==== dashboard_metrics
     *
     * Whether to update kibana_index dashboard docs with view metrics
     *
     * Valid value: true, false
     */
    dashboard_metrics: false,

    /** @scratch /configuration/config.js/5
     *
     * ==== enable_webhooks
     *
     * Optional webhook URL triggered when viewing a dashboard
     * 
     * Valid value: true, false
     */
     enable_webhooks: true,

    /** @scratch /configuration/config.js/5
     *
     * ==== dashboard_view_webhook_url
     *
     * Optional webhook URL triggered when viewing a dashboard
     */
     dashboard_view_webhook_url: "https://localhost:44369/kibana/post",

    /** @scratch /configuration/config.js/5
     *
     * ==== dashboard_view_webhook_url
     *
     * URL that returns an object referencing the current autheed user name accessed via HTTP GET
     */
     identity_provider_api_url: "http://127.0.0.1:5601/identityprovider",

     /** @scratch /configuration/config.js/5
      *
      * ==== logo_url
      *
      * URL that returns the logo for the dashboard's overall branding. The default is relative to kibana (/img/small.png), but you can use external resources
      */
     logo_url: "/img/small.png",

          /** @scratch /configuration/config.js/5
      *
      *
      * Optional array of rules targeting specific fields in your data's structure that will transform areas of kibana to hyperlinks when displaying those fields. This collection will be used will document-level (row-level) data access is available
      */
      hyperlinked_fields_doclevel: [
        {
          fieldName: 'generatedfor.userid',
          urlTemplate: 'https://masteradmin.ihire.com/users/{0}/products?utm_source=kibana3custom&utm_content=panel_table&realm={1}',
          tokens: ['generatedfor.userid']
        },
        {
          fieldName: 'generatedby.name',
          urlTemplate: 'https://masteradmin.ihire.com/users/{1}/products?utm_source=kibana3custom&utm_content=panel_table&realm={2}',
          tokens: ['generatedby.name','generatedby.userid', 'realm.name']
        },
        {
          fieldName: 'generatedfor.name',
          urlTemplate: 'https://masteradmin.ihire.com/users/{1}/products?utm_source=kibana3custom&utm_content=panel_table&realm={2}',
          tokens: ['generatedfor.name','generatedfor.userid', 'realm.name']
        },
        {
          fieldName: 'generatedfor.candidate.careertitle',
          urlTemplate: 'https://masteradmin.ihire.com/users/{0}/candidate/edit?utm_source=kibana3custom&utm_content=panel_table&realm={1}',
          tokens: ['generatedby.userid', 'realm.name']
        },
        {
          fieldName: 'generatedfor.organization',
          urlTemplate: 'https://masteradmin.ihire.com/?Company={0}&UserId={1}&utm_source=kibana3custom&utm_content=panel_table&realm={1}',
          tokens: ['generatedfor.organization', 'generatedfor.userid']
        },
        {
          fieldName: 'custom.company',
          urlTemplate: 'https://masteradmin.ihire.com/?Company={0}&UserId={1}&utm_source=kibana3custom&utm_content=panel_table&realm={1}',
          tokens: ['custom.company']
        },
        {
          fieldName: 'custom.employerid',
          urlTemplate: 'https://masteradmin.ihire.com/?EmployerId={0}&utm_source=kibana3custom&utm_content=panel_table&realm={1}',
          tokens: ['custom.employerid']
        },    
        // Add more rules as needed
      ],
          /** @scratch /configuration/config.js/5
      *
      * ==== hyperlinked_fields_aggregates
      *
      * Optional array of rules targeting specific fields in your data's structure that will transform areas of kibana to hyperlinks when displaying those fields. This collection will be used on aggregates-based panels, like the Terms panel
      */
      hyperlinked_fields_aggregates: [
        {
          fieldName: 'generatedfor.userid',
          urlTemplate: 'https://masteradmin.ihire.com/users/{0}/products?utm_source=kibana3custom&utm_content=panel_aggregates',
          tokens: ['generatedfor.userid']
        },
        {
          fieldName: 'generatedby.name',
          urlTemplate: 'https://masteradmin.ihire.com/?FirstName={0}&utm_source=kibana3custom&utm_content=panel_aggregates',
          tokens: ['generatedby.name']
        },
        {
          fieldName: 'generatedfor.name',
          urlTemplate: 'https://masteradmin.ihire.com/?FirstName={0}&utm_source=kibana3custom&utm_content=panel_aggregates',
          tokens: ['generatedfor.name']
        },
        {
          fieldName: 'generatedfor.organization',
          urlTemplate: 'https://masteradmin.ihire.com/?Company={0}&utm_source=kibana3custom&utm_content=panel_aggregates',
          tokens: ['generatedfor.organization']
        },
        {
          fieldName: 'custom.company',
          urlTemplate: 'https://masteradmin.ihire.com/?Company={0}&UserId={1}&utm_source=kibana3custom&utm_content=panel_aggregates',
          tokens: ['custom.company']
        },
        {
          fieldName: 'custom.employerid',
          urlTemplate: 'https://masteradmin.ihire.com/?EmployerId={0}&utm_source=kibana3custom&utm_content=panel_aggregates',
          tokens: ['custom.employerid']
        },    
        // Add more rules as needed
      ],
          
  });
});