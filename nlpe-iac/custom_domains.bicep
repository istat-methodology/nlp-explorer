param staticwebsite_name string = 'nlp-explorer'
param custom_domains array = ['nlpe.statlab.it', 'www.nlpe.statlab.it']

resource staticwebsite_resource 'Microsoft.Web/staticSites@2023-01-01' existing = {
  name: staticwebsite_name
}

resource staticwebsite_customdomains 'Microsoft.Web/staticSites/customDomains@2023-01-01' = [for domain in custom_domains: {
  parent: staticwebsite_resource
  name: domain
  properties: {}
}]
